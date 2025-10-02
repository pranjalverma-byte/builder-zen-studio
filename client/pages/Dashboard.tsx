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
          <Link
            to="/dashboard/spo2"
            className="card metric"
            style={{ textDecoration: "none" }}
          >
            <header>SpO₂</header>
            <div className="big">98%</div>
            <div className="mini-graph" aria-hidden></div>
          </Link>

          <Link
            to="/dashboard/accelerometer"
            className="card metric"
            style={{ textDecoration: "none" }}
          >
            <header>Accelerometer</header>
            <div className="icon-run" aria-hidden></div>
            <div className="sub">Steps: 7,890</div>
            <div className="bars" aria-hidden></div>
          </Link>

          <Link
            to="/dashboard/temperature"
            className="card metric"
            style={{ textDecoration: "none" }}
          >
            <header>Temperature</header>
            <div className="big">98.6°F</div>
            <div className="trend" aria-hidden></div>
          </Link>

          <article
            className="card wide"
            style={{
              gridColumn: "1 / -1",
              display: "flex",
              flexDirection: "column",
              gap: 16,
              alignItems: "center",
            }}
          >
            <header>ThingSpeak Feed</header>
            <iframe
              width="100%"
              height="320"
              style={{
                border: "1px solid #cccccc",
                borderRadius: "12px",
                background: "#fff",
                maxWidth: "100%",
              }}
              src="https://thingspeak.com/channels/3097808/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"
              title="ThingSpeak Live Data"
            />
            <Link
              to="/dashboard/thingspeak"
              className="btn-outline"
              style={{
                alignSelf: "flex-end",
                paddingInline: 20,
                fontWeight: 600,
              }}
            >
              View Details
            </Link>
          </article>

          <Link
            to="/dashboard/sleep"
            className="card"
            style={{
              textDecoration: "none",
              aspectRatio: "1 / 1",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <header>Sleep Schedule</header>
            <div className="row">
              <div>10:00 PM - 6:00 AM</div>
            </div>
            <div className="sleep-timeline" aria-hidden></div>
            <div className="row">
              <strong>8 Hours 30 Mins</strong>
              <span className="moon" aria-hidden>
                🌙
              </span>
            </div>
          </Link>

          <Link
            to="/dashboard/stress-anxiety"
            className="card"
            style={{
              textDecoration: "none",
              aspectRatio: "1 / 1",
              display: "flex",
              flexDirection: "column",
            }}
          >
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
