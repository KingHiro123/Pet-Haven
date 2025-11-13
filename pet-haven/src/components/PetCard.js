import React from "react";

export default function PetCard({ pet, onOpen }) {
  return (
    <article className="pet-card" onClick={() => onOpen(pet)}>
      <img src={pet.photo} alt={`${pet.name} the ${pet.breed}`} />
      <div className="pet-body">
        <h3>{pet.name}</h3>
        <p className="muted">
          {pet.breed} • {pet.age} yrs
        </p>
        <div className="chips">
          {pet.vaccinated && <span className="chip">Vaccinated</span>}
          {pet.hdbTrained && <span className="chip">HDB trained</span>}
        </div>
      </div>
    </article>
  );
}
