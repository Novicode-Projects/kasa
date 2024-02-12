import React from "react";
import "./Footer.scss";

import logo from "../image/logo-kasa-footer.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div>
        <div>
          <img src={logo} alt="Logo Kasa" />
        </div>
        <p>
          © {currentYear} Kasa. All <span>rights reserved</span>
        </p>
      </div>
    </footer>
  );
};
