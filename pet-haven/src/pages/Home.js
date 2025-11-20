// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";
import { pets } from "../data/pets"; // if you're still using pets.json, swap this back
import HeroCarousel from "../components/HeroCarousel";
import Donate from "../components/donate";

export default function Home() {
  const featuredPets = pets.slice(0, 3);

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

      {/* MEMBERSHIP + ADOPTION CTAs just below hero
      <section className="container">
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

           Adoption CTA box 
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
          <h3>Help us</h3>
          <p>
            Volunteer, donate, or sponsor a pet to keep tails wagging and
            purring.
          </p>
          <Link to="/volunteer" className="home-card-link">
            LEARN MORE »
          </Link>
        </div>
      </section>

      {/* ADOPTION PREVIEW – 3 cards styled like Adopt page */}
      <section className="container adoption-section">
        <div className="adoption-section-header">
          <div>
            <h2>Adoption</h2>
            <p className="muted">
              A quick peek at some of the pets currently ready for adoption.
            </p>
          </div>

          <Link to="/adopt" className="adoption-section-link">
            View more pets →
          </Link>
        </div>

        <div className="adopt-grid adopt-grid--home">
          {featuredPets.map((pet) => (
            <Link
              key={pet.id}
              to="/adopt"
              className="adopt-card adopt-card--home"
            >
              <img src={pet.photo} alt={pet.name} />
              <div className="adopt-overlay">
                <h3>{pet.name}</h3>
                <p>
                  {pet.breed} • {pet.age} years
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* DONATE SECTION */}
      <Donate />
    </>
  );
}

// import React from "react";
// import { Link } from "react-router-dom";
// import pets from "../data/pets.json";

// export default function Home() {
//   const featuredPets = pets.slice(0, 3);

//   return (
//     <>
//       {/* HERO – big background with membership + adoption boxes at bottom */}
//       <section className="hero">
//         <div className="hero-overlay">
//           <div className="hero-copy">
//             <h1>Pet Haven</h1>
//             <p>
//               A charity society that cares for the welfare of abandoned cats and
//               dogs, and finds them a safe, loving home.
//             </p>
//           </div>

//           <div className="hero-bottom-row">
//             {/* Membership / login box */}
//             <div className="hero-box hero-box--membership">
//               <h2>Become a member</h2>
//               <p>
//                 Support our work, get updates on new pets, and help us care for
//                 animals in need.
//               </p>
//               <div className="hero-box-actions">
//                 <Link to="/login" className="btn-secondary">
//                   Login
//                 </Link>
//                 <Link to="/register" className="btn">
//                   Register
//                 </Link>
//               </div>
//             </div>

//             {/* Adoption CTA box */}
//             <div className="hero-box hero-box--adopt">
//               <h2>Adopt a pet</h2>
//               <p>
//                 Ready to welcome a new friend? Browse pets that are currently
//                 looking for a home.
//               </p>
//               <Link to="/adopt" className="btn">
//                 View pets for adoption
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* MAIN PAGE PART TWO – row of cards, then adoption strip with “view more” */}
//       <section className="container home-cards-row">
//         <div className="home-card">
//           <h3>About us</h3>
//           <p>
//             Learn how Pet Haven rescues, rehabilitates and rehomes abandoned
//             animals.
//           </p>
//           <Link to="/about" className="home-card-link">
//             Learn more →
//           </Link>
//         </div>

//         <div className="home-card">
//           <h3>Facilities</h3>
//           <p>
//             See our spaces for play, medical care and safe housing for every
//             pet.
//           </p>
//           <Link to="/facilities" className="home-card-link">
//             View facilities →
//           </Link>
//         </div>

//         <div className="home-card">
//           <h3>Help us</h3>
//           <p>
//             Volunteer, donate, or sponsor a pet to keep tails wagging and
//             purring.
//           </p>
//           <Link to="/help" className="home-card-link">
//             How you can help →
//           </Link>
//         </div>
//       </section>

//       <section className="container adoption-preview">
//         <div className="adoption-preview__header">
//           <h2>Adoption</h2>
//           <p className="muted">
//             A quick peek at some of the pets currently ready for adoption.
//           </p>
//         </div>

//         <div className="adoption-preview__grid">
//           {featuredPets.map((pet) => (
//             <div key={pet.id} className="adoption-preview__card">
//               <img src={pet.photo} alt={pet.name} />
//               <div className="adoption-preview__card-body">
//                 <h3>{pet.name}</h3>
//                 <p className="muted">
//                   {pet.breed} • {pet.age} yrs
//                 </p>
//               </div>
//             </div>
//           ))}

//           {/* “View more” big card on the right */}
//           <Link to="/adopt" className="adoption-preview__more">
//             <span>View more pets</span>
//           </Link>
//         </div>
//       </section>
//     </>
//   );
// }
