import "../styles/style.css";
import "../styles/style.css";
import DashboardLayout from "@/components/DashboardLayout";

export default function Dashboard() {
  return (
    <main className="dashboard-bg">
      <DashboardLayout>
        <div className="dash-grid">
          <article className="card metric">
            <header>SpO₂</header>
            <div className="big">98%</div>
            <div className="mini-graph" aria-hidden></div>
          </article>

          <article className="card metric">
            <header>Accelerometer</header>
            <div className="icon-run" aria-hidden></div>
            <div className="sub">Steps: 7,890</div>
            <div className="bars" aria-hidden></div>
          </article>

          <article className="card metric">
            <header>Temperature</header>
            <div className="big">98.6°F</div>
            <div className="trend" aria-hidden></div>
          </article>

          <article className="card wide">
            <header>Sleep Schedule</header>
            <div className="row">
              <div>10:00 PM - 6:00 AM</div>
            </div>
            <div className="sleep-timeline" aria-hidden></div>
            <div className="row"><strong>8 Hours 30 Mins</strong><span className="moon" aria-hidden>🌙</span></div>
          </article>

          <article className="card wide">
            <header>Stress & Anxiety</header>
            <div className="rings" aria-hidden></div>
            <div className="row"><strong>LOW</strong><span>Mindfulness Score: 75</span></div>
          </article>
        </div>
      </DashboardLayout>
    </main>
  );
}
