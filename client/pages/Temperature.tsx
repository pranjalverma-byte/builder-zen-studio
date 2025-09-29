import DashboardLayout from "@/components/DashboardLayout";
import "../styles/style.css";
import Page from "@/components/Page";
import { Link } from "react-router-dom";
import SensorChart from "@/components/SensorChart";

export default function Temperature() {
  return (
    <Page className="dashboard-bg">
      <DashboardLayout>
        <div className="dash-grid">
          <div style={{ gridColumn: "1 / -1" }}>
            <Link to="/dashboard" className="btn-outline" aria-label="Back">&lt;</Link>
          </div>

          <article className="card metric">
            <header>Temperature</header>
            <div className="big">98.6°F</div>
            <div className="trend" aria-hidden></div>
          </article>

          <article className="card wide">
            <header>24h Trend</header>
            <div className="sleep-timeline" aria-hidden></div>
            <div className="row">
              <span className="sub">High</span>
              <strong>99.2°F</strong>
            </div>
            <div className="row">
              <span className="sub">Low</span>
              <strong>97.9°F</strong>
            </div>
          </article>

          <article className="card wide">
            <header>Live Trend</header>
            <SensorChart color="#ff6a3d" />
          </article>
        </div>
      </DashboardLayout>
    </Page>
  );
}
