import DashboardLayout from "@/components/DashboardLayout";
import "../styles/style.css";
import Page from "@/components/Page";
import { Link } from "react-router-dom";
import SensorChart from "@/components/SensorChart";

export default function Spo2() {
  return (
    <Page className="dashboard-bg">
      <DashboardLayout>
        <div className="dash-grid" style={{ position: "relative", paddingTop: 80 }}>
          <Link
            to="/dashboard"
            className="btn-outline"
            aria-label="Back"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 1,
              width: 60,
              height: 60,
              fontSize: 28,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 0,
            }}
          >
            &lt;
          </Link>

          <article className="card metric">
            <header>SpO₂</header>
            <div className="big">98%</div>
            <SensorChart height={80} points={40} />
          </article>

          <article className="card wide">
            <header>Recent Readings</header>
            <SensorChart height={120} points={50} />
            <div className="row">
              <span className="sub">Average</span>
              <strong>97% (24h)</strong>
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
