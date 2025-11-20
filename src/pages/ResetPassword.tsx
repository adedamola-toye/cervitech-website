import React, { useState, useEffect } from "react";
import type { FormEvent } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/ResetPassword.css";

const API_BASE = import.meta.env.VITE_API_BASE_URL ?? "";

const ResetPassword: React.FC = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token") ?? "";
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [matchError, setMatchError] = useState<string | null>(null);

  useEffect(() => {
    if (confirm && password !== confirm) {
      setMatchError("Passwords do not match.");
    } else {
      setMatchError(null);
    }
  }, [password, confirm]);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (!token) {
      setMessage("Reset token missing. Use the link you got in email.");
      return;
    }
    if (!password || !confirm) {
      setMessage("Fill both password fields.");
      return;
    }
    if (matchError) {
      setMessage(matchError);
      return;
    }
    if (password.length < 8) {
      setMessage("Password must be at least 8 characters.");
      return;
    }

    try {
      setBusy(true);
      const resp = await axios.post(`${API_BASE}/api/auth/reset-password`, {
        token,
        newPassword: password,
      });
      setMessage(resp.data?.message || "Password reset successful.");
      // redirect to login after short delay
      setTimeout(() => navigate("/"), 1500);
    } catch (err: any) {
      setMessage(err?.response?.data?.message || "Password reset failed. Token may have expired.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <main className="reset-page">
      <section className="reset-card">
        <h2>Reset Password</h2>
        <p>Enter a new password for your account.</p>

        <form onSubmit={submit}>
          <label>New password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="New password"
            required
          />
          <label>Confirm password</label>
          <input
            type="password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            placeholder="Confirm password"
            required
          />
          <button type="submit" disabled={busy || !!matchError}>
            {busy ? "Resetting..." : "Reset Password"}
          </button>
        </form>

        {matchError && <div className="error">{matchError}</div>}
        {message && <div className="message">{message}</div>}
      </section>
    </main>
  );
};

export default ResetPassword;
