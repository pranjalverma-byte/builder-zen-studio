import { FormEvent, useRef, useState } from "react";
import "../styles/style.css";
import { login } from "@/lib/auth";
import { Link, useNavigate } from "react-router-dom";
import Page from "@/components/Page";

export default function Login() {
  const navigate = useNavigate();
  const uRef = useRef<HTMLInputElement>(null);
  const pRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const u = uRef.current?.value || "";
    const p = pRef.current?.value || "";
    if (login(u, p)) {
      navigate("/dashboard");
    } else {
      setError(
        "Invalid credentials. You can register a new account on the Register page.",
      );
    }
  };

  return (
    <Page className="login-bg">
      <section className="glass-card glass-card-shadow">
        <h1 className="login-title text-[28px] tracking-[0.2em]">LOGIN</h1>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="field">
            <label htmlFor="username" className="sr-only">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Username"
              className="input"
              autoComplete="username"
              required
              ref={uRef}
            />
            <span aria-hidden className="accent" />
          </div>

          <div className="field">
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              className="input"
              autoComplete="current-password"
              required
              ref={pRef}
            />
            <span aria-hidden className="accent" />
          </div>

          <div className="options">
            <label className="inline-flex items-center select-none">
              <input type="checkbox" className="checkbox" />
              Remember me
            </label>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Forgot password?
            </a>
          </div>

          {error && (
            <p style={{ color: "#b91c1c", fontWeight: 600 }}>{error}</p>
          )}
          <button className="btn-login" type="submit">
            Login
          </button>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 10,
              justifyItems: "center",
              marginTop: 10,
            }}
          >
            <Link to="/" className="pill-link">
              Home
            </Link>
            <Link to="/register" className="pill-link">
              Register
            </Link>
          </div>
        </form>
      </section>
    </Page>
  );
}
