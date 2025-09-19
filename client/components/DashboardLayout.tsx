import { ReactNode, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { getUser, logout } from "@/lib/auth";
import "../styles/style.css";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const user = getUser() ?? "User";
  const navigate = useNavigate();
  const onLogout = () => { logout(); navigate("/login"); };

  const initial = (user?.trim?.()[0] || "U").toUpperCase();
  const colorFromName = (name: string) => {
    let h = 0;
    for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) % 360;
    return `hsl(${h} 60% 50%)`;
  };

  const [avatar, setAvatar] = useState<string | null>(null);
  useEffect(() => {
    const load = () => setAvatar(localStorage.getItem("user_avatar"));
    load();
    const handler = () => load();
    window.addEventListener("avatar:updated" as any, handler as any);
    return () => window.removeEventListener("avatar:updated" as any, handler as any);
  }, []);

  return (
    <section className="dash-frame">
      <aside className="dash-sidebar">
        <div className="dash-user">
          {avatar ? (
            <img src={avatar} alt="Profile" className="avatar-img" />
          ) : (
            <div className="avatar-default" style={{ background: colorFromName(user), color: '#fff' }} aria-hidden>{initial}</div>
          )}
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
