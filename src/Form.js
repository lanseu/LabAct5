import React, { useState } from "react";
import "./Form.css";

const Form = ({ addItem }) => {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleInputChange = (event) => {
    setItemName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleAddItem = () => {
    if (itemName.trim() !== "") {
      addItem(itemName.trim(), quantity);
      setItemName("");
      setQuantity(1);
    }
  };

  return (
    <div className="search-bar search-bar-colored">
      <select
        className="form__dropdown"
        value={quantity}
        onChange={handleQuantityChange}
      >
        {Array.from({ length: 30 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Enter item..."
        value={itemName}
        onChange={handleInputChange}
        className="item-input"
      />
      <button onClick={handleAddItem} className="addButton">
        Add Item
      </button>
    </div>
  );
};

export default Form;
