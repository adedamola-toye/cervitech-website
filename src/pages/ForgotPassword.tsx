// src/pages/ForgotPassword.tsx
import React, { useState } from "react";
import type { FormEvent } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/ForgotPassword.css";

const API_BASE = import.meta.env.VITE_API_BASE_URL ?? "";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [emailSent, setEmailSent] = useState(false);
  const navigate = useNavigate();

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (!email.trim()) return setMessage("Enter your email address.");

    try {
      setBusy(true);
      const resp = await axios.post(`${API_BASE}/auth/request-reset`, {
        email: email.trim().toLowerCase(),
      });
      setEmailSent(true);
    } catch (err: any) {
      setMessage(err?.response?.data?.message || "Failed to send reset link.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="forgot-page">
        <section className="forgot-card">
          {!emailSent ? (
            <>
              <h2>Forgot Password</h2>
              <p>Enter your email — we'll send a reset link.</p>

              <form onSubmit={submit}>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" disabled={busy}>
                  {busy ? "Sending..." : "Send Reset Link"}
                </button>
              </form>

              {message && <p className="message error">{message}</p>}
            </>
          ) : (
            <div className="success-message">
              <div className="success-icon">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                  <circle cx="32" cy="32" r="32" fill="#10b981" fillOpacity="0.1"/>
                  <path d="M20 32l8 8 16-16" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2>Check Your Email</h2>
              <p className="success-text">
                We've sent a password reset link to <strong>{email}</strong>. 
                Please check your inbox and follow the instructions to reset your password.
              </p>
              <p className="helper-text">
                Didn't receive the email? Check your spam folder or{" "}
                <button 
                  className="link-button" 
                  onClick={() => setEmailSent(false)}
                >
                  try again
                </button>.
              </p>
              <button 
                className="back-button" 
                onClick={() => navigate("/login")}
              >
                Back to Login
              </button>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ForgotPassword;