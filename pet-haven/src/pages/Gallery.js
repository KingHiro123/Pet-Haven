// src/pages/Gallery.js
import React, { useState, useEffect } from "react";
import PetList from "../components/PetList";
import { getNameById } from "../components/PetDataGenerator";
import PetFilters from "../components/PetFilters";

const CAT_URL =
  "https://api.thecatapi.com/v1/images/search?limit=12&has_breeds=1";
const DOG_URL =
  "https://api.thedogapi.com/v1/images/search?limit=12&has_breeds=1";

export default function Gallery() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [speciesFilter, setSpeciesFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [ageFilter, setAgeFilter] = useState("all");
  const [breedFilter, setBreedFilter] = useState("all");

  // 🔽 THIS PART IS NEW: actually apply the filters
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
  useEffect(() => {
    async function load() {
      try {
        const [catRes, dogRes] = await Promise.all([
          fetch(CAT_URL),
          fetch(DOG_URL),
        ]);

        const [catData, dogData] = await Promise.all([
          catRes.json(),
          dogRes.json(),
        ]);

        const cats = catData.map((item, i) => {
          const breedInfo = item.breeds?.[0];
          const id = `gallery-cat-${item.id || i}`;
          return {
            id,
            species: "Cat",
            name: getNameById(id),
            breed: breedInfo?.name || "Domestic Cat",
            photo: item.url,
            age: Math.floor(Math.random() * 10) + 1,
            status: Math.random() > 0.4 ? "Adoptable" : "Foster only",
          };
        });

        const dogs = dogData.map((item, i) => {
          const breedInfo = item.breeds?.[0];
          const id = `gallery-dog-${item.id || i}`;
          return {
            id,
            species: "Dog",
            name: getNameById(id),
            breed: breedInfo?.name || "Mixed Breed Dog",
            photo: item.url,
            age: Math.floor(Math.random() * 10) + 1,
            status: Math.random() > 0.4 ? "Adoptable" : "Foster only",
          };
        });

        setPets([...cats, ...dogs]);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return (
    <section className="page adopt-page">
      <header className="adopt-header">
        <div className="adopt-header-main">
          <div>
            <h1>Gallery</h1>
            <p className="muted">
              View a gallery of animals from online sources. Hover for basic
              info.
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

      {loading && <p className="muted">Loading gallery pets…</p>}

      {/* ✅ disableClick → no modal, no click interaction */}
      <PetList pets={filteredPets} disableClick={true} />
    </section>
  );
}
