"use client";
import SiteHeader from "../../components/SiteHeader";

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
  id: number;
  question: string;
  category: Exclude<Category, "所有問題">;
  searchText: string;
  answer: React.ReactNode;
};

const categories: { name: Category; icon: string }[] = [
  { name: "所有問題", icon: "/apps/images/home/faq/icon-01.webp" },
  { name: "開始使用", icon: "/apps/images/home/faq/icon-02.webp" },
  { name: "物品管理", icon: "/apps/images/home/faq/icon-03.webp" },
  { name: "購物清單", icon: "/apps/images/home/faq/icon-04.webp" },
  { name: "家庭共享", icon: "/apps/images/home/faq/icon-05.webp" },
  { name: "帳號與同步", icon: "/apps/images/home/faq/icon-06.webp" },
  { name: "其他", icon: "/apps/images/home/faq/icon-07.webp" },
];

const faqs: FaqItem[] = [
  {
    id: 1,
    question: "家庭神器是什麼？",
    category: "開始使用",
    searchText:
      "家庭神器 香港 台灣 Eagle 丈夫 家庭管理 家裡有什麼 東西在哪裡 到期 購物 整理房子",
    answer: (
      <>
        <p>
          「家庭神器」是由一位從香港移民到台灣的女生 Eagle，和丈夫一起開發的家庭管理 App。
        </p>
        <p>
          它可以幫你記住「家裡有什麼、東西在哪裡」，提醒你「什麼快到期、還有什麼要買、什麼時候要整理房子」。
        </p>
      </>
    ),
  },
  {
    id: 2,
    question: "我第一次使用，該從哪裡開始？",
    category: "開始使用",
    searchText: "第一次使用 新手教學 房間 主人房 家具 吊櫃 格位 設定頁",
    answer: (
      <>
        <p>跟著新手教學走一次最快。</p>
        <p>
          先新增一個房間（例如「主人房」），在房間裡新增家具（例如「吊櫃」）。家具會分成一格一格的格位，最後把物品收進其中一格。
        </p>
        <p>
          教學會在你還沒建立完整資料時自動出現。如果不小心關掉了，可以到設定頁重新開啟教學。
        </p>
      </>
    ),
  },
  {
    id: 3,
    question: "為何一定要先有房間和家具才能加物品？",
    category: "物品管理",
    searchText: "房間 家具 物品 位置 格位 主人房 吊櫃 右門第一層 購物清單",
    answer: (
      <>
        <p>
          家庭神器是用「位置」來記住東西放在哪裡，所以每一件物品都要屬於某個家具的某一格。
        </p>
        <p>這樣之後搜尋時，才能直接告訴你：</p>
        <p>「主人房 → 吊櫃 → 右門第一層」</p>
        <p>
          <strong>如果只是想快速記下要買的東西，用購物清單就好，不需要先建立位置。</strong>
        </p>
      </>
    ),
  },
  {
    id: 4,
    question: "可以一次新增多件物品嗎？",
    category: "物品管理",
    searchText:
      "一次新增 多件物品 逗號 白毛巾 黑毛巾 洗衣精 多件物品模式 手動輸入 語音輸入 數量",
    answer: (
      <>
        <p>可以 ♡</p>
        <p>只要在物品名稱欄位用逗號分隔，就會自動變成多筆。</p>
        <p>例如輸入：</p>
        <p>「白毛巾, 黑毛巾, 洗衣精兩瓶」</p>
        <p>
          系統會辨識成三件物品，按下「新增 3 個物品」就可以一次存入。
        </p>
        <p>
          也可以使用「多件物品模式」裡的手動輸入框，一行一個貼上整份清單；或使用語音輸入，每說完一件停一下。
        </p>
        <p>
          數量也可以直接說或直接輸入，例如「洗衣精兩瓶」會自動記成數量 2。
        </p>
      </>
    ),
  },
  {
    id: 5,
    question: "東西找不到的時候怎麼搜尋？",
    category: "物品管理",
    searchText: "搜尋 找不到 物品名稱 房間 家具 格位 照片 備註 毛巾 白毛巾 關鍵字",
    answer: (
      <>
        <p>
          使用下方的搜尋功能輸入物品名稱，結果會顯示它所在的房間、家具與格位，點進去還可以查看照片與備註。
        </p>
        <p>
          如果搜尋不到，可能是當初存入的名稱不同。例如存成「毛巾」而不是「白毛巾」，可以試著改用比較短的關鍵字搜尋。
        </p>
      </>
    ),
  },
  {
    id: 6,
    question: "購物清單和物品清單，有什麼不一樣？",
    category: "購物清單",
    searchText: "購物清單 物品清單 常買清單 最低庫存 補貨",
    answer: (
      <>
        <p>物品清單記錄的是：</p>
        <p>「家裡現在有什麼、放在哪裡」</p>
        <p>購物清單記錄的是：</p>
        <p>「還需要買什麼」</p>
        <p>
          常買的東西還可以設成常買清單並設定最低庫存，數量變少時就會提醒你補貨。
        </p>
      </>
    ),
  },
  {
    id: 7,
    question: "怎麼和家人一起管理？",
    category: "家庭共享",
    searchText: "家人 家庭共享 我的家庭 邀請 邀請碼 邀請連結 加入家庭 同步",
    answer: (
      <>
        <p>在設定頁的「我的家庭」可以邀請家人。</p>
        <p>
          把邀請碼或邀請連結傳給對方，對方在「加入家庭」輸入邀請碼，就會加入同一個家。
        </p>
        <p>
          加入同一個家的成員看到的是同一份物品與購物資料，任何人的修改都會同步。
        </p>
      </>
    ),
  },
  {
    id: 8,
    question: "我想把物品記錄為屬於某位家人，但那位家人不使用 App，可以嗎？",
    category: "家庭共享",
    searchText: "家人 成員 寶寶 不使用 App 不邀請 物品 所有者 玩具 衣服 設定頁",
    answer: (
      <>
        <p>可以 ♡</p>
        <p>
          你可以在「設定頁」新增一位家庭成員，但不需要邀請他使用 App。
        </p>
        <p>
          例如，你可以新增「寶寶」這位成員，之後把玩具、衣服或其他物品記錄為寶寶所有；即使寶寶本人不使用 App，也完全沒問題。
        </p>
      </>
    ),
  },
  {
    id: 9,
    question: "一定要註冊帳號嗎？資料會不見嗎？",
    category: "帳號與同步",
    searchText:
      "註冊 帳號 資料 本機 換手機 清除瀏覽器 重新安裝 Google Email 雲端 同步 邀請家人",
    answer: (
      <>
        <p>不註冊也可以先試用，資料會存在這台裝置上。</p>
        <p>
          但如果換手機、清除瀏覽器資料或重新安裝，本機資料就會消失。
        </p>
        <p>
          申請帳號後，可以使用 Google 帳號或 Email 註冊。資料會同步到雲端，換裝置登入就能還原，也才能邀請家人共同使用。
        </p>
      </>
    ),
  },
  {
    id: 10,
    question: "用 Email 註冊，但忘記密碼怎麼辦？",
    category: "帳號與同步",
    searchText: "Email 忘記密碼 重設密碼 信箱 安全問題 信件 連結 失效",
    answer: (
      <>
        <p>
          在登入視窗點「忘記密碼？」，輸入信箱後回答當初設定的安全問題，我們就會寄出重設密碼的信件。
        </p>
        <p>
          信件裡的連結只能使用一次，請直接在你要重設密碼的裝置上開啟最新的一封信。
        </p>
        <p>
          <strong>
            如果已經在其他裝置開過同一封信，連結就可能顯示失效。
          </strong>
        </p>
      </>
    ),
  },
  {
    id: 11,
    question: "我想刪除資料或帳號？",
    category: "其他",
    searchText: "刪除 資料 帳號 家庭 房間 家具 無法復原 設定頁",
    answer: (
      <>
        <p>
          設定頁提供刪除帳號功能，並會先告知哪些資料會一起刪除，例如你所擁有的家庭。
        </p>
        <p>刪除後無法復原，請先確認家人是否還需要這些資料。</p>
        <p>
          如果只是想清空某個房間或家具，直接刪除該項目即可，不需要刪除整個帳號。
        </p>
      </>
    ),
  },
  {
    id: 12,
    question: "還是找不到答案？",
    category: "其他",
    searchText: "找不到答案 聯絡 Email 信箱 Eagle valor crown",
    answer: (
      <>
        <p>
          寄信到{" "}
          <a href="mailto:valor.crown.tw@gmail.com">
            valor.crown.tw@gmail.com
          </a>
        </p>
        <p>Eagle 會盡快回覆你 ♡</p>
      </>
    ),
  },
];

