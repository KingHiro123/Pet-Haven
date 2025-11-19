// src/pages/Gallery.js
import React, { useState, useEffect, useMemo } from "react";
import PetList from "../components/PetList";
import PetFilters from "../components/PetFilters";
import { getNameById } from "../components/PetDataGenerator";

const CAT_URL =
  "https://api.thecatapi.com/v1/images/search?limit=12&has_breeds=1";
const DOG_URL =
  "https://api.thedogapi.com/v1/images/search?limit=12&has_breeds=1";

export default function Gallery() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  const [speciesFilter, setSpeciesFilter] = useState("all");
  const [ageFilter, setAgeFilter] = useState("all");

  // we still keep these just to satisfy PetFilters props,
  // but we won't use them in filtering
  const [statusFilter, setStatusFilter] = useState("all");
  const [breedFilter, setBreedFilter] = useState("all");

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
          };
        });

        setPets([...cats, ...dogs]);
      } catch (e) {
        console.error("Error loading gallery pets", e);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  const filteredPets = useMemo(() => {
    return pets.filter((pet) => {
      const speciesOk =
        speciesFilter === "all" || pet.species === speciesFilter;

      const ageOk =
        ageFilter === "all" ||
        (() => {
          const [min, max] = ageFilter.split("-").map(Number);
          return pet.age >= min && pet.age <= max;
        })();

      // no status / breed filtering on Gallery
      return speciesOk && ageOk;
    });
  }, [pets, speciesFilter, ageFilter]);

  return (
    <section className="page adopt-page">
      <header className="adopt-header">
        <div className="adopt-header-main">
          <div>
            <h1>Gallery</h1>
            <p className="muted">
              View a gallery of animals from online sources. Hover to see their
              names and ages.
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
            showStatus={false} // 🔹 hide Status dropdown
            showBreed={false} // 🔹 hide Breed dropdown
          />
        </div>
      </header>

      {loading && <p className="muted">Loading gallery pets…</p>}

      <PetList
        pets={filteredPets}
        disableClick={true} // no modal
        showBreed={false} // 🔹 hide breed on hover
        showStatus={false} // 🔹 hide status tag on hover
      />
    </section>
  );
}
