import React from "react";
import { HomeCard } from "../components/home/homeCard";
import "./Home.scss";

import data from "../data.json";

export const Home = () => {
  return (
    <main className="home">
      <section className="home__banner">
        <h1>Chez vous, partout et ailleurs</h1>
      </section>

      <section className="home__homes">
        {data.map((home) => (
          <HomeCard
            key={home.id}
            id={home.id}
            title={home.title}
            background={home.cover}
          />
        ))}
      </section>
    </main>
  );
};
