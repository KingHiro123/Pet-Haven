// src/components/PetDetailsModal.js
import React from "react";
import { useNavigate } from "react-router-dom";

export default function PetDetailsModal({ pet, onClose }) {
  const nav = useNavigate();

  if (!pet) return null;

  const statusLabel = pet.status || "Adoptable";
  const isAdoptable = statusLabel.toLowerCase().includes("adopt");
  const trainedLabel = pet.trained ? "Trained" : "Not trained";

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {/* close button */}
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        {/* left side: image */}
        {pet.photo && (
          <img
            className="modal-img"
            src={pet.photo}
            alt={pet.breed || pet.name}
          />
        )}

        {/* right side: content */}
        <div className="modal-content">
          {/* Header row: name + status pill */}
          <div className="modal-header-row">
            <div>
              <h2 className="modal-title">{pet.name}</h2>
              <p className="modal-subtitle">
                {pet.breed}
                {pet.species ? ` • ${pet.species}` : ""}
              </p>
            </div>

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

          {/* Key facts grid */}
          <div className="modal-meta">
            {pet.age != null && (
              <div className="modal-meta-item">
                <span className="modal-meta-label">Age</span>
                <span className="modal-meta-value">{pet.age} years</span>
              </div>
            )}

            {pet.trained != null && (
              <div className="modal-meta-item">
                <span className="modal-meta-label">Training</span>
                <span className="modal-meta-value">{trainedLabel}</span>
              </div>
            )}

            {pet.species && (
              <div className="modal-meta-item">
                <span className="modal-meta-label">Type</span>
                <span className="modal-meta-value">{pet.species}</span>
              </div>
            )}
          </div>

          {/* Habits / description */}
          {pet.habits && (
            <div className="modal-section">
              <h3 className="modal-section-title">Habits & personality</h3>
              <p className="modal-section-text">{pet.habits}</p>
            </div>
          )}

          {/* Actions */}
          <div className="modal-actions">
            <button
              type="button"
              className="btn"
              onClick={() => nav(`/adopt/${pet.id}/apply`)}
            >
              Apply to adopt
            </button>
            <button type="button" className="btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function PetDetailsModal({ pet, onClose }) {
//   const nav = useNavigate();

//   return (
//     <div className="modal-backdrop" onClick={onClose}>
//       <div className="modal" onClick={(e) => e.stopPropagation()}>
//         <img src={pet.photo} alt={pet.name} className="modal-img" />
//         <div className="modal-content">
//           <h2>{pet.name}</h2>

//           <ul className="facts">
//             <li>
//               <strong>Name:</strong> {pet.name}
//             </li>
//             <li>
//               <strong>Breed:</strong> {pet.breed}
//             </li>
//             {pet.species && (
//               <li>
//                 <strong>Species:</strong> {pet.species}
//               </li>
//             )}
//             {pet.age && (
//               <li>
//                 <strong>Age:</strong> {pet.age} years
//               </li>
//             )}
//             {pet.trained !== undefined && (
//               <li>
//                 <strong>Training:</strong>{" "}
//                 {pet.trained ? "Trained" : "Not trained"}
//               </li>
//             )}
//             {pet.habits && (
//               <li>
//                 <strong>Habits:</strong> {pet.habits}
//               </li>
//             )}
//             <li>
//               <strong>Availability:</strong> {pet.status || "Adoptable"}
//             </li>
//           </ul>

//           <div className="modal-actions">
//             <button
//               onClick={() => nav(`/adopt/${pet.id}/apply`)}
//               className="btn"
//             >
//               Apply to adopt
//             </button>
//             <button onClick={onClose} className="btn-secondary">
//               Close
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
