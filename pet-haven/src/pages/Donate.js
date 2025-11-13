// src/pages/Donate.js
import React, { useState } from "react";
import Alert from "../components/Alert";

export default function Donate() {
  const [sent, setSent] = useState(false);
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [note, setNote] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent("Donation / Sponsorship Enquiry");
    const body = encodeURIComponent(
      `Name: ${name}
Amount / type: ${amount}

Message:
${note}`
    );

    window.location.href =
      "mailto:admin@pethaven.org?subject=" + subject + "&body=" + body;
    setSent(true);
  }

  return (
    <section className="page">
      <h1>Donate to Pet Haven</h1>
      <p className="muted">
        Your support keeps our doors open and our animals safe. You can donate
        financially or sponsor food, supplies and medical care.
      </p>

      <div
        className="home-cards-row"
        style={{ marginTop: 24, marginBottom: 24 }}
      >
        <div className="home-card">
          <h3>Bank / PayNow</h3>
          <p>
            Add your own fictional or real-looking details here for the
            assignment, for example:
          </p>
          <ul>
            <li>Bank: Example Bank</li>
            <li>Account name: Pet Haven Animal Welfare Society</li>
            <li>Account no.: 12-345-678-9</li>
            <li>PayNow UEN: 2025PH001A</li>
          </ul>
        </div>

        <div className="home-card">
          <h3>In-kind donations</h3>
          <p>You can also donate:</p>
          <ul>
            <li>Dry and wet pet food (unopened)</li>
            <li>Litter, pee pads and cleaning supplies</li>
            <li>Toys, beds and carriers in good condition</li>
          </ul>
        </div>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        {sent && (
          <Alert
            type="success"
            text="Thank you! An email window has been opened so you can confirm your donation."
          />
        )}

        <h2>Send us a donation enquiry</h2>

        <label>
          Name
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
          />
        </label>

        <label>
          Amount / type of support
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="$50 monthly, food sponsorship, etc."
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
          Open email draft
        </button>
      </form>
    </section>
  );
}
