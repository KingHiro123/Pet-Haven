// src/pages/About.js
import React from "react";

export default function About() {
  return (
    <section className="page">
      <h1>About Pet Haven</h1>
      <p className="muted">
        Pet Haven is a charity society that cares for the welfare of abandoned
        cats and dogs. We work with the community to rescue, rehabilitate and
        rehome animals in need.
      </p>

      <div className="home-cards-row" style={{ marginTop: 24 }}>
        <div className="home-card">
          <h3>Our mission</h3>
          <p>
            To provide a safe haven for pets whose owners can no longer care for
            them, and to match them with responsible, loving families.
          </p>
        </div>
        <div className="home-card">
          <h3>What we do</h3>
          <ul>
            <li>Rescue and intake of abandoned or surrendered pets</li>
            <li>
              Basic medical checks, vaccinations and behavioural assessment
            </li>
            <li>Fostering and permanent adoption placements</li>
            <li>Education on responsible pet ownership</li>
          </ul>
        </div>
        <div className="home-card">
          <h3>Who we support</h3>
          <p>
            Pet owners who are unable to continue care, first-time adopters, and
            families looking to welcome a new furry member into their homes.
          </p>
        </div>
      </div>
    </section>
  );
}
