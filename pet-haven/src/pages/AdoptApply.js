import React from "react";
import { useParams } from "react-router-dom";
import pets from "../data/pets.json";
import PetForm from "../components/PetForm";

export default function AdoptApply() {
  const { id } = useParams();
  const pet = pets.find((p) => p.id === id);

  return (
    <section className="page">
      <h1>Adoption form</h1>
      {pet ? (
        <>
          <p className="muted">
            You’re applying to adopt <strong>{pet.name}</strong> ({pet.breed},{" "}
            {pet.age} yrs).
          </p>
          <PetForm type="adopt" pet={pet} />
        </>
      ) : (
        <>
          <p className="muted">
            We couldn’t find that pet, but you can still submit a general
            adoption request.
          </p>
          <PetForm type="adopt" />
        </>
      )}
    </section>
  );
}
