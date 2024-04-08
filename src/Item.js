// Item.js
import "./Item.css";
import React, { useState } from "react";

const Item = ({ item, toggleComplete, deleteItem, editItem }) => {
  const { id, name, quantity, complete } = item;
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedQuantity, setEditedQuantity] = useState(quantity);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editItem(id, editedName, editedQuantity);
    setIsEditing(false);
  };

  return (
    <div className={`item-box ${complete ? "complete" : ""}`}>
      <li>
        {isEditing ? (
          <center>
            <div>
              <input
                className="edit-text"
                type="text"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
              />
              <input
                className="edit-text"
                type="number"
                value={editedQuantity}
                onChange={(e) => setEditedQuantity(e.target.value)}
              />
              <button className="save-btn" onClick={handleSave}>
                Save
              </button>
            </div>
          </center>
        ) : (
          <>
            <p>
              {quantity} {complete ? <s>{name}</s> : name}
            </p>
            <div>
              <button
                className={`complete-btn ${complete ? "completed" : ""}`}
                onClick={() => toggleComplete(id)}
              >
                {complete ? "Undo" : "Complete"}
              </button>
              <button className="remove-btn" onClick={() => deleteItem(id)}>
                Delete
              </button>
              <button className="edit-btn" onClick={handleEdit}>
                Edit
              </button>
            </div>
          </>
        )}
      </li>
    </div>
  );
};

export default Item;
