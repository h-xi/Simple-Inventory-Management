const express = require("express");
const router = express.Router();
const {
  nestedAggregationGroup,
  aggregationGroup,
  aggregationHaving,
} = require("../controllers/aggregationController");

router.get("/nested", async (req, res) => {
  try {
    const result = await nestedAggregationGroup();
    console.log(result);
    res.send(result);
  } catch (e) {
    res
      .status(500)
      .json({ message: "Error retrieving Data", Error: e.message });
  }
});

router.get("/group", async (req, res) => {
  try {
    const result = await aggregationGroup();
    console.log(result);
    res.send(result);
  } catch (e) {
    res
      .status(500)
      .json({ message: "Error retrieving Data", Error: e.message });
  }
});

router.get("/having", async (req, res) => {
  try {
    const result = await aggregationHaving();
    console.log(result);
    res.send(result);
  } catch (e) {
    res
      .status(500)
      .json({ message: "Error retrieving Data", Error: e.message });
  }
});
module.exports = router;
