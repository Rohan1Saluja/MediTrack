// src/app/privacy/page.tsx
import Header from "@/components/layout/Header"; // Assuming you want the same header
import { PlusSquare } from "lucide-react"; // For the footer, if you add one
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - MediTrack",
  description: "Read the Privacy Policy for the MediTrack application.",
};

export default function PrivacyPolicyPage() {
  const companyName = "MediTrack"; // Replace if you have a formal company name
  const appName = "MediTrack";
  const effectiveDate = "October 26, 2023"; // CHANGE THIS TO THE CURRENT DATE
  const contactEmail = "privacy@example-meditrack.com"; // CHANGE THIS
  const websiteUrl = "https://www.example-meditrack.com"; // CHANGE THIS (if you have one)

  return (
    <div className="flex flex-col min-h-screen bg-background-50">
      <Header /> {/* Or a different header if preferred for legal pages */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-4xl mx-auto bg-white p-8 rounded-lg shadow flex flex-col gap-4">
          <div>
            <h2 className="mb-5">Privacy Policy for {appName}</h2>
            <p>
              <strong>Effective Date:</strong> {effectiveDate}
            </p>

            <p>
              Welcome to {appName} ("we," "us," or "our"). We are committed to
              protecting your personal information and your right to privacy. If
              you have any questions or concerns about this privacy notice, or
              our practices with regards to your personal information, please
              contact us at{" "}
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
            </p>

            <p>
              This Privacy Policy governs the privacy policies and practices of
              our application, {appName} (the "Service"). Please read this
              Privacy Policy carefully.
            </p>
          </div>

          <div>
            <h3>1. INFORMATION WE COLLECT</h3>
            <p>
              We collect personal information that you voluntarily provide to us
              when you register on the Service, express an interest in obtaining
              information about us or our products and services, when you
              participate in activities on the Service, or otherwise when you
              contact us.
            </p>
            <p>
              The personal information that we collect depends on the context of
              your interactions with us and the Service, the choices you make,
              and the products and features you use. The personal information we
              collect may include the following:
            </p>
            <ul>
              <li>
                <strong>Personal Information Provided by You:</strong> We
                collect names; email addresses; passwords; medication names,
                dosages, schedules; adherence data (e.g., when you mark a
                medication as taken); and other similar information you provide.
              </li>
              <li>
                <strong>Usage Data:</strong> We may automatically collect
                certain information when you visit, use, or navigate the
                Service. This information does not reveal your specific identity
                (like your name or contact information) but may include device
                and usage information, such as your IP address, browser and
                device characteristics, operating system, language preferences,
                referring URLs, device name, country, location, information
                about how and when you use our Service, and other technical
                information.
              </li>
            </ul>
          </div>

          <div>
            <h3>2. HOW WE USE YOUR INFORMATION</h3>
            <p>
              We use personal information collected via our Service for a
              variety of business purposes described below. We process your
              personal information for these purposes in reliance on our
              legitimate business interests, in order to enter into or perform a
              contract with you, with your consent, and/or for compliance with
              our legal obligations.
            </p>
            <ul>
              <li>To facilitate account creation and logon process.</li>
              <li>To manage user accounts.</li>
              <li>
                To provide and maintain our Service, including to monitor the
                usage of our Service.
              </li>
              <li>
                To send you reminders and notifications related to your
                medication schedule, as configured by you.
              </li>
              <li>To respond to user inquiries/offer support to users.</li>
              <li>To send administrative information to you.</li>
              <li>
                For other business purposes, such as data analysis, identifying
                usage trends, determining the effectiveness of our promotional
                campaigns, and to evaluate and improve our Service, products,
                marketing, and your experience.
              </li>
            </ul>
          </div>

          <div>
            <h3>3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</h3>
            <p>
              We only share information with your consent, to comply with laws,
              to provide you with services, to protect your rights, or to
              fulfill business obligations.
            </p>
            <p>
              We may process or share your data that we hold based on the
              following legal basis:
            </p>
            <ul>
              <li>
                <strong>Consent:</strong> We may process your data if you have
                given us specific consent to use your personal information for a
                specific purpose.
              </li>
              <li>
                <strong>Legitimate Interests:</strong> We may process your data
                when it is reasonably necessary to achieve our legitimate
                business interests.
              </li>
              <li>
                <strong>Performance of a Contract:</strong> Where we have
                entered into a contract with you, we may process your personal
                information to fulfill the terms of our contract.
              </li>
              <li>
                <strong>Legal Obligations:</strong> We may disclose your
                information where we are legally required to do so in order to
                comply with applicable law, governmental requests, a judicial
                proceeding, court order, or legal process.
              </li>
              <li>
                <strong>Vital Interests:</strong> We may disclose your
                information where we believe it is necessary to investigate,
                prevent, or take action regarding potential violations of our
                policies, suspected fraud, situations involving potential
                threats to the safety of any person and illegal activities, or
                as evidence in litigation in which we are involved.
              </li>
            </ul>
            <p>
              Specifically, we may need to process your data or share your
              personal information in the following situations:
            </p>
            <ul>
              <li>
                <strong>Third-Party Service Providers:</strong> We may share
                your data with third-party vendors, service providers,
                contractors, or agents who perform services for us or on our
                behalf and require access to such information to do that work
                (e.g., data hosting, analytics, email delivery). We have
                contracts in place with our data processors.
              </li>
            </ul>
          </div>

          <div>
            <h3>4. HOW DO WE KEEP YOUR INFORMATION SAFE?</h3>
            <p>
              We aim to protect your personal information through a system of
              organizational and technical security measures. We have
              implemented appropriate technical and organizational security
              measures designed to protect the security of any personal
              information we process. However, despite our safeguards and
              efforts to secure your information, no electronic transmission
              over the Internet or information storage technology can be
              guaranteed to be 100% secure, so we cannot promise or guarantee
              that hackers, cybercriminals, or other unauthorized third parties
              will not be able to defeat our security and improperly collect,
              access, steal, or modify your information.
            </p>
          </div>

          <div>
            <h3>5. DATA RETENTION</h3>
            <p>
              We will only keep your personal information for as long as it is
              necessary for the purposes set out in this privacy policy, unless
              a longer retention period is required or permitted by law (such as
              tax, accounting, or other legal requirements). When we have no
              ongoing legitimate business need to process your personal
              information, we will either delete or anonymize it, or, if this is
              not possible (for example, because your personal information has
              been stored in backup archives), then we will securely store your
              personal information and isolate it from any further processing
              until deletion is possible.
            </p>
          </div>

          <div>
            <h3>6. YOUR PRIVACY RIGHTS</h3>
            <p>
              Depending on your location, you may have certain rights regarding
              your personal information, such as the right to access, correct,
              update, or request deletion of your personal information. If you
              wish to exercise these rights, please contact us at{" "}
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
            </p>
            <p>
              If you are a resident in the European Economic Area (EEA) or UK,
              and you believe we are unlawfully processing your personal
              information, you also have the right to complain to your local
              data protection supervisory authority.
            </p>
            <p>
              If you are a resident in California, you are granted specific
              rights regarding access to your personal information.
            </p>
          </div>

          <div>
            {" "}
            <h3>7. CHILDREN'S PRIVACY</h3>
            <p>
              Our Service is not intended for use by children under the age of
              13 (or a higher age threshold as required by applicable law). We
              do not knowingly collect personally identifiable information from
              children under 13. If you become aware that a child has provided
              us with Personal Information, please contact us.
            </p>
          </div>

          <div>
            <h3>8. CHANGES TO THIS PRIVACY POLICY</h3>
            <p>
              We may update this privacy policy from time to time. The updated
              version will be indicated by an updated "Effective Date" and the
              updated version will be effective as soon as it is accessible. We
              encourage you to review this privacy policy frequently to be
              informed of how we are protecting your information.
            </p>
          </div>

          <div>
            <h3>9. CONTACT US</h3>
            <p>
              If you have questions or comments about this policy, you may email
              us at <a href={`mailto:${contactEmail}`}>{contactEmail}</a> or by
              post to:
            </p>
            <p>
              [Your Company Name/Your Name if Sole Proprietor]
              <br />
              [Your Physical Address - Optional, but good for transparency]
              <br />
              [City, State, Zip Code]
              <br />
              [Country]
            </p>
          </div>
        </div>
      </main>
      {/* Optional: Basic Footer for legal pages */}
      {/* <footer className="bg-gray-100 text-gray-600 py-8 text-center text-sm">
        <div className="container mx-auto px-4">
          <p>
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>
          <div className="mt-2">
            <Link href="/privacy" className="hover:text-teal-600 mx-2">
              Privacy Policy
            </Link>{" "}
            |
            <Link href="/terms" className="hover:text-teal-600 mx-2">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
