"use client";
import SiteHeader from "../components/SiteHeader";

import { useState } from "react";
import "./privacy.css";

type FaqItem = {
  id: number;
  question: string;
  answer: React.ReactNode;
};

const faqs: FaqItem[] = [
  {
    id: 1,
    question: "Scope",
    answer: (
      <>
        <p>
          These Terms apply to applications and related services provided by Valor Crown that reference or link to these Terms.
        </p>
        <p>
          Different applications may provide different features and may have additional notices, policies, or terms that apply to specific functions. Where additional terms apply, they will be presented within the relevant application or service.
        </p>
      </>
    ),
  },
  {
    id: 2,
    question: "Our Services",
    answer: (
      <>
        <p>
          Valor Crown develops and provides digital applications and related services for various purposes.
        </p>
        <p>
          Depending on the application you use, features may include account management, cloud synchronization, content creation or storage, notifications, sharing, automated processing, organizational tools, games, utilities, or other functionality.
        </p>
        <p>
          We may add, modify, improve, replace, or discontinue features as our Services develop.
        </p>
      </>
    ),
  },
  {
    id: 3,
    question: "Accounts",
    answer: (
      <>
        <p>
          Some Services may be used without an account, while others may require or allow you to create or sign in to an account.
        </p>
        <p>
          You are responsible for maintaining the security of your account and for activity performed through your account. You should not allow unauthorized persons to access your account.
        </p>
        <p>
          If you believe your account has been accessed without authorization, please contact us as soon as possible.
        </p>
        <p>
          Some Services may support sign-in through third-party authentication providers, such as Google or Apple. Your use of those authentication services may also be subject to the terms and policies of the relevant provider.
        </p>
      </>
    ),
  },
  {
    id: 4,
    question: "Your Content",
    answer: (
      <>
        <p>
          Some of our Services may allow you to enter, create, upload, store, or share information, photographs, files, records, or other content (&quot;User Content&quot;).
        </p>
        <p>You retain ownership of your User Content.</p>
        <p>
          You grant Valor Crown permission to process, store, transmit, display, and otherwise handle your User Content only to the extent reasonably necessary to provide, operate, maintain, improve, and secure the features you choose to use.
        </p>
        <p>
          You are responsible for ensuring that you have the right to provide any User Content you submit and that your use of such content does not violate applicable laws or the rights of others.
        </p>
        <p>
          Our handling of personal information is further described in the applicable Privacy Policy.
        </p>
      </>
    ),
  },
  {
    id: 5,
    question: "Shared Features",
    answer: (
      <>
        <p>
          Some Services may allow you to share information, collaborate, or interact with other users.
        </p>
        <p>
          When you choose to share information with another person, that person may be able to view, modify, or otherwise interact with the shared information depending on the features and permissions provided by the relevant Service.
        </p>
        <p>
          You are responsible for deciding whom you share information with and what information you choose to make available to them.
        </p>
      </>
    ),
  },
  {
    id: 6,
    question: "Automated Features",
    answer: (
      <>
        <p>
          Some Services may include automated features that process, recognize, organize, generate, calculate, or otherwise assist with information or content.
        </p>
        <p>
          Automated results may occasionally be incomplete, inaccurate, or unsuitable for a particular purpose. You should review important information before relying on automated results.
        </p>
        <p>
          Unless explicitly stated otherwise, our Services are intended as general-purpose tools and do not constitute professional medical, legal, financial, accounting, tax, or other professional advice.
        </p>
      </>
    ),
  },
  {
    id: 7,
    question: "Acceptable Use",
    answer: (
      <>
        <p>You agree not to misuse the Services or interfere with their normal operation.</p>
        <p>You must not use the Services to:</p>
        <ul>
          <li>violate applicable laws or regulations;</li>
          <li>access another person&apos;s account or data without authorization;</li>
          <li>upload, distribute, or introduce malicious software or harmful content;</li>
          <li>interfere with, disrupt, or compromise the security or operation of the Services;</li>
          <li>attempt to bypass security measures or access restrictions;</li>
          <li>use automated methods in a manner that places an unreasonable burden on our systems;</li>
          <li>impersonate another person or misrepresent your authorization to act on behalf of another person; or</li>
          <li>infringe the intellectual property, privacy, or other rights of another person.</li>
        </ul>
        <p>
          We may restrict or suspend access where reasonably necessary to protect users, our Services, or other parties from misuse, security threats, or unlawful activity.
        </p>
      </>
    ),
  },
  {
    id: 8,
    question: "Service Availability",
    answer: (
      <>
        <p>
          We aim to provide reliable Services, but we cannot guarantee that every Service will always be available, uninterrupted, error-free, or compatible with every device, operating system, or third-party service.
        </p>
        <p>
          Certain features may depend on internet connectivity, cloud infrastructure, operating system functionality, third-party platforms, or other external services.
        </p>
        <p>
          Temporary interruptions may occur because of maintenance, technical issues, security measures, updates, or circumstances beyond our reasonable control.
        </p>
        <p>
          Where a Service allows you to store important information, you are responsible for maintaining separate copies where loss of that information could cause significant inconvenience or harm.
        </p>
      </>
    ),
  },
  {
    id: 9,
    question: "Notifications",
    answer: (
      <>
        <p>Some Services may provide notifications or reminders if you enable them.</p>
        <p>
          Notification delivery may depend on your device settings, operating system, internet connection, and third-party notification services. We cannot guarantee that every notification or reminder will be delivered at a particular time or successfully received.
        </p>
        <p>
          You should not rely on our Services as the sole method of receiving critical, emergency, medical, safety, or other time-sensitive information.
        </p>
      </>
    ),
  },
  {
    id: 10,
    question: "Intellectual Property",
    answer: (
      <>
        <p>
          The Services, including their software, interfaces, designs, graphics, illustrations, branding, logos, text, and other materials provided by Valor Crown, are owned by or licensed to Valor Crown and are protected by applicable intellectual property laws.
        </p>
        <p>These Terms do not transfer ownership of the Services or our intellectual property to you.</p>
        <p>
          You may use the Services for their intended purposes. Except where permitted by applicable law or expressly authorized by us, you may not copy, reproduce, distribute, sell, license, modify, reverse engineer, or commercially exploit protected portions of the Services.
        </p>
        <p>This section does not affect your ownership of User Content.</p>
      </>
    ),
  },
  {
    id: 11,
    question: "Third-Party Services",
    answer: (
      <>
        <p>
          Our Services may use, connect to, or depend on third-party services, platforms, software, authentication providers, cloud infrastructure, app stores, or other external technologies.
        </p>
        <p>
          Third-party services are operated independently from Valor Crown. Their availability and operation may be governed by their own terms, privacy policies, and practices.
        </p>
        <p>We are not responsible for third-party services that are outside our reasonable control.</p>
      </>
    ),
  },
  {
    id: 12,
    question: "Updates and Changes to the Services",
    answer: (
      <>
        <p>
          We may update the Services from time to time to introduce new functionality, improve existing features, maintain compatibility, address security issues, or improve the user experience.
        </p>
        <p>Features may be added, modified, replaced, or discontinued.</p>
        <p>
          Where a change materially affects your use of a Service or your rights, we will provide appropriate notice where required by applicable law.
        </p>
      </>
    ),
  },
  {
    id: 13,
    question: "Suspension and Termination",
    answer: (
      <>
        <p>You may stop using our Services at any time.</p>
        <p>
          Where account deletion functionality is available, you may use it to request deletion of your account and associated data. You may also contact us regarding account or data deletion.
        </p>
        <p>
          We may suspend, restrict, or terminate access where reasonably necessary because of serious violations of these Terms, unlawful activity, security risks, abuse of the Services, or legal requirements.
        </p>
        <p>
          Where reasonably possible, we will take into account the nature and severity of the issue before restricting access.
        </p>
      </>
    ),
  },
  {
    id: 14,
    question: "Disclaimer",
    answer: (
      <>
        <p>Our Services are provided for their intended functions and purposes.</p>
        <p>
          To the extent permitted by applicable law, the Services are provided on an &quot;as is&quot; and &quot;as available&quot; basis.
        </p>
        <p>
          We do not guarantee that every feature, automated result, synchronization process, notification, calculation, record, or other output will always be complete, accurate, uninterrupted, or error-free.
        </p>
        <p>
          Nothing in these Terms excludes or limits any rights or remedies that cannot lawfully be excluded or limited under applicable consumer protection laws.
        </p>
      </>
    ),
  },
  {
    id: 15,
    question: "Limitation of Liability",
    answer: (
      <>
        <p>
          To the extent permitted by applicable law, Valor Crown will not be liable for indirect, incidental, special, or consequential losses arising from the use of or inability to use the Services.
        </p>
        <p>
          This limitation does not apply where liability cannot legally be excluded or limited, including any rights you may have under applicable consumer protection laws.
        </p>
      </>
    ),
  },
  {
    id: 16,
    question: "Privacy",
    answer: (
      <>
        <p>Your use of our Services is also subject to the applicable Privacy Policy.</p>
        <p>
          Our Privacy Policy explains what personal information we process, how we use and protect that information, when information may be shared, and the choices available to you.
        </p>
        <p>
          Individual applications or features may have additional privacy disclosures where their data processing practices differ.
        </p>
      </>
    ),
  },
  {
    id: 17,
    question: "Changes to These Terms",
    answer: (
      <>
        <p>
          We may update these Terms when our Services, business practices, or applicable legal requirements change.
        </p>
        <p>
          The updated Terms will be published with a revised &quot;Last Updated&quot; date.
        </p>
        <p>
          If a change materially affects your rights or obligations, we will provide appropriate notice where required.
        </p>
        <p>
          Your continued use of the Services after updated Terms become effective constitutes acceptance of the updated Terms to the extent permitted by applicable law.
        </p>
      </>
    ),
  },
  {
    id: 18,
    question: "Governing Law",
    answer: (
      <>
        <p>
          These Terms are governed by the laws applicable to Valor Crown and the provision of the Services, without limiting any mandatory consumer rights or protections that may apply to you under the laws of your place of residence.
        </p>
      </>
    ),
  },
  {
    id: 19,
    question: "Contact Us",
    answer: (
      <>
        <p>If you have questions about these Terms or our Services, please contact us:</p>
        <p><strong>Service Provider:</strong> Valor Crown</p>
        <p>
          <strong>Contact Email:</strong>{" "}
          <a href="mailto:valor.crown.tw@gmail.com">valor.crown.tw@gmail.com</a>
        </p>
      </>
    ),
  },
];

