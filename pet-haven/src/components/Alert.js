//src/components/Alert.js
import React from "react";

export default function Alert({ type = "info", text }) {
  const bg =
    type === "success" ? "#e6f4ea" : type === "error" ? "#fde8e8" : "#eef2ff";

  return (
    <div style={{ background: bg, padding: "10px 12px", borderRadius: 10 }}>
      {text}
    </div>
  );
}
