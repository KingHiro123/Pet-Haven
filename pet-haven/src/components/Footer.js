import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} Pet Haven • contact: admin@pethaven.org
    </footer>
  );
}
