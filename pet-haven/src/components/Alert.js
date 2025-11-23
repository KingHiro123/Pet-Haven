// src/components/Alert.js
import React from "react";

export default function Alert({
  type = "info",
  text,
  asModal = false,
  onClose,
  children,
}) {
  const bg =
    type === "success" ? "#e6f4ea" : type === "error" ? "#fde8e8" : "#eef2ff";

  if (asModal) {
    return (
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.45)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
        }}
      >
        <div
          style={{
            position: "relative", // <-- added
            background: "#fff",
            padding: "26px 28px",
            borderRadius: 18,
            maxWidth: 480,
            width: "90%",
            boxShadow: "0 22px 40px rgba(15,23,42,0.35)",
          }}
        >
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              style={{
                border: "none",
                background: "transparent",
                cursor: "pointer",
                fontSize: "1.3rem",
                lineHeight: 1,
                position: "absolute",
                top: 12,
                right: 16,
              }}
            >
              ×
            </button>
          )}

          <div style={{ marginTop: onClose ? 12 : 0 }}>
            {children ? (
              children
            ) : (
              <div
                style={{
                  background: bg,
                  padding: "14px 16px",
                  borderRadius: 12,
                  fontSize: "0.95rem",
                }}
              >
                {text}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        background: bg,
        padding: "10px 12px",
        borderRadius: 10,
      }}
    >
      {text}
    </div>
  );
}
