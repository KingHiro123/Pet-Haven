// src/pages/Facilities.js
import React from "react";

export default function Facilities() {
  return (
    <section className="page">
      <h1>Our Facilities</h1>
      <p className="muted">
        Pet Haven is designed to keep animals safe, comfortable and enriched
        while they wait for their forever homes.
      </p>

      <div className="home-cards-row" style={{ marginTop: 24 }}>
        <div className="home-card">
          <h3>Intake & Quarantine</h3>
          <p>
            Newly arrived pets are given a medical check, vaccinations and a
            quiet space to settle in before joining the main areas.
          </p>
        </div>
        <div className="home-card">
          <h3>Dog & Cat Wards</h3>
          <p>
            Separate, species-appropriate rooms with proper ventilation,
            temperature control and safe enclosures for rest.
          </p>
        </div>
        <div className="home-card">
          <h3>Play & Social Areas</h3>
          <p>
            Indoor and outdoor areas where pets can interact, exercise and build
            confidence while supervised by staff or volunteers.
          </p>
        </div>
        <div className="home-card">
          <h3>Consultation Corner</h3>
          <p>
            A dedicated space where adopters and owners can meet with our team
            to discuss adoption, surrender or behaviour questions.
          </p>
        </div>
      </div>

      <p style={{ marginTop: 24 }} className="muted">
        Note: images and floorplans can be added here later as a simple gallery
        or carousel if you want extra UX marks.
      </p>
    </section>
  );
}
