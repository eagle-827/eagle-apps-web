"use client";

import { useMemo, useState } from "react";
import "./faq.css";

type Category =
  | "所有問題"
  | "開始使用"
  | "物品管理"
  | "購物清單"
  | "家庭共享"
  | "帳號與同步"
  | "其他";

type FaqItem = {
  question: string;
  category: Exclude<Category, "所有問題">;
  answer: React.ReactNode;
};

const categories: Category[] = [
  "所有問題",
  "開始使用",
  "物品管理",
  "購物清單",
  "家庭共享",
  "帳號與同步",
  "其他",
];

const faqs: FaqItem[] = [
  {
    question: "家庭神器是什麼？",
    category: "開始使用",
    answer: (
      <>
        <p>
          「家庭神器」是由一個由香港移民到台灣的女生 Eagle 和丈夫一起開發。
        </p>
        <p>
          這是一個幫你記住「家裡有什麼、東西在哪裡、提醒你什麼快到期、還有什麼要買、什麼時候要整理房子」的家庭管理 App。
        </p>
      </>
    ),
  },
  {
    question: "我第一次使用，該從哪裡開始？",
    category: "開始使用",
    answer: (
      <>
        <p>跟著新手教學走一次最快：</p>
        <p>
          先新增一個房間（例如「主人房」），在房間裡新增家具（例如「吊櫃」），家具會分成一格一格的格位，最後把物品收進其中一格。
        </p>
        <p>
          教學會在你還沒建立完整資料時自動出現。如果不小心關掉了，可以到設定頁重新開啟教學。
        </p>
      </>
    ),
  },
  {
    question: "為什麼一定要先有房間和家具才能加物品？",
    category: "物品管理",
    answer: (
      <>
        <p>
          家庭神器是用「位置」來記住東西放在哪裡，所以每一件物品都要屬於某個家具的某一格。
        </p>
        <p>
          這樣之後搜尋時，才能直接告訴你「在主人房 → 吊櫃 → 右門第一層」。
        </p>
        <p>
          如果只是想快速記下要買的東西，用購物清單就好，不需要先建立位置。
        </p>
      </>
    ),
  },
  {
    question: "可以一次新增很多件物品嗎？",
    category: "物品管理",
    answer: (
      <>
        <p>可以，在物品名稱欄位用逗號分隔就會自動變成多筆：</p>
        <p>
          例如「白毛巾,黑毛巾,洗衣精兩瓶」會辨識成三件，按下「新增 3 個物品」就一次存入。
        </p>
        <p>
          也可以用「多件物品模式」裡的手動輸入框，一行一個貼上整份清單；或用語音輸入，每說完一件停一下。
        </p>
        <p>
          數量可以直接說或直接打，例如「洗衣精兩瓶」會自動記成數量 2。
        </p>
      </>
    ),
  },
  {
    question: "東西找不到的時候怎麼搜尋？",
    category: "物品管理",
    answer: (
      <>
        <p>
          用下方的搜尋功能輸入物品名稱，結果會顯示它所在的房間、家具與格位，點進去可以看到照片與備註。
        </p>
        <p>
          如果搜尋不到，通常是當初存進去的名稱不同（例如存成「毛巾」而不是「白毛巾」），試著用比較短的關鍵字。
        </p>
      </>
    ),
  },
  {
    question: "購物清單和物品清單有什麼不一樣？",
    category: "購物清單",
    answer: (
      <>
        <p>物品清單記錄「家裡現在有什麼、放在哪裡」；</p>
        <p>購物清單記錄「還需要買什麼」。</p>
        <p>
          常買的東西可以設成常買清單並設定最低庫存，數量變少時就會提醒你補貨。
        </p>
      </>
    ),
  },
  {
    question: "怎麼和家人一起管理？",
    category: "家庭共享",
    answer: (
      <>
        <p>在設定頁的「我的家庭」可以邀請家人：</p>
        <p>
          把邀請碼或邀請連結傳給對方，對方在「加入家庭」輸入邀請碼就會加入同一個家。
        </p>
        <p>
          加入同一個家的成員看到的是同一份物品與購物資料，任何人的修改都會同步。
        </p>
      </>
    ),
  },
  {
    question: "一定要註冊帳號嗎？資料會不見嗎？",
    category: "帳號與同步",
    answer: (
      <>
        <p>不註冊也可以先試用，資料會存在這台裝置上。</p>
        <p>
          但換手機、清除瀏覽器資料或重裝時，這些本機資料就會消失。
        </p>
        <p>
          申請帳號（Google 帳號註冊或 Email 註冊）之後，資料會同步到雲端，換裝置登入就能還原，也才能邀請家人共用。
        </p>
      </>
    ),
  },
  {
    question: "用 Email 註冊，但忘記密碼怎麼辦？",
    category: "帳號與同步",
    answer: (
      <>
        <p>
          在登入視窗點「忘記密碼？」，輸入信箱後回答當初設定的安全問題，我們就會寄出重設密碼的信件。
        </p>
        <p>
          信件裡的連結只能使用一次，而且請直接在你要重設的那台裝置上點開最新的那一封；先在別的裝置開過同一封信，連結就會顯示失效。
        </p>
      </>
    ),
  },
  {
    question: "我想刪除資料或帳號？",
    category: "其他",
    answer: (
      <>
        <p>
          設定頁提供刪除帳號的功能，並會先告知會一起刪掉哪些資料（例如你擁有的家庭）。
        </p>
        <p>刪除後無法復原，請先確認家人是否還需要這些資料。</p>
        <p>
          若只是想清空某個房間或家具，直接在該項目上刪除即可，不需要刪除整個帳號。
        </p>
      </>
    ),
  },
];

