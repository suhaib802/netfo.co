import type { Metadata } from "next";
import {
  ArrowRight,
  Globe,
  Heart,
  Lightbulb,
  Shield,
  Users,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Netfo is on a mission to modernize how automotive businesses operate. Learn about our story, values, and the team building the future of dealership management.",
  openGraph: {
    title: "About | Netfo",
    description:
      "Our mission is to modernize how automotive businesses operate worldwide.",
  },
};

const LOGIN_URL =
  process.env.NODE_ENV === "production"
    ? "https://netfo.co/erp"
    : "http://localhost:3000";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We constantly push boundaries, integrating AI and modern technologies to solve real problems for dealerships.",
  },
  {
    icon: Heart,
    title: "Customer Obsession",
    description:
      "Every feature we build starts with understanding the real challenges dealerships face daily.",
  },
  {
    icon: Shield,
    title: "Trust & Security",
    description:
      "We treat your data like our own. Enterprise-grade security, encryption, and compliance are non-negotiable.",
  },
  {
    icon: Globe,
    title: "Global Mindset",
    description:
      "Built for dealerships worldwide with multi-currency, multi-language, and regional compliance support.",
  },
  {
    icon: Zap,
    title: "Speed & Simplicity",
    description:
      "Enterprise power with consumer simplicity. Complex operations shouldn't mean complex software.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description:
      "Our roadmap is shaped by our users. We listen, iterate, and deliver features that matter most.",
  },
];

const milestones = [
  {
    year: "2024",
    title: "The Beginning",
    description: "Netfo was born from the frustration of managing a dealership with disconnected, outdated tools.",
  },
  {
    year: "2025",
    title: "Platform Launch",
    description: "Launched the multi-tenant ERP platform with CRM, inventory, and finance modules.",
  },
  {
    year: "2025",
    title: "AI Integration",
    description: "Integrated AI-powered analytics and automation across all modules.",
  },
  {
    year: "2026",
    title: "Global Expansion",
    description: "Expanded to serve dealerships across 50+ countries with localized features.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50/50 to-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Modernizing the{" "}
              <span className="text-brand-600">Automotive Industry</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              We believe every dealership — from a single lot to a global network —
              deserves modern, connected tools that make business simpler, faster, and smarter.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Our Story
            </h2>
            <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
              <p>
                Netfo started with a simple observation: the automotive industry was running
                on fragmented, outdated software. Dealerships were juggling spreadsheets,
                disconnected apps, and legacy systems that couldn&apos;t keep up with modern business needs.
              </p>
              <p>
                We set out to build something different — a single, unified platform that connects
                every aspect of dealership operations. From the moment a lead walks in the door to
                the final delivery and beyond, Netfo brings it all together.
              </p>
              <p>
                Today, Netfo serves automotive businesses across 50+ countries, managing thousands
                of vehicles, millions in transactions, and hundreds of employees — all from one platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The principles that guide everything we build.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl bg-white p-8 shadow-sm">
                <div className="mb-4 inline-flex rounded-xl bg-brand-50 p-3 text-brand-600">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Our Journey
            </h2>
          </div>

          <div className="mt-12 space-y-8">
            {milestones.map((milestone, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-white">
                    {milestone.year.slice(-2)}
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="mt-2 h-full w-px bg-brand-200" />
                  )}
                </div>
                <div className="pb-8">
                  <div className="text-sm font-medium text-brand-600">
                    {milestone.year}
                  </div>
                  <h3 className="mt-1 font-semibold text-gray-900">
                    {milestone.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-600 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Join the Future of Automotive Management
          </h2>
          <p className="mt-4 text-lg text-brand-100">
            See why hundreds of dealerships have already made the switch.
          </p>
          <a
            href={LOGIN_URL}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-brand-600 transition-all hover:bg-brand-50"
          >
            Start Your Free Trial
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}
