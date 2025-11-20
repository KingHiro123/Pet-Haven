// src/pages/Facilities.js
import React from "react";

const FACILITIES = [
  {
    title: "Dog runs & play yards",
    text: "Secure outdoor and indoor spaces where dogs can stretch, play and socialise under supervision.",
  },
  {
    title: "Cat rooms & quiet zones",
    text: "Separated cat rooms with hidey spots and perches, designed to reduce stress and allow gentle introductions.",
  },
  {
    title: "Medical & isolation ward",
    text: "A small clinical area for post-surgery rest and quarantine, used in partnership with our vet partners.",
  },
  {
    title: "Behaviour & training spaces",
    text: "Calm corners and training pens for confidence-building, basic obedience and rehabilitation work.",
  },
];

export default function Facilities() {
  return (
    <section className="page facilities-page">
      <div className="container">
        <header className="page-header">
          <span className="section-pill">Where they stay</span>
          <h1>Our Facilities</h1>
          <p className="muted">
            We keep our shelter small and home-like so every animal is seen,
            known and properly cared for. Here’s a peek at the spaces that keep
            tails wagging and purrs going.
          </p>
        </header>

        <section className="facilities-grid">
          {FACILITIES.map((f) => (
            <article key={f.title} className="home-card facilities-card">
              <h2>{f.title}</h2>
              <p>{f.text}</p>
            </article>
          ))}
        </section>

        <section className="facilities-note">
          <p className="muted">
            We also rely heavily on foster homes, which allow animals to recover
            and learn house manners in a less stressful environment. Interested
            in fostering? Reach out via our volunteer or membership pages.
          </p>
        </section>
      </div>
    </section>
  );
}

// import React from "react";

// export default function Facilities() {
//   return (
//     <section className="page">
//       <h1>Our Facilities</h1>
//       <p className="muted">
//         Pet Haven is designed to keep animals safe, comfortable and enriched
//         while they wait for their forever homes.
//       </p>

//       <div className="home-cards-row" style={{ marginTop: 24 }}>
//         <div className="home-card">
//           <h3>Intake & Quarantine</h3>
//           <p>
//             Newly arrived pets are given a medical check, vaccinations and a
//             quiet space to settle in before joining the main areas.
//           </p>
//         </div>
//         <div className="home-card">
//           <h3>Dog & Cat Wards</h3>
//           <p>
//             Separate, species-appropriate rooms with proper ventilation,
//             temperature control and safe enclosures for rest.
//           </p>
//         </div>
//         <div className="home-card">
//           <h3>Play & Social Areas</h3>
//           <p>
//             Indoor and outdoor areas where pets can interact, exercise and build
//             confidence while supervised by staff or volunteers.
//           </p>
//         </div>
//         <div className="home-card">
//           <h3>Consultation Corner</h3>
//           <p>
//             A dedicated space where adopters and owners can meet with our team
//             to discuss adoption, surrender or behaviour questions.
//           </p>
//         </div>
//       </div>

//       <p style={{ marginTop: 24 }} className="muted">
//         Note: images and floorplans can be added here later as a simple gallery
//         or carousel if you want extra UX marks.
//       </p>
//     </section>
//   );
// }
