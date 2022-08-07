const express = require("express");
const router = express.Router();
const {
  join,

} = require("../controllers/join");

router.get("/nested", async (req, res) => {
  try {
    const result = await join();
    console.log(result);
    res.send(result);
  } catch (e) {
    res
      .status(500)
      .json({ message: "Error retrieving Data", Error: e.message });
  }
});

module.exports = router;
