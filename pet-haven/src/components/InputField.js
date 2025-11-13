// src/components/InputField.js
import React from "react";

export default function InputField({
  label,
  type = "text",
  name,
  value,
  onChange,
  required = false,
  placeholder = "",
}) {
  return (
    <label className="input-field">
      <span>
        {label}
        {required && " *"}
      </span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
      />
    </label>
  );
}
