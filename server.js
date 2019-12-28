const express = require("express");
const morgan = require("morgan");
const MOVIEDEX = require("./moviedex.json");

const app = express();

app.use(morgan("dev"));

function handleGetMovie(req, res) {
  res.json(MOVIEDEX.movies);
}

app.get("/movie", handleGetMovie);

app.listen(8000, () => {
  console.log("Server listening at http://localhost:8000");
});
