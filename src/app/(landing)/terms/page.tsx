// src/app/terms/page.tsx
import Header from "@/components/layout/Header"; // Assuming you want the same header
import { PlusSquare } from "lucide-react"; // For the footer, if you add one
import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions - MediTrack",
  description:
    "Read the Terms and Conditions for using the MediTrack application.",
};

export default function TermsAndConditionsPage() {
  const companyName = "MediTrack"; // Replace if you have a formal company name
  const appName = "MediTrack";
  const effectiveDate = "October 26, 2023"; // CHANGE THIS TO THE CURRENT DATE
  const contactEmail = "support@example-meditrack.com"; // CHANGE THIS
  const websiteUrl = "https://www.example-meditrack.com"; // CHANGE THIS (if you have one)

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header /> {/* Or a different header if preferred for legal pages */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-4xl mx-auto bg-white p-8 rounded-lg shadow flex flex-col gap-4">
          <div>
            <h2>Terms and Conditions for {appName}</h2>
            <p>
              <strong>Effective Date:</strong> {effectiveDate}
            </p>

            <p>
              Please read these Terms and Conditions ("Terms", "Terms and
              Conditions") carefully before using the {appName} mobile
              application (the "Service") operated by {companyName} ("us", "we",
              or "our").
            </p>
            <p>
              Your access to and use of the Service is conditioned on your
              acceptance of and compliance with these Terms. These Terms apply
              to all visitors, users, and others who access or use the Service.
            </p>
            <p>
              By accessing or using the Service you agree to be bound by these
              Terms. If you disagree with any part of the terms then you may not
              access the Service.
            </p>
          </div>

          <div>
            <h3>1. ACCOUNTS</h3>
            <p>
              When you create an account with us, you must provide us
              information that is accurate, complete, and current at all times.
              Failure to do so constitutes a breach of the Terms, which may
              result in immediate termination of your account on our Service.
            </p>
            <p>
              You are responsible for safeguarding the password that you use to
              access the Service and for any activities or actions under your
              password, whether your password is with our Service or a
              third-party service.
            </p>
            <p>
              You agree not to disclose your password to any third party. You
              must notify us immediately upon becoming aware of any breach of
              security or unauthorized use of your account.
            </p>
          </div>

          <div>
            <h3>2. USE OF THE SERVICE</h3>
            <p>
              {appName} is a medication reminder and tracking tool. The Service
              is intended for personal, non-commercial use to help you manage
              your medication schedule.
            </p>
            <p>
              <strong>
                IMPORTANT: {appName} IS NOT A SUBSTITUTE FOR PROFESSIONAL
                MEDICAL ADVICE.
              </strong>
              Always seek the advice of your physician or other qualified health
              provider with any questions you may have regarding a medical
              condition or treatment. Never disregard professional medical
              advice or delay in seeking it because of information you have
              obtained through the Service. {appName} does not recommend or
              endorse any specific tests, physicians, products, procedures,
              opinions, or other information that may be mentioned on the
              Service. Reliance on any information provided by {appName} is
              solely at your own risk.
            </p>
            <p>You agree not to use the Service:</p>
            <ul>
              <li>
                In any way that violates any applicable national or
                international law or regulation.
              </li>
              <li>
                For the purpose of exploiting, harming, or attempting to exploit
                or harm minors in any way.
              </li>
              <li>
                To transmit, or procure the sending of, any advertising or
                promotional material, including any "junk mail", "chain letter,"
                "spam," or any other similar solicitation.
              </li>
              <li>
                To impersonate or attempt to impersonate {companyName}, a{" "}
                {companyName} employee, another user, or any other person or
                entity.
              </li>
              <li>
                To engage in any other conduct that restricts or inhibits
                anyone's use or enjoyment of the Service, or which, as
                determined by us, may harm {companyName} or users of the Service
                or expose them to liability.
              </li>
            </ul>
          </div>

          <div>
            <h3>3. INTELLECTUAL PROPERTY</h3>
            <p>
              The Service and its original content (excluding Content provided
              by users), features, and functionality are and will remain the
              exclusive property of {companyName} and its licensors. The Service
              is protected by copyright, trademark, and other laws of both [Your
              Country] and foreign countries. Our trademarks and trade dress may
              not be used in connection with any product or service without the
              prior written consent of {companyName}.
            </p>
          </div>

          <div>
            <h3>4. LINKS TO OTHER WEB SITES</h3>
            <p>
              Our Service may contain links to third-party web sites or services
              that are not owned or controlled by {companyName}.
            </p>
            <p>
              {companyName} has no control over, and assumes no responsibility
              for, the content, privacy policies, or practices of any
              third-party web sites or services. You further acknowledge and
              agree that {companyName}
              shall not be responsible or liable, directly or indirectly, for
              any damage or loss caused or alleged to be caused by or in
              connection with use of or reliance on any such content, goods or
              services available on or through any such web sites or services.
            </p>
          </div>

          <div>
            <h3>5. TERMINATION</h3>
            <p>
              We may terminate or suspend your account immediately, without
              prior notice or liability, for any reason whatsoever, including
              without limitation if you breach the Terms.
            </p>
            <p>
              Upon termination, your right to use the Service will immediately
              cease. If you wish to terminate your account, you may simply
              discontinue using the Service or contact us to request account
              deletion.
            </p>
          </div>

          <div>
            <h3>6. LIMITATION OF LIABILITY</h3>
            <p>
              In no event shall {companyName}, nor its directors, employees,
              partners, agents, suppliers, or affiliates, be liable for any
              indirect, incidental, special, consequential or punitive damages,
              including without limitation, loss of profits, data, use,
              goodwill, or other intangible losses, resulting from (i) your
              access to or use of or inability to access or use the Service;
              (ii) any conduct or content of any third party on the Service;
              (iii) any content obtained from the Service; and (iv) unauthorized
              access, use or alteration of your transmissions or content,
              whether based on warranty, contract, tort (including negligence)
              or any other legal theory, whether or not we have been informed of
              the possibility of such damage, and even if a remedy set forth
              herein is found to have failed of its essential purpose.
            </p>
          </div>

          <div>
            <h3>7. DISCLAIMER</h3>
            <p>
              Your use of the Service is at your sole risk. The Service is
              provided on an "AS IS" and "AS AVAILABLE" basis. The Service is
              provided without warranties of any kind, whether express or
              implied, including, but not limited to, implied warranties of
              merchantability, fitness for a particular purpose,
              non-infringement or course of performance.
            </p>
            <p>
              {companyName} its subsidiaries, affiliates, and its licensors do
              not warrant that a) the Service will function uninterrupted,
              secure or available at any particular time or location; b) any
              errors or defects will be corrected; c) the Service is free of
              viruses or other harmful components; or d) the results of using
              the Service will meet your requirements.
            </p>
          </div>

          <div>
            <h3>8. GOVERNING LAW</h3>
            <p>
              These Terms shall be governed and construed in accordance with the
              laws of [Your State/Province, Your Country], without regard to its
              conflict of law provisions.
            </p>
            <p>
              Our failure to enforce any right or provision of these Terms will
              not be considered a waiver of those rights. If any provision of
              these Terms is held to be invalid or unenforceable by a court, the
              remaining provisions of these Terms will remain in effect. These
              Terms constitute the entire agreement between us regarding our
              Service, and supersede and replace any prior agreements we might
              have between us regarding the Service.
            </p>
          </div>

          <div>
            <h3>9. CHANGES TO THESE TERMS</h3>
            <p>
              We reserve the right, at our sole discretion, to modify or replace
              these Terms at any time. If a revision is material we will try to
              provide at least 30 days' notice prior to any new terms taking
              effect. What constitutes a material change will be determined at
              our sole discretion.
            </p>
            <p>
              By continuing to access or use our Service after those revisions
              become effective, you agree to be bound by the revised terms. If
              you do not agree to the new terms, please stop using the Service.
            </p>
          </div>

          <div>
            <h3>10. CONTACT US</h3>
            <p>
              If you have any questions about these Terms, please contact us:
            </p>
            <ul>
              <li>
                By email: <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
              </li>
              <li>
                By visiting this page on our website (if applicable):{" "}
                <a href={websiteUrl}>{websiteUrl}/contact</a>
              </li>
            </ul>
          </div>
        </div>
      </main>
      {/* Optional: Basic Footer for legal pages */}
      <footer className="bg-gray-100 text-gray-600 py-8 text-center text-sm">
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
      </footer>
    </div>
  );
}
