import DashboardLayout from "@/components/DashboardLayout";
import "../styles/style.css";
import { useState } from "react";
import { logout, getUser } from "@/lib/auth";
import { useNavigate } from "react-router-dom";
import Page from "@/components/Page";

export default function Settings() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(localStorage.getItem("user_email") || "");
  const [msg, setMsg] = useState("");
  const [avatar, setAvatar] = useState<string | null>(
    localStorage.getItem("user_avatar"),
  );
  const user = getUser() ?? "User";
  const initial = (user?.trim?.()[0] || "U").toUpperCase();
  const colorFromName = (name: string) => {
    let h = 0;
    for (let i = 0; i < name.length; i++)
      h = (h * 31 + name.charCodeAt(i)) % 360;
    return `hsl(${h} 60% 50%)`;
  };

  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const data = String(reader.result);
      localStorage.setItem("user_avatar", data);
      setAvatar(data);
      setMsg("Profile picture updated.");
      window.dispatchEvent(new Event("avatar:updated"));
    };
    reader.readAsDataURL(file);
  };

  const changePassword = (e: React.FormEvent) => {
    e.preventDefault();
    setMsg("Password updated.");
  };

  const saveEmail = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("user_email", email);
    setMsg("Email saved.");
  };

  const onLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Page className="dashboard-bg">
      <DashboardLayout>
        <div className="card settings-container">
          <h2 className="section-title">Settings</h2>
          {msg && <p className="note success">{msg}</p>}
          <div className="settings-grid">
            <div className="form-card">
              <h3>Profile Picture</h3>
              {avatar ? (
                <img src={avatar} alt="Profile" className="avatar-lg" />
              ) : (
                <div
                  className="avatar-default-lg"
                  style={{
                    background: colorFromName(user),
                    color: "#fff",
                    display: "grid",
                    placeItems: "center",
                    fontSize: 40,
                    fontWeight: 800,
                  }}
                  aria-hidden
                >
                  {initial}
                </div>
              )}
              <input
                id="avatar-file"
                className="file-hidden"
                type="file"
                accept="image/*"
                onChange={onFile}
              />
              <label
                htmlFor="avatar-file"
                className="btn-outline"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Browse
              </label>
              {avatar && (
                <button
                  type="button"
                  className="btn-outline"
                  onClick={() => {
                    localStorage.removeItem("user_avatar");
                    setAvatar(null);
                    setMsg("Profile picture removed.");
                    window.dispatchEvent(new Event("avatar:updated"));
                  }}
                >
                  Remove Photo
                </button>
              )}
            </div>

            <form onSubmit={saveEmail} className="form-card">
              <h3>Account Email</h3>
              <input
                className="input"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="btn-login" type="submit">
                Save Email
              </button>
            </form>

            <form onSubmit={changePassword} className="form-card">
              <h3>Change Password</h3>
              <input
                className="input"
                type="password"
                placeholder="Current Password"
                required
              />
              <input
                className="input"
                type="password"
                placeholder="New Password (min 4)"
                minLength={4}
                required
              />
              <button className="btn-login" type="submit">
                Update Password
              </button>
            </form>
          </div>
        </div>
      </DashboardLayout>
    </Page>
  );
}
