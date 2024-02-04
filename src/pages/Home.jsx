import React from "react";
import { HomeCard } from "../components/home/homeCard";
import "./Home.css";

export const Home = () => {
  const homes = [
    {
      id: 1,
      title: "Titre 1",
      description: "Description 1",
      image: "https://source.unsplash.com/800x600/?nature,water",
    },
    {
      id: 2,
      title: "Titre 2",
      description: "Description 2",
      image: "https://source.unsplash.com/800x600/?nature,water",
    },
    {
      id: 3,
      title: "Titre 2",
      description: "Description 2",
      image: "https://source.unsplash.com/800x600/?nature,water",
    },
    {
      id: 4,
      title: "Titre 2",
      description: "Description 2",
      image: "https://source.unsplash.com/800x600/?nature,water",
    },
    {
      id: 5,
      title: "Titre 2",
      description: "Description 2",
      image: "https://source.unsplash.com/800x600/?nature,water",
    },
    {
      id: 6,
      title: "Titre 2",
      description: "Description 2",
      image: "https://source.unsplash.com/800x600/?nature,water",
    },
  ];

  return (
    <main className="home">
      <section className="home__banner">
        <h1>Chez vous, partout et ailleurs</h1>
      </section>
      <section className="home__homes">
        {homes.map((home) => (
          <HomeCard key={home.id} title={home.title} />
        ))}
      </section>
    </main>
  );
};
