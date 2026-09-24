const apps = [
  {
    name: "Home",
    zh: "家庭神器",
    description: "記錄收納、找失物、整理、提醒、家庭共享。",
    mobileDescription: "記錄收納、找失物、整理、提醒、家庭共享。",
    href: "/home",
    className: "home",
    image: "/images/apps/cards/home-v2.webp",
    mobileButton: "了解更多 →",
  },
  {
    name: "Get Ready",
    zh: "出門神器",
    description: "不再遲到．準時出門",
    mobileDescription: "不再遲到．準時出門",
    href: "https://get-ready.eagleying.com",
    className: "get-ready",
    image: "/images/apps/cards/get-ready-v2.webp",
    mobileButton: "即將推出",
  },
  {
    name: "Baby",
    zh: "爸媽神器",
    description:
      "成長記錄、疫苗提醒，新手父母教學\n陪寶寶每個重要時刻。",
    mobileDescription:
      "成長記錄、疫苗提醒\n新手父母教學\n陪寶寶每個重要時刻。",
    href: "/baby",
    className: "baby",
    image: "/images/apps/cards/baby-v2.webp",
    mobileButton: "即將推出",
  },
  {
    name: "Arrow Bar",
    zh: "",
    description: "老公開發的小遊戲： 簡單上手、短關好玩",
    mobileDescription: "老公開發的小遊戲：\n簡單上手、短關好玩",
    href: "/arrowbar",
    className: "arrow-bar",
    image: "/images/apps/cards/arrow-bar-v2.webp",
    mobileButton: "了解更多 →",
  },
  {
    name: "Word Search",
    zh: "",
    description: "老公開發的小遊戲： 世上最難的尋字遊戲！",
    mobileDescription: "老公開發的小遊戲：\n世上最難的尋字遊戲！",
    href: "/word_search",
    className: "word-search",
    image: "/images/apps/cards/word-search-v2.webp",
    mobileButton: "了解更多 →",
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
          <a className="active" href="/apps">
            Apps
          </a>
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
      </section>

      <section className="apps-grid">
        {apps.map((app) => (
          <article
            className={`apps-card apps-card-${app.className}`}
            key={app.name}
          >
            <div className="apps-card-top">
              <div className="apps-card-title">
                <h2>{app.name}</h2>
                {app.zh && <strong>{app.zh}</strong>}
              </div>

              <img
                className="apps-card-art"
                src={app.image}
                alt=""
              />
            </div>

            <p className="apps-description apps-description-desktop">
              {app.description}
            </p>

            <p className="apps-description apps-description-mobile">
              {app.mobileDescription}
            </p>

            <a href={app.href}>
              <span className="apps-button-desktop">
                了解更多 →
              </span>
              <span className="apps-button-mobile">
                {app.mobileButton}
              </span>
            </a>
          </article>
        ))}
      </section>

      <footer className="home-footer">
        <span>Apps by Eagle</span>
        <span>Made with love, for a softer life.</span>
      </footer>
    </main>
  );
}