import React from "react";
import PetForm from "../components/PetForm";

export default function Release() {
  return (
    <section className="page">
      <h1>Release a Pet</h1>
      <p className="muted">
        If you are unable to continue care, we are here to help. Our team will
        review and contact you.
      </p>
      <PetForm type="release" />
    </section>
  );
}
