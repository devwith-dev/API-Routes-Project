const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(
  "mongodb+srv://sampleuser:sampleuser123@sample-cluster.7zesgoj.mongodb.net/sample-db"
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const ProductRoute = require("./Routes/Products");

app.use("/products", ProductRoute);

app.post("/newpost/:id", (req, res) => {
  // console.log(req.body);
  console.log(req.params);
  res.send("Post Created");
});

app.listen(3000, () => {
  console.log("Server is up and running at port 3000");
});
