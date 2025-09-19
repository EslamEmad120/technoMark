// src/Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#7154CB",
        color: "#FFFFFF",
        textAlign: "center",
        padding: "15px 0",
        fontSize: "14px",
      }}
    >
      <p style={{ margin: 0 }}>
        © {new Date().getFullYear()} TechnoMark. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
