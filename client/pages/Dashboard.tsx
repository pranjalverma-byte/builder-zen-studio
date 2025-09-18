import "../styles/style.css";
import { getUser, logout } from "@/lib/auth";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const user = getUser();
  const onLogout = () => { logout(); navigate("/login"); };

  return (
    <main className="dashboard-bg">
      <section className="dash-frame">
        <aside className="dash-sidebar">
          <div className="dash-user">
            <div className="avatar" aria-hidden></div>
            <div className="user-name">{user ?? "User"}</div>
          </div>
          <nav className="dash-nav">
            <a href="#" onClick={(e)=>e.preventDefault()}>Settings</a>
            <a href="#" onClick={(e)=>e.preventDefault()}>Connectivity</a>
            <a href="#" onClick={(e)=>e.preventDefault()}>Support</a>
            <a href="#" onClick={(e)=>e.preventDefault()}>Emergency Contacts</a>
            <button onClick={onLogout} className="btn-logout">Logout</button>
          </nav>
        </aside>

        <div className="dash-grid">
          <article className="card metric">
            <header>SpO₂</header>
            <div className="big">98%</div>
            <div className="mini-graph" aria-hidden></div>
          </article>

          <article className="card metric">
            <header>Accelerometer</header>
            <div className="icon-run" aria-hidden></div>
            <div className="sub">Steps: 7,890</div>
            <div className="bars" aria-hidden></div>
          </article>

          <article className="card metric">
            <header>Temperature</header>
            <div className="big">98.6°F</div>
            <div className="trend" aria-hidden></div>
          </article>

          <article className="card wide">
            <header>Sleep Schedule</header>
            <div className="row">
              <div>10:00 PM - 6:00 AM</div>
            </div>
            <div className="sleep-timeline" aria-hidden></div>
            <div className="row"><strong>8 Hours 30 Mins</strong><span className="moon" aria-hidden>🌙</span></div>
          </article>

          <article className="card wide">
            <header>Stress & Anxiety</header>
            <div className="rings" aria-hidden></div>
            <div className="row"><strong>LOW</strong><span>Mindfulness Score: 75</span></div>
          </article>
        </div>
      </section>
    </main>
  );
}
