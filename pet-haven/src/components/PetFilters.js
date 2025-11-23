// src/components/PetFilters.js
import React from "react";

export default function PetFilters({
  speciesFilter,
  setSpeciesFilter,
  statusFilter,
  setStatusFilter,
  ageFilter,
  setAgeFilter,
  breedFilter,
  setBreedFilter,
  showStatus = true,
  showBreed = true,
}) {
  function handleReset() {
    setSpeciesFilter("all");
    setAgeFilter("all");

    // only reset if these filters are being shown
    if (showStatus && setStatusFilter) {
      setStatusFilter("all");
    }
    if (showBreed && setBreedFilter) {
      setBreedFilter("all");
    }
  }
  return (
    <div className="filter-controls">
      {/* Species */}
      <label>
        <span>Species</span>
        <select
          value={speciesFilter}
          onChange={(e) => setSpeciesFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="Dog">Dogs</option>
          <option value="Cat">Cats</option>
        </select>
      </label>

      {/* Status – hidden on Gallery when showStatus=false */}
      {showStatus && (
        <label>
          <span>Status</span>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="adoptable">Adoptable</option>
            <option value="foster">Foster only</option>
          </select>
        </label>
      )}

      {/* Age (with ranges) */}
      <label>
        <span>Age</span>
        <select
          value={ageFilter}
          onChange={(e) => setAgeFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="1-2">1 – 2 years</option>
          <option value="3-5">3 – 5 years</option>
          <option value="6-8">6 – 8 years</option>
          <option value="9-11">9 – 11 years</option>
        </select>
      </label>

      {/* Breed – hidden on Gallery when showBreed=false */}
      {showBreed && (
        <label>
          <span>Breed</span>
          <select
            value={breedFilter}
            onChange={(e) => setBreedFilter(e.target.value)}
          >
            <option value="all">All</option>

            {/* Dogs */}
            <option value="Golden Retriever">Golden Retriever</option>
            <option value="Pomeranian">Pomeranian</option>
            <option value="Beagle">Beagle</option>
            <option value="Samoyed">Samoyed</option>
            <option value="Shiba Inu">Shiba Inu</option>
            <option value="Corgi">Corgi</option>
            <option value="French Bulldog">French Bulldog</option>
            <option value="German Shepherd">German Shepherd</option>

            {/* Cats */}
            <option value="Domestic Shorthair">Domestic Shorthair</option>
            <option value="White Shorthair">White Shorthair</option>
            <option value="Grey Tabby">Grey Tabby</option>
            <option value="Calico">Calico</option>
            <option value="Black Cat">Black Cat</option>
            <option value="Tabby Kitten">Tabby Kitten</option>
            <option value="British Shorthair">British Shorthair</option>
            <option value="White Longhair">White Longhair</option>
          </select>
        </label>
      )}

      {/* Reset button */}
      <button type="button" className="filter-reset" onClick={handleReset}>
        Reset filters
      </button>
    </div>
  );
}
