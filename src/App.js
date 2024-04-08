// App.js
import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import ItemList from "./ItemList";

function App() {
  const [items, setItems] = useState([]);
  const [view, setView] = useState("all");

  const addItem = (itemName, quantity) => {
    const newItem = {
      id: Math.random(),
      name: itemName,
      quantity: quantity,
      complete: false,
    };
    setItems([...items, newItem]);
  };

  const toggleComplete = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, complete: !item.complete } : item
      )
    );
  };

  const deleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const editItem = (id, newName, newQuantity) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, name: newName, quantity: newQuantity }
          : item
      )
    );
  };

  const sortItems = (sortFunction) => {
    const sorted = [...items].sort(sortFunction);
    setItems(sorted);
  };

  const allItems = () => setView("all");
  const completedItems = () => setView("completed");
  const pendingItems = () => setView("pending");

  let sortedItems;
  if (view === "completed") {
    sortedItems = items.filter((item) => item.complete);
  } else if (view === "pending") {
    sortedItems = items.filter((item) => !item.complete);
  } else {
    sortedItems = items;
  }

  const completedItemsCount = items.filter((item) => item.complete).length;
  const percentageCompleted =
    items.length > 0
      ? Math.round((completedItemsCount / items.length) * 100)
      : 0;

  return (
    <div className="app-container">
      <div className="App">
        <h1>Grocery List</h1>
        <Form addItem={addItem} />
        <div>
          <button
            className="btn-sortAlpha"
            onClick={() => sortItems((a, b) => a.name.localeCompare(b.name))}
          >
            Sort by Name
          </button>
          <button
            className="btn-sortQuanti"
            onClick={() => sortItems((a, b) => a.quantity - b.quantity)}
          >
            Sort by Quantity
          </button>
          <button className="btn-clearAll" onClick={() => setItems([])}>
            Clear All
          </button>
        </div>

        <div>
          <button className="btn-all" onClick={allItems}>
            All
          </button>
          <button className="btn-complete" onClick={completedItems}>
            Completed
          </button>
          <button className="btn-pending" onClick={pendingItems}>
            Pending
          </button>
        </div>
        <center>
          <p>{percentageCompleted}% completed</p>
          <p>
            {completedItemsCount} of {items.length} items
          </p>
        </center>
        <center>
          <ItemList
            items={sortedItems}
            toggleComplete={toggleComplete}
            deleteItem={deleteItem}
            editItem={editItem}
          />
        </center>
      </div>
    </div>
  );
}

export default App;
