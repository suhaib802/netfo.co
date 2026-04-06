import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Briefcase,
  Building2,
  CalendarCheck,
  Car,
  CheckCircle2,
  ClipboardCheck,
  CreditCard,
  FileText,
  Globe,
  HandCoins,
  Layers,
  LayoutDashboard,
  MapPin,
  MessageSquare,
  Package,
  Receipt,
  Route,
  Settings,
  Shield,
  ShoppingCart,
  Sparkles,
  Target,
  Truck,
  UserCheck,
  Users,
  Wallet,
  Warehouse,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore Netfo's comprehensive ERP modules: CRM, vehicle inventory, finance, HR, procurement, logistics, marketing, and AI-powered analytics for automotive businesses.",
  openGraph: {
    title: "Features | Netfo",
    description:
      "Six powerful modules designed for automotive dealerships. CRM, inventory, finance, HR, logistics, and procurement.",
  },
};

const LOGIN_URL =
  process.env.NODE_ENV === "production"
    ? "https://netfo.co/erp"
    : "http://localhost:3000";

const modules = [
  {
    id: "crm",
    icon: Users,
    title: "CRM & Sales Pipeline",
    tagline: "From first contact to closed deal",
    description:
      "A complete customer relationship management system built specifically for automotive sales. Track every lead, automate assignments, and manage the entire sales lifecycle from initial inquiry to vehicle delivery.",
    features: [
      {
        icon: Target,
        title: "ADSL Lead Distribution",
        description:
          "Automatic lead assignment with round-robin, load-balancing, performance-based, and geographic strategies.",
      },
      {
        icon: MessageSquare,
        title: "Lead Lifecycle Tracking",
        description:
          "Full status history from NEW through CONTACTED, QUALIFIED, NEGOTIATION, WON, to CONVERTED with audit trails.",
      },
      {
        icon: FileText,
        title: "Quotations & Invoicing",
        description:
          "Generate professional quotations, convert to sale orders, and create invoices — all with dynamic PDF templates.",
      },
      {
        icon: CalendarCheck,
        title: "Follow-ups & Scheduling",
        description:
          "Automated follow-up reminders, configurable schedules, and task management to never miss a prospect.",
      },
      {
        icon: BarChart3,
        title: "Sales Analytics",
        description:
          "Daily salesperson stats, conversion tracking, pipeline visualization, and performance dashboards.",
      },
      {
        icon: ClipboardCheck,
        title: "Work Orders",
        description:
          "Manage service work orders with goods details, add-ons, and complete lifecycle tracking.",
      },
    ],
  },
  {
    id: "inventory",
    icon: Car,
    title: "Vehicle Inventory Management",
    tagline: "Every vehicle, every detail, one system",
    description:
      "Comprehensive vehicle catalog and stock management system. Track specifications, manage images, handle inspections, and monitor pricing history — all from a single dashboard.",
    features: [
      {
        icon: Car,
        title: "Complete Vehicle Profiles",
        description:
          "Brand, model, variant, year, fuel type, transmission, steering, color — with full specification sheets.",
      },
      {
        icon: Warehouse,
        title: "Stock Movements",
        description:
          "Real-time inventory tracking across locations with transfer management and stock level alerts.",
      },
      {
        icon: ClipboardCheck,
        title: "Inspections",
        description:
          "Detailed vehicle inspections with issue tracking, checklists, and condition reporting.",
      },
      {
        icon: Layers,
        title: "Features & Options",
        description:
          "Manage vehicle features, feature sets, and optional extras with flexible categorization.",
      },
      {
        icon: CalendarCheck,
        title: "Reservations & Viewings",
        description:
          "Schedule and manage vehicle viewings and reservations with calendar integration.",
      },
      {
        icon: BarChart3,
        title: "Pricing History",
        description:
          "Track pricing changes over time with multi-currency support and automated cost calculations.",
      },
    ],
  },
  {
    id: "finance",
    icon: CreditCard,
    title: "Finance & Accounting",
    tagline: "Full double-entry accounting, simplified",
    description:
      "Enterprise-grade financial management with a chart of accounts, journal entries, bank reconciliation, and multi-currency support. Built for automotive businesses with industry-specific workflows.",
    features: [
      {
        icon: Receipt,
        title: "Chart of Accounts",
        description:
          "170+ predefined account types organized into assets, liabilities, equity, revenue, and expenses.",
      },
      {
        icon: FileText,
        title: "Journal Entries",
        description:
          "Double-entry bookkeeping with journal entry lines, auto-balancing, and audit trails.",
      },
      {
        icon: Building2,
        title: "Bank Reconciliation",
        description:
          "Match transactions, reconcile bank statements, and manage multiple bank accounts.",
      },
      {
        icon: Wallet,
        title: "Payments",
        description:
          "Customer payments, general payments, and contra transactions with receipt generation.",
      },
      {
        icon: Globe,
        title: "Multi-Currency",
        description:
          "Support for multiple currencies with exchange rate management and automatic conversions.",
      },
      {
        icon: Settings,
        title: "Tax & Financial Years",
        description:
          "Configurable tax settings, financial year management, and compliance reporting.",
      },
    ],
  },
  {
    id: "hr",
    icon: LayoutDashboard,
    title: "Human Resources",
    tagline: "Your people, managed with care",
    description:
      "Complete HR management from hiring to offboarding. Handle attendance, payroll, leaves, loans, and employee development — all connected to your financial system.",
    features: [
      {
        icon: UserCheck,
        title: "Employee Management",
        description:
          "Full profiles with contracts, positions, departments, shifts, and employment history.",
      },
      {
        icon: CalendarCheck,
        title: "Attendance & Leave",
        description:
          "Configurable attendance policies, leave types, balance tracking, and automated approvals.",
      },
      {
        icon: HandCoins,
        title: "Payroll Processing",
        description:
          "Salary components, payroll runs, deductions, allowances, and payment generation.",
      },
      {
        icon: CreditCard,
        title: "Loans & Advances",
        description:
          "Employee loan management with installment tracking and payroll integration.",
      },
      {
        icon: Briefcase,
        title: "Meetings & Awards",
        description:
          "Schedule meetings with summaries, and manage employee recognition programs.",
      },
      {
        icon: ClipboardCheck,
        title: "Offboarding",
        description:
          "Structured resignations, terminations, and warnings with complete documentation.",
      },
    ],
  },
  {
    id: "procurement",
    icon: ShoppingCart,
    title: "Procurement & Purchasing",
    tagline: "Streamline your supply chain",
    description:
      "End-to-end procurement management. From purchase requests and RFQs to goods receipts and quality inspections — maintain full control over your supply chain.",
    features: [
      {
        icon: FileText,
        title: "Purchase Orders",
        description:
          "Create, approve, and track purchase orders with line items, terms, and delivery schedules.",
      },
      {
        icon: Package,
        title: "Goods Receipt Notes",
        description:
          "Record incoming goods with quality inspections, quantity verification, and warehouse allocation.",
      },
      {
        icon: Users,
        title: "Supplier Management",
        description:
          "Maintain supplier profiles, contracts, performance metrics, and communication history.",
      },
      {
        icon: MessageSquare,
        title: "RFQ Process",
        description:
          "Request for quotations with multi-supplier comparison and automated vendor selection.",
      },
      {
        icon: ClipboardCheck,
        title: "Quality Inspections",
        description:
          "Configurable inspection checklists, issue tracking, and acceptance/rejection workflows.",
      },
      {
        icon: Receipt,
        title: "Purchase Invoices",
        description:
          "Match purchase invoices to orders and receipts with three-way matching verification.",
      },
    ],
  },
  {
    id: "logistics",
    icon: Truck,
    title: "Logistics & Fleet Management",
    tagline: "Move vehicles, track everything",
    description:
      "Manage shipments, deliveries, carriers, and your entire fleet from a single module. Complete with route planning, customs documentation, and real-time milestone tracking.",
    features: [
      {
        icon: Route,
        title: "Shipment Tracking",
        description:
          "End-to-end shipment management with milestones, status updates, and delivery confirmation.",
      },
      {
        icon: Car,
        title: "Fleet Management",
        description:
          "Track fleet vehicles, assign drivers, schedule maintenance, and monitor fuel consumption.",
      },
      {
        icon: MapPin,
        title: "Route Planning",
        description:
          "Optimize delivery routes, schedule transport, and manage pickup requests efficiently.",
      },
      {
        icon: FileText,
        title: "Shipping Documents",
        description:
          "Generate bills of lading, commercial invoices, packing lists, and delivery advice automatically.",
      },
      {
        icon: Briefcase,
        title: "Carrier Contracts",
        description:
          "Manage carrier relationships, contracts, freight costs, and service level agreements.",
      },
      {
        icon: ClipboardCheck,
        title: "Inspection Checklists",
        description:
          "Pre and post-delivery inspection checklists with photo documentation and sign-off.",
      },
    ],
  },
];

