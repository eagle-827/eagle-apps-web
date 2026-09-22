export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="/">
          Eagle <span>🪽</span>
        </a>

        <nav className="main-nav" aria-label="主要導覽">
          <a href="/apps">Apps</a>
          <a href="/about">關於我</a>
          <a href="/story">部落格</a>
          <a href="/support">支援</a>
        </nav>

        <a className="follow-button" href="#follow">
          追蹤我 ♡
        </a>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Apps by Eagle</p>

          <h1>
            讓生活簡單一點，
            <br />
            也可愛一點。
          </h1>

          <p className="hero-intro">
            Hi，我是 Eagle 🪽
            <br />
            一個喜歡把日常變成可愛工具的
            <br />
            獨立創作者。
          </p>

          <a className="primary-button" href="/apps">
            認識我 →
          </a>
        </div>

        <div className="hero-art" aria-label="Eagle 與綿花糖">
          <img
            className="hero-illustration"
            src="/images/eagle-hero.webp"
            alt="Eagle 與綿花糖在創作桌前"
          />
        </div>
      </section>

      <section className="app-strip" aria-label="Eagle Apps">
        {[
          ["🏠", "Home", "家庭神器"],
          ["⏰", "Get Ready", "出門神器"],
          ["🍼", "Baby", "寶寶記錄"],
          ["🍳", "Cook", "料理助手"],
          ["🐱", "Arrow Bar", "益智遊戲"],
          ["🔤", "Word Search", "文字遊戲"],
        ].map(([icon, name, description]) => (
          <div className="mini-app" key={name}>
            <div className="mini-app-icon">{icon}</div>
            <strong>{name}</strong>
            <span>{description}</span>
          </div>
        ))}
      </section>

      <footer className="home-footer">
        <span>Apps by Eagle</span>
        <span>Made with love, for a softer life.</span>
      </footer>
    </main>
  );
}
