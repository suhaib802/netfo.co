import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Car,
  CheckCircle2,
  CreditCard,
  Globe,
  Layers,
  LayoutDashboard,
  ShieldCheck,
  Sparkles,
  Truck,
  Users,
  Zap,
} from "lucide-react";

const LOGIN_URL =
  process.env.NODE_ENV === "production"
    ? "https://netfo.co/erp"
    : "http://localhost:3000";

const modules = [
  {
    icon: Users,
    title: "CRM & Sales",
    description:
      "Track leads, automate assignments, manage quotations, and close deals faster with intelligent pipeline management.",
  },
  {
    icon: Car,
    title: "Vehicle Inventory",
    description:
      "Complete vehicle catalog with specs, images, inspections, pricing history, and real-time stock tracking.",
  },
  {
    icon: CreditCard,
    title: "Finance & Accounting",
    description:
      "Full double-entry accounting, journal entries, bank reconciliation, invoicing, and multi-currency support.",
  },
  {
    icon: LayoutDashboard,
    title: "Human Resources",
    description:
      "Employee management, attendance, payroll, leave tracking, loans, and complete offboarding workflows.",
  },
  {
    icon: Truck,
    title: "Logistics & Fleet",
    description:
      "Shipment tracking, delivery management, fleet maintenance, route planning, and shipping documentation.",
  },
  {
    icon: Layers,
    title: "Procurement",
    description:
      "Purchase orders, supplier management, goods receipts, quality inspections, and RFQ workflows.",
  },
];

const stats = [
  { value: "10K+", label: "Vehicles Managed" },
  { value: "50+", label: "Countries" },
  { value: "99.9%", label: "Uptime" },
  { value: "8", label: "Core Modules" },
];

const testimonials = [
  {
    quote:
      "Netfo transformed how we manage our dealership. From lead tracking to invoicing, everything is seamlessly connected.",
    author: "Ahmad Al-Rashid",
    role: "CEO, Gulf Auto Group",
    avatar: "A",
  },
  {
    quote:
      "The inventory module alone saved us hundreds of hours. We can track every vehicle from purchase to delivery in real time.",
    author: "Sarah Chen",
    role: "Operations Director, Pacific Motors",
    avatar: "S",
  },
  {
    quote:
      "Finally an ERP that understands the automotive industry. The ADSL lead distribution system is a game-changer for our sales team.",
    author: "James Okonkwo",
    role: "Sales Manager, Continental Vehicles",
    avatar: "J",
  },
];

