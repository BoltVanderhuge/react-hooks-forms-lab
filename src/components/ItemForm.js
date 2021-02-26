import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [formData, setFormData] = useState({
    name:"",
    category:"Produce",
  })

  function handleChange(e) {
    const name = e.target.name;
    let value = e.target.value;

   

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e){
    e.preventDefault();
    onItemFormSubmit({
      id: uuid(),
      ...formData
    });
  }


  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input value={formData.name} onChange={handleChange} type="text" name="name" />
      </label>

      <label>
        Category:
        <select value={formData.category} onChange={handleChange} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
