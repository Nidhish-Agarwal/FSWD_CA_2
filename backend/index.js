const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const InventoryItem = require("./models/InventoryItem");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Inventory Management API");
});

const PORT = 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  });

app.post("/inventory", async (req, res) => {
  try {
    const itemData = req.body;

    const response = await InventoryItem.create(itemData);

    return res
      .status(201)
      .send({ message: "Created the item", data: response });
  } catch (er) {
    return res
      .status(500)
      .send({ message: "internal server error", error: er.message });
  }
});

app.get("/inventory", async (req, res) => {
  try {
    const response = await InventoryItem.find();
    return res
      .status(200)
      .send({ message: "Sucessfully fetched the data", data: response });
  } catch (er) {
    return res
      .status(500)
      .send({ message: "Internal server error", error: er.message });
  }
});
