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
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand-500/25 transition-all hover:bg-brand-600 hover:shadow-xl hover:shadow-brand-500/30"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-8 py-4 text-base font-semibold text-gray-700 shadow-sm transition-all hover:border-gray-300 hover:bg-gray-50"
              >
                Explore Features
              </Link>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="relative mx-auto mt-16 max-w-5xl">
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-gray-200/50">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                <div className="h-3 w-3 rounded-full bg-[#28CA41]" />
                <div className="ml-3 flex-1">
                  <div className="mx-auto max-w-xs rounded-md bg-gray-100 px-3 py-1 text-center text-[10px] text-gray-400">
                    netfo.co/erp
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-0" style={{ minHeight: 380 }}>
                {/* Sidebar */}
                <div className="col-span-2 border-r border-gray-800/10 bg-[#0F1B2E] px-3 py-4">
                  {/* Logo area */}
                  <div className="mb-5 flex items-center gap-2 px-1">
                    <div className="h-6 w-6 rounded-md bg-brand-400/60" />
                    <div className="h-3 w-12 rounded bg-white/25" />
                  </div>
                  {/* Nav items */}
                  <div className="space-y-1">
                    {[
                      { w: "w-16", active: true },
                      { w: "w-10" },
                      { w: "w-14" },
                      { w: "w-12" },
                      { w: "w-11" },
                      { w: "w-14" },
                      { w: "w-10" },
                      { w: "w-12" },
                      { w: "w-9" },
                    ].map((item, i) => (
                      <div key={i} className={`flex items-center gap-2.5 rounded-lg px-2 py-2 ${item.active ? "bg-brand-500/30" : "hover:bg-white/5"}`}>
                        <div className={`h-3.5 w-3.5 rounded ${item.active ? "bg-brand-300/60" : "bg-white/15"}`} />
                        <div className={`h-2 rounded ${item.w} ${item.active ? "bg-white/40" : "bg-white/12"}`} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Main content */}
                <div className="col-span-10 bg-gray-50/50">
                  {/* Top bar */}
                  <div className="flex items-center justify-between border-b border-gray-100 bg-white px-5 py-3">
                    <div className="flex items-center gap-3">
                      <div className="h-3 w-3 rounded bg-brand-400/40" />
                      <div className="h-3 w-20 rounded bg-gray-200" />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-7 w-32 rounded-md border border-gray-200 bg-gray-50" />
                      <div className="h-7 w-7 rounded-md bg-gray-100" />
                      <div className="h-7 w-7 rounded-md bg-gray-100" />
                    </div>
                  </div>

                  <div className="p-5">
                    {/* Page header */}
                    <div className="mb-5 flex items-center justify-between">
                      <div>
                        <div className="h-4 w-28 rounded bg-gray-800/70" />
                        <div className="mt-1.5 h-2 w-48 rounded bg-gray-300" />
                      </div>
                      <div className="flex gap-2">
                        <div className="h-7 w-16 rounded-md bg-brand-500/80" />
                        <div className="h-7 w-16 rounded-md bg-gray-200" />
                      </div>
                    </div>

                    {/* Stat cards row */}
                    <div className="mb-5 grid grid-cols-7 gap-3">
                      {[
                        { label: "Total Leads", value: "24", sub: "+3 this week", color: "text-brand-600" },
                        { label: "Quotations", value: "12", sub: "4 this month", color: "text-brand-600" },
                        { label: "Revenue", value: "AED 850K", sub: "AED 120K MTD", color: "text-green-600" },
                        { label: "Conversion", value: "38%", sub: "Lead to won", color: "text-amber-600" },
                        { label: "Invoices", value: "18", sub: "3 pending", color: "text-purple-600" },
                        { label: "Sale Orders", value: "9", sub: "2 this month", color: "text-brand-600" },
                        { label: "Customers", value: "156", sub: "+8 new", color: "text-green-600" },
                      ].map((stat) => (
                        <div key={stat.label} className="rounded-lg border border-gray-100 bg-white p-3">
                          <div className="text-[8px] font-medium text-gray-400 uppercase tracking-wider">{stat.label}</div>
                          <div className={`mt-1 text-sm font-bold ${stat.color}`}>{stat.value}</div>
                          <div className="mt-0.5 text-[7px] text-gray-400">{stat.sub}</div>
                        </div>
                      ))}
                    </div>

                    {/* Charts row */}
                    <div className="grid grid-cols-3 gap-3">
                      {/* Performance chart */}
                      <div className="col-span-2 rounded-lg border border-gray-100 bg-white p-4">
                        <div className="mb-3 flex items-center justify-between">
                          <div>
                            <div className="text-[10px] font-semibold text-gray-700">Performance Trends</div>
                            <div className="text-[7px] text-gray-400">Monthly overview (last 6 months)</div>
                          </div>
                          <div className="flex gap-3">
                            {[
                              { color: "bg-brand-500", label: "Leads" },
                              { color: "bg-green-500", label: "Invoices" },
                              { color: "bg-purple-400", label: "Revenue" },
                            ].map((l) => (
                              <div key={l.label} className="flex items-center gap-1">
                                <div className={`h-1.5 w-1.5 rounded-full ${l.color}`} />
                                <span className="text-[7px] text-gray-400">{l.label}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        {/* Chart area */}
                        <div className="relative h-28">
                          <svg viewBox="0 0 400 100" className="h-full w-full" preserveAspectRatio="none">
                            {/* Grid lines */}
                            {[0, 25, 50, 75].map((y) => (
                              <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#f3f4f6" strokeWidth="0.5" />
                            ))}
                            {/* Revenue bars */}
                            <rect x="110" y="55" width="45" height="45" fill="#E9D5FF" rx="3" />
                            <rect x="170" y="25" width="45" height="75" fill="#DDD6FE" rx="3" />
                            <rect x="230" y="35" width="45" height="65" fill="#E9D5FF" rx="3" />
                            {/* Line - Leads */}
                            <polyline points="30,80 90,75 150,50 210,25 270,30 340,60" fill="none" stroke="#23416B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <polyline points="30,80 90,75 150,50 210,25 270,30 340,60" fill="url(#leadGrad)" stroke="none" />
                            {/* Line - Invoices */}
                            <polyline points="30,85 90,82 150,60 210,35 270,40 340,55" fill="none" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            {/* Dots */}
                            {[[30,80],[90,75],[150,50],[210,25],[270,30],[340,60]].map(([x,y], i) => (
                              <circle key={i} cx={x} cy={y} r="3" fill="white" stroke="#23416B" strokeWidth="1.5" />
                            ))}
                            <defs>
                              <linearGradient id="leadGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#23416B" stopOpacity="0.08" />
                                <stop offset="100%" stopColor="#23416B" stopOpacity="0" />
                              </linearGradient>
                            </defs>
                          </svg>
                          {/* X-axis labels */}
                          <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2 text-[7px] text-gray-400">
                            {["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"].map((m) => (
                              <span key={m}>{m}</span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Lead Pipeline */}
                      <div className="rounded-lg border border-gray-100 bg-white p-4">
                        <div className="text-[10px] font-semibold text-gray-700">Lead Pipeline</div>
                        <div className="mt-0.5 text-[7px] text-gray-400">24 leads across stages</div>
                        <div className="mt-3 space-y-2.5">
                          {[
                            { stage: "NEW", count: 8, amount: "AED 240K", pct: 80 },
                            { stage: "CONTACTED", count: 6, amount: "AED 180K", pct: 60 },
                            { stage: "QUALIFIED", count: 4, amount: "AED 120K", pct: 40 },
                            { stage: "NEGOTIATION", count: 3, amount: "AED 90K", pct: 30 },
                            { stage: "PROPOSAL", count: 2, amount: "AED 60K", pct: 20 },
                            { stage: "WON", count: 1, amount: "AED 160K", pct: 10 },
                          ].map((s) => (
                            <div key={s.stage}>
                              <div className="flex items-center justify-between">
                                <span className="text-[8px] font-medium text-gray-600">{s.stage}</span>
                                <span className="text-[8px] font-semibold text-gray-800">{s.count}</span>
                              </div>
                              <div className="mt-0.5 h-1.5 w-full rounded-full bg-gray-100">
                                <div className="h-full rounded-full bg-brand-400/60" style={{ width: `${s.pct}%` }} />
                              </div>
                              <div className="mt-0.5 text-[7px] text-green-600">{s.amount}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
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
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-brand-600 shadow-lg transition-all hover:bg-brand-50"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
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
