const express = require("express");
const router = express.Router();

const {
  deleteProduct,
  getFilteredProduct,
} = require("../controllers/productController");

router.get("/", async (req, res) => {
  res.send("hello");
});

router.delete("/", async (req, res) => {
  const barcode = req.body.Barcode; // req.query.param
  console.log(req.body);
  try {
    const result = await deleteProduct(barcode);
    console.log(result);
    res.send("Product Deletion Successful");
  } catch (e) {
    console.error(e);
    res.status(422).json({
      Message: "Product Deletion Unsuccessful",
    });
  }
});

router.post("/filtered", async (req, res) => {
  const params = req.body.params;
  try {
    const result = await getFilteredProduct(params);
    res.send(result);
  } catch (e) {
    res.status(500).json({
      message: "Unsuccessful Retrieval of Data",
      error: e.message,
    });
  }
});

module.exports = router;
