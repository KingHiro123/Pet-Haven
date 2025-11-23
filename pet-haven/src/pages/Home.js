// src/pages/Home.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeroCarousel from "../components/HeroCarousel";
import Donate from "../components/donate";
import { getNameById } from "../components/PetDataGenerator";

export default function Home() {
  // gallery preview animals
  const [previewPets, setPreviewPets] = useState([]);
  const [loadingPreview, setLoadingPreview] = useState(true);

  const CAT_URL =
    "https://api.thecatapi.com/v1/images/search?limit=3&has_breeds=1";
  const DOG_URL =
    "https://api.thedogapi.com/v1/images/search?limit=3&has_breeds=1";
  useEffect(() => {
    async function loadPreview() {
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
          const id = `gallery-cat-${item.id || i}`;
          return {
            id,
            species: "Cat",
            name: getNameById(id),
            photo: item.url,
            age: Math.floor(Math.random() * 10) + 1,
          };
        });

        const dogs = dogData.map((item, i) => {
          const id = `home-dog-${item.id || i}`;
          return {
            id,
            species: "Cat",
            name: getNameById(id),
            photo: item.url,
            age: Math.floor(Math.random() * 10) + 1,
          };
        });

        // ensure ONLY 6 total
        setPreviewPets([...cats, ...dogs].slice(0, 6));
      } catch (e) {
        console.error("Home gallery preview failed", e);
      } finally {
        setLoadingPreview(false);
      }
    }

    loadPreview();
  }, []);

  return (
    <>
      {/* HERO – full image with carousel dots */}
      <HeroCarousel />
      {/* MEMBERSHIP + ADOPTION CTAs */}
      {/* <section className="cta-section">
        <div className="container">
          <div className="hero-bottom-row">
            <div className="hero-box hero-box--membership">
              <h2>Become a member</h2>
              <p>
                Support our work, get updates on new pets, and help us care for
                animals in need.
              </p>
              <div className="hero-box-actions">
                <Link to="/auth" className="btn-secondary">
                  Login
                </Link>
                <Link to="/membership" className="btn">
                  Register
                </Link>
              </div>
            </div>

            <div className="hero-box hero-box--adopt">
              <h2>Adopt a pet</h2>
              <p>
                Ready to welcome a new friend? Browse pets that are currently
                looking for a home.
              </p>
              <Link to="/adopt" className="btn">
                View pets for adoption
              </Link>
            </div>
          </div>
        </div>
      </section> */}

      {/* SERVICES / INFO CARDS – About, Facilities, Help us */}
      <section className="container home-cards-row">
        <div className="home-card">
          <h3>About us</h3>
          <p>
            Learn how Pet Haven rescues, rehabilitates and rehomes abandoned
            animals.
          </p>
          <Link to="/about" className="home-card-link">
            LEARN MORE »
          </Link>
        </div>

        <div className="home-card">
          <h3>Facilities</h3>
          <p>
            See our spaces for play, medical care and safe housing for every
            pet.
          </p>
          <Link to="/facilities" className="home-card-link">
            LEARN MORE »
          </Link>
        </div>

        <div className="home-card">
          <h3>Volunteer</h3>
          <p>
            Volunteer, donate, or sponsor a pet to keep tails wagging and
            purring.
          </p>
          <Link to="/volunteer" className="home-card-link">
            LEARN MORE »
          </Link>
        </div>
      </section>

      {/* GALLERY PREVIEW – exactly 6 images */}
      <section className="container gallery-section">
        <div className="gallery-section-header">
          <div>
            <h2>Gallery</h2>
            <p className="muted">
              A quick look at some of the animals featured in our gallery.
            </p>
          </div>

          <Link to="/gallery" className="gallery-section-link">
            View full gallery →
          </Link>
        </div>

        {loadingPreview && <p className="muted">Loading gallery preview…</p>}

        <div className="gallery-preview-grid">
          {previewPets.map((pet) => (
            // <Link key={pet.id} to="/gallery" className="gallery-preview-card">

            // </Link>
            <div key={pet.id} className="gallery-preview-card">
              <img
                src={pet.photo}
                alt={pet.name}
                className="gallery-preview-img"
              />
              <div className="gallery-preview-overlay">
                <h3>{pet.name}</h3>
                <p>{pet.age} years old</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DONATE SECTION */}
      <Donate />
    </>
  );
}
