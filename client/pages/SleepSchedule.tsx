import DashboardLayout from "@/components/DashboardLayout";
import "../styles/style.css";
import Page from "@/components/Page";

export default function SleepSchedule() {
  return (
    <Page className="dashboard-bg">
      <DashboardLayout>
        <div className="dash-grid">
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
        </div>
      </DashboardLayout>
    </Page>
  );
}
