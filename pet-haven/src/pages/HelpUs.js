// src/pages/HelpUs.js
import React from "react";
import { Link } from "react-router-dom";

export default function HelpUs() {
  return (
    <section className="page">
      <h1>Help Us Help Them</h1>
      <p className="muted">
        There are many ways you can support Pet Haven – from volunteering to
        donating supplies or becoming a member.
      </p>

      <div className="home-cards-row" style={{ marginTop: 24 }}>
        <div className="home-card">
          <h3>Volunteer</h3>
          <ul>
            <li>Dog walking and enrichment</li>
            <li>Cat socialisation and grooming</li>
            <li>Cleaning and feeding assistance</li>
            <li>Event support and outreach</li>
          </ul>
          <p className="muted" style={{ marginTop: 8 }}>
            Volunteers receive basic training before handling animals.
          </p>
        </div>

        <div className="home-card">
          <h3>Become a member</h3>
          <p>
            Members are long-term supporters who receive regular updates about
            pets, events and campaigns.
          </p>
          <p className="muted">
            Create an account to manage your details and preferences.
          </p>
          <Link to="/register" className="btn" style={{ marginTop: 10 }}>
            Register as a member
          </Link>
        </div>

        <div className="home-card">
          <h3>Donate or sponsor</h3>
          <p>
            Contributions help cover food, medical care, vaccinations, and
            enrichment items for the animals.
          </p>
          <Link to="/donate" className="home-card-link">
            View donation options →
          </Link>
        </div>
      </div>
    </section>
  );
}
