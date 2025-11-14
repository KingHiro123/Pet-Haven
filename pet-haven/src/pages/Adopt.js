// src/pages/Adopt.js
import React from "react";
import { pets } from "../data/pets";
import PetList from "../components/PetList";

export default function Adopt() {
  return (
    <section className="page adopt-page">
      <header className="adopt-header">
        <h1>Adoption</h1>
        <p className="muted">
          Browse dogs available for adoption. Click a card for more information.
        </p>
      </header>

      <PetList pets={pets} />
    </section>
  );
}

// import React, { useState, useEffect } from "react";
// import PetList from "../components/PetList";

// const CAT_URL = "https://api.thecatapi.com/v1/images/search?limit=15";
// const DOG_URL = "https://api.thedogapi.com/v1/images/search?limit=15";

// export default function Adopt() {
//   const [pets, setPets] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function load() {
//       const [catRes, dogRes] = await Promise.all([
//         fetch(CAT_URL),
//         fetch(DOG_URL),
//       ]);
//       const [catData, dogData] = await Promise.all([
//         catRes.json(),
//         dogRes.json(),
//       ]);

//       const cats = catData.map((item, i) => ({
//         id: `cat-${item.id || i}`,
//         species: "Cat",
//         breed: item.breeds?.[0]?.name || "Mixed breed",
//         photo: item.url,
//       }));

//       const dogs = dogData.map((item, i) => ({
//         id: `dog-${item.id || i}`,
//         species: "Dog",
//         breed: item.breeds?.[0]?.name || "Mixed breed",
//         photo: item.url,
//       }));

//       setPets([...cats, ...dogs]);
//       setLoading(false);
//     }

//     load();
//   }, []);

//   return (
//     <section className="page adopt-page">
//       <h1>Adoption</h1>
//       {loading && <p className="muted">Loading pets…</p>}
//       <PetList pets={pets} />
//     </section>
//   );
// }
