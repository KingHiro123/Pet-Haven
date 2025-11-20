// src/components/DonateSection.js
import React, { useState } from "react";
import Alert from "../components/Alert";

export default function DonateSection() {
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
    <section id="donate" className="donate-section">
      <div className="container">
        {/* HEADER */}
        <div className="donate-header">
          <span className="donate-pill">Support the work</span>
          <h2>Donate to Pet Haven</h2>
          <p className="muted">
            Your gift keeps our doors open, our kennels warm and our animals
            safe. You can give financially or sponsor food, supplies and medical
            care.
          </p>
        </div>

        {/* TWO-COLUMN LAYOUT */}
        <div className="donate-layout">
          {/* LEFT: INFO CARDS */}
          <div className="donate-info">
            <div className="home-card donate-card">
              <h3>Bank / PayNow</h3>
              <p className="donate-card-text">
                Use these details for one-time or monthly giving.
              </p>
              <ul className="donate-list">
                <li>
                  <strong>Bank:</strong> Example Bank
                </li>
                <li>
                  <strong>Account name:</strong> Pet Haven Animal Welfare
                  Society
                </li>
                <li>
                  <strong>Account no.:</strong> 12-345-678-9
                </li>
                <li>
                  <strong>PayNow UEN:</strong> 2025PH001A
                </li>
              </ul>
              <p className="donate-note">
                Add a reference like <strong>&quot;Donation&quot;</strong> or
                <strong> &quot;Sponsorship&quot;</strong> so we can thank you.
              </p>
            </div>

            <div className="home-card donate-card">
              <h3>In-kind donations</h3>
              <p className="donate-card-text">
                Help us stretch every dollar by donating supplies:
              </p>
              <ul className="donate-list">
                <li>Dry and wet pet food (unopened)</li>
                <li>Litter, pee pads and cleaning supplies</li>
                <li>Toys, beds and carriers in good condition</li>
              </ul>
              <p className="donate-note">
                Large items or bulk donations? Drop us a note so we can arrange
                drop-off times.
              </p>
            </div>
          </div>

          {/* RIGHT: FORM */}
          <div className="donate-form-wrapper">
            <form className="form donate-form" onSubmit={handleSubmit}>
              {sent && (
                <Alert
                  type="success"
                  text="Thank you! An email window has been opened so you can confirm your donation."
                />
              )}

              <h3 className="donate-form-title">Send us a donation enquiry</h3>
              <p className="muted donate-form-subtitle">
                Share how you’d like to support &mdash; we’ll follow up with
                next steps or a tax-deductible receipt template (for the
                assignment).
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
                Amount / type of support
                <input
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="$50 monthly, food sponsorship, etc."
                  required
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
          </div>
        </div>
      </div>
    </section>
  );
}

// import React, { useState } from "react";
// import Alert from "./Alert";

// export default function DonateSection() {
//   const [sent, setSent] = useState(false);
//   const [amount, setAmount] = useState("");
//   const [name, setName] = useState("");
//   const [note, setNote] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     const subject = encodeURIComponent("Donation / Sponsorship Enquiry");
//     const body = encodeURIComponent(
//       `Name: ${name}
// Amount / type: ${amount}

// Message:
// ${note}`
//     );

//     window.location.href =
//       "mailto:admin@pethaven.org?subject=" + subject + "&body=" + body;
//     setSent(true);
//   }

//   return (
//     <section id="donate" className="donate-section page">
//       <div className="container">
//         <h1>Donate to Pet Haven</h1>
//         <p className="muted">
//           Your support keeps our doors open and our animals safe. You can donate
//           financially or sponsor food, supplies and medical care.
//         </p>

//         {/* TOP TWO CARDS */}
//         <div
//           className="home-cards-row"
//           style={{ marginTop: 24, marginBottom: 24 }}
//         >
//           <div className="home-card">
//             <h3>Bank / PayNow</h3>
//             <p>
//               Add your own fictional or real-looking details here for the
//               assignment:
//             </p>
//             <ul>
//               <li>Bank: Example Bank</li>
//               <li>Account name: Pet Haven Animal Welfare Society</li>
//               <li>Account no.: 12-345-678-9</li>
//               <li>PayNow UEN: 2025PH001A</li>
//             </ul>
//           </div>

//           <div className="home-card">
//             <h3>In-kind donations</h3>
//             <p>You can also donate:</p>
//             <ul>
//               <li>Dry and wet pet food (unopened)</li>
//               <li>Litter, pee pads & cleaning supplies</li>
//               <li>Toys, beds & carriers in good condition</li>
//             </ul>
//           </div>
//         </div>

//         {/* FORM */}
//         <form className="form" onSubmit={handleSubmit}>
//           {sent && (
//             <Alert
//               type="success"
//               text="Thank you! An email window has been opened so you can confirm your donation."
//             />
//           )}

//           <h2>Send us a donation enquiry</h2>

//           <label>
//             Name
//             <input
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="Your full name"
//             />
//           </label>

//           <label>
//             Amount / type of support
//             <input
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//               placeholder="$50 monthly, food sponsorship, etc."
//             />
//           </label>

//           <label>
//             Message
//             <textarea
//               rows="4"
//               value={note}
//               onChange={(e) => setNote(e.target.value)}
//               placeholder="Optional message or questions"
//             />
//           </label>

//           <button className="btn" type="submit">
//             Open email draft
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }
