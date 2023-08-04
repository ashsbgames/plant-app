import express from "express"; // Use 'express' for the default import

const routerPlants = require("./routes/plants");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello World - from backend");
});

app.use("/plants", routerPlants);

module.exports = app;