const platformFeatures = [
  {
    icon: Building2,
    title: "Multi-Tenant Architecture",
    description: "Each dealership gets an isolated workspace with custom branding, settings, and data separation.",
  },
  {
    icon: Shield,
    title: "Advanced Permissions",
    description: "Role-based access control with scope types: ALL (company-wide), OWN (user-created), BRANCH (branch-scoped).",
  },
  {
    icon: Bot,
    title: "AI Integration",
    description: "Built-in AI chat and analytics powered by Claude, Google AI, and OpenAI for intelligent business insights.",
  },
  {
    icon: Sparkles,
    title: "Dynamic PDF Templates",
    description: "Customizable invoice, quotation, and receipt templates with your branding, colors, and terms.",
  },
  {
    icon: Globe,
    title: "Multi-Branch Support",
    description: "Manage multiple branches with centralized or decentralized operations and branch-level reporting.",
  },
  {
    icon: Settings,
    title: "Workflow Engine",
    description: "Configurable approval workflows, status transitions, and automated business rules.",
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50/50 to-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Powerful Modules for Every{" "}
              <span className="text-brand-600">Department</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Six specialized modules that work together seamlessly, plus platform-level
              features that power your entire operation. Pick what you need, add more as you grow.
            </p>
          </div>
        </div>
      </section>

      {/* Modules */}
      {modules.map((mod, index) => (
        <section
          key={mod.id}
          id={mod.id}
          className={`py-20 sm:py-24 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 flex items-start gap-4">
              <div className="rounded-xl bg-brand-50 p-3 text-brand-600">
                <mod.icon className="h-8 w-8" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">{mod.title}</h2>
                <p className="mt-1 text-lg font-medium text-brand-600">
                  {mod.tagline}
                </p>
                <p className="mt-3 max-w-2xl text-gray-600">{mod.description}</p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {mod.features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-xl border border-gray-100 bg-white p-6 transition-shadow hover:shadow-md"
                >
                  <div className="mb-3 inline-flex rounded-lg bg-brand-50 p-2 text-brand-600">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Platform Features */}
      <section className="bg-brand-600 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Platform-Level Features
            </h2>
            <p className="mt-4 text-lg text-brand-100">
              Every module is powered by a robust platform with enterprise capabilities built in.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {platformFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm"
              >
                <div className="mb-3 inline-flex rounded-lg bg-white/20 p-2 text-white">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-100">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            See It in Action
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Start your free trial and explore all modules with your own data.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={LOGIN_URL}
              className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand-500/25 transition-all hover:bg-brand-600"
            >
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-8 py-4 text-base font-semibold text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
