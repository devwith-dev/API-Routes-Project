const express = require("express");
const routes = express.Router();
const mongodb = require("mongodb");
const { ObjectId } = require("mongodb");

const { MongoClient } = mongodb;
const uri =
  "mongodb+srv://sampleuser:sampleuser123@sample-cluster.7zesgoj.mongodb.net/";
const dbName = "sample-db";
const collectionName = "products";

let db, collection;

(async () => {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Connected to MongoDB");
    db = client.db(dbName);
    collection = db.collection(collectionName);

    routes.get("/", async (req, res) => {
      try {
        const result = await collection.find({}).toArray();
        res.json(result);
      } catch (err) {
        console.error("Error querying MongoDB:", err);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });

    routes.get("/:id", async (req, res) => {
      try {
        const productId = parseInt(req.params.id); // Parse the product ID from the URL parameter as an integer
        const result = await collection.findOne({ id: productId });

        if (result) {
          res.json(result);
        } else {
          res.status(404).json({ error: "Product not found" });
        }
      } catch (err) {
        console.error("Error querying MongoDB:", err);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
})();

module.exports = routes;
