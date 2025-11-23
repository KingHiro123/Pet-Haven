// src/pages/MembershipProfile.js  (OPTION B – PROFILE-INTEGRATED)
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../components/Alert";

export default function MembershipProfile() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [selectedTier, setSelectedTier] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();

  // Load login + membership info on mount
  useEffect(() => {
    const username = localStorage.getItem("pethavenLoggedInUser");
    if (username) setLoggedInUser(username);

    const rawUser = localStorage.getItem("pethavenUser");
    if (rawUser) {
      try {
        const user = JSON.parse(rawUser);
        if (user.membershipTier) setSelectedTier(user.membershipTier);
      } catch {
        // ignore parse error
      }
    }
  }, []);

  function handleSelectTier(tierName) {
    setSelectedTier(tierName);

    // Update user profile in localStorage
    const rawUser = localStorage.getItem("pethavenUser");
    if (rawUser) {
      try {
        const user = JSON.parse(rawUser);
        user.membershipTier = tierName;
        localStorage.setItem("pethavenUser", JSON.stringify(user));
      } catch {
        // ignore if something weird
      }
    }

    // Optional extra key, same as Option A:
    localStorage.setItem("pethavenMembershipTier", tierName);

    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 4000);
  }

  return (
    <section className="page membership-page">
      <div className="container">
        <header className="page-header">
          <span className="section-pill">Join the family</span>
          <h1>Membership</h1>
          <p className="muted">
            Members give us a stable base of support so we can plan rescues,
            rehab and medical care responsibly. In return, you get little perks,
            updates and the satisfaction of knowing you’re part of the pack.
          </p>
        </header>

        {/* CTA / SELECT PANEL */}
        <section className="membership-form-wrapper">
          {loggedInUser ? (
            <>
              {showAlert && (
                <Alert
                  type="success"
                  text={`Thanks, ${loggedInUser}! Your account is now tagged as a ${selectedTier} member.`}
                />
              )}

              <h2 className="membership-form-title">Choose your membership</h2>
              <p className="muted membership-form-subtitle">
                Your selected tier will be saved with your Pet Haven account on
                this browser.
              </p>

              <div className="membership-choice-buttons">
                <button
                  type="button"
                  className="btn"
                  onClick={() => handleSelectTier("Friend")}
                >
                  Choose Friend
                </button>
                <button
                  type="button"
                  className="btn"
                  onClick={() => handleSelectTier("Guardian")}
                >
                  Choose Guardian
                </button>
                <button
                  type="button"
                  className="btn"
                  onClick={() => handleSelectTier("Champion")}
                >
                  Choose Champion
                </button>
              </div>

              {selectedTier && (
                <p
                  className="muted"
                  style={{ marginTop: 10, fontSize: "0.85rem" }}
                >
                  Current tier on your account: <strong>{selectedTier}</strong>
                </p>
              )}
            </>
          ) : (
            <>
              <h2 className="membership-form-title">Want to join?</h2>
              <p className="muted membership-form-subtitle">
                Log in or create an account to select a membership tier.
              </p>

              <div className="membership-choice-buttons">
                <button
                  type="button"
                  className="btn"
                  onClick={() => navigate("/login")}
                >
                  Log in
                </button>
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => navigate("/register")}
                >
                  Create account
                </button>
              </div>
            </>
          )}
        </section>

        {/* TIERS */}
        <section className="membership-tiers">
          <article className="home-card membership-card">
            <h2>Friend</h2>
            <p className="membership-amount">From $10 / month</p>
            <ul className="membership-list">
              <li>Quarterly email updates</li>
              <li>Invites to open house events</li>
              <li>Digital thank-you card</li>
            </ul>
          </article>

          <article className="home-card membership-card membership-card--highlight">
            <h2>Guardian</h2>
            <p className="membership-amount">From $30 / month</p>
            <ul className="membership-list">
              <li>All Friend benefits</li>
              <li>Behind-the-scenes stories of animals you support</li>
              <li>Name listed on our supporters wall (optional)</li>
            </ul>
          </article>

          <article className="home-card membership-card">
            <h2>Champion</h2>
            <p className="membership-amount">From $80 / month</p>
            <ul className="membership-list">
              <li>All Guardian benefits</li>
              <li>Invitation to small appreciation gatherings</li>
              <li>Option to sponsor a specific animal’s care</li>
            </ul>
          </article>
        </section>
      </div>
    </section>
  );
}
