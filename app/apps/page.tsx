const apps = [
  {
    name: "Home",
    zh: "家庭神器",
    description: "記錄收納、找失物、整理、提醒、家庭共享。",
    href: "/home",
    className: "home",
  },
  {
    name: "Get Ready",
    zh: "出門神器",
    description: "不再遲到．準時出門",
    href: "https://get-ready.eagleying.com",
    className: "get-ready",
  },
  {
    name: "Baby",
    zh: "爸媽神器",
    description: "成長記錄、疫苗提醒，新手父母教學，陪寶寶每個重要時刻。",
    href: "/baby",
    className: "baby",
  },
  {
    name: "Arrow Bar",
    zh: "",
    description: "老公開發的小遊戲：\n簡單上手、短關好玩",
    href: "/arrowbar",
    className: "arrow-bar",
  },
  {
    name: "Word Search",
    zh: "",
    description: "老公開發的小遊戲：\n世上最難的尋字遊戲！",
    href: "/word_search",
    className: "word-search",
  },
];

export default function AppsPage() {
  return (
    <main className="apps-page">
      <header className="about-header apps-header">
        <a className="about-brand" href="/">
          Eagle 🪽
        </a>

        <nav>
          <a className="active" href="/apps">Apps</a>
          <a href="/about">關於我</a>
          <a href="/blog">部落格</a>
          <a href="/support">支援</a>
        </nav>

        <a className="follow-button" href="#">
          追蹤我 ♡
        </a>
      </header>

      <section className="apps-intro">
        <h1>
          我的 Apps <span>♡</span>
        </h1>
        <p>
          不同的生活場景，同一份用心
          <br />
          都是從「要是有個 App 就好了」開始。
        </p>
      </section>

      <section className="apps-grid">
        {apps.map((app) => (
          <article className={`apps-card apps-card-${app.className}`} key={app.name}>
            <div className="apps-card-top">
              <div className="apps-card-art" aria-hidden="true" />

              <div className="apps-card-title">
                <h2>{app.name}</h2>
                <strong>{app.zh}</strong>
              </div>
            </div>

            <p>{app.description}</p>

            <a href={app.href}>
              了解更多 →
            </a>
          </article>
        ))}
      </section>

      <footer className="home-footer apps-footer">
        <span>Apps by Eagle</span>
        <span>Made with love, for a softer life.</span>
      </footer>
    </main>
  );
}
