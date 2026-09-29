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
          This Privacy Policy applies to applications and related services provided by Valor Crown that reference or link to this Policy.
        </p>
        <p>
          Different applications provide different features and may process different types of information. We only process information that is relevant to the services and features you choose to use.
        </p>
      </>
    ),
  },
  {
    id: 2,
    question: "Information We Process",
    answer: (
      <>
        <p>
          Depending on the application and features you use, we may process the following information:
        </p>
        <p>
          <strong>Account and Login Information:</strong> Your email address, account identifiers, and basic information returned by authentication services.
        </p>
        <p>
          <strong>Content You Provide:</strong> Information, records, text, settings, lists, or other content you choose to enter into our services.
        </p>
        <p>
          <strong>Photos or Files You Choose to Provide:</strong> Images or files you select when using features that require them.
        </p>
        <p>
          <strong>Service and Device Information:</strong> Information reasonably necessary to operate features such as synchronization, notifications, security, and service stability.
        </p>
      </>
    ),
  },
  {
    id: 3,
    question: "Sign-In and Authentication",
    answer: (
      <>
        <p>
          Some of our applications may allow you to sign in using Google, email, or other supported authentication methods.
        </p>
        <p>
          When you choose Google Sign-In, we may receive information necessary to create or identify your account, such as your Google account identifier, email address, and any name or profile picture returned by Google.
        </p>
        <p>
          Using Google Sign-In does not mean that we can access or read your Gmail, Google Drive, Google Photos, or content from other Google services.
        </p>
        <p>
          If a future feature requires additional permissions, we will explain the purpose when requesting your authorization.
        </p>
      </>
    ),
  },
  {
    id: 4,
    question: "How We Use Your Information",
    answer: (
      <>
        <p>
          We use your information to provide and operate the features you choose to use.
        </p>
        <p>
          Depending on the application, this may include account management, synchronization across devices, shared features, notifications, records, lists, and other functions available within the service.
        </p>
        <p>
          We may also use necessary information to respond to support requests and to maintain the security, reliability, and stability of our services.
        </p>
      </>
    ),
  },
  {
    id: 5,
    question: "App-Specific Features",
    answer: (
      <>
        <p>
          Some applications include features that require additional types of information.
        </p>
        <p>
          For example, Home App may process household information, rooms, furniture, items, shopping lists, receipt records, and images that you choose to provide.
        </p>
        <p>
          When you use receipt recognition, the receipt image you submit may be processed in order to extract information and create the relevant record.
        </p>
        <p>
          Other applications may process different information according to their functions. We only process information necessary for the feature you choose to use.
        </p>
      </>
    ),
  },
  {
    id: 6,
    question: "Data Storage and Sharing",
    answer: (
      <>
        <p>
          To provide our services, we may use cloud database, authentication, file storage, notification, and other service providers to process relevant information.
        </p>
        <p>
          We may also disclose information when required by law or when reasonably necessary to protect our users or the security of our services.
        </p>
        <p>
          Some applications may allow you to share information with other users. For example, if you invite another person to join a shared household, that person may be able to view or manage shared information according to the permissions available within the App.
        </p>
      </>
    ),
  },
  {
    id: 7,
    question: "Data Retention, Deletion, and Your Choices",
    answer: (
      <>
        <p>
          You may use features provided within our applications to view, modify, or delete certain information.
        </p>
        <p>
          You can also manage permissions such as camera, photo, and notification access through your device settings.
        </p>
        <p>
          You may contact us to request access to, correction of, or deletion of your data.
        </p>
        <p>
          We retain information for as long as reasonably necessary to provide our services, resolve disputes, and comply with applicable legal obligations.
        </p>
        <p>
          After data is deleted, copies contained in backups may take additional time to be removed according to the applicable backup retention cycle.
        </p>
      </>
    ),
  },
  {
    id: 8,
    question: "Data Security",
    answer: (
      <>
        <p>
          We take reasonable measures to protect your information and restrict access according to functional requirements.
        </p>
        <p>
          If you notice any unusual activity involving your account or data, please contact us.
        </p>
      </>
    ),
  },
  {
    id: 9,
    question: "Updates to This Policy",
    answer: (
      <>
        <p>
          We may update this Privacy Policy due to changes in our applications, features, data processing practices, or applicable laws and regulations.
        </p>
        <p>
          The updated version will be published on this page with a revised “Last Updated” date.
        </p>
        <p>
          If a change materially affects your rights or interests, we will provide notice through an appropriate method.
        </p>
      </>
    ),
  },
  {
    id: 10,
    question: "Contact Us",
    answer: (
      <>
        <p>
          <strong>Data Controller:</strong> Valor Crown
        </p>
        <p>
          <strong>Contact Email:</strong>{" "}
          <a href="mailto:valor.crown.tw@gmail.com">
            valor.crown.tw@gmail.com
          </a>
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <main className="privacy-page">
      <SiteHeader />

      <section className="privacy-hero">
        <div className="privacy-breadcrumb">Apps by Eagle / Privacy</div>

        <div className="privacy-hero-layout">
          <div className="privacy-hero-copy">
            <p>Apps by Eagle</p>

            <h1>
              隱私權政策 <span>♡</span>
            </h1>

            <div className="privacy-intro">
              Valor Crown 重視你的隱私。
              <br />
              這裡說明我們如何處理及保護你的資料 ♡
            </div>
          </div>

          <div className="privacy-hero-art">
            <img
              src="/apps/images/privacy/hero.webp"
              alt="Apps by Eagle 隱私權政策"
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
                      src={`/apps/images/privacy/q-${number}.webp`}
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