import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";

import logo from "../image/logo-kasa.png";

export const Header = () => {
  const { pathname } = useLocation();

  return (
    <header>
      <nav>
        <div>
          <Link to="/">
            <img src={logo} alt="Logo Kasa" />
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/" className={pathname === "/" ? "active" : ""}>
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/a-propos"
              className={pathname === "/a-propos" ? "active" : ""}
            >
              A Propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
