import DashboardLayout from "@/components/DashboardLayout";
import "../styles/style.css";
import Page from "@/components/Page";

export default function Spo2() {
  return (
    <Page className="dashboard-bg">
      <DashboardLayout>
        <div className="dash-grid">
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
        </div>
      </DashboardLayout>
    </Page>
  );
}
