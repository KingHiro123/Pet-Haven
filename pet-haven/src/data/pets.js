// src/data/pets.js
import { getNameById } from "../components/PetDataGenerator";

export const pets = [
  // -------------------
  // DOGS (original 5)
  // -------------------
  {
    id: "1",
    species: "Dog",
    breed: "Golden Retriever",
    photo: "https://images.unsplash.com/photo-1507146426996-ef05306b995a",
    vaccinated: true,
    hdbTrained: false,
    name: getNameById("1"),
  },
  {
    id: "2",
    species: "Dog",
    breed: "Pomeranian",
    photo: "https://images.unsplash.com/photo-1509914398892-98d7f80a6760",
    vaccinated: false,
    hdbTrained: true,
    name: getNameById("2"),
  },
  {
    id: "3",
    species: "Dog",
    breed: "Beagle",
    photo: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
    vaccinated: true,
    hdbTrained: false,
    name: getNameById("3"),
  },
  {
    id: "4",
    species: "Dog",
    breed: "Samoyed",
    photo: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b6",
    vaccinated: false,
    hdbTrained: false,
    name: getNameById("4"),
  },
  {
    id: "5",
    species: "Dog",
    breed: "Shiba Inu",
    photo: "https://images.unsplash.com/photo-1517849845537-4d257902454a",
    vaccinated: true,
    hdbTrained: false,
    name: getNameById("5"),
  },

  // -------------------
  // NEW DOGS (3)
  // -------------------
  {
    id: "6",
    species: "Dog",
    breed: "Corgi",
    photo: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8",
    vaccinated: true,
    hdbTrained: true,
    name: getNameById("6"),
  },
  {
    id: "7",
    species: "Dog",
    breed: "French Bulldog",
    photo: "https://images.unsplash.com/photo-1558944351-c6c1468ab01b",
    vaccinated: false,
    hdbTrained: true,
    name: getNameById("7"),
  },
  {
    id: "8",
    species: "Dog",
    breed: "German Shepherd",
    photo: "https://images.unsplash.com/photo-1561037404-61cd46aa615b",
    vaccinated: true,
    hdbTrained: false,
    name: getNameById("8"),
  },

  // -------------------
  // CATS (8)
  // -------------------
  {
    id: "9",
    species: "Cat",
    breed: "Domestic Shorthair",
    photo: "https://images.unsplash.com/photo-1595433562696-19c64c0b27aa",
    vaccinated: true,
    hdbTrained: false,
    name: getNameById("9"),
  },
  {
    id: "10",
    species: "Cat",
    breed: "White Shorthair",
    photo: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131",
    vaccinated: true,
    hdbTrained: false,
    name: getNameById("10"),
  },
  {
    id: "11",
    species: "Cat",
    breed: "Grey Tabby",
    photo: "https://images.unsplash.com/photo-1510337550647-e84f83e341ca",
    vaccinated: false,
    hdbTrained: false,
    name: getNameById("11"),
  },
  {
    id: "12",
    species: "Cat",
    breed: "Calico",
    photo: "https://images.unsplash.com/photo-1501820434261-5bb046afcf6c",
    vaccinated: true,
    hdbTrained: false,
    name: getNameById("12"),
  },
  {
    id: "13",
    species: "Cat",
    breed: "Black Cat",
    photo: "https://images.unsplash.com/photo-1518799882139-f953892fa0db",
    vaccinated: true,
    hdbTrained: false,
    name: getNameById("13"),
  },
  {
    id: "14",
    species: "Cat",
    breed: "Tabby Kitten",
    photo: "https://images.unsplash.com/photo-1518791841217-e76e7da5f4e6",
    vaccinated: false,
    hdbTrained: false,
    name: getNameById("14"),
  },
  {
    id: "15",
    species: "Cat",
    breed: "British Shorthair",
    photo: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba",
    vaccinated: true,
    hdbTrained: false,
    name: getNameById("15"),
  },
  {
    id: "16",
    species: "Cat",
    breed: "White Longhair",
    photo: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb",
    vaccinated: true,
    hdbTrained: false,
    name: getNameById("16"),
  },
];
