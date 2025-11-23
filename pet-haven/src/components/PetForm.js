// src/components/PetForm
import React, { useState } from "react";
import Alert from "./Alert";
import { useNavigate } from "react-router-dom";

export default function PetForm({ type, pet }) {
  const [data, setData] = useState({
    // About you
    personName: "",
    email: "",
    phone: "",
    occupation: "",

    // Home environment
    householdSize: "",
    housingType: "",
    hasPermission: false,
    outdoorSpace: "",

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
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

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

    setErrors({});

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

    console.log("Form submitted (no email sent): ", {
      ...data,
      formType: type,
      petBlock,
    });

    setSent(true);

    // Auto-redirect after 3 seconds (respects basename)
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }

  const isAdoptWithPet = type === "adopt" && !!pet;

  // Copy for the success popup
  const successTitle =
    type === "adopt"
      ? "Thank you for your adoption enquiry"
      : "Thank you for reaching out";

  const successBody =
    type === "adopt"
      ? "We’ve received your interest in adopting this pet. Please wait for an email confirming your interview with our staff."
      : "We’ve received your request to rehome your pet. Please wait for an email confirming your interview with our staff.";

  return (
    <>
      {/* SUCCESS MODAL */}
      {sent && (
        <Alert type="success" asModal onClose={() => setSent(false)}>
          <div
            style={{
              background: "#e6f4ea",
              borderRadius: 14,
              padding: "16px 18px 18px",
            }}
          >
            <h2
              style={{
                margin: "0 0 6px",
                fontSize: "1.2rem",
              }}
            >
              {successTitle}
            </h2>
            <p
              style={{
                margin: "0 0 4px",
                fontSize: "0.95rem",
              }}
            >
              {successBody}
            </p>
            <p
              style={{
                margin: 0,
                fontSize: "0.85rem",
                color: "#4b5563",
              }}
            >
              Redirecting you to the home page in a few seconds…
            </p>
          </div>
        </Alert>
      )}

      {/* MAIN FORM */}
      <form className="form" onSubmit={onSubmit}>
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

        {/* PET DETAILS */}
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

        {/* WHY / REASON */}
        <label>
          {type === "adopt"
            ? "Why do you want to adopt this pet?"
            : "Reason for rehoming / other details"}
          <textarea
            name="notes"
            rows="4"
            value={data.notes}
            onChange={update}
          />
        </label>

        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
