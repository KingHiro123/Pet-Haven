// src/pages/Adopt.js
import React, { useState } from "react";
import { pets } from "../data/pets";
import PetList from "../components/PetList";
import PetFilters from "../components/PetFilters";

export default function Adopt() {
  const [speciesFilter, setSpeciesFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [ageFilter, setAgeFilter] = useState("all");
  const [breedFilter, setBreedFilter] = useState("all"); // 🔽 THIS PART IS NEW: actually apply the filters
  const filteredPets = pets.filter((pet) => {
    // species
    const speciesOk = speciesFilter === "all" || pet.species === speciesFilter;

    // status (Adoptable / Foster only)
    const statusOk =
      statusFilter === "all" ||
      (statusFilter === "adoptable"
        ? pet.status?.toLowerCase().includes("adopt")
        : pet.status?.toLowerCase().includes("foster"));

    // age ranges: "1-2", "3-5", "6-8", "9-11"
    const ageOk =
      ageFilter === "all" ||
      (() => {
        const [min, max] = ageFilter.split("-").map(Number);
        return pet.age >= min && pet.age <= max;
      })();

    // breed
    const breedOk = breedFilter === "all" || pet.breed === breedFilter;

    return speciesOk && statusOk && ageOk && breedOk;
  });
  return (
    <section className="page adopt-page">
      <header className="adopt-header">
        <div className="adopt-header-main">
          <div>
            <h1>Adoption</h1>
            <p className="muted">
              Browse animals available for adoption or fostering.
            </p>
          </div>

          <PetFilters
            speciesFilter={speciesFilter}
            setSpeciesFilter={setSpeciesFilter}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            ageFilter={ageFilter}
            setAgeFilter={setAgeFilter}
            breedFilter={breedFilter}
            setBreedFilter={setBreedFilter}
          />
        </div>
      </header>

      <PetList pets={filteredPets} />
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
