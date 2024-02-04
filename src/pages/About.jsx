import React from "react";

import "./About.scss";
import { Dropdown } from "../components/Dropdown";

export const About = () => {
  return (
    <main className="about">
      <section className="about__banner"></section>
      <section className="about__dropdown">
        <Dropdown title="Fiabilité" content="eeeee" />
        <Dropdown title="Respect" content="eeeee" />
        <Dropdown title="Service" content="eeeee" />
        <Dropdown title="Sécurité" content="eeeee" />
      </section>
    </main>
  );
};
