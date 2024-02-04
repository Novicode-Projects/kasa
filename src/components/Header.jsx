import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";

export const Header = () => {
  const { pathname } = useLocation();

  return (
    <header>
      <nav>
        <div>
          <Link to="/">
            <img src="logo-kasa.png" alt="Logo Kasa" />
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
