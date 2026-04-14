import type { Metadata } from "next";
import { CheckCircle2, HelpCircle, Mail, Phone } from "lucide-react";
import { PricingContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Flexible plans tailored to your dealership. Contact us for a personalized quote for Netfo ERP — CRM, inventory, finance, HR, logistics, and more.",
  openGraph: {
    title: "Pricing | Netfo",
    description:
      "Flexible plans tailored to your dealership. Contact us for a personalized quote.",
  },
};

const faqs = [
  {
    question: "How does pricing work?",
    answer:
      "We offer flexible pricing based on your dealership size, number of users, and modules needed. Contact us and we'll put together a plan that fits your budget.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes. We offer a free trial so you can explore the platform with your own data before committing to a plan.",
  },
  {
    question: "Can I switch plans later?",
    answer:
      "Absolutely. You can upgrade or downgrade at any time as your business needs change.",
  },
  {
    question: "Do you offer custom plans?",
    answer:
      "Yes. For multi-location dealership groups or unique requirements, we create fully custom plans. Reach out and we'll work with you.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept bank transfers, credit cards, and can accommodate custom payment arrangements based on your region.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Yes. Every tenant has fully isolated data with encryption at rest and in transit, role-based access control, 2FA, and full audit trails.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50/50 to-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Plans That Fit{" "}
              <span className="text-brand-600">Your Business</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Every dealership is different. Tell us about yours and we&apos;ll
              put together the right plan for you.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand-500/25 transition-all hover:bg-brand-600"
            >
              Get a Custom Quote
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Common questions about plans and getting started.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <h3 className="flex items-center gap-2 font-semibold text-gray-900">
                  <HelpCircle className="h-5 w-5 text-brand-500" />
                  {faq.question}
                </h3>
                <p className="mt-3 pl-7 text-sm leading-relaxed text-gray-500">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-white py-20 sm:py-28" id="contact">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Get a Custom Quote
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Tell us about your dealership and we&apos;ll put together the
                perfect plan for your business.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Free consultation with a product specialist",
                  "Custom plan tailored to your dealership size",
                  "Migration support from your existing tools",
                  "No commitment — explore before you decide",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-500" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 space-y-4">
                <p className="text-sm font-medium text-gray-900">Or reach out directly:</p>
                <a
                  href="mailto:Info@netfo.co"
                  className="flex items-center gap-3 text-sm text-gray-600 transition-colors hover:text-brand-600"
                >
                  <Mail className="h-4 w-4 text-brand-500" />
                  Info@netfo.co
                </a>
                <a
                  href="tel:+971561950304"
                  className="flex items-center gap-3 text-sm text-gray-600 transition-colors hover:text-brand-600"
                >
                  <Phone className="h-4 w-4 text-brand-500" />
                  +971 56 195 0304
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-200 p-8">
              <h3 className="text-xl font-semibold text-gray-900">Send Us a Message</h3>
              <p className="mt-2 text-sm text-gray-500">
                Fill out the form and we&apos;ll get back to you within 24 hours.
              </p>
              <div className="mt-6">
                <PricingContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
