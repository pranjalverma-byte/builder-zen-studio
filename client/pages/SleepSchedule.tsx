import DashboardLayout from "@/components/DashboardLayout";
import "../styles/style.css";
import Page from "@/components/Page";
import { Link } from "react-router-dom";
import SensorChart from "@/components/SensorChart";

export default function SleepSchedule() {
  return (
    <Page className="dashboard-bg">
      <DashboardLayout>
        <div className="dash-grid">
          <div style={{ gridColumn: "1 / -1" }}>
            <Link to="/dashboard" className="btn-outline" aria-label="Back">&lt;</Link>
          </div>

          <article className="card wide">
            <header>Sleep Schedule</header>
            <div className="row">
              <div>10:00 PM - 6:00 AM</div>
            </div>
            <div className="sleep-timeline" aria-hidden></div>
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
            <SensorChart color="#2f6b4b" />
          </article>
        </div>
      </DashboardLayout>
    </Page>
  );
}
