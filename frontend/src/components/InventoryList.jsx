// src/components/InventoryList.jsx
import React, { useEffect, useState } from "react";
import InventoryItem from "./InventoryItem.jsx";
import axios from "axios";

function InventoryList() {
  const [itemData, setItemData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:5000/inventory");
      setItemData(response.data.data);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {itemData.map((item, index) => (
        <InventoryItem key={index} item={item} />
      ))}
    </div>
  );
}

export default InventoryList;
