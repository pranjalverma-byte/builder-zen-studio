import DashboardLayout from "@/components/DashboardLayout";
import "../styles/style.css";
import Page from "@/components/Page";
import { Link } from "react-router-dom";
import SensorChart from "@/components/SensorChart";

export default function StressAnxiety() {
  return (
    <Page className="dashboard-bg">
      <DashboardLayout>
        <div className="dash-grid" style={{ position: "relative" }}>
          <Link to="/dashboard" className="btn-outline" aria-label="Back" style={{ position: "absolute", top: 0, left: 0, zIndex: 1, width: 60, height: 60, fontSize: 28, display: "inline-flex", alignItems: "center", justifyContent: "center", padding: 0 }}>&lt;</Link>

          <article className="card wide">
            <header>Stress & Anxiety</header>
            <SensorChart height={100} points={50} />
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
            <SensorChart />
          </article>
        </div>
      </DashboardLayout>
    </Page>
  );
}
