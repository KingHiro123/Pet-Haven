import React, { useState } from "react";
import Alert from "./Alert";

export default function PetForm({ type, pet }) {
  const [data, setData] = useState({
    personName: "",
    email: "",
    phone: "",
    petName: pet?.name || "",
    age: pet?.age || "",
    breed: pet?.breed || "",
    color: pet?.color || "",
    vaccinated: pet?.vaccinated || false,
    hdbTrained: pet?.hdbTrained || false,
    notes: "",
  });
  const [sent, setSent] = useState(false);

  function update(e) {
    const { name, value, type: t, checked } = e.target;
    setData((d) => ({ ...d, [name]: t === "checkbox" ? checked : value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!data.personName || !data.email) {
      alert("Please fill required fields.");
      return;
    }

    const subject = encodeURIComponent(
      type === "adopt"
        ? `Adoption Request: ${data.petName}`
        : `Release Request: ${data.petName}`
    );
    const body = encodeURIComponent(
      `Name: ${data.personName}
Email: ${data.email}
Phone: ${data.phone}

Pet:
- Name: ${data.petName}
- Age: ${data.age}
- Breed: ${data.breed}
- Color: ${data.color}
- Vaccinated: ${data.vaccinated ? "Yes" : "No"}
- HDB trained: ${data.hdbTrained ? "Yes" : "No"}

Notes:
${data.notes}`
    );

    window.location.href =
      "mailto:admin@pethaven.org?subject=" + subject + "&body=" + body;

    setSent(true);
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      {sent && (
        <Alert type="success" text="Email draft opened in your client." />
      )}

      <h2>{type === "adopt" ? "Adoption Form" : "Release Form"}</h2>

      <label>
        Full name*
        <input
          name="personName"
          value={data.personName}
          onChange={update}
          required
        />
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
      </label>

      <label>
        Phone
        <input name="phone" value={data.phone} onChange={update} />
      </label>

      <div className="two-col">
        <label>
          Pet name
          <input name="petName" value={data.petName} onChange={update} />
        </label>
        <label>
          Age
          <input name="age" value={data.age} onChange={update} />
        </label>
        <label>
          Breed
          <input name="breed" value={data.breed} onChange={update} />
        </label>
        <label>
          Color
          <input name="color" value={data.color} onChange={update} />
        </label>
        <label className="inline">
          <input
            type="checkbox"
            name="vaccinated"
            checked={data.vaccinated}
            onChange={update}
          />
          Vaccinated
        </label>
        <label className="inline">
          <input
            type="checkbox"
            name="hdbTrained"
            checked={data.hdbTrained}
            onChange={update}
          />
          HDB trained
        </label>
      </div>

      <label>
        Other details
        <textarea name="notes" rows="4" value={data.notes} onChange={update} />
      </label>

      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
}
