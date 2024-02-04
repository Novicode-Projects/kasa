import React from "react";
import "./Footer.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div>
        <div>
          <img src="images/logo.svg" alt="Logo Kasa" />
        </div>
        <p>© {currentYear} Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};
