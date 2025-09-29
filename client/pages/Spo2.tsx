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
            <Link to="/dashboard" className="btn-outline" aria-label="Back" style={{ width: 52, height: 52, fontSize: 24, display: "inline-flex", alignItems: "center", justifyContent: "center", padding: 0 }}>&lt;</Link>
          </div>

          <article className="card metric">
            <header>SpO₂</header>
            <div className="big">98%</div>
            <SensorChart height={80} color="#ff6a3d" points={40} />
          </article>

          <article className="card wide">
            <header>Recent Readings</header>
            <SensorChart height={120} color="#ff6a3d" points={50} />
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
