import DashboardLayout from "@/components/DashboardLayout";
import "../styles/style.css";
import Page from "@/components/Page";
import { Link } from "react-router-dom";
import SensorChart from "@/components/SensorChart";

export default function Accelerometer() {
  return (
    <Page className="dashboard-bg">
      <DashboardLayout>
        <div className="dash-grid">
          <div style={{ gridColumn: "1 / -1" }}>
            <Link to="/dashboard" className="btn-outline" aria-label="Back">&lt;</Link>
          </div>

          <article className="card metric">
            <header>Accelerometer</header>
            <div className="icon-run" aria-hidden></div>
            <div className="sub">Steps: 7,890</div>
            <div className="bars" aria-hidden></div>
          </article>

          <article className="card wide">
            <header>Activity Breakdown</header>
            <div className="row">
              <span>Walking</span>
              <strong>5,120 steps</strong>
            </div>
            <div className="row">
              <span>Running</span>
              <strong>1,340 steps</strong>
            </div>
            <div className="row">
              <span>Other</span>
              <strong>1,430 steps</strong>
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
