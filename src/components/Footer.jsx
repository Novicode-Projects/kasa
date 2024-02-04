import React from "react";
import "./Footer.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div>
        <div>
          <img src="logo-kasa-footer.png" alt="Logo Kasa" />
        </div>
        <p>© {currentYear} Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};
