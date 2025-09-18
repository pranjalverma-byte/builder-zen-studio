import DashboardLayout from "@/components/DashboardLayout";
import "../styles/style.css";
import { useState } from "react";
import { logout } from "@/lib/auth";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(localStorage.getItem("user_email") || "");
  const [msg, setMsg] = useState("");

  const changePassword = (e: React.FormEvent) => {
    e.preventDefault();
    setMsg("Password updated.");
  };

  const saveEmail = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("user_email", email);
    setMsg("Email saved.");
  };

  const onLogout = () => { logout(); navigate("/login"); };

  return (
    <main className="dashboard-bg">
      <DashboardLayout>
        <div className="card wide" style={{gridColumn:'span 3'}}>
          <h2 className="section-title">Settings</h2>
          {msg && <p className="note success">{msg}</p>}
          <div className="settings-grid">
            <form onSubmit={saveEmail} className="form-card">
              <h3>Account Email</h3>
              <input className="input" type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
              <button className="btn-login" type="submit">Save Email</button>
            </form>

            <form onSubmit={changePassword} className="form-card">
              <h3>Change Password</h3>
              <input className="input" type="password" placeholder="Current Password" required />
              <input className="input" type="password" placeholder="New Password (min 4)" minLength={4} required />
              <button className="btn-login" type="submit">Update Password</button>
            </form>

            <div className="form-card">
              <h3>Logout</h3>
              <p className="muted">Sign out of this device.</p>
              <button className="btn-login" onClick={onLogout} type="button">Logout</button>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </main>
  );
}
