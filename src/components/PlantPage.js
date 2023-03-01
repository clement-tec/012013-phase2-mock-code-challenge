import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [renderPlants, setRenderPlants] = useState([]);
  const [searchPlant, setSearchPlant] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((resp) => resp.json())
      .then((json) => setRenderPlants(json));
  }, []);

  
  function addPlant(plant) {
    const newPlants = [plant, ...renderPlants];
    setRenderPlants(newPlants);
  }
  
  function updateSearchPlant(search) {
    setSearchPlant(search);
  }
  const filteredPlants = renderPlants.filter((plant) => {
    const plantName = plant.name.toLowerCase();
    const plantSearch = searchPlant.toLowerCase();
    return plantName.includes(plantSearch)
  });

  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search searchTerm={searchPlant} updateSearchPlant={updateSearchPlant} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;