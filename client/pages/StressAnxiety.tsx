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
            <Link to="/dashboard" className="btn-outline">← Back to Dashboard</Link>
          </div>

          <article className="card wide">
            <header>Stress & Anxiety</header>
            <div className="rings" aria-hidden></div>
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
