import DashboardLayout from "@/components/DashboardLayout";
import "../styles/style.css";
import Page from "@/components/Page";
import { Link } from "react-router-dom";
import ZoomedIframe from "@/components/ZoomedIframe";

export default function StressAnxiety() {
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
