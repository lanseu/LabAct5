// ItemList.js
import React from "react";
import Item from "./Item";

const ItemList = ({ items, toggleComplete, deleteItem, editItem }) => {
  return (
    <ul className="item-list box">
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          totalItems={items}
          toggleComplete={toggleComplete}
          deleteItem={deleteItem}
          editItem={editItem}
        />
      ))}
    </ul>
  );
};

export default ItemList;
