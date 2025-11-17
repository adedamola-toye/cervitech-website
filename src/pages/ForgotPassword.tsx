import React, { useState } from "react";
import type { FormEvent } from "react";
import axios from "axios";
import "../styles/ForgotPassword.css";
import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css"
import Navbar from "../components/Navbar";

const API_BASE = import.meta.env.VITE_API_BASE_URL ?? "";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    try {
      setBusy(true);
      const resp = await axios.post(`${API_BASE}/api/auth/send-password-reset`, {
        email: email.trim().toLowerCase(),
      });
      
      setMessage(resp.data?.message || "Reset link sent — check your email.");

      // redirect after short delay
      setTimeout(() => navigate("/check-email"), 1500);
    } catch (err: any) {
      setMessage(
        err?.response?.data?.message ||
        "Could not send reset link. Make sure the email is registered."
      );
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="forgot-page">
        <section className="forgot-card">
          <h2 className="forgot-title">Forgot Password</h2>
          <p className="forgot-sub">
            Enter the email for your account — we'll send a reset link.
          </p>

          <form className="forgot-form" onSubmit={submit}>
            <label htmlFor="email" className="label">Email</label>
            <input
              id="email"
              type="email"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
            <button type="submit" className="primary-btn" disabled={busy}>
              {busy ? "Sending..." : "Send Reset Link"}
            </button>
          </form>

          {message && <div className="message">{message}</div>}
        </section>
      </main>
    </>
  );
};

export default ForgotPassword;
