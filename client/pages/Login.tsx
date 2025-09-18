import { FormEvent } from "react";
import "../styles/style.css";

export default function Login() {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <main className="login-bg">
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
            />
            <span aria-hidden className="accent" />
          </div>

          <div className="options">
            <label className="inline-flex items-center select-none">
              <input type="checkbox" className="checkbox" />
              Remember me
            </label>
            <a href="#" onClick={(e)=>e.preventDefault()}>Forgot password?</a>
          </div>

          <button className="btn-login" type="submit">Login</button>
        </form>
      </section>
    </main>
  );
}
