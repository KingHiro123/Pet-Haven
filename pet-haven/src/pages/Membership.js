// src/pages/Membership.js
import React, { useState } from "react";
import Alert from "../components/Alert";

export default function Membership() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tier, setTier] = useState("Friend");
  const [note, setNote] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent("Pet Haven Membership Enquiry");
    const body = encodeURIComponent(
      `Name: ${name}
Email: ${email}
Selected tier: ${tier}

Message:
${note}`
    );

    window.location.href =
      "mailto:admin@pethaven.org?subject=" + subject + "&body=" + body;
    setSent(true);
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

        {/* FORM */}
        <section className="membership-form-wrapper">
          <form className="form membership-form" onSubmit={handleSubmit}>
            {sent && (
              <Alert
                type="success"
                text="Thank you! An email window has been opened so you can confirm your membership."
              />
            )}

            <h2 className="membership-form-title">Register your interest</h2>
            <p className="muted membership-form-subtitle">
              We’ll follow up with payment options and a welcome note. No auto
              deductions—everything is handled manually for this assignment.
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
              Membership tier
              <select value={tier} onChange={(e) => setTier(e.target.value)}>
                <option value="Friend">Friend – from $10 / month</option>
                <option value="Guardian">Guardian – from $30 / month</option>
                <option value="Champion">Champion – from $80 / month</option>
              </select>
            </label>

            <label>
              Message
              <textarea
                rows="4"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Questions, special arrangements, workplace giving, etc."
              />
            </label>

            <button className="btn" type="submit">
              Open email draft
            </button>
          </form>
        </section>
      </div>
    </section>
  );
}

// import React from "react";

// export default function Membership() {
//   return (
//     <section className="page">
//       <div className="container">
//         <header className="adopt-header">
//           <h1>Pet Haven Membership</h1>
//           <p className="muted">
//             Memberships provide steady support so we can plan food, medical
//             care, and shelter upgrades for our animals. Choose a tier that fits
//             you and we’ll keep you updated on the lives you’re helping.
//           </p>
//         </header>

//         {/* Membership tiers */}
//         <div className="home-cards-row" style={{ marginBottom: "32px" }}>
//           <article className="home-card">
//             <h3>Friend of Pet Haven</h3>
//             <p className="muted">
//               Perfect for first-time supporters.
//               <br />
//               <strong>$10/month</strong>
//             </p>
//             <ul className="muted" style={{ paddingLeft: "18px" }}>
//               <li>Quarterly email updates</li>
//               <li>Invitation to open-house events</li>
//             </ul>
//           </article>

//           <article className="home-card">
//             <h3>Guardian</h3>
//             <p className="muted">
//               Help cover food and basic medical care.
//               <br />
//               <strong>$25/month</strong>
//             </p>
//             <ul className="muted" style={{ paddingLeft: "18px" }}>
//               <li>Everything in Friend tier</li>
//               <li>Feature stories on animals you’ve helped</li>
//               <li>Priority invites for adoption events</li>
//             </ul>
//           </article>

//           <article className="home-card">
//             <h3>Haven Circle</h3>
//             <p className="muted">
//               For long-term champions of animal welfare.
//               <br />
//               <strong>$50/month &amp; above</strong>
//             </p>
//             <ul className="muted" style={{ paddingLeft: "18px" }}>
//               <li>Everything in Guardian tier</li>
//               <li>Behind-the-scenes tours (by appointment)</li>
//               <li>Recognition (with your consent) on our supporter wall</li>
//             </ul>
//           </article>
//         </div>

//         {/* Membership sign-up – basic mailto CTA */}
//         <div className="home-card">
//           <h3>Become a member</h3>
//           <p className="muted">
//             To register as a member, drop us an email with your preferred tier
//             and contact details. Our team will follow up with payment options
//             and next steps.
//           </p>
//           <a
//             href={`mailto:admin@pethaven.org?subject=${encodeURIComponent(
//               "Membership enquiry"
//             )}&body=${encodeURIComponent(
//               `Hi Pet Haven team,

// I’m interested in becoming a member. Here are my details:

// Name:
// Preferred membership tier (Friend / Guardian / Haven Circle):
// Preferred contact email:
// Preferred contact number:

// Thank you!`
//             )}`}
//             className="btn"
//           >
//             Email us about membership
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }
