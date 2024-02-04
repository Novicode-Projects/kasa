import React from "react";
import { useParams } from "react-router-dom";

import data from "../data.json";
import { NotFound } from "./NotFound";
import { Gallery } from "../components/HousingInformation/Gallery";
import { Dropdown } from "../components/Dropdown";
import "./HousingInformation.scss";

export const HousingInformation = () => {
  const { id } = useParams();
  const housing = data.find((d) => d.id === id);

  if (!housing) {
    return <NotFound />;
  }

  return (
    <main className="housing">
      <section className="housing__gallery">
        <Gallery images={housing.pictures} />
      </section>
      <section className="housing__information">
        <div>
          <h1>{housing.title}</h1>
          <p>{housing.location}</p>
        </div>
        <div>
          <img src={housing.host.picture} alt={housing.host.name} />
          <p>{housing.host.name}</p>
        </div>

        <div className="housing__dropdown">
          <Dropdown
            title="Description"
            content={housing.description}
            isList={false}
          />
          <Dropdown
            title="Équipements"
            content={housing.equipments}
            isList={true}
          />
        </div>
      </section>
    </main>
  );
};
