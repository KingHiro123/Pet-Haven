// src/pages/Adopt.js
import React, { useState } from "react";
import pets from "../data/pets.json";
import PetDetailsModal from "../components/PetDetailsModal";

export default function Adopt() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="page adopt-page">
      <header className="adopt-header">
        <h1>Adoption</h1>
        <p className="muted">
          Browse our current cats and dogs. Hover to see quick info, and click
          for full details.
        </p>
      </header>

      <div className="adopt-grid">
        {pets.map((pet, index) => (
          <button
            key={pet.id}
            type="button"
            className={
              index === 0 ? "adopt-card adopt-card--featured" : "adopt-card"
            }
            onClick={() => setSelected(pet)}
          >
            <img src={pet.photo} alt={pet.name} />
            <div className="adopt-card__details">
              <h3>{pet.name}</h3>
              <p>
                {pet.breed} • {pet.age} yrs
              </p>
              <p className="muted">
                {pet.vaccinated ? "Vaccinated" : "Not vaccinated"}{" "}
                {pet.hdbTrained ? "• HDB trained" : ""}
              </p>
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <PetDetailsModal pet={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
