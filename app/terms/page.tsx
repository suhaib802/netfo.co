import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Netfo's terms of service outline the rules and guidelines for using our ERP platform.",
};

export default function TermsPage() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-gray-500">Last updated: April 6, 2026</p>

        <div className="mt-12 space-y-8 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-gray-900">1. Acceptance of Terms</h2>
            <p className="mt-3">
              By accessing or using Netfo&apos;s cloud-based ERP platform (&quot;Service&quot;), you agree
              to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these
              Terms, do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">2. Description of Service</h2>
            <p className="mt-3">
              Netfo provides a cloud-based Enterprise Resource Planning (ERP) platform designed
              for automotive businesses. The Service includes modules for CRM, vehicle inventory
              management, finance, human resources, procurement, logistics, and related tools.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">3. Account Registration</h2>
            <ul className="mt-3 list-inside list-disc space-y-2 pl-4">
              <li>You must provide accurate and complete information when creating an account.</li>
              <li>You are responsible for maintaining the security of your account credentials.</li>
              <li>You must notify us immediately of any unauthorized access to your account.</li>
              <li>You are responsible for all activities that occur under your account.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">4. Subscription & Billing</h2>
            <ul className="mt-3 list-inside list-disc space-y-2 pl-4">
              <li>Paid plans are billed monthly or annually as selected during subscription.</li>
              <li>You may upgrade, downgrade, or cancel your subscription at any time.</li>
              <li>Refunds are handled on a case-by-case basis at our discretion.</li>
              <li>We reserve the right to modify pricing with 30 days&apos; notice.</li>
              <li>Free trial periods are subject to fair use policies.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">5. Data Ownership</h2>
            <p className="mt-3">
              You retain full ownership of all data you enter into the platform. We do not claim
              any ownership rights over your business data, customer information, financial records,
              or any other content you create or upload.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">6. Acceptable Use</h2>
            <p className="mt-3">You agree not to:</p>
            <ul className="mt-3 list-inside list-disc space-y-2 pl-4">
              <li>Use the Service for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to any part of the Service</li>
              <li>Interfere with or disrupt the Service or its infrastructure</li>
              <li>Upload malicious code, viruses, or harmful content</li>
              <li>Reverse engineer, decompile, or disassemble the Service</li>
              <li>Resell or redistribute the Service without our written consent</li>
              <li>Use the Service to store or process data in violation of applicable laws</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">7. Service Availability</h2>
            <p className="mt-3">
              We strive to maintain 99.9% uptime for our platform. However, the Service may be
              temporarily unavailable due to scheduled maintenance, updates, or circumstances
              beyond our control. We will provide reasonable notice of planned downtime.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">8. Intellectual Property</h2>
            <p className="mt-3">
              The Service, including its design, features, and underlying technology, is owned by
              Netfo and protected by intellectual property laws. You are granted a limited,
              non-exclusive, non-transferable license to use the Service for its intended purpose.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">9. Limitation of Liability</h2>
            <p className="mt-3">
              To the maximum extent permitted by law, Netfo shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages, or any loss of profits or
              revenue, whether incurred directly or indirectly, or any loss of data, use, goodwill,
              or other intangible losses.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">10. Termination</h2>
            <p className="mt-3">
              Either party may terminate the agreement at any time. Upon termination, you may
              request an export of your data within 30 days. After this period, we may delete
              your data from our systems.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">11. Changes to Terms</h2>
            <p className="mt-3">
              We may update these Terms from time to time. Material changes will be communicated
              via email or through the platform. Continued use of the Service after changes
              constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">12. Contact</h2>
            <p className="mt-3">
              For questions about these Terms, contact us at{" "}
              <a href="mailto:Info@netfo.co" className="text-brand-600 hover:text-brand-700">
                Info@netfo.co
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
