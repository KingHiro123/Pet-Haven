// src/components/PetCard.js
import React, { useMemo } from "react";
import { getNameById } from "./PetDataGenerator"; // or your name generator

export default function PetCard({ pet, onOpen }) {
  // Stable name (no random)
  const displayName = useMemo(() => getNameById(pet.id), [pet.id]);

  const displayPet = { ...pet, name: displayName };

  return (
    <button
      className="adopt-card"
      type="button"
      onClick={() => onOpen(displayPet)}
    >
      <img src={displayPet.photo} alt={displayPet.breed} />

      <div className="adopt-card__details">
        <h3>{displayName}</h3>
        <p>{displayPet.breed}</p>

        <p className="muted">
          {displayPet.vaccinated ? "Vaccinated" : "Not vaccinated"}{" "}
          {displayPet.hdbTrained ? "• HDB trained" : ""}
        </p>
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
