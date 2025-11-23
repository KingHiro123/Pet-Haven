// src/pages/Auth.js
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import Alert from "../components/Alert";

export default function Auth() {
  const [activeMode, setActiveMode] = useState("login");
  const [loggedInUser, setLoggedInUser] = useState(null);

  // controls the success popup
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMode, setSuccessMode] = useState(null); // "login" or "register"

  const location = useLocation();
  const navigate = useNavigate();

  // On mount, check if already logged in (for navbar/user icon, etc.)
  useEffect(() => {
    const saved = localStorage.getItem("pethavenLoggedInUser");
    if (saved) {
      setLoggedInUser(saved);
    }
  }, []);

  // Decide which tab should be active from the URL (/login vs /register)
  useEffect(() => {
    if (location.pathname === "/register") {
      setActiveMode("register");
    } else {
      setActiveMode("login");
    }
  }, [location.pathname]);

  // Called by AuthForm on successful login/register
  // src/pages/Auth.js
  function handleAuthSuccess(username, mode) {
    setLoggedInUser(username);
    setSuccessMode(mode);
    setShowSuccess(true);

    // Decide where to go next
    const targetPath = mode === "register" ? "/login" : "/";

    // after 3 seconds, close popup and navigate
    setTimeout(() => {
      setShowSuccess(false);
      navigate(targetPath); // basename="/Pet-Haven" will handle prefixing
    }, 3000);
  }

  function handleClosePopup() {
    setShowSuccess(false);
  }

  // We no longer show the "Account" page + Logout button here.
  // Logged-in users will just see the popup and then be redirected.

  return (
    <section className="page auth-page">
      <div className="auth-shell">
        {/* pill-style tabs on top – purely visual, not clickable */}
        <div className="auth-tabs">
          <button
            type="button"
            className={
              activeMode === "login"
                ? "auth-tab-btn auth-tab-btn--active"
                : "auth-tab-btn"
            }
          >
            Login
          </button>
          <button
            type="button"
            className={
              activeMode === "register"
                ? "auth-tab-btn auth-tab-btn--active"
                : "auth-tab-btn"
            }
          >
            Register
          </button>
        </div>

        {/* sliding container */}
        <div className="auth-slider">
          <div
            className={
              activeMode === "login"
                ? "auth-slider-inner auth-slider-inner--login"
                : "auth-slider-inner auth-slider-inner--register"
            }
          >
            <div className="auth-panel">
              <AuthForm mode="login" onAuthSuccess={handleAuthSuccess} />
            </div>

            <div className="auth-panel">
              <AuthForm mode="register" onAuthSuccess={handleAuthSuccess} />
            </div>
          </div>
        </div>

        {/* small text links under the forms – these control the animation + URL */}
        <p className="auth-toggle-text">
          {activeMode === "login" ? (
            <>
              Do not have an account yet?{" "}
              <button
                type="button"
                className="auth-inline-link"
                onClick={() => navigate("/register")}
              >
                Register here
              </button>
              .
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                type="button"
                className="auth-inline-link"
                onClick={() => navigate("/login")}
              >
                Login here
              </button>
              .
            </>
          )}
        </p>
      </div>

      {/* SUCCESS POPUP (modal) */}
      {showSuccess && (
        <Alert asModal onClose={handleClosePopup}>
          {successMode === "register" ? (
            <>
              <h1
                className="auth-heading"
                style={{ marginTop: 0, marginBottom: 8 }}
              >
                Account created
              </h1>

              <p className="muted">
                Your account has been created successfully.
              </p>
              <p className="muted" style={{ marginTop: 4 }}>
                Please log in to continue using your account.
              </p>
              <p
                className="muted"
                style={{ marginTop: 10, fontSize: "0.8rem" }}
              >
                Redirecting you to the login page in a few seconds…
              </p>
            </>
          ) : (
            <>
              <h1
                className="auth-heading"
                style={{ marginTop: 0, marginBottom: 8 }}
              >
                Account
              </h1>

              <p className="muted">
                Welcome back <strong>{loggedInUser}</strong>.
              </p>

              <p className="muted" style={{ marginTop: 4 }}>
                You can now make adoption enquiries, volunteer and manage your
                membership using this account.
              </p>

              <div
                style={{
                  marginTop: 20,
                  background: "#e6f4ea",
                  padding: "10px 12px",
                  borderRadius: 10,
                  fontSize: "0.9rem",
                }}
              >
                Login successful!
              </div>

              <p
                className="muted"
                style={{ marginTop: 6, fontSize: "0.8rem", textAlign: "left" }}
              >
                Redirecting you to the home page in a few seconds…
              </p>
            </>
          )}
        </Alert>
      )}
    </section>
  );
}
