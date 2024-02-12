import React from "react";

import "./About.scss";
import { Dropdown } from "../components/Dropdown";

import banner from "../image/about-banner.png";

export const About = () => {
  const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

  return (
    <main className="about">
      <section className="about__banner">
        <img src={banner} alt="Banner" />
      </section>
      <section className="about__dropdown">
        <Dropdown title="Fiabilité" content={loremIpsum} />
        <Dropdown title="Respect" content={loremIpsum} />
        <Dropdown title="Service" content={loremIpsum} />
        <Dropdown title="Sécurité" content={loremIpsum} />
      </section>
    </main>
  );
};