export default function HomeFaqPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category>("所有問題");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFaqs = useMemo(() => {
    const keyword = query.trim().toLowerCase();

    return faqs.filter((faq) => {
      const matchesCategory =
        category === "所有問題" || faq.category === category;
      const matchesQuery =
        !keyword || faq.question.toLowerCase().includes(keyword);

      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <main className="faq-page">
      <header className="faq-header">
        <a className="faq-brand" href="/">Eagle 🪽</a>

        <nav>
          <a href="/apps">Apps</a>
          <a href="/about">關於我</a>
          <a href="/blog">部落格</a>
          <a className="active" href="/support">支援</a>
        </nav>

        <a className="follow-button" href="mailto:valor.crown.tw@gmail.com">
          聯絡我 ♡
        </a>
      </header>

      <section className="faq-hero">
        <div className="faq-breadcrumb">Apps / Home / FAQ</div>

        <div className="faq-hero-copy">
          <p>Home 家庭神器</p>
          <h1>
            常見問題 <span>♡</span>
          </h1>
          <div className="faq-intro">
            這裡整理了大家最常問的問題，
            <br />
            希望可以幫你更快上手，
            <br />
            也讓你的家庭管理更輕鬆、更有條理 ♡
          </div>
        </div>
      </section>

      <section className="faq-content">
        <label className="faq-search">
          <span>⌕</span>
          <input
            type="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setOpenIndex(null);
            }}
            placeholder="搜尋問題，例如：新增物品、同步、會員⋯"
          />
        </label>

        <div className="faq-categories">
          {categories.map((item) => (
            <button
              type="button"
              key={item}
              className={category === item ? "active" : ""}
              onClick={() => {
                setCategory(item);
                setOpenIndex(null);
              }}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="faq-list">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <article className={`faq-item ${isOpen ? "open" : ""}`} key={faq.question}>
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <strong>{faq.question}</strong>
                  <span className="faq-chevron">{isOpen ? "⌃" : "⌄"}</span>
                </button>

                {isOpen && <div className="faq-answer">{faq.answer}</div>}
              </article>
            );
          })}
        </div>

        <section className="faq-contact">
          <div>
            <strong>還是找不到答案？</strong>
            <p>Eagle 會盡快回覆你 ♡</p>
          </div>

          <a href="mailto:valor.crown.tw@gmail.com">
            聯絡我們 →
          </a>
        </section>
      </section>
    </main>
  );
}
