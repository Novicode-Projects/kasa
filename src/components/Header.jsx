import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const { pathname } = useLocation();
  console.log(pathname === "/" ? "active" : "");

  return (
    <header>
      <nav>
        <div>
          <Link to="/">
            <img src="logo.png" alt="Logo Kasa" />
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
              À propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
