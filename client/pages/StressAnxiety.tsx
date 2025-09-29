import DashboardLayout from "@/components/DashboardLayout";
import "../styles/style.css";
import Page from "@/components/Page";
import { Link } from "react-router-dom";
import SensorChart from "@/components/SensorChart";

export default function StressAnxiety() {
  return (
    <Page className="dashboard-bg">
      <DashboardLayout>
        <div className="dash-grid">
          <div style={{ gridColumn: "1 / -1" }}>
            <Link to="/dashboard" className="btn-outline" aria-label="Back" style={{ width: 52, height: 52, fontSize: 24, display: "inline-flex", alignItems: "center", justifyContent: "center", padding: 0 }}>&lt;</Link>
          </div>

          <article className="card wide">
            <header>Stress & Anxiety</header>
            <SensorChart height={100} color="#2f6b4b" points={50} />
            <div className="row">
              <strong>LOW</strong>
              <span>Mindfulness Score: 75</span>
            </div>
          </article>

          <article className="card">
            <header>Mindfulness</header>
            <div className="row">
              <span className="sub">Today</span>
              <strong>12 min</strong>
            </div>
            <div className="row">
              <span className="sub">Streak</span>
              <strong>4 days</strong>
            </div>
          </article>

          <article className="card wide">
            <header>Live Trend</header>
            <SensorChart color="#2f6b4b" />
          </article>
        </div>
      </DashboardLayout>
    </Page>
  );
}
