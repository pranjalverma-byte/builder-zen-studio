import DashboardLayout from "@/components/DashboardLayout";
import "../styles/style.css";
import Page from "@/components/Page";

export default function Connectivity() {
  return (
    <Page className="dashboard-bg">
      <DashboardLayout>
        <div className="dash-grid">
          <div
            className="card wide"
            style={{
              gridColumn: "1 / -1",
              display: "grid",
              placeItems: "center",
              padding: "40px",
            }}
          >
            <h2 className="section-title" style={{ marginBottom: 10 }}>
              Searching for devices…
            </h2>
            <div className="pulse-wrap">
              <span className="pulse" />
            </div>
            <p className="muted" style={{ marginTop: 12 }}>
              Make sure Bluetooth is enabled and devices are nearby.
            </p>
          </div>
        </div>
      </DashboardLayout>
    </Page>
  );
}
