const express = require("express");
const router = express.Router();
const fs = require("fs");
router.post("/", (req, res, next) => {
  var data = fs.readFileSync("./data/prueba.json");
  res.send(JSON.parse(data));
});

module.exports = router;
