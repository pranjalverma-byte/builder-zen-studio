import DashboardLayout from "@/components/DashboardLayout";
import "../styles/style.css";
import Page from "@/components/Page";
import { Link } from "react-router-dom";
import SensorChart from "@/components/SensorChart";

export default function SleepSchedule() {
  return (
    <Page className="dashboard-bg">
      <DashboardLayout>
        <div className="dash-grid" style={{ position: "relative" }}>
          <Link to="/dashboard" className="btn-outline" aria-label="Back" style={{ position: "absolute", top: 0, left: 0, zIndex: 1, width: 60, height: 60, fontSize: 28, display: "inline-flex", alignItems: "center", justifyContent: "center", padding: 0 }}>&lt;</Link>

          <article className="card wide">
            <header>Sleep Schedule</header>
            <div className="row">
              <div>10:00 PM - 6:00 AM</div>
            </div>
            <SensorChart height={100} points={50} />
            <div className="row">
              <strong>8 Hours 30 Mins</strong>
              <span className="moon" aria-hidden>🌙</span>
            </div>
          </article>

          <article className="card">
            <header>Quality</header>
            <div className="row">
              <span className="sub">Efficiency</span>
              <strong>88%</strong>
            </div>
            <div className="row">
              <span className="sub">Deep Sleep</span>
              <strong>1h 40m</strong>
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
