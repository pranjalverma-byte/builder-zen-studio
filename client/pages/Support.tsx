import DashboardLayout from "@/components/DashboardLayout";
import "../styles/style.css";
import Page from "@/components/Page";

export default function Support() {
  return (
    <Page className="dashboard-bg">
      <DashboardLayout>
        <div className="dash-grid" style={{ minHeight: "65svh", gridAutoRows: "1fr" }}>
          <div className="card wide" style={{ gridColumn: "1 / -1", height: "100%" }}>
            <h2 className="section-title">Support</h2>
            <div className="support">
              <p>Contact our Care Team</p>
              <ul>
                <li>Email: care@auramed.dev (Mon–Fri, 9:00 AM – 6:00 PM IST)</li>
                <li>Phone: +91 98765 43210 (Weekdays, 10:00 AM – 5:00 PM)</li>
                <li>Response time: under 24 hours</li>
              </ul>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </Page>
  );
}
