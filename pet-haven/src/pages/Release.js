// src/pages/Release.js
import React from "react";
import PetForm from "../components/PetForm";

export default function Release() {
  return (
    <section className="page release-page">
      <div className="container">
        {/* Centered header */}
        <div className="page-header">
          <span className="section-pill">Rehome a pet</span>
          <h1>Release a Pet</h1>
          <p className="muted">
            If you’re unable to continue caring for your pet, we’re here to
            help. Submit the form and our team will reach out to guide you
            through the process.
          </p>
        </div>

        {/* Centered form wrapper */}
        <div className="release-form">
          <PetForm type="release" />
        </div>
      </div>
    </section>
  );
}
