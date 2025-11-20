// src/components/HeroCarousel.js
import React, { useState, useEffect } from "react";
const base = process.env.PUBLIC_URL || "";
const slides = [
  {
    id: 1,
    heading: "Rescue, Rehabilitate, Rehome",
    text: "Every adoption changes a life. Find your new best friend today — or help us care for the pets still waiting for a home.",
    image: `${base}/images/dogs/hero-section.jpg`,
  },
  {
    id: 2,
    heading: "Every Tail Deserves a Second Chance",
    text: "Support our rehab programmes so anxious or injured animals can learn to trust again.",
    image: `${base}/images/dogs/hero-section-1.webp`,
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  // auto-rotate every 7 seconds (optional – delete this if you only want manual dots)
  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      7000
    );
    return () => clearInterval(id);
  }, []);

  const current = slides[index];

  return (
    <section
      className="hero"
      // style={{ backgroundImage: `url(${current.image})` }}
    >
      <div className="hero-images">
        {slides.map((slide, i) => (
          <img
            key={slide.id}
            src={slide.image}
            alt=""
            className={`hero-image ${i === index ? "hero-image--active" : ""}`}
          />
        ))}
      </div>
      <div className="hero-overlay">
        <div className="hero-copy">
          <h1>{current.heading}</h1>
          <p>{current.text}</p>
        </div>

        {/* dot indicators only */}
        <div className="hero-dots">
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setIndex(i)}
              className={i === index ? "hero-dot hero-dot--active" : "hero-dot"}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
