import React from "react";

import "./About.scss";
import { Dropdown } from "../components/Dropdown";

import banner from "../image/about-banner.png";

export const About = () => {
  const text = {
    reliability:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    respect:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    service:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    safety:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  };

  return (
    <main className="about">
      <section className="about__banner">
        <img src={banner} alt="Banner" />
      </section>
      <section className="about__dropdown">
        <Dropdown title="Fiabilité" content={text.reliability} />
        <Dropdown title="Respect" content={text.respect} />
        <Dropdown title="Service" content={text.service} />
        <Dropdown title="Sécurité" content={text.safety} />
      </section>
    </main>
  );
};
