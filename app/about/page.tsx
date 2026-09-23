export default function AboutPage() {
  return (
    <main className="about-page">
      <header className="site-header about-header">
        <a className="about-brand" href="/">
          Eagle ♡
        </a>

        <nav className="main-nav" aria-label="主要導覽">
          <a href="/apps">Apps</a>
          <a className="active" href="/about">關於我</a>
          <a href="/story">創作日常</a>
          <a href="/support">支援</a>
        </nav>

        <a className="follow-button" href="/#follow">
          追蹤我 ♡
        </a>
      </header>

      <section className="about-intro">
        <div className="about-copy">
          <h1>
            <span className="about-hi">Hi，</span><span className="about-title-zh">我是</span>{" "}
            <span className="about-eagle">eagle</span>
          </h1>

          <p className="about-identity">
            香港移民台灣的女生
          </p>

          <div className="about-story-text">
            <p>
              我跟老公在台灣相識。
              <br />
              他也是香港人，在竹科工程師。
            </p>

            <p>
              我懷孕準備待產包時，
              <br />
              老公經常忘記東西放哪裡
              <br />
              找不到就索性再買一次。
            </p>

            <div className="about-photo-group">
              <div className="about-photo-mobile">
                <img
                  src="/images/about/eagle.webp"
                  alt="Eagle"
                />
              </div>

              <div className="about-signature">
                Illustration<br />
                Apps<br />
                A Kinder Life<br />
                — Eagle ♡
              </div>
            </div>

            <p>氣到我拿起 MacBook 開始做 App。</p>

            <p>
              於是就有了「家庭神器」，
              <br />
              一個可以記錄家裡一切的 App。
            </p>

            <p>
              從一開始用 AI 開發，
              <br />
              到後來變成直接在終端機裡寫 code⋯⋯
            </p>

            <p>
              我期待，我能用 App
              <br />
              讓生活一點一點變得更美好♡
            </p>
          </div>
        </div>

      </section>

      <section className="about-life">
        <h2>我的生活</h2>

        <div className="life-grid">
          <div className="life-item">
            <img className="life-icon-image" src="/images/about/life/baby.webp" alt="" />
            <strong>照顧寶寶</strong>
          </div>

          <div className="life-item">
            <img className="life-icon-image" src="/images/about/life/dog.webp" alt="" />
            <strong>陪綿花糖</strong>
          </div>

          <div className="life-item">
            <img className="life-icon-image" src="/images/about/life/cooking.webp" alt="" />
            <strong>煮美食</strong>
          </div>

          <div className="life-item">
            <img className="life-icon-image" src="/images/about/life/love.webp" alt="" />
            <strong>和老公相愛</strong>
          </div>
        </div>
      </section>

      <section className="about-wish">
        <img
          className="about-wish-image"
          src="/images/about/about-bottom.webp"
          alt=""
        />
        <img
          className="about-wish-image"
          src="/images/about/about-bottom.webp"
          alt=""
        />
        <div className="about-wish-copy">
          <span className="quote-mark">“</span>
          <p>
            期待生活能
            <br />
            愈來愈美好
          </p>
        </div>

        <div className="about-wish-art" aria-hidden="true" />
      </section>

      <footer className="home-footer about-footer">
        <span>Apps by Eagle</span>
        <span>Made with love, for a softer life.</span>
      </footer>
    </main>
  );
}
