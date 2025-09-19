import { Link } from "react-router-dom";
import "../styles/style.css";
import Page from "@/components/Page";

export default function Home() {
  return (
    <Page className="login-bg">
      <section
        className="glass-card glass-card-shadow"
        style={{ textAlign: "center" }}
      >
        <h1 className="login-title text-[28px] tracking-[0.2em]">WELCOME</h1>
        <p
          style={{ marginTop: -8, marginBottom: 18, color: "rgba(0,0,0,0.65)" }}
        >
          Choose an option to continue
        </p>
        <div className="home-buttons">
          <Link to="/login" className="btn-option primary">
            Login
          </Link>
          <Link to="/register" className="btn-option secondary">
            Register
          </Link>
        </div>
      </section>
    </Page>
  );
}
