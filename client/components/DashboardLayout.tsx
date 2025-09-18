import { ReactNode } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { getUser, logout } from "@/lib/auth";
import "../styles/style.css";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const user = getUser() ?? "User";
  const navigate = useNavigate();
  const onLogout = () => { logout(); navigate("/login"); };

  return (
    <section className="dash-frame">
      <aside className="dash-sidebar">
        <div className="dash-user">
          <div className="avatar" aria-hidden></div>
          <div className="user-name">{user}</div>
        </div>
        <nav className="dash-nav">
          <NavLink to="/dashboard" className={({isActive})=>isActive?"dash-link active":"dash-link"}>Overview</NavLink>
          <NavLink to="/dashboard/settings" className={({isActive})=>isActive?"dash-link active":"dash-link"}>Settings</NavLink>
          <NavLink to="/dashboard/connectivity" className={({isActive})=>isActive?"dash-link active":"dash-link"}>Connectivity</NavLink>
          <NavLink to="/dashboard/support" className={({isActive})=>isActive?"dash-link active":"dash-link"}>Support</NavLink>
          <NavLink to="/dashboard/emergency-contacts" className={({isActive})=>isActive?"dash-link active":"dash-link"}>Emergency Contacts</NavLink>
          <button onClick={onLogout} className="btn-logout">Logout</button>
        </nav>
      </aside>
      {children}
    </section>
  );
}
