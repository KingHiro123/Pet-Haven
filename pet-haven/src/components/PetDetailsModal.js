import React from "react";
import { useNavigate } from "react-router-dom";

export default function PetDetailsModal({ pet, onClose }) {
  const nav = useNavigate();

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <img src={pet.photo} alt={pet.name} className="modal-img" />
        <div className="modal-content">
          <h2>{pet.name}</h2>
          <ul className="facts">
            <li>Breed: {pet.breed}</li>
            {/* <li>Age: {pet.age}</li>
            <li>Color: {pet.color}</li> */}
            <li>Vaccinated: {pet.vaccinated ? "Yes" : "No"}</li>
            <li>HDB trained: {pet.hdbTrained ? "Yes" : "No"}</li>
          </ul>
          <div className="modal-actions">
            {/* <button onClick={() => nav(`/adopt?pet=${pet.id}`)} className="btn"> */}
            <button
              onClick={() => nav(`/adopt/${pet.id}/apply`)}
              className="btn"
            >
              Apply to adopt
            </button>
            <button onClick={onClose} className="btn-secondary">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
