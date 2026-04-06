import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, subject, interest, message, source } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const isFromPricing = source === "pricing";

    const emailSubject = isFromPricing
      ? `[Netfo Pricing] New inquiry from ${name}`
      : `[Netfo ${subject || "Contact"}] Message from ${name}`;

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #23416B; padding: 24px; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 20px;">
            ${isFromPricing ? "New Pricing Inquiry" : "New Contact Message"}
          </h1>
        </div>
        <div style="border: 1px solid #e5e7eb; border-top: none; padding: 24px; border-radius: 0 0 12px 12px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #6b7280; width: 120px; vertical-align: top;">Name</td>
              <td style="padding: 8px 0; color: #111827; font-weight: 500;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #23416B;">${email}</a></td>
            </tr>
            ${company ? `<tr><td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Company</td><td style="padding: 8px 0; color: #111827;">${company}</td></tr>` : ""}
            ${subject ? `<tr><td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Subject</td><td style="padding: 8px 0; color: #111827;">${subject}</td></tr>` : ""}
            ${interest ? `<tr><td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Plan Interest</td><td style="padding: 8px 0; color: #111827;">${interest}</td></tr>` : ""}
          </table>
          ${
            message
              ? `<div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #e5e7eb;">
                   <p style="color: #6b7280; margin: 0 0 8px;">Message</p>
                   <p style="color: #111827; margin: 0; white-space: pre-wrap;">${message}</p>
                 </div>`
              : ""
          }
          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e5e7eb; color: #9ca3af; font-size: 12px;">
            Sent from netfo.co${isFromPricing ? " pricing page" : " contact page"}
          </div>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Netfo Website" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: emailSubject,
      html: htmlBody,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
