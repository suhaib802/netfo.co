"use client";

import { useState } from "react";
import {
  Building2,
  Clock,
  Globe,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "Info@netfo.co",
    href: "mailto:Info@netfo.co",
  },
  {
    icon: Phone,
    title: "Phone / WhatsApp",
    value: "+971 56 195 0304",
    href: "tel:+971561950304",
  },
  {
    icon: Globe,
    title: "Website",
    value: "netfo.co",
    href: "https://netfo.co",
  },
  {
    icon: Clock,
    title: "Support Hours",
    value: "24/7 for Business & Enterprise",
    href: null,
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${data.get("firstName")} ${data.get("lastName")}`,
          email: data.get("email"),
          company: data.get("company"),
          subject: data.get("subject"),
          message: data.get("message"),
          source: "contact",
        }),
      });

      if (!res.ok) throw new Error("Failed to send");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50/50 to-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Get in <span className="text-brand-600">Touch</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Have questions about Netfo? Want a demo? Need support?
              We&apos;re here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="bg-white pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  Send Us a Message
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>

                {submitted ? (
                  <div className="mt-8 rounded-xl bg-green-50 p-6 text-center">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                      <Send className="h-5 w-5 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-green-900">
                      Message Sent!
                    </h3>
                    <p className="mt-1 text-sm text-green-700">
                      We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-6"
                  >
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          className="mt-1.5 block w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          className="mt-1.5 block w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="mt-1.5 block w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="mt-1.5 block w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                        placeholder="Your Dealership"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        className="mt-1.5 block w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                      >
                        <option value="">Select a topic</option>
                        <option value="demo">Request a Demo</option>
                        <option value="sales">Sales Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="partnership">Partnership</option>
                        <option value="careers">Careers</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        className="mt-1.5 block w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                        placeholder="Tell us about your needs..."
                      />
                    </div>

                    {error && (
                      <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-600 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed sm:w-auto"
                    >
                      {loading ? "Sending..." : "Send Message"}
                      {!loading && <Send className="h-4 w-4" />}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div
                    key={info.title}
                    className="flex items-start gap-4 rounded-xl border border-gray-100 bg-gray-50 p-5"
                  >
                    <div className="rounded-lg bg-brand-50 p-2.5 text-brand-600">
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900">
                        {info.title}
                      </h3>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="mt-0.5 text-sm text-brand-600 hover:text-brand-700"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-sm text-gray-500">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Office */}
              <div className="mt-8 rounded-2xl border border-gray-100 bg-gray-50 p-6">
                <h3 className="font-semibold text-gray-900">Global Reach</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  Netfo serves automotive businesses across 50+ countries. Our cloud infrastructure
                  ensures fast, reliable access from anywhere in the world.
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm text-brand-600">
                  <Globe className="h-4 w-4" />
                  Available worldwide
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
