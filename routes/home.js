const express = require("express");
const router = express.Router();
// const fs = require("fs");

router.get("/", async (req, res, next) => {
  // let offers = JSON.parse(fs.readFileSync("./data/home.json", "utf-8"));
  // res.json(offers);

  return res.status(200).json({
    title: "test title",
    subtitle: "test title",
  });
});

module.exports = router;
