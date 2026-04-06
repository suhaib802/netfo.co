"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export function PricingContactForm() {
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
          name: data.get("name"),
          email: data.get("email"),
          company: data.get("company"),
          interest: data.get("interest"),
          message: data.get("message"),
          source: "pricing",
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

  if (submitted) {
    return (
      <div className="rounded-xl bg-green-50 p-8 text-center">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <Send className="h-5 w-5 text-green-600" />
        </div>
        <h3 className="font-semibold text-green-900">Message Sent!</h3>
        <p className="mt-1 text-sm text-green-700">
          Our team will reach out to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="pricing-name" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            id="pricing-name"
            name="name"
            required
            className="mt-1.5 block w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="pricing-email" className="block text-sm font-medium text-gray-700">
            Work Email
          </label>
          <input
            type="email"
            id="pricing-email"
            name="email"
            required
            className="mt-1.5 block w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
            placeholder="john@dealership.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="pricing-company" className="block text-sm font-medium text-gray-700">
          Company Name
        </label>
        <input
          type="text"
          id="pricing-company"
          name="company"
          className="mt-1.5 block w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
          placeholder="Your Dealership"
        />
      </div>

      <div>
        <label htmlFor="pricing-interest" className="block text-sm font-medium text-gray-700">
          Interested In
        </label>
        <select
          id="pricing-interest"
          name="interest"
          required
          className="mt-1.5 block w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
        >
          <option value="">Select a plan</option>
          <option value="starter">Starter</option>
          <option value="professional">Professional</option>
          <option value="business">Business</option>
          <option value="enterprise">Enterprise</option>
          <option value="custom">Not sure yet</option>
        </select>
      </div>

      <div>
        <label htmlFor="pricing-message" className="block text-sm font-medium text-gray-700">
          Message <span className="text-gray-400">(optional)</span>
        </label>
        <textarea
          id="pricing-message"
          name="message"
          rows={3}
          className="mt-1.5 block w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
          placeholder="Tell us about your dealership and requirements..."
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
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-600 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Sending..." : "Get in Touch"}
        {!loading && <Send className="h-4 w-4" />}
      </button>
    </form>
  );
}
