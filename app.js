const express = require("express");

const app = express();

const ProductRoute = require("./Routes/Products");

app.use("/products", ProductRoute);

app.listen(3000, () => {
  console.log("Server is up and running at port 3000");
});
