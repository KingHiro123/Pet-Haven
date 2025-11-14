// src/components/PetDataGenerator.js

const petNames = [
  "Mochi",
  "Pumpkin",
  "Luna",
  "Coco",
  "Snowy",
  "Bubbles",
  "Nugget",
  "Peanut",
  "Milo",
  "Whiskers",
  "Shadow",
  "Lucky",
  "Sushi",
  "Marshmallow",
  "Pip",
  "Pepper",
  "Nala",
  "Simba",
  "Oreo",
  "Sunny",
  "Tofu",
  "Kai",
  "Hazel",
  "Ziggy",
  "Kopi",
  "Latte",
  "Miso",
  "Nova",
  "Pudding",
  "Pebbles",
];

export function getNameById(id) {
  // convert ID (string) into a number
  let num = 0;
  for (let i = 0; i < id.length; i++) {
    num += id.charCodeAt(i);
  }

  // pick a name based on ID
  return petNames[num % petNames.length];
}
