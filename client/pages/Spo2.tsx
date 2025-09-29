import DashboardLayout from "@/components/DashboardLayout";
import "../styles/style.css";
import Page from "@/components/Page";
import { Link } from "react-router-dom";
import SensorChart from "@/components/SensorChart";

export default function Spo2() {
  return (
    <Page className="dashboard-bg">
      <DashboardLayout>
        <div className="dash-grid">
          <div style={{ gridColumn: "1 / -1" }}>
            <Link to="/dashboard" className="btn-outline">← Back to Dashboard</Link>
          </div>

          <article className="card metric">
            <header>SpO₂</header>
            <div className="big">98%</div>
            <div className="mini-graph" aria-hidden></div>
          </article>

          <article className="card wide">
            <header>Recent Readings</header>
            <div className="bars" aria-hidden></div>
            <div className="row">
              <span className="sub">Average</span>
              <strong>97% (24h)</strong>
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
