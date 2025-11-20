// src/pages/About.js
import React from "react";

export default function About() {
  return (
    <section className="page about-page">
      <div className="container">
        {/* HEADER */}
        <header className="page-header">
          <span className="section-pill">Our story</span>
          <h1>About Pet Haven</h1>
          <p className="muted">
            Pet Haven is a volunteer-driven charity that rescues, rehabilitates
            and rehomes abandoned cats and dogs. We work with fosterers, vets
            and the community to give every animal a fair second chance.
          </p>
        </header>

        {/* STATS STRIP */}
        <section className="about-stats">
          <div className="about-stat">
            <span className="about-stat-number">120+</span>
            <span className="about-stat-label">animals rehomed each year</span>
          </div>
          <div className="about-stat">
            <span className="about-stat-number">60+</span>
            <span className="about-stat-label">active foster families</span>
          </div>
          <div className="about-stat">
            <span className="about-stat-number">100%</span>
            <span className="about-stat-label">funded by donations</span>
          </div>
        </section>

        {/* STORY SECTION */}
        <section className="about-layout">
          <div className="about-text">
            <h2>How we started</h2>
            <p>
              Pet Haven began as a small foster network for street dogs and
              abandoned cats. Over time, we grew into a registered welfare group
              with a simple belief: every animal deserves safety, kindness and a
              patient home.
            </p>
            <p>
              Today, our team of staff and volunteers run adoption drives,
              community education programmes and rehabilitation for anxious or
              medically complex cases.
            </p>
          </div>

          <div className="about-card-grid">
            <div className="home-card">
              <h3>Rescue</h3>
              <p>
                We respond to welfare cases and partner with rescuers to bring
                animals into safe, temporary care.
              </p>
            </div>
            <div className="home-card">
              <h3>Rehabilitation</h3>
              <p>
                From basic vet care to behaviour work, we help animals heal
                physically and emotionally before adoption.
              </p>
            </div>
            <div className="home-card">
              <h3>Rehome</h3>
              <p>
                Our adoption team carefully matches families based on lifestyle,
                experience and the animal’s needs.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

// import React from "react";

// export default function About() {
//   return (
//     <section className="page">
//       <h1>About Pet Haven</h1>
//       <p className="muted">
//         Pet Haven is a charity society that cares for the welfare of abandoned
//         cats and dogs. We work with the community to rescue, rehabilitate and
//         rehome animals in need.
//       </p>

//       <div className="home-cards-row" style={{ marginTop: 24 }}>
//         <div className="home-card">
//           <h3>Our mission</h3>
//           <p>
//             To provide a safe haven for pets whose owners can no longer care for
//             them, and to match them with responsible, loving families.
//           </p>
//         </div>
//         <div className="home-card">
//           <h3>What we do</h3>
//           <ul>
//             <li>Rescue and intake of abandoned or surrendered pets</li>
//             <li>
//               Basic medical checks, vaccinations and behavioural assessment
//             </li>
//             <li>Fostering and permanent adoption placements</li>
//             <li>Education on responsible pet ownership</li>
//           </ul>
//         </div>
//         <div className="home-card">
//           <h3>Who we support</h3>
//           <p>
//             Pet owners who are unable to continue care, first-time adopters, and
//             families looking to welcome a new furry member into their homes.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }
