// src/pages/Volunteer.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../components/Alert";

export default function Volunteer() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [availability, setAvailability] = useState("");
  const [note, setNote] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    // Just log for the assignment instead of sending an actual email
    console.log("Volunteer form submitted:", {
      name,
      email,
      role,
      availability,
      note,
    });

    setSent(true);

    // redirect to home after 3 seconds (respects basename)
    setTimeout(() => {
      navigate("/"); // becomes /Pet-Haven/ under your Router
    }, 3000);
  }

  function handleClose() {
    setSent(false);
  }

  return (
    <section className="page volunteer-page">
      <div className="container">
        <header className="page-header">
          <span className="section-pill">Help on the ground</span>
          <h1>Volunteer with us</h1>
          <p className="muted">
            Volunteers are the heart of Pet Haven—from cleaning kennels and
            socialising animals to helping at events and behind the scenes. No
            cape needed, just patience and a love for animals.
          </p>
        </header>

        <div className="volunteer-layout">
          {/* LEFT: ROLE CARDS */}
          <div className="volunteer-roles">
            <div className="home-card volunteer-card">
              <h2>Animal care</h2>
              <p>
                Support daily routines such as feeding, cleaning, walking and
                basic enrichment for dogs and cats.
              </p>
              <p className="muted small">
                Best for: adults comfortable with physical work and getting fur/
                drool on their clothes.
              </p>
            </div>

            <div className="home-card volunteer-card">
              <h2>Events & outreach</h2>
              <p>
                Help out at adoption drives, education booths and community
                events to share our work with the public.
              </p>
              <p className="muted small">
                Best for: people who enjoy talking to others and don’t mind a
                crowd.
              </p>
            </div>

            <div className="home-card volunteer-card">
              <h2>Creative & admin</h2>
              <p>
                Support socials, photography, design or behind-the-scenes admin
                like data entry and logistics.
              </p>
              <p className="muted small">
                Best for: students or professionals who want to contribute
                skills remotely.
              </p>
            </div>
          </div>

          {/* RIGHT: FORM */}
          <div className="volunteer-form-wrapper">
            <form className="form volunteer-form" onSubmit={handleSubmit}>
              {sent && (
                <Alert type="success" asModal onClose={handleClose}>
                  <h2 className="auth-heading">Thank you for volunteering</h2>
                  <p className="muted" style={{ marginTop: 4 }}>
                    We’ve received your details and will get in touch to match
                    you with a suitable role and schedule.
                  </p>
                  <p
                    className="muted"
                    style={{ marginTop: 10, fontSize: "0.85rem" }}
                  >
                    Redirecting you to the home page in a few seconds…
                  </p>
                </Alert>
              )}

              <h2 className="volunteer-form-title">Tell us about you</h2>
              <p className="muted volunteer-form-subtitle">
                This isn’t a contract—just a way for us to match you with the
                right role and schedule.
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
                Email
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                />
              </label>

              <label>
                Preferred area to help
                <input
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="Animal care, events, creative, admin…"
                  required
                />
              </label>

              <label>
                Availability
                <input
                  value={availability}
                  onChange={(e) => setAvailability(e.target.value)}
                  placeholder="e.g. Weekday evenings, alternate Saturdays"
                />
              </label>

              <label>
                Message
                <textarea
                  rows="4"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Anything else we should know?"
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
