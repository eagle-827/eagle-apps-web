import SiteHeader from "../components/SiteHeader";
import "./home.css";

export default function HomeAppPage() {
  return (
    <main className="home-app-page">
      <SiteHeader />
      <div className="home-app-showcase">
        <img
          src="/apps/images/home/home-01.png"
          alt="家庭神器功能介紹：收據、搜尋、到期提醒與家庭共享"
        />
        <img
          src="/apps/images/home/home-02.png"
          alt="家庭神器功能介紹：購物清單"
        />
      </div>
    </main>
  );
}
