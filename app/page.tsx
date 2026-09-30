import SiteHeader from "./components/SiteHeader";
export default function Home() {
  return (
    <main className="site-shell">
      <SiteHeader />

      <section className="hero">
        <div className="hero-copy">


          <h1>
            讓生活簡單一點，
            <br />
            也可愛一點。
          </h1>

          <p className="hero-intro">
            我是 依糕 Eagle 🪽
            <br />
            一個喜歡把日常變成可愛工具的
            <br />
            女生。
          </p>
        </div>

        <div className="hero-art" aria-label="Eagle 與綿花糖">
          <img
            className="hero-illustration"
            src="/apps/images/eagle-hero-bar04.png"
            alt="Eagle 與綿花糖在創作桌前"
          />
        </div>
      </section>

      <section className="app-strip" aria-label="Eagle Apps">
        {[
          ["/apps/images/apps/home.webp", "家庭神器"],
          ["/apps/images/apps/get-ready.webp", "出門神器"],
          ["/apps/images/apps/baby.webp", "爸媽神器"],
          ["/apps/images/apps/arrow-bar.webp", "Arrow Bar"],
          ["/apps/images/apps/word-search.webp", "Word Search"],
        ].map(([icon, name]) => (
          <div className="mini-app" key={name}>
            <img className="mini-app-icon" src={icon} alt="" />
            <strong>{name}</strong>
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
