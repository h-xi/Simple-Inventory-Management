const express = require("express");
const router = express.Router();

const { deleteProduct } = require("../controllers/productController");

router.delete(":/barcode", (req, res) => {
    const barcode = req.query.params; // req.query.param

    try {
        const result = await deleteProduct(barcode)
        console.log(result)
        res.send('Product Deletion Successful')
    } catch (e) { 
        console.error(e)
        res.status(422).json({
            Message: "Product Deletion Unsuccessful"
        })
    }
});

router.get('/', (req, res) => {
    
})