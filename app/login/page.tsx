import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Login",
  description: "Log in to your Netfo ERP dashboard.",
  robots: { index: false, follow: false },
};

const LOGIN_URL =
  process.env.NODE_ENV === "production"
    ? "https://netfo.co/erp"
    : "http://localhost:3000";

export default function LoginPage() {
  redirect(LOGIN_URL);
}
