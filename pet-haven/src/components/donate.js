// src/components/donate.js
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Alert from "./Alert";

export default function DonateSection() {
  const [sent, setSent] = useState(false);
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [note, setNote] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  function handleSubmit(e) {
    e.preventDefault();

    // Log instead of sending an actual email
    console.log("Donation enquiry submitted:", {
      name,
      amount,
      note,
    });

    setSent(true);

    // after 3 seconds:
    setTimeout(() => {
      if (location.pathname === "/") {
        // already on home → just close modal (and optionally scroll)
        setSent(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        // used from another route → go home
        navigate("/");
      }
    }, 3000);
  }

  function handleClose() {
    setSent(false);
  }

  return (
    <section id="donate" className="donate-section">
      <div className="container">
        {/* HEADER */}
        <div className="donate-header">
          <span className="donate-pill">Support the work</span>
          <h2>Donate to Pet Haven</h2>
          <p className="muted">
            Your gift keeps our doors open, our kennels warm and our animals
            safe. You can give financially or sponsor food, supplies and medical
            care.
          </p>
        </div>

        {/* SUCCESS MODAL */}
        {sent && (
          <Alert type="success" asModal onClose={handleClose}>
            <h2 className="auth-heading">Thank you for your support</h2>
            <p className="muted" style={{ marginTop: 4 }}>
              We’ve received your donation enquiry. We’ll follow up with next
              steps and how your gift can help our animals.
            </p>
            <p className="muted" style={{ marginTop: 10, fontSize: "0.85rem" }}>
              Redirecting you to the home page in a few seconds…
            </p>
          </Alert>
        )}

        {/* TWO-COLUMN LAYOUT */}
        <div className="donate-layout">
          {/* LEFT: INFO CARDS */}
          <div className="donate-info">
            <div className="home-card donate-card">
              <h3>Bank / PayNow</h3>
              <p className="donate-card-text">
                Use these details for one-time or monthly giving.
              </p>
              <ul className="donate-list">
                <li>
                  <strong>Bank:</strong> Example Bank
                </li>
                <li>
                  <strong>Account name:</strong> Pet Haven Animal Welfare
                  Society
                </li>
                <li>
                  <strong>Account no.:</strong> 12-345-678-9
                </li>
                <li>
                  <strong>PayNow UEN:</strong> 2025PH001A
                </li>
              </ul>
              <p className="donate-note">
                Add a reference like <strong>&quot;Donation&quot;</strong> or
                <strong> &quot;Sponsorship&quot;</strong> so we can thank you.
              </p>
            </div>

            <div className="home-card donate-card">
              <h3>In-kind donations</h3>
              <p className="donate-card-text">
                Help us stretch every dollar by donating supplies:
              </p>
              <ul className="donate-list">
                <li>Dry and wet pet food (unopened)</li>
                <li>Litter, pee pads and cleaning supplies</li>
                <li>Toys, beds and carriers in good condition</li>
              </ul>
              <p className="donate-note">
                Large items or bulk donations? Drop us a note so we can arrange
                drop-off times.
              </p>
            </div>
          </div>

          {/* RIGHT: FORM */}
          <div className="donate-form-wrapper">
            <form className="form donate-form" onSubmit={handleSubmit}>
              <h3 className="donate-form-title">Send us a donation enquiry</h3>
              <p className="muted donate-form-subtitle">
                Share how you’d like to support — we’ll follow up with next
                steps or a tax-deductible receipt template (for the assignment).
              </p>

              <label>
                Name
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  required
                />
              </label>

              <label>
                Amount / type of support
                <input
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="$50 monthly, food sponsorship, etc."
                  required
                />
              </label>

              <label>
                Message
                <textarea
                  rows="4"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Optional message or questions"
                />
              </label>

              <button className="btn" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
