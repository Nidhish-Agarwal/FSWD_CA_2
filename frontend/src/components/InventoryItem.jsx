import React from "react";

function InventoryItem({ item }) {
  return (
    <div>
      <hr />
      <div>Name : {item.name}</div>
      <div>Description : {item.description}</div>
      <div>Quantity : {item.quantity}</div>
      <div>Price : {item.price}</div>
      <div>Created At : {item.createdAt}</div>
      <hr />
    </div>
  );
}

export default InventoryItem;
