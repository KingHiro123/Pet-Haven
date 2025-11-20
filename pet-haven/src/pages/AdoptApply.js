// src/pages/AdoptApply.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import { pets } from "../data/pets";
import PetForm from "../components/PetForm";

export default function AdoptApply() {
  const { id } = useParams();
  const pet = pets.find((p) => String(p.id) === String(id));

  const actionWord = pet?.status?.toLowerCase().includes("foster")
    ? "foster"
    : "adopt";

  return (
    <section className="page adopt-page">
      <header className="adopt-header">
        <div className="adopt-header-main">
          <div>
            <h1>
              {actionWord === "foster" ? "Foster application" : "Adoption form"}
            </h1>

            {pet ? (
              <p className="muted">
                You&apos;re applying to {actionWord} <strong>{pet.name}</strong>{" "}
                ({pet.breed}, {pet.age} years).
              </p>
            ) : (
              <p className="muted">
                We couldn&apos;t find that pet, but you can still submit a
                general adoption request.
              </p>
            )}
          </div>

          <Link to="/adopt" className="btn-link">
            ← Back to adoption listings
          </Link>
        </div>
      </header>

      {/* === 2-column layout: left image, right form === */}
      <div className="adopt-apply-layout">
        {/* LEFT SIDE — pet card */}
        {pet && (
          <div className="adopt-apply-left">
            <div className="adopt-apply-card">
              <img src={pet.photo} alt={pet.name} className="adopt-apply-img" />

              <div className="adopt-apply-info">
                <h2>{pet.name}</h2>
                <p className="muted">
                  {pet.breed} • {pet.species} • {pet.age} years old
                </p>

                {pet.status && (
                  <p className="muted">
                    <strong>Status:</strong> {pet.status}
                  </p>
                )}

                {pet.trained != null && (
                  <p className="muted">
                    <strong>Training:</strong>{" "}
                    {pet.trained ? "Trained" : "Not trained"}
                  </p>
                )}

                {pet.habits && (
                  <p className="muted">
                    <strong>Habits:</strong> {pet.habits}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* RIGHT SIDE — form */}
        <div className="adopt-apply-right">
          <PetForm type="adopt" pet={pet} />
        </div>
      </div>
    </section>
  );
}

// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import { pets } from "../data/pets";
// import PetForm from "../components/PetForm";

// export default function AdoptApply() {
//   const { id } = useParams();
//   const pet = pets.find((p) => p.id === id);
//   const actionWord = pet?.status?.toLowerCase().includes("foster")
//     ? "foster"
//     : "adopt";
//   return (
//     <section className="page adopt-page">
//       <header className="adopt-header">
//         <div className="adopt-header-main">
//           <div>
//             <h1>Adoption form</h1>
//             {pet ? (
//               <p className="muted">
//                 You&apos;re applying to {actionWord} <strong>{pet.name}</strong>{" "}
//                 ({pet.breed}, {pet.age} years).
//               </p>
//             ) : (
//               <p className="muted">
//                 We couldn&apos;t find that pet, but you can still submit a
//                 general adoption request.
//               </p>
//             )}
//           </div>

//           <Link to="/adopt" className="btn-secondary">
//             ← Back to adoption listings
//           </Link>
//         </div>
//       </header>

//       {pet && (
//         <div
//           style={{
//             display: "flex",
//             gap: "16px",
//             marginBottom: "20px",
//             alignItems: "center",
//           }}
//         >
//           <img
//             src={pet.photo}
//             alt={pet.name}
//             style={{
//               width: "140px",
//               height: "140px",
//               objectFit: "cover",
//               borderRadius: "16px",
//               border: "1px solid #eee",
//             }}
//           />
//           <div>
//             <h2 style={{ margin: "0 0 4px" }}>{pet.name}</h2>
//             <p className="muted" style={{ margin: 0 }}>
//               {pet.breed} • {pet.species} • {pet.age} years old
//             </p>
//             {pet.status && (
//               <p style={{ margin: "6px 0 0", fontSize: "0.9rem" }}>
//                 <strong>Status:</strong> {pet.status}
//               </p>
//             )}
//             {pet.trained != null && (
//               <p style={{ margin: "2px 0 0", fontSize: "0.9rem" }}>
//                 <strong>Training:</strong>{" "}
//                 {pet.trained ? "Trained" : "Not trained"}
//               </p>
//             )}
//             {pet.habits && (
//               <p style={{ margin: "6px 0 0", fontSize: "0.9rem" }}>
//                 <strong>Habits:</strong> {pet.habits}
//               </p>
//             )}
//           </div>
//         </div>
//       )}

//       <PetForm type="adopt" pet={pet} />
//     </section>
//   );
// }

// import React from "react";
// import { useParams } from "react-router-dom";
// import pets from "../data/pets.json";
// import PetForm from "../components/PetForm";

// export default function AdoptApply() {
//   const { id } = useParams();
//   const pet = pets.find((p) => p.id === id);

//   return (
//     <section className="page">
//       <h1>Adoption form</h1>
//       {pet ? (
//         <>
//           <p className="muted">
//             You’re applying to adopt <strong>{pet.name}</strong> ({pet.breed},{" "}
//             {pet.age} yrs).
//           </p>
//           <PetForm type="adopt" pet={pet} />
//         </>
//       ) : (
//         <>
//           <p className="muted">
//             We couldn’t find that pet, but you can still submit a general
//             adoption request.
//           </p>
//           <PetForm type="adopt" />
//         </>
//       )}
//     </section>
//   );
// }
