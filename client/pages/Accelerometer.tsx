import DashboardLayout from "@/components/DashboardLayout";
import "../styles/style.css";
import Page from "@/components/Page";
import { Link } from "react-router-dom";
import ZoomedIframe from "@/components/ZoomedIframe";

export default function Accelerometer() {
  return (
    <Page className="dashboard-bg">
      <DashboardLayout>
        <div
          className="dash-grid"
          style={{
            position: "relative",
            paddingTop: 80,
            gridTemplateColumns: "repeat(2, 1fr)",
            gridAutoRows: "minmax(420px, auto)",
            overflow: "hidden",
          }}
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

          <article className="card">
            <header>Total Steps</header>
            <div className="big" style={{ marginTop: 20 }}>7,890</div>
          </article>

          <article className="card">
            <header>Activity Breakdown</header>
            <div className="row" style={{ marginTop: 10 }}>
              <span>Walking</span>
              <strong>5,120 steps</strong>
            </div>
            <div className="row">
              <span>Running</span>
              <strong>1,340 steps</strong>
            </div>
            <div className="row">
              <span>Other</span>
              <strong>1,430 steps</strong>
            </div>
          </article>

          <article className="card">
            <header>Motion in X</header>
            <ZoomedIframe
              src="https://thingspeak.com/channels/3130559/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=8&type=line"
              baseWidth={320}
              baseHeight={240}
              title="Accelerometer X Motion"
            />
          </article>

          <article className="card">
            <header>Motion in Y</header>
            <ZoomedIframe
              src="https://thingspeak.com/channels/3130559/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=8&type=line"
              baseWidth={400}
              baseHeight={300}
              title="Accelerometer Y Motion"
            />
          </article>

          <article className="card">
            <header>Motion in Z</header>
            <ZoomedIframe
              src="https://thingspeak.com/channels/3130559/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=8&type=line"
              baseWidth={400}
              baseHeight={300}
              title="Accelerometer Z Motion"
            />
          </article>
        </div>
      </DashboardLayout>
    </Page>
  );
}
