import React, { useState } from "react";

const plant = {
  name: "",
  image: "",
  price: "",
};

function NewPlantForm({ addPlant }) {
  const [newPlant, setNewPlant] = useState(plant);

  function handleFormChange(event) {
    setNewPlant({...newPlant,[event.target.name]: event.target.value,});
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const formPlant = {...newPlant,price: parseInt(newPlant.price),};
    addPlant(formPlant);
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          value={newPlant.name}
          onChange={handleFormChange}
          type="text"
          name="name"
          placeholder="Plant name"
        />
        <input
          value={newPlant.image}
          onChange={handleFormChange}
          type="text"
          name="image"
          placeholder="Image URL"
        />
        <input
          value={newPlant.price}
          onChange={handleFormChange}
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;