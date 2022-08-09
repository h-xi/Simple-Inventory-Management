const express = require("express");
const router = express.Router();
const {
  getBrandsMoreThanX,
  findBrandsWithAllSizes,
} = require("../controllers/brandController");

//JOIN ROUTER
router.post("/", async (req, res) => {
  const numberTimes = req.body.numberTimes;
  try {
    console.log(numberTimes);
    const result = await getBrandsMoreThanX(numberTimes);
    res.send(result);
  } catch (e) {
    res
      .status(500)
      .json({ message: "Error retrieving Data", Error: e.message });
  }
});

router.get("/morethan", async (req, res) => {
  try {
    const result = await findBrandsWithAllSizes();
    res.send(result);
  } catch (e) {
    console.error(e);
    res.status.json({
      message: "Error Retrieving Data",
      Error: e.message,
    });
  }
});

module.exports = router;
