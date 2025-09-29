import DashboardLayout from "@/components/DashboardLayout";
import "../styles/style.css";
import Page from "@/components/Page";

export default function StressAnxiety() {
  return (
    <Page className="dashboard-bg">
      <DashboardLayout>
        <div className="dash-grid">
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
        </div>
      </DashboardLayout>
    </Page>
  );
}
