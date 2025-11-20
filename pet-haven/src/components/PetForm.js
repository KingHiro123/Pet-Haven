// src/components/PetForm
import React, { useState } from "react";
import Alert from "./Alert";

export default function PetForm({ type, pet }) {
  const [data, setData] = useState({
    // About you
    personName: "",
    email: "",
    phone: "",
    occupation: "",

    // Home environment
    householdSize: "",
    housingType: "", // HDB / Condo / Landed / Others
    hasPermission: false, // landlord/HDB permission
    outdoorSpace: "", // e.g. balcony, small yard

    // Experience with pets
    hasOtherPets: false,
    otherPetsDetails: "",
    petExperience: "",
    dailyTime: "",

    // Pet info (pre-filled when pet is provided)
    petName: pet?.name || "",
    petAge: pet?.age?.toString() || "",
    petBreed: pet?.breed || "",

    // Extra notes / reason
    notes: "",
  });

  const [sent, setSent] = useState(false);

  function update(e) {
    const { name, value, type: inputType, checked } = e.target;
    setData((d) => ({
      ...d,
      [name]: inputType === "checkbox" ? checked : value,
    }));
  }
  function onSubmit(e) {
    e.preventDefault();

    const newErrors = {};
    if (!data.personName) newErrors.personName = "Please enter your full name.";
    if (!data.email) newErrors.email = "Please enter your email address.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({}); // clear if no errors

    // Build form summary (optional, can be removed)
    const isAdopt = type === "adopt";

    const petBlock =
      isAdopt && pet
        ? `Pet details:
- Name: ${pet.name}
- Age: ${pet.age ?? "N/A"} years
- Breed: ${pet.breed ?? "N/A"}
- Status: ${pet.status ?? "N/A"}
- Trained: ${pet.trained ? "Yes" : "No"}`
        : `Pet details:
- Name: ${data.petName || "N/A"}
- Age: ${data.petAge || "N/A"}
- Breed: ${data.petBreed || "N/A"}`;

    // ⭐ NEW: Only show the alert, don’t send any email
    console.log("Form submitted (no email sent): ", {
      ...data,
      formType: type,
      petBlock,
    });

    setSent(true); // 🔥 This is what triggers <Alert />
  }

  //   function onSubmit(e) {
  //     e.preventDefault();

  //     const newErrors = {};
  //     if (!data.personName) newErrors.personName = "Please enter your full name.";
  //     if (!data.email) newErrors.email = "Please enter your email address.";

  //     if (Object.keys(newErrors).length > 0) {
  //       setErrors(newErrors);
  //       return;
  //     }

  //     setErrors({}); // clear if ok

  //     const isAdopt = type === "adopt";

  //     const subject = encodeURIComponent(
  //       isAdopt
  //         ? `Adoption Request: ${pet?.name || data.petName || "Pet"}`
  //         : `Release Request: ${data.petName || "Pet"}`
  //     );

  //     const petBlock =
  //       isAdopt && pet
  //         ? `Pet details (from listing):
  // - Name: ${pet.name}
  // - Age: ${pet.age ?? "N/A"} years
  // - Breed: ${pet.breed ?? "N/A"}
  // - Status: ${pet.status ?? "N/A"}
  // - Trained: ${pet.trained ? "Yes" : "No"}
  // `
  //         : `Pet details:
  // - Name: ${data.petName || "N/A"}
  // - Age: ${data.petAge || "N/A"}
  // - Breed: ${data.petBreed || "N/A"}
  // `;

  //     const body = encodeURIComponent(
  //       `Form type: ${isAdopt ? "Adoption" : "Release"}

  // ABOUT YOU
  // - Full name: ${data.personName}
  // - Email: ${data.email}
  // - Phone: ${data.phone || "N/A"}
  // - Occupation: ${data.occupation || "N/A"}

  // YOUR HOME
  // - Household size: ${data.householdSize || "N/A"}
  // - Housing type: ${data.housingType || "N/A"}
  // - Landlord / HDB permission obtained: ${
  //         data.hasPermission ? "Yes" : "No / Not sure"
  //       }
  // - Outdoor space: ${data.outdoorSpace || "N/A"}

  // YOUR EXPERIENCE WITH PETS
  // - Other pets at home: ${data.hasOtherPets ? "Yes" : "No"}
  // ${
  //   data.hasOtherPets
  //     ? `- Other pets details: ${data.otherPetsDetails || "N/A"}\n`
  //     : ""
  // }- Previous experience with pets: ${data.petExperience || "N/A"}
  // - Approx. hours at home per day: ${data.dailyTime || "N/A"}

  // ${petBlock}
  // ${
  //   isAdopt
  //     ? `WHY THIS PET
  // ${data.notes || "-"}`
  //     : `REASON FOR REHOMING / OTHER DETAILS
  // ${data.notes || "-"}`
  // }
  // `
  //     );

  //     window.location.href =
  //       "mailto:admin@pethaven.org?subject=" + subject + "&body=" + body;

  //     setSent(true);
  //   }

  const isAdoptWithPet = type === "adopt" && !!pet;

  const [errors, setErrors] = useState({});

  return (
    <form className="form" onSubmit={onSubmit}>
      {sent && (
        <Alert
          type="success"
          text="Your form has been submitted successfully!"
        />
      )}
      {/* ABOUT YOU */}
      <h3>About you</h3>
      <label>
        Full name*
        <input
          name="personName"
          value={data.personName}
          onChange={update}
          required
        />
        {errors.personName && (
          <span className="field-error">{errors.personName}</span>
        )}
      </label>

      <label>
        Email*
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={update}
          required
        />
        {errors.email && <span className="field-error">{errors.email}</span>}
      </label>

      <label>
        Phone
        <input name="phone" value={data.phone} onChange={update} />
      </label>

      <label>
        Occupation
        <input name="occupation" value={data.occupation} onChange={update} />
      </label>

      {/* YOUR HOME */}
      <h3>Your home</h3>
      <div className="two-col">
        <label>
          Household size
          <input
            name="householdSize"
            value={data.householdSize}
            onChange={update}
            placeholder="e.g. 3 adults, 2 children"
          />
        </label>
        <label>
          Housing type
          <input
            name="housingType"
            value={data.housingType}
            onChange={update}
            placeholder="e.g. HDB, condo, landed"
          />
        </label>
      </div>

      <label>
        Outdoor space
        <input
          name="outdoorSpace"
          value={data.outdoorSpace}
          onChange={update}
          placeholder="e.g. balcony, small yard, none"
        />
      </label>

      <label className="inline pet-checkbox">
        <input
          type="checkbox"
          name="hasPermission"
          checked={data.hasPermission}
          onChange={update}
        />
        <span>
          I confirm I have permission to keep a pet in my home (landlord/HDB).
        </span>
      </label>

      {/* EXPERIENCE WITH PETS */}
      <h3>Your experience with pets</h3>
      <label className="inline pet-checkbox">
        <input
          type="checkbox"
          name="hasOtherPets"
          checked={data.hasOtherPets}
          onChange={update}
        />
        I currently have other pets at home.
      </label>

      {data.hasOtherPets && (
        <label>
          Other pets (type, age, temperament)
          <input
            name="otherPetsDetails"
            value={data.otherPetsDetails}
            onChange={update}
          />
        </label>
      )}

      <label>
        Previous experience with pets
        <textarea
          name="petExperience"
          rows="3"
          value={data.petExperience}
          onChange={update}
          placeholder="Tell us about any past or current pets, or if this is your first."
        />
      </label>

      <label>
        Approx. hours at home per day
        <input
          name="dailyTime"
          value={data.dailyTime}
          onChange={update}
          placeholder="e.g. 4–6 hours on weekdays, more on weekends"
        />
      </label>

      {/* PET DETAILS (mostly read-only for adopt flow) */}
      <h3>Pet details</h3>
      <div className="two-col">
        <label>
          Pet name
          <input
            name="petName"
            value={data.petName}
            onChange={update}
            disabled={isAdoptWithPet}
          />
        </label>
        <label>
          Age
          <input
            name="petAge"
            value={data.petAge}
            onChange={update}
            disabled={isAdoptWithPet}
          />
        </label>
        <label>
          Breed
          <input
            name="petBreed"
            value={data.petBreed}
            onChange={update}
            disabled={isAdoptWithPet}
          />
        </label>
      </div>

      {/* WHY THIS PET / REASON FOR REHOMING */}
      <label>
        {type === "adopt"
          ? "Why do you want to adopt this pet?"
          : "Reason for rehoming / other details"}
        <textarea name="notes" rows="4" value={data.notes} onChange={update} />
      </label>

      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
}

// import React, { useState } from "react";
// import Alert from "./Alert";

// export default function PetForm({ type, pet }) {
//   const [data, setData] = useState({
//     personName: "",
//     email: "",
//     phone: "",
//     petName: pet?.name || "",
//     petAge: pet?.age?.toString() || "",
//     petBreed: pet?.breed || "",
//     notes: "",
//   });
//   const [sent, setSent] = useState(false);

//   function update(e) {
//     const { name, value } = e.target;
//     setData((d) => ({ ...d, [name]: value }));
//   }

//   function onSubmit(e) {
//     e.preventDefault();
//     if (!data.personName || !data.email) {
//       alert("Please fill required fields.");
//       return;
//     }

//     const subject = encodeURIComponent(
//       type === "adopt"
//         ? `Adoption Request: ${pet?.name || data.petName || "Pet"}`
//         : `Release Request: ${data.petName || "Pet"}`
//     );

//     // For adopt: prefer the pet object (from Adoption page)
//     // For release: use the fields the user entered
//     const petBlock =
//       type === "adopt" && pet
//         ? `Pet:
// - Name: ${pet.name}
// - Age: ${pet.age ?? "N/A"} years
// - Breed: ${pet.breed ?? "N/A"}
// - Status: ${pet.status ?? "N/A"}
// - Trained: ${pet.trained ? "Yes" : "No"}
// `
//         : `Pet:
// - Name: ${data.petName || "N/A"}
// - Age: ${data.petAge || "N/A"}
// - Breed: ${data.petBreed || "N/A"}
// `;

//     const body = encodeURIComponent(
//       `Name: ${data.personName}
// Email: ${data.email}
// Phone: ${data.phone}

// ${petBlock}
// Notes / additional details:
// ${data.notes || "-"}
// `
//     );

//     window.location.href =
//       "mailto:admin@pethaven.org?subject=" + subject + "&body=" + body;

//     setSent(true);
//   }

//   const isAdoptWithPet = type === "adopt" && !!pet;

//   return (
//     <form className="form" onSubmit={onSubmit}>
//       {sent && (
//         <Alert type="success" text="Email draft opened in your client." />
//       )}

//       <h2>{type === "adopt" ? "Adoption Form" : "Release Form"}</h2>

//       <label>
//         Full name*
//         <input
//           name="personName"
//           value={data.personName}
//           onChange={update}
//           required
//         />
//       </label>

//       <label>
//         Email*
//         <input
//           type="email"
//           name="email"
//           value={data.email}
//           onChange={update}
//           required
//         />
//       </label>

//       <label>
//         Phone
//         <input name="phone" value={data.phone} onChange={update} />
//       </label>

//       <div className="two-col">
//         <label>
//           Pet name
//           <input
//             name="petName"
//             value={data.petName}
//             onChange={update}
//             disabled={isAdoptWithPet}
//           />
//         </label>
//         <label>
//           Age
//           <input
//             name="petAge"
//             value={data.petAge}
//             onChange={update}
//             disabled={isAdoptWithPet}
//           />
//         </label>
//         <label>
//           Breed
//           <input
//             name="petBreed"
//             value={data.petBreed}
//             onChange={update}
//             disabled={isAdoptWithPet}
//           />
//         </label>
//       </div>

//       <label>
//         {type === "adopt"
//           ? "Why do you want to adopt this pet?"
//           : "Other details"}
//         <textarea name="notes" rows="4" value={data.notes} onChange={update} />
//       </label>

//       <button className="btn" type="submit">
//         Submit
//       </button>
//     </form>
//   );
// }
