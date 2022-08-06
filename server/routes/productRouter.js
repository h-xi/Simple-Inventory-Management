const express = require("express");
const router = express.Router();

const { deleteProduct } = require("../controllers/productController");

router.get("/", async (req, res) => {
  res.send("hello");
});

router.delete("/:barcode", async (req, res) => {
  const barcode = req.params.barcode; // req.query.param

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

module.exports = router;
