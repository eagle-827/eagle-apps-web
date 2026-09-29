import "./site-footer.css";

export default function SiteFooter() {
  return (
    <footer className="eagle-site-footer">
      <div className="eagle-site-footer-inner">
        <span>© 2026 Valor Crown</span>

        <nav aria-label="法律資訊">
          <a href="/apps/privacy">隱私權政策</a>
          <span aria-hidden="true">·</span>
          <a href="/apps/terms">服務條款</a>
        </nav>
      </div>
    </footer>
  );
}
