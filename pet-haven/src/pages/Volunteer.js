// src/pages/Volunteer.js
import React, { useState } from "react";
import Alert from "../components/Alert";

export default function Volunteer() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [availability, setAvailability] = useState("");
  const [note, setNote] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent("Volunteer with Pet Haven");
    const body = encodeURIComponent(
      `Name: ${name}
Email: ${email}
Preferred role: ${role}
Availability: ${availability}

Message:
${note}`
    );

    window.location.href =
      "mailto:admin@pethaven.org?subject=" + subject + "&body=" + body;
    setSent(true);
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
                <Alert
                  type="success"
                  text="Thank you! An email window has been opened so you can confirm your volunteer interest."
                />
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
                Open email draft
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// import React, { useState } from "react";

// export default function Volunteer() {
//   const [data, setData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     availability: "",
//     role: "",
//     experience: "",
//   });

//   function update(e) {
//     const { name, value } = e.target;
//     setData((d) => ({ ...d, [name]: value }));
//   }

//   function onSubmit(e) {
//     e.preventDefault();

//     const subject = encodeURIComponent(
//       `Volunteer interest: ${data.name || "New applicant"}`
//     );
//     const body = encodeURIComponent(
//       `VOLUNTEER REGISTRATION

// Name: ${data.name}
// Email: ${data.email}
// Phone: ${data.phone || "N/A"}

// Preferred volunteer role: ${data.role || "N/A"}
// Availability: ${data.availability || "N/A"}

// Experience with animals / events:
// ${data.experience || "N/A"}
// `
//     );

//     window.location.href =
//       "mailto:admin@pethaven.org?subject=" + subject + "&body=" + body;
//   }

//   return (
//     <section className="page">
//       <div className="container">
//         <header className="adopt-header">
//           <h1>Volunteer with Pet Haven</h1>
//           <p className="muted">
//             Volunteers help us care for animals, run adoption events, and keep
//             our facilities running. Tell us a bit about yourself and how you’d
//             like to help.
//           </p>
//         </header>

//         <div className="home-cards-row" style={{ marginBottom: "24px" }}>
//           <article className="home-card">
//             <h3>Animal care</h3>
//             <p className="muted">
//               Support daily routines such as feeding, walking dogs, socialising
//               cats, and keeping enclosures clean and comfortable.
//             </p>
//           </article>
//           <article className="home-card">
//             <h3>Events & outreach</h3>
//             <p className="muted">
//               Help out at adoption drives, fundraising events, or
//               education/awareness booths in the community.
//             </p>
//           </article>
//           <article className="home-card">
//             <h3>Skills-based help</h3>
//             <p className="muted">
//               Use your skills (photography, design, social media, admin) to help
//               us share more animals and stories.
//             </p>
//           </article>
//         </div>

//         <form className="form" onSubmit={onSubmit}>
//           <h3>Register your interest</h3>

//           <label>
//             Full name*
//             <input name="name" value={data.name} onChange={update} required />
//           </label>

//           <label>
//             Email*
//             <input
//               type="email"
//               name="email"
//               value={data.email}
//               onChange={update}
//               required
//             />
//           </label>

//           <label>
//             Phone
//             <input name="phone" value={data.phone} onChange={update} />
//           </label>

//           <div className="two-col">
//             <label>
//               Preferred volunteer role
//               <input
//                 name="role"
//                 value={data.role}
//                 onChange={update}
//                 placeholder="e.g. dog walking, cat socialising, events"
//               />
//             </label>

//             <label>
//               Availability
//               <input
//                 name="availability"
//                 value={data.availability}
//                 onChange={update}
//                 placeholder="e.g. weekends, weekday evenings"
//               />
//             </label>
//           </div>

//           <label>
//             Experience with animals / events
//             <textarea
//               name="experience"
//               rows="4"
//               value={data.experience}
//               onChange={update}
//               placeholder="Tell us about any past volunteering, pets you’ve cared for, or relevant skills."
//             />
//           </label>

//           <button className="btn" type="submit">
//             Submit volunteer interest
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }
