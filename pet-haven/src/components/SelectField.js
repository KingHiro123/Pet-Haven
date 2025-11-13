// src/components/SelectField.js
import React from "react";

export default function SelectField({
  label,
  name,
  value,
  onChange,
  options = [],
  required = false,
}) {
  return (
    <label className="input-field">
      <span>
        {label}
        {required && " *"}
      </span>
      <select name={name} value={value} onChange={onChange} required={required}>
        <option value="">Select…</option>
        {options.map((opt) => (
          <option key={opt.value || opt} value={opt.value || opt}>
            {opt.label || opt}
          </option>
        ))}
      </select>
    </label>
  );
}
