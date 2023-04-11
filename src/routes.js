const express = require("express");

const routes = express();

routes.get("/", (req, res) => {
  res.send("tudo ok");
});

module.exports = routes;
