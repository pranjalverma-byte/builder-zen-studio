import "../styles/style.css";
import "../styles/style.css";
import DashboardLayout from "@/components/DashboardLayout";
import Page from "@/components/Page";
import ZoomedIframe from "@/components/ZoomedIframe";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [temperature, setTemperature] = useState<number | null>(null);

  useEffect(() => {
    const fetchTemperature = async () => {
      try {
        const response = await fetch(
          "https://api.thingspeak.com/channels/3130559/feeds/last.json"
        );
        const data = await response.json();
        if (data.field7) {
          const celsiusTemp = parseFloat(data.field7);
          setTemperature(celsiusTemp);
        }
      } catch (error) {
        console.error("Failed to fetch temperature:", error);
      }
    };

    fetchTemperature();
    const interval = setInterval(fetchTemperature, 30000);
    return () => clearInterval(interval);
  }, []);

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
            <div className="big">
              {temperature !== null ? `${temperature.toFixed(1)}°C` : "--°C"}
            </div>
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
            <ZoomedIframe
              src="https://thingspeak.com/channels/3097808/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=7&type=line"
              baseWidth={450}
              baseHeight={260}
              title="ThingSpeak Live Data"
            />
            <Link
              to="/dashboard/thingspeak"
              className="btn-outline"
              style={{
                alignSelf: "flex-end",
                paddingInline: 20,
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
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
