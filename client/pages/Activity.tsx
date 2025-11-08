import DashboardLayout from "@/components/DashboardLayout";
import "../styles/style.css";
import Page from "@/components/Page";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ZoomedIframe from "@/components/ZoomedIframe";

export default function Activity() {
  const [activityDone, setActivityDone] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.thingspeak.com/channels/3130559/feeds.json?results=8",
          { mode: "cors" },
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        if (data.feeds && data.feeds.length > 0) {
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
        console.warn(
          "Activity data unavailable:",
          error instanceof Error ? error.message : "Unknown error",
        );
        setActivityDone(0);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Page className="dashboard-bg">
      <DashboardLayout>
        <div
          className="dash-grid"
          style={{ position: "relative", paddingTop: 80 }}
        >
          <Link
            to="/dashboard"
            className="btn-outline"
            aria-label="Back"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 1,
              width: 60,
              height: 60,
              fontSize: 28,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 0,
            }}
          >
            &lt;
          </Link>

          <article className="card wide">
            <header>Activity</header>
            <div className="rings" aria-hidden></div>
            <div className="row">
              <strong>{activityDone ? "ACTIVE" : "LOW"}</strong>
              <span>Activity Done: {activityDone ?? "--"}</span>
            </div>
          </article>

          <article className="card wide">
            <header>Gyroscope Motion in X</header>
            <ZoomedIframe
              src="https://thingspeak.com/channels/3130559/charts/4?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=8&type=line"
              baseWidth={450}
              baseHeight={260}
              title="Gyroscope X Motion"
            />
          </article>

          <article className="card wide">
            <header>Gyroscope Motion in Y</header>
            <ZoomedIframe
              src="https://thingspeak.com/channels/3130559/charts/5?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=8&type=line"
              baseWidth={450}
              baseHeight={260}
              title="Gyroscope Y Motion"
            />
          </article>

          <article className="card wide">
            <header>Gyroscope Motion in Z</header>
            <ZoomedIframe
              src="https://thingspeak.com/channels/3130559/charts/6?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=8&type=line"
              baseWidth={450}
              baseHeight={260}
              title="Gyroscope Z Motion"
            />
          </article>
        </div>
      </DashboardLayout>
    </Page>
  );
}
