"use client";

import { FormEvent, useState } from "react";
import "./contact.css";

const appOptions = [
  {
    id: "home",
    name: "家庭神器",
    english: "Home App",
    image: "/apps/images/contact/home.webp",
  },
  {
    id: "get-ready",
    name: "出門神器",
    english: "Get Ready App",
    image: "/apps/images/contact/get-ready.webp",
  },
  {
    id: "baby",
    name: "父母神器",
    english: "Baby App",
    image: "/apps/images/contact/baby.webp",
  },
  {
    id: "other",
    name: "其他 / 新 App",
    english: "告訴我們你的想法",
    image: "",
  },
];

export default function ContactPage() {
  const [selectedApp, setSelectedApp] = useState("home");
  const [idea, setIdea] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (submitting) return;

    const trimmedIdea = idea.trim();
    const trimmedEmail = email.trim();

    if (!trimmedIdea) {
      setSubmitSuccess(false);
      setSubmitError("請先告訴 Eagle 你的想法 ♡");
      return;
    }

    if (
      trimmedEmail &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)
    ) {
      setSubmitSuccess(false);
      setSubmitError("請輸入有效的 Email。");
      return;
    }

    setSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError("");

    try {
      const response = await fetch("/apps/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          selectedApp,
          idea: trimmedIdea,
          email: trimmedEmail,
        }),
      });

      const data = (await response.json().catch(() => null)) as {
        success?: boolean;
        message?: string;
      } | null;

      if (!response.ok || !data?.success) {
        setSubmitError(data?.message || "送出失敗，請稍後再試 ♡");
        return;
      }

      setIdea("");
      setEmail("");
      setSubmitSuccess(true);
    } catch {
      setSubmitError("送出失敗，請稍後再試 ♡");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="contact-page">
      <div className="contact-shell">
        <header className="contact-header">
          <a className="contact-logo" href="/apps">
            Eagle ♡
          </a>

          <nav className="contact-nav" aria-label="主要導覽">
            <a href="/apps/apps">Apps</a>
            <a href="/apps/about">關於我</a>
            <a href="/apps/story">部落格</a>
            <a className="active" href="/apps/contact">
              支援
            </a>
          </nav>

          <a className="contact-follow" href="#contact-methods">
            追蹤我 ♡
          </a>
        </header>

        <section className="contact-hero">
          <div className="contact-hero-copy">
            <h1>
              聯絡 Eagle <span>♡</span>
            </h1>

            <p>
              有任何問題、建議或合作，
              <br />
              歡迎聯絡我♡
            </p>

            <span className="contact-handwriting">Let&apos;s talk! ♡</span>
          </div>

          <div className="contact-hero-art">
            <img
              src="/apps/images/contact/hero.webp"
              alt="Eagle 與綿花糖一起回覆訊息"
            />
          </div>
        </section>

        <section className="contact-card contact-methods" id="contact-methods">
          <div className="contact-section-copy">
            <h2>
              聯絡方式 <span>♡</span>
            </h2>
            <p>
              歡迎透過這些方式聯絡我，
              <br />
              追蹤最新消息或和我交流！
            </p>
          </div>

          <div className="contact-method-grid">
            <a
              className="contact-method"
              href="https://www.facebook.com/EagleYingBase"
              target="_blank"
              rel="noreferrer"
            >
              <img className="social-icon" src="/apps/images/contact/contact1.webp" alt="" />
              <strong>Facebook</strong>
              
              
            </a>

            <a
              className="contact-method"
              href="https://www.instagram.com/eagle_ying"
              target="_blank"
              rel="noreferrer"
            >
              <img className="social-icon" src="/apps/images/contact/contact2.webp" alt="" />
              <strong>Instagram</strong>
              
              
            </a>

            <a
              className="contact-method"
              href="https://www.threads.com/@eagle_ying"
              target="_blank"
              rel="noreferrer"
            >
              <img className="social-icon" src="/apps/images/contact/contact3.webp" alt="" />
              <strong>Threads</strong>
              
              
            </a>

            <a
              className="contact-method"
              href="mailto:valor.crown.tw@gmail.com"
            >
              <img className="social-icon" src="/apps/images/contact/contact4.webp" alt="" />
              <strong>Email</strong>
              
              
            </a>
          </div>
        </section>

        <section className="contact-card wish-card">
          <div className="wish-intro">
            <div>
              <h2>
                許願池 <span>♡</span>
              </h2>

              <p>
                想在某個 App 增加功能？
                <br />
                或者希望我開發什麼新的 App？
                <br />
                歡迎在這裡告訴我！
                <br />
                你的想法對我非常重要，
                <br />
                未來可能會實現♡
              </p>
            </div>

            <img
              src="/apps/images/contact/wish.webp"
              alt="綿花糖收集大家的 App 願望"
            />
          </div>

          <form className="wish-form" noValidate onSubmit={handleSubmit}>
            <fieldset>
              <legend>
                <span className="step-number">1</span>
                選擇相關的 App <span className="heart">♡</span>
              </legend>

              <div className="app-choice-grid">
                {appOptions.map((app) => (
                  <button
                    type="button"
                    className={`app-choice ${
                      selectedApp === app.id ? "selected" : ""
                    }`}
                    key={app.id}
                    onClick={() => setSelectedApp(app.id)}
                  >
                    <span className="choice-check">
                      {selectedApp === app.id ? "✓" : ""}
                    </span>

                    {app.image ? (
                      <img src={app.image} alt="" />
                    ) : (
                      <span className="other-app-icon">•••</span>
                    )}

                    <strong>{app.name}</strong>
                    <small>{app.english}</small>
                  </button>
                ))}
              </div>
            </fieldset>

            <label className="wish-field">
              <span className="field-title">
                <span className="step-number">2</span>
                告訴我們你的想法 <span className="heart">♡</span>
              </span>

              <textarea
                maxLength={1000}
                value={idea}
                onChange={(event) => setIdea(event.target.value)}
                placeholder={"請詳細描述你的建議或想法，例如：\n－希望在 App 增加什麼功能？\n－有沒有遇到什麼問題？\n－希望我開發什麼新的 App？"}
              />

              <span className="character-count">{idea.length} / 1000</span>
            </label>

            <label className="wish-field email-field">
              <span className="field-title">
                <span className="step-number">3</span>
                （選填）聯絡方式 <span className="heart">♡</span>
              </span>

              <small>
                如需進一步確認，我可能會透過以下方式聯絡你。
              </small>

              <div className="email-input-wrap">
                <span>✉</span>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="你的電郵（可選）"
                />
              </div>
            </label>

            <div className="wish-submit-row">
              <div className="wish-submit-block">
                <button
                  className="wish-submit"
                  type="submit"
                  disabled={submitting}
                >
                  {submitting ? "♡ 送出中..." : "♡ 送出許願"}
                </button>

                {submitSuccess && (
                  <p className="wish-submit-success" role="status">
                    許願已送出 ♡
                  </p>
                )}

                {submitError && (
                  <p className="wish-submit-error" role="alert">
                    {submitError}
                  </p>
                )}
              </div>

              <div className="wish-thanks">
                <span>Thank you</span>
                <span>for your support! ♡</span>
                <img
                  src="/apps/images/contact/thanks.webp"
                  alt="綿花糖謝謝你的支持"
                />
              </div>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
