import React from "react";
import "./homeCard.scss";
import { Link } from "react-router-dom";

export const HomeCard = ({ id, title, background }) => {
  return (
    <Link to={`/fiche-logement/${id}`}>
      <article
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background})`,
        }}
        className="homeCard"
      >
        <h3>{title}</h3>
      </article>
    </Link>
  );
};
