import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Netfo's privacy policy explains how we collect, use, and protect your data when using our ERP platform.",
};

export default function PrivacyPage() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-gray-500">Last updated: April 6, 2026</p>

        <div className="mt-12 space-y-8 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-gray-900">1. Introduction</h2>
            <p className="mt-3">
              Netfo (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your
              information when you use our cloud-based ERP platform and related services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">2. Information We Collect</h2>
            <p className="mt-3">We collect information in the following ways:</p>
            <ul className="mt-3 list-inside list-disc space-y-2 pl-4">
              <li><strong>Account Information:</strong> Name, email address, phone number, company name, and job title when you create an account.</li>
              <li><strong>Business Data:</strong> Information you enter into the platform including customer data, vehicle records, financial data, employee records, and other business information.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our platform, including pages visited, features used, and device information.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, operating system, device identifiers, and login timestamps.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">3. How We Use Your Information</h2>
            <ul className="mt-3 list-inside list-disc space-y-2 pl-4">
              <li>Provide, maintain, and improve our ERP platform and services</li>
              <li>Process transactions and manage your account</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Monitor and analyze usage trends to improve user experience</li>
              <li>Detect, prevent, and address technical issues and security threats</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">4. Data Storage & Security</h2>
            <p className="mt-3">
              Your data is stored on secure cloud infrastructure (AWS) with encryption at rest
              and in transit. We implement industry-standard security measures including:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2 pl-4">
              <li>AES-256 encryption for data at rest</li>
              <li>TLS 1.3 for data in transit</li>
              <li>Role-based access control with granular permissions</li>
              <li>Two-factor authentication (TOTP) and WebAuthn support</li>
              <li>Full audit trails and activity logging</li>
              <li>Regular security audits and penetration testing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">5. Multi-Tenant Data Isolation</h2>
            <p className="mt-3">
              Each tenant (company) on our platform has fully isolated data. Your business data is
              never accessible to other tenants. We use database-level isolation with company-scoped
              queries to ensure complete data separation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">6. Data Sharing</h2>
            <p className="mt-3">
              We do not sell, trade, or rent your personal information or business data to third parties.
              We may share information only in the following circumstances:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2 pl-4">
              <li>With your explicit consent</li>
              <li>To comply with legal obligations or valid legal processes</li>
              <li>To protect our rights, privacy, safety, or property</li>
              <li>With service providers who assist us in operating our platform (under strict confidentiality agreements)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">7. Your Rights</h2>
            <p className="mt-3">You have the right to:</p>
            <ul className="mt-3 list-inside list-disc space-y-2 pl-4">
              <li>Access your personal data</li>
              <li>Correct inaccurate or incomplete data</li>
              <li>Request deletion of your data</li>
              <li>Export your data in standard formats</li>
              <li>Object to or restrict certain processing</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">8. Cookies</h2>
            <p className="mt-3">
              We use essential cookies for authentication and session management. We may use
              analytics cookies to understand how our platform is used. You can control cookie
              preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">9. Changes to This Policy</h2>
            <p className="mt-3">
              We may update this Privacy Policy from time to time. We will notify you of any
              material changes by posting the new Privacy Policy on this page and updating the
              &quot;Last updated&quot; date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">10. Contact Us</h2>
            <p className="mt-3">
              If you have any questions about this Privacy Policy, please contact us at{" "}
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
