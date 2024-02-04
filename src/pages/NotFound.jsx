import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";

export const NotFound = () => {
  return (
    <main className="notFound">
      <div>
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retourner sur la page d’accueil</Link>
      </div>
    </main>
  );
};