export default function HomeFaqPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category>("所有問題");
  const [openId, setOpenId] = useState<number | null>(null);

  const filteredFaqs = useMemo(() => {
    const keyword = query.trim().toLowerCase();

    return faqs.filter((faq) => {
      const matchesCategory =
        category === "所有問題" || faq.category === category;

      const matchesQuery =
        !keyword ||
        faq.question.toLowerCase().includes(keyword) ||
        faq.searchText.toLowerCase().includes(keyword);

      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <main className="faq-page">
      <SiteHeader />

      <section className="faq-hero">
        <div className="faq-breadcrumb">Apps / Home / FAQ</div>

        <div className="faq-hero-layout">
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

          <div className="faq-hero-art">
            <img
              src="/apps/images/home/faq/faq-hero.webp"
              alt="比熊閱讀家庭神器 FAQ"
            />
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
              setOpenId(null);
            }}
            placeholder="搜尋問題，例如：新增物品、同步、會員⋯"
          />
        </label>

        <div className="faq-categories">
          {categories.map((item) => (
            <button
              type="button"
              key={item.name}
              className={category === item.name ? "active" : ""}
              onClick={() => {
                setCategory(item.name);
                setOpenId(null);
              }}
            >
              <img src={item.icon} alt="" aria-hidden="true" />
              <span>{item.name}</span>
            </button>
          ))}
        </div>

        <div className="faq-list">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            const number = String(faq.id).padStart(2, "0");

            return (
              <article
                className={`faq-item ${isOpen ? "open" : ""}`}
                key={faq.id}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-number">{number}</span>

                  <span className="faq-question-art">
                    <img
                      src={`/apps/images/home/faq/q-${number}.webp`}
                      alt=""
                      aria-hidden="true"
                    />
                  </span>

                  <strong>{faq.question}</strong>

                  <span className="faq-chevron">
                    {isOpen ? "⌃" : "⌄"}
                  </span>
                </button>

                {isOpen && (
                  <div className="faq-answer">
                    {faq.answer}
                  </div>
                )}
              </article>
            );
          })}
        </div>

        <section className="faq-contact">
          <img
            className="faq-contact-dog"
            src="/apps/images/home/faq/footer-dog.webp"
            alt=""
            aria-hidden="true"
          />

          <div className="faq-contact-copy">
            <div className="faq-contact-desktop">
              <strong>還是找不到答案？</strong>
              <p>Eagle 會盡快回覆你 ♡</p>
            </div>

            <div className="faq-contact-mobile">
              <strong>找不到想問的問題</strong>
              <p>歡迎聯絡Eagle♡</p>
            </div>
          </div>

          <a
            className="faq-contact-button"
            href="mailto:valor.crown.tw@gmail.com"
          >
            <span className="faq-contact-button-desktop">聯絡我們 →</span>
            <span className="faq-contact-button-mobile">聯絡Eagle</span>
          </a>

          <img
            className="faq-contact-plant"
            src="/apps/images/home/faq/footer-plant.webp"
            alt=""
            aria-hidden="true"
          />
        </section>
      </section>
    </main>
  );
}