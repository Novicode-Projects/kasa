import React from "react";
import { Dropdown } from "../components/about/Dropdown";
import "./About.scss";

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
