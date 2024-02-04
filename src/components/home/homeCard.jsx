import React from "react";
import "./homeCard.css";
import { Link } from "react-router-dom";

export const HomeCard = ({ title }) => {
  return (
    <Link to="/logement">
      <article>
        <h3>{title}</h3>
      </article>
    </Link>
  );
};
