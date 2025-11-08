import DashboardLayout from "@/components/DashboardLayout";
import "../styles/style.css";
import Page from "@/components/Page";
import { Link } from "react-router-dom";
import ZoomedIframe from "@/components/ZoomedIframe";

export default function Temperature() {
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
            <header>Temperature Chart 1</header>
            <ZoomedIframe
              src="https://thingspeak.com/channels/3145110/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"
              baseWidth={450}
              baseHeight={260}
              title="Temperature Chart 1"
            />
          </article>

          <article className="card wide">
            <header>Temperature Chart 2</header>
            <ZoomedIframe
              src="https://thingspeak.com/channels/3145110/charts/4?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"
              baseWidth={450}
              baseHeight={260}
              title="Temperature Chart 2"
            />
          </article>
        </div>
      </DashboardLayout>
    </Page>
  );
}
