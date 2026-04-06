import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Netfo team. Request a demo, ask about pricing, or get technical support for your automotive ERP platform.",
  openGraph: {
    title: "Contact | Netfo",
    description:
      "Have questions? Want a demo? Get in touch with the Netfo team.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
