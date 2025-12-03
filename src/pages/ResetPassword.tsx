import React, { useState, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/ResetPassword.css";

const API_BASE = import.meta.env.VITE_API_BASE_URL ?? "";

interface ValidationRule {
  test: (password: string) => boolean;
  message: string;
}

const ResetPassword: React.FC = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");

  const validationRules: ValidationRule[] = [
    { test: (pwd) => pwd.length >= 8, message: "At least 8 characters" },
    { test: (pwd) => /[A-Z]/.test(pwd), message: "One uppercase letter" },
    { test: (pwd) => /[a-z]/.test(pwd), message: "One lowercase letter" },
    { test: (pwd) => /[0-9]/.test(pwd), message: "One number" },
  ];

  const passwordValidation = useMemo(() => {
    return validationRules.map((rule) => ({
      ...rule,
      passed: rule.test(newPassword),
    }));
  }, [newPassword]);

  const isPasswordValid = passwordValidation.every((rule) => rule.passed);
  const passwordsMatch = newPassword === confirmPassword && confirmPassword !== "";

  const canSubmit = isPasswordValid && passwordsMatch && !busy;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (!canSubmit) return;

    if (!token) {
      setMessage("Token missing or invalid.");
      return;
    }

    try {
      setBusy(true);
      await axios.post(`${API_BASE}/auth/reset-password`, {
        newPassword,
        token,
      });

      setResetSuccess(true);
    } catch (err: any) {
      setMessage(
        err?.response?.data?.message ||
          "Failed to reset password. Token may have expired."
      );
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="reset-page">
        <section className="reset-card">
          {!resetSuccess ? (
            <>
              <h2>Reset Password</h2>
              <form onSubmit={submit}>
                <label>New Password</label>
                <div className="password-input-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <line x1="1" y1="1" x2="23" y2="23" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="12" cy="12" r="3" strokeWidth="2"/>
                      </svg>
                    )}
                  </button>
                </div>

                {newPassword && (
                  <div className="validation-rules">
                    {passwordValidation.map((rule, index) => (
                      <div
                        key={index}
                        className={`rule ${rule.passed ? "passed" : "pending"}`}
                      >
                        <span className="rule-icon">
                          {rule.passed ? "✓" : "○"}
                        </span>
                        {rule.message}
                      </div>
                    ))}
                  </div>
                )}

                <label>Confirm Password</label>
                <div className="password-input-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>

                {confirmPassword && (
                  <div className="password-match">
                    {passwordsMatch ? (
                      <span className="match-success">✓ Passwords match</span>
                    ) : (
                      <span className="match-error">✗ Passwords do not match</span>
                    )}
                  </div>
                )}

                <button type="submit" disabled={!canSubmit}>
                  {busy ? "Resetting..." : "Reset Password"}
                </button>
              </form>
              {message && <div className="message error">{message}</div>}
            </>
          ) : (
            <div className="success-message">
              <div className="success-icon">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                  <circle cx="32" cy="32" r="32" fill="#10b981" fillOpacity="0.1"/>
                  <path d="M20 32l8 8 16-16" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2>Password Reset Successful</h2>
              <p className="success-text">
                Your password has been successfully reset. You can now log in with your new password.
              </p>
              <button 
                className="back-button" 
                onClick={() => navigate("/login")}
              >
                Continue to Login
              </button>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ResetPassword;