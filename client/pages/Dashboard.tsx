import "../styles/style.css";
import "../styles/style.css";
import DashboardLayout from "@/components/DashboardLayout";
import Page from "@/components/Page";
import ZoomedIframe from "@/components/ZoomedIframe";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [temperature, setTemperature] = useState<number | null>(null);
  const [activityDone, setActivityDone] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.thingspeak.com/channels/3130559/feeds.json?results=8",
        );
        const data = await response.json();

        if (data.feeds && data.feeds.length > 0) {
          const lastFeed = data.feeds[data.feeds.length - 1];

          // Fetch temperature from field7
          if (lastFeed.field7) {
            const celsiusTemp = parseFloat(lastFeed.field7);
            setTemperature(celsiusTemp);
          }

          // Calculate average activity done from field1 (acceleration magnitude or activity metric)
          let activitySum = 0;
          let activityCount = 0;
          data.feeds.forEach((feed: any) => {
            if (feed.field1) {
              activitySum += parseFloat(feed.field1);
              activityCount++;
            }
          });
          if (activityCount > 0) {
            const avgActivity = Math.round(activitySum / activityCount);
            setActivityDone(avgActivity);
          }
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours() % 12 || 12;
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      const ampm = now.getHours() >= 12 ? "PM" : "AM";
      setCurrentTime(`${hours}:${minutes}:${seconds} ${ampm}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Page className="dashboard-bg">
      <DashboardLayout>
        <div className="dash-grid">
          <Link
            to="/dashboard/realtime-clock"
            className="card metric"
            style={{ textDecoration: "none" }}
          >
            <header>Real Time Clock</header>
            <div className="big">{currentTime || "--:--:-- --"}</div>
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
            to="/dashboard/stress-anxiety"
            className="card"
            style={{
              textDecoration: "none",
              aspectRatio: "1 / 1",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <header>Activity</header>
            <div className="rings" aria-hidden></div>
            <div className="row">
              <strong>{activityDone ? "ACTIVE" : "LOW"}</strong>
              <span>Activity Done: {activityDone ?? "--"}</span>
            </div>
          </Link>
        </div>
      </DashboardLayout>
    </Page>
  );
}
