"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import "./site-header.css";

const navItems = [
  { label: "首頁♡", href: "/apps" },
  { label: "關於我", href: "/apps/about" },
  { label: "Apps", href: "/apps/apps" },
  { label: "LINE貼圖", href: null },
  { label: "聯絡我", href: "/apps/contact" },
] as const;

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/apps") return pathname === "/apps" || pathname === "/apps/";
    if (href === "/apps/apps") return pathname === "/apps/apps";
    if (href === "/apps/about") return pathname === "/apps/about";
    if (href === "/apps/contact") return pathname === "/apps/contact";
    return false;
  };

  return (
    <header className="eagle-site-header">
      <div className="eagle-site-header-inner">
        <a
          className="eagle-site-brand"
          href="/apps"
          onClick={() => setMenuOpen(false)}
        >
          <span className="eagle-brand-desktop">首頁♡</span>
        </a>

        <nav className="eagle-desktop-nav" aria-label="主要導覽">
          {navItems.slice(1).map((item) =>
            item.href ? (
              <a
                key={item.label}
                href={item.href}
                className={isActive(item.href) ? "active" : undefined}
              >
                {item.label}
              </a>
            ) : (
              <span key={item.label} className="eagle-nav-placeholder">
                {item.label}
              </span>
            )
          )}
        </nav>

        <button
          type="button"
          className={`eagle-menu-button${menuOpen ? " open" : ""}`}
          aria-label={menuOpen ? "關閉選單" : "開啟選單"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <button
        type="button"
        className={`eagle-menu-backdrop${menuOpen ? " open" : ""}`}
        aria-label="關閉選單"
        onClick={() => setMenuOpen(false)}
      />

      <div className={`eagle-mobile-menu${menuOpen ? " open" : ""}`}>
        <nav aria-label="手機導覽">
          <a
            href="/apps"
            className={isActive("/apps") ? "active" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            首頁♡
          </a>

          <a
            href="/apps/about"
            className={isActive("/apps/about") ? "active" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            關於我
          </a>

          <a
            href="/apps/apps"
            className={isActive("/apps/apps") ? "active" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            Apps
          </a>

          <div className="eagle-apps-submenu open">
            <a
              href="/apps/home"
              onClick={() => setMenuOpen(false)}
            >
              家庭神器
            </a>
          </div>

          <span className="eagle-nav-placeholder">
            LINE貼圖
          </span>

          <a
            href="/apps/contact"
            className={isActive("/apps/contact") ? "active" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            聯絡我
          </a>
        </nav>
      </div>
    </header>
  );
}
