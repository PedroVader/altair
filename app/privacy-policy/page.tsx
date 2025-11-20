import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy - Altair Austin Roofing',
  description: 'Privacy Policy for Altair Austin Roofing. Learn how we collect, use, and protect your personal information.',
  robots: 'index, follow',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#FFB343] transition-colors">
              Home
            </Link>
            <span>→</span>
            <span className="text-[#FFB343] font-semibold">Privacy Policy</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#232323] mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-8">
          Last Updated: November 20, 2024
        </p>

        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <section className="mb-8">
            <p className="text-gray-700 leading-relaxed">
              Altair Austin Roofing ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website at altairaustin.com or use our services.
            </p>
          </section>

          {/* User Consent */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#232323] mb-4">
              User Consent to Privacy Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Any person accessing, browsing, or otherwise using our website, either manually or via an automated device or program, shall be considered a "User." All Users are bound by the terms of this Privacy Policy. By using our website, you consent to the collection, use, and disclosure of your personal information as described in this Privacy Policy.
            </p>
          </section>

          {/* Information Collected */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#232323] mb-4">
              Information We Collect
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Altair Austin Roofing collects the following types of information from Users:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Email addresses of Users who email us with questions, comments, or service requests</li>
              <li>Contact information including name, phone number, email address, and service address when you request a quote or schedule services</li>
              <li>Billing and payment information when you purchase services from us</li>
              <li>Technical information including your browser version, IP address, operating system, and device characteristics through the use of cookies and tracking technologies</li>
              <li>Browsing patterns and site usage information to improve our services</li>
            </ul>
          </section>

          {/* Cookies */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#232323] mb-4">
              Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our website uses cookies, which are small files placed on your computer's hard drive to collect information about your browsing activity. We use cookies to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Remember your preferences and settings</li>
              <li>Analyze site traffic and usage patterns</li>
              <li>Improve website functionality and user experience</li>
              <li>Prevent fraud and enhance security</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              You may configure your web browser to notify you when you receive a cookie or to prevent cookies from being sent. However, disabling cookies may limit certain functionality of our website.
            </p>
          </section>

          {/* Use of Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#232323] mb-4">
              How We Use Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Altair Austin Roofing uses collected information to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Respond to your inquiries and service requests</li>
              <li>Provide quotes, estimates, and roofing services</li>
              <li>Process payments and maintain transaction records</li>
              <li>Send service updates and important notifications</li>
              <li>Improve our website and services</li>
              <li>Prevent fraud and unauthorized activity</li>
              <li>Comply with legal obligations</li>
              <li>Send promotional offers and information about our services (with your consent)</li>
            </ul>
          </section>

          {/* Disclosure to Third Parties */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#232323] mb-4">
              Disclosure of Information to Third Parties
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Altair Austin Roofing does not sell, share, trade, or give away your personal information to third parties, except in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>With your consent:</strong> When you explicitly authorize us to share your information</li>
              <li><strong>Service providers:</strong> We may share information with third-party service providers who assist us in operating our business (e.g., payment processors, analytics providers)</li>
              <li><strong>Legal requirements:</strong> When required by law, legal process, or to protect the rights, property, or safety of Altair Austin Roofing or others</li>
              <li><strong>Business transfers:</strong> In the event of a merger, acquisition, or sale of assets</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Any third-party service providers are contractually obligated to use your information only for the specific purposes for which it was provided.
            </p>
          </section>

          {/* Data Security */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#232323] mb-4">
              Data Security
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Altair Austin Roofing implements reasonable security measures to protect your information from unauthorized access, loss, misuse, or alteration. When you submit sensitive information (such as payment details), we use secure server software (SSL) that encrypts the information before transmission. However, no system is completely secure, and we cannot guarantee absolute security of your data.
            </p>
          </section>

          {/* Third-Party Links */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#232323] mb-4">
              Third-Party Websites
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our website may contain links to third-party websites not controlled by Altair Austin Roofing. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#232323] mb-4">
              Children's Privacy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our website is not directed toward children under 18 years of age, and we do not knowingly collect personal information from children under 18. If we become aware that we have collected information from a child under 18, we will take steps to delete that information.
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#232323] mb-4">
              Your Privacy Rights
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>The right to access and receive a copy of your personal information</li>
              <li>The right to correct inaccurate or incomplete information</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to opt out of marketing communications</li>
              <li>The right to withdraw consent for data processing</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              To exercise any of these rights, please contact us using the information provided below.
            </p>
          </section>

          {/* California Residents */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#232323] mb-4">
              California Privacy Rights (CCPA)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Right to know what personal information we collect, use, and disclose</li>
              <li>Right to request deletion of your personal information</li>
              <li>Right to opt out of the sale of personal information (we do not sell personal information)</li>
              <li>Right to non-discrimination for exercising your privacy rights</li>
            </ul>
          </section>

          {/* Data Retention */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#232323] mb-4">
              Data Retention
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements.
            </p>
          </section>

          {/* International Users */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#232323] mb-4">
              International Users
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our services are provided from the United States. If you are accessing our website from outside the United States, please be aware that your information may be transferred to, stored, and processed in the United States where our servers are located. By using our website, you consent to the transfer of your information to the United States.
            </p>
          </section>

          {/* Changes to Policy */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#232323] mb-4">
              Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Altair Austin Roofing reserves the right to update or modify this Privacy Policy at any time. We will post any changes on this page with an updated "Last Updated" date. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#232323] mb-4">
              Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or wish to exercise your privacy rights, please contact us:
            </p>
            <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
              <p className="font-bold text-[#232323] mb-2">Altair Austin Roofing</p>
              <p className="text-gray-700">807 Brazos Street, STE 403</p>
              <p className="text-gray-700 mb-3">Austin, TX 78701</p>
              <p className="text-gray-700">
                <strong>Phone:</strong>{' '}
                <a href="tel:+15125550123" className="text-[#FFB343] hover:text-[#FFA520]">
                  (512) 555-0123
                </a>
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong>{' '}
                <a href="mailto:info@austinroofingcompany.com" className="text-[#FFB343] hover:text-[#FFA520]">
                    info@austinroofingcompany.com
                </a>
              </p>
            </div>
          </section>

          {/* Consent */}
          <section className="mb-8">
            <div className="bg-[#FFB343]/10 border-2 border-[#FFB343] rounded-xl p-6">
              <p className="text-gray-900 font-semibold mb-2">
                By using our website and services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
              </p>
              <p className="text-gray-700 text-sm">
                If you do not agree with this Privacy Policy, please do not use our website or services.
              </p>
            </div>
          </section>
        </div>

        {/* Back to Home Button */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFB343] hover:bg-[#FFA520] text-[#232323] font-bold rounded-xl transition-all shadow-lg"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}