import "../styles/style.css";
import "../styles/style.css";
import DashboardLayout from "@/components/DashboardLayout";
import Page from "@/components/Page";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <Page className="dashboard-bg">
      <DashboardLayout>
        <div className="dash-grid">
          <Link to="/dashboard/spo2" className="card metric" style={{ textDecoration: "none" }}>
            <header>SpO₂</header>
            <div className="big">98%</div>
            <div className="mini-graph" aria-hidden></div>
          </Link>

          <Link to="/dashboard/accelerometer" className="card metric" style={{ textDecoration: "none" }}>
            <header>Accelerometer</header>
            <div className="icon-run" aria-hidden></div>
            <div className="sub">Steps: 7,890</div>
            <div className="bars" aria-hidden></div>
          </Link>

          <Link to="/dashboard/temperature" className="card metric" style={{ textDecoration: "none" }}>
            <header>Temperature</header>
            <div className="big">98.6°F</div>
            <div className="trend" aria-hidden></div>
          </Link>

          <Link to="/dashboard/sleep" className="card wide" style={{ textDecoration: "none", gridColumn: "span 2" }}>
            <header>Sleep Schedule</header>
            <div className="row">
              <div>10:00 PM - 6:00 AM</div>
            </div>
            <div className="sleep-timeline" aria-hidden></div>
            <div className="row">
              <strong>8 Hours 30 Mins</strong>
              <span className="moon" aria-hidden>
                ���
              </span>
            </div>
          </Link>

          <article
            className="card"
            style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "stretch", justifyContent: "center" }}
          >
            <header>ThingSpeak Feed</header>
            <iframe
              width="100%"
              height="260"
              style={{ border: "1px solid #cccccc", borderRadius: "12px", background: "#fff" }}
              src="https://thingspeak.com/channels/3097808/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"
              title="ThingSpeak Live Data"
            />
            <Link
              to="/dashboard/thingspeak"
              className="btn-outline"
              style={{ alignSelf: "flex-end", paddingInline: 20, fontWeight: 600 }}
            >
              View Details
            </Link>
          </article>

          <Link to="/dashboard/stress-anxiety" className="card wide" style={{ textDecoration: "none" }}>
            <header>Stress & Anxiety</header>
            <div className="rings" aria-hidden></div>
            <div className="row">
              <strong>LOW</strong>
              <span>Mindfulness Score: 75</span>
            </div>
          </Link>
        </div>
      </DashboardLayout>
    </Page>
  );
}
