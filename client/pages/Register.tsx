import { FormEvent } from "react";
import "../styles/style.css";
import { Link } from "react-router-dom";

export default function Register() {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <main className="login-bg">
      <section className="glass-card glass-card-shadow" style={{borderRadius: 32}}>
        <h1 className="login-title text-[28px] tracking-[0.2em]">REGISTER</h1>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="field">
            <label htmlFor="r-username" className="sr-only">Username</label>
            <input id="r-username" name="username" type="text" placeholder="Username" className="input" autoComplete="username" required />
          </div>
          <div className="field">
            <label htmlFor="r-password" className="sr-only">Password</label>
            <input id="r-password" name="password" type="password" placeholder="Password" className="input" autoComplete="new-password" required />
          </div>
          <div className="field">
            <label htmlFor="r-confirm" className="sr-only">Confirm Password</label>
            <input id="r-confirm" name="confirm" type="password" placeholder="Confirm Password" className="input" autoComplete="new-password" required />
          </div>
          <div className="field">
            <label htmlFor="r-email" className="sr-only">Email (Optional)</label>
            <input id="r-email" name="email" type="email" placeholder="Email (Optional)" className="input" autoComplete="email" />
          </div>

          <button className="btn-login" type="submit">CREATE ACCOUNT</button>

          <div style={{display:'grid', placeItems:'center', marginTop: 10}}>
            <Link to="/login" className="pill-link">LOGIN</Link>
          </div>

          <p className="tos">
            By registering, you agree to our <a href="#" onClick={(e)=>e.preventDefault()}>Terms of Service</a> <a href="#" onClick={(e)=>e.preventDefault()}>Privacy Policy</a>
          </p>
        </form>
      </section>
    </main>
  );
}
