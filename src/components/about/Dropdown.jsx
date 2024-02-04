import React, { useState } from "react";
import "./Dropdown.scss";

export const Dropdown = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="aboutDropdown">
      <div className="aboutDropdown__title">
        <h3>{title}</h3>

        <button onClick={() => setIsOpen((currentIsOpen) => !currentIsOpen)}>
          <img
            src={isOpen ? "arrow-down.png" : "arrow-back.png"}
            alt="Flèche du haut"
          />
        </button>
      </div>

      {isOpen ? <div className="aboutDropdown__content">{content}</div> : null}
    </article>
  );
};
