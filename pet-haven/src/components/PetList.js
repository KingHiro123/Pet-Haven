import React, { useState } from "react";
import PetCard from "./PetCard";
import PetDetailsModal from "./PetDetailsModal";

export default function PetList({ pets }) {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section className="grid">
        {pets.map((p) => (
          <PetCard key={p.id} pet={p} onOpen={setSelected} />
        ))}
      </section>
      {selected && (
        <PetDetailsModal pet={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
