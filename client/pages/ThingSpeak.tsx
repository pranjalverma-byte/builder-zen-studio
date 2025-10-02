import DashboardLayout from "@/components/DashboardLayout";
import "../styles/style.css";
import Page from "@/components/Page";
import { Link } from "react-router-dom";

export default function ThingSpeak() {
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
              width: 64,
              height: 64,
              fontSize: 28,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 0,
            }}
          >
            &lt;
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
            <p className="muted">
              Real-time chart rendered directly from the ThingSpeak channel.
              Data updates automatically every few seconds.
            </p>
            <iframe
              width="100%"
              height="420"
              style={{
                border: "1px solid #cccccc",
                borderRadius: 12,
                background: "#fff",
                maxWidth: "100%",
              }}
              src="https://thingspeak.com/channels/3097808/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"
              title="ThingSpeak Live Data"
            />
          </article>
        </div>
      </DashboardLayout>
    </Page>
  );
}
