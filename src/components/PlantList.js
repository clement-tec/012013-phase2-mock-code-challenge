import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  const allPlants = plants.map((plant) => (
    <PlantCard key={plant.id} plant={plant} id={plant.id} />
  ));

  return <ul className="cards">{allPlants}</ul>;
}

export default PlantList;