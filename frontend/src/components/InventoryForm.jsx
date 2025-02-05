// src/components/InventoryForm.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function InventoryForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    quantity: 0,
    price: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/inventory",
        formData
      );
      navigate("/");
    } catch (er) {
      console.log(er);
    }
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor=""> Name : </label>
        <input
          type="text"
          name="name"
          id=""
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="">Description : </label>
        <input
          type="text"
          name="description"
          id=""
          value={formData.description}
          onChange={handleChange}
        />
        <label htmlFor="">Quantity: </label>
        <input
          type="number"
          name="quantity"
          id=""
          value={formData.quantity}
          onChange={handleChange}
        />
        <label htmlFor="">Price : </label>
        <input
          type="number"
          name="price"
          id=""
          value={formData.price}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default InventoryForm;
