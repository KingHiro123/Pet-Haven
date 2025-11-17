// src/components/PetCard.js
import React from "react";

export default function PetCard({ pet, onOpen, disableClick }) {
  const statusLabel = pet.status || "Adoptable";
  const isAdoptable = statusLabel.toLowerCase().includes("adopt");

  return (
    <button
      className="adopt-card"
      type="button"
      onClick={() => {
        if (!disableClick && onOpen) onOpen(pet);
      }}
      style={{ cursor: disableClick ? "default" : "pointer" }}
    >
      <img src={pet.photo} alt={pet.breed} />
      <div className="adopt-card__details">
        <h3>{pet.name}</h3>
        <p>{pet.breed}</p>
        {pet.age && <p>Age: {pet.age} years</p>}

        <div className="status-row">
          <span
            className={
              isAdoptable
                ? "status-tag status-tag--adopt"
                : "status-tag status-tag--foster"
            }
          >
            {statusLabel}
          </span>
        </div>
      </div>
    </button>
  );
}

// import React, { useMemo } from "react";
// import { generatePetDetails } from "./PetDataGenerator";

// export default function PetCard({ pet, onOpen }) {
//   // generate details ONCE per pet (not every re-render)
//   const details = useMemo(() => generatePetDetails(pet.species), [pet.id]);

//   const displayPet = { ...pet, ...details };

//   return (
//     <article className="pet-card" onClick={() => onOpen(displayPet)}>
//       <img
//         src={displayPet.photo}
//         alt={`${displayPet.name} the ${displayPet.breed}`}
//       />
//       <div className="pet-body">
//         <h3>{displayPet.name}</h3>
//         <p className="muted">
//           {displayPet.breed} • {displayPet.age} yrs
//         </p>
//         <div className="chips">
//           {displayPet.vaccinated && <span className="chip">Vaccinated</span>}
//           {displayPet.hdbTrained && <span className="chip">HDB trained</span>}
//         </div>
//       </div>
//     </article>
//   );
// }
