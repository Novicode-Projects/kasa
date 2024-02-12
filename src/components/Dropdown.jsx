import React, { useState } from "react";
import "./Dropdown.scss";

import arrowDown from "../image/arrow-down.png";
import arrowBack from "../image/arrow-back.png";

export const Dropdown = ({ title, content, isList }) => {
  const [isOpen, setIsOpen] = useState(false);

  const contentRender = isList ? (
    <ul>
      {content.map((list, index) => (
        <li key={index}>{list}</li>
      ))}
    </ul>
  ) : (
    <p>{content}</p>
  );

  return (
    <article className="aboutDropdown">
      <div className="aboutDropdown__title">
        <h3>{title}</h3>

        <button onClick={() => setIsOpen((currentIsOpen) => !currentIsOpen)}>
          <img src={isOpen ? arrowDown : arrowBack} alt="Flèche du haut" />
        </button>
      </div>

      {isOpen ? (
        <div className="aboutDropdown__content">{contentRender}</div>
      ) : null}
    </article>
  );
};