export default function TermsPage() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <main className="privacy-page">
      <SiteHeader />

      <section className="privacy-hero">
        <div className="privacy-breadcrumb">Apps by Eagle / Terms</div>

        <div className="privacy-hero-layout">
          <div className="privacy-hero-copy">
            <p>Apps by Eagle</p>

            <h1>
              服務條款 <span>♡</span>
            </h1>

            <div className="privacy-intro">
              歡迎使用 Valor Crown 提供的 Apps 與服務。
              <br />
              使用我們的服務前，請先閱讀以下服務條款 ♡
            </div>
          </div>

          <div className="privacy-hero-art">
            <img
              src="/apps/images/terms/hero.webp"
              alt="Apps by Eagle 服務條款"
            />
          </div>
        </div>
      </section>

      <section className="privacy-content">


        <div className="privacy-list">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            const number = String(faq.id).padStart(2, "0");

            return (
              <article
                className={`privacy-item ${isOpen ? "open" : ""}`}
                key={faq.id}
              >
                <button
                  type="button"
                  className="privacy-question"
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  aria-expanded={isOpen}
                >
                  <span className="privacy-number">{number}</span>

                  <span className="privacy-question-art">
                    <img
                      src={`/apps/images/terms/q-${number}.webp`}
                      alt=""
                      aria-hidden="true"
                    />
                  </span>

                  <strong>{faq.question}</strong>

                  <span className="privacy-chevron">
                    {isOpen ? "⌃" : "⌄"}
                  </span>
                </button>

                {isOpen && (
                  <div className="privacy-answer">
                    {faq.answer}
                  </div>
                )}
              </article>
            );
          })}
        </div>


      </section>
    </main>
  );
}