const benefits = [
  {
    icon: Globe,
    title: "Multi-Tenant Architecture",
    description:
      "Each dealership gets their own branded workspace with isolated data, custom branding, and independent configurations.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Insights",
    description:
      "Built-in AI analytics powered by cutting-edge models. Get intelligent recommendations, forecasts, and automated reporting.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description:
      "Role-based permissions, two-factor authentication, WebAuthn support, full audit trails, and encrypted data at rest.",
  },
  {
    icon: Zap,
    title: "Real-Time Collaboration",
    description:
      "Live updates via WebSockets, instant notifications, and collaborative workflows across your entire organization.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/50 to-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-brand-100/40 blur-3xl" />
          <div className="absolute -bottom-20 left-0 h-[400px] w-[400px] rounded-full bg-brand-50/60 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">
              <Sparkles className="h-4 w-4" />
              Now with AI-Powered Analytics
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              The Modern ERP Built for{" "}
              <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
                Automotive Businesses
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600 sm:text-xl">
              Manage your entire dealership from a single platform. CRM, inventory,
              finance, HR, logistics, and procurement — all connected, all in real time.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={LOGIN_URL}
                className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand-500/25 transition-all hover:bg-brand-600 hover:shadow-xl hover:shadow-brand-500/30"
              >
                Start Free Trial
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/features"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-8 py-4 text-base font-semibold text-gray-700 shadow-sm transition-all hover:border-gray-300 hover:bg-gray-50"
              >
                Explore Features
              </Link>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              No credit card required &middot; 14-day free trial &middot; Cancel anytime
            </p>
          </div>

          {/* Dashboard Preview */}
          <div className="relative mx-auto mt-16 max-w-5xl">
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-gray-200/50">
              <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
                <span className="ml-2 text-xs text-gray-400">netfo.co/erp</span>
              </div>
              <div className="grid grid-cols-12 gap-0">
                {/* Sidebar mock */}
                <div className="col-span-2 border-r border-gray-100 bg-[#0F1B2E] p-4">
                  <div className="mb-6 h-6 w-16 rounded bg-white/20" />
                  <div className="space-y-3">
                    {[...Array(7)].map((_, i) => (
                      <div key={i} className={`flex items-center gap-2 rounded-md px-2 py-1.5 ${i === 0 ? "bg-white/10" : ""}`}>
                        <div className="h-4 w-4 rounded bg-white/20" />
                        <div className={`h-2 rounded bg-white/15 ${i === 0 ? "w-14" : i % 2 === 0 ? "w-12" : "w-16"}`} />
                      </div>
                    ))}
                  </div>
                </div>
                {/* Content mock */}
                <div className="col-span-10 p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="h-6 w-32 rounded bg-gray-200" />
                    <div className="h-8 w-24 rounded-lg bg-brand-100" />
                  </div>
                  {/* Stat cards */}
                  <div className="mb-6 grid grid-cols-4 gap-4">
                    {["bg-brand-50", "bg-green-50", "bg-amber-50", "bg-purple-50"].map((bg, i) => (
                      <div key={i} className={`rounded-xl ${bg} p-4`}>
                        <div className="h-2 w-12 rounded bg-gray-300/50" />
                        <div className="mt-2 h-5 w-16 rounded bg-gray-400/30" />
                        <div className="mt-1 h-2 w-20 rounded bg-gray-300/30" />
                      </div>
                    ))}
                  </div>
                  {/* Table mock */}
                  <div className="rounded-xl border border-gray-100">
                    <div className="grid grid-cols-5 gap-4 border-b border-gray-100 bg-gray-50 px-4 py-2">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="h-2 w-full rounded bg-gray-200" />
                      ))}
                    </div>
                    {[1, 2, 3, 4].map((row) => (
                      <div key={row} className="grid grid-cols-5 gap-4 border-b border-gray-50 px-4 py-3">
                        {[1, 2, 3, 4, 5].map((col) => (
                          <div key={col} className={`h-2 rounded bg-gray-100 ${col === 3 ? "w-2/3" : "w-full"}`} />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Glow effect */}
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-r from-brand-200/20 via-brand-100/10 to-brand-200/20 blur-2xl" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-brand-600 sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm font-medium text-gray-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="bg-white py-20 sm:py-28" id="modules">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything You Need to Run Your Dealership
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Six powerful modules designed specifically for automotive businesses,
              working together seamlessly.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((mod) => (
              <div
                key={mod.title}
                className="group rounded-2xl border border-gray-100 bg-white p-8 transition-all hover:border-brand-200 hover:shadow-lg hover:shadow-brand-50"
              >
                <div className="mb-4 inline-flex rounded-xl bg-brand-50 p-3 text-brand-600 transition-colors group-hover:bg-brand-100">
                  <mod.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {mod.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {mod.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/features"
              className="inline-flex items-center gap-2 text-base font-semibold text-brand-600 transition-colors hover:text-brand-700"
            >
              See all features in detail
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Built for Scale, Designed for Simplicity
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Enterprise-grade infrastructure with a consumer-grade experience.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 inline-flex rounded-xl bg-brand-50 p-3 text-brand-600">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by Dealerships Worldwide
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              See what automotive businesses have to say about Netfo.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="rounded-2xl border border-gray-100 bg-white p-8"
              >
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-sm leading-relaxed text-gray-600">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-sm font-semibold text-brand-700">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      {t.author}
                    </div>
                    <div className="text-xs text-gray-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Get Started in Minutes
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              From sign-up to fully operational in three simple steps.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Create Your Account",
                description:
                  "Sign up and complete the guided onboarding wizard. Set up your company profile, branding, and business settings.",
              },
              {
                step: "02",
                title: "Choose Your Modules",
                description:
                  "Select the modules you need — CRM, inventory, finance, HR, logistics, or all of them. Start with what matters most.",
              },
              {
                step: "03",
                title: "Invite Your Team",
                description:
                  "Add team members, assign roles with granular permissions, and start managing your dealership from day one.",
              },
            ].map((item) => (
              <div key={item.step} className="relative text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-500 text-lg font-bold text-white">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-600 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Modernize Your Dealership?
          </h2>
          <p className="mt-4 text-lg text-brand-100">
            Join thousands of automotive businesses using Netfo to streamline operations,
            boost sales, and grow faster.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={LOGIN_URL}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-brand-600 shadow-lg transition-all hover:bg-brand-50"
            >
              Start Your Free Trial
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
            >
              Talk to Sales
            </Link>
          </div>
          <p className="mt-4 text-sm text-brand-200">
            Free 14-day trial &middot; No credit card required
          </p>
        </div>
      </section>

      {/* Integration / Trust */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-gray-400">
              Built with enterprise-grade technology
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-gray-300">
              {["PostgreSQL", "Next.js", "NestJS", "Prisma", "AWS S3", "Redis"].map(
                (tech) => (
                  <span key={tech} className="text-sm font-medium tracking-wide">
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
