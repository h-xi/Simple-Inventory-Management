const express = require("express");
const router = express.Router();
const { addOrder } = require("../controllers/orderController");

router.post("/", async (req, res) => {
  let errors = [];
  let incoming;
  const orderData = req.body.orderData;
  if (orderData.ShipmentDate == "") {
    errors.push("Please provide a shipment date for order");
  }
  if (typeof orderData.ShipmentDate != "string") {
    errors.push("Please provide valid shipment date");
  }

  if (isNaN(new Date(orderData.ShipmentDate))) {
    errors.push("Shipment Date value is invalid");
  }

  if (orderData.Quantity == 0) {
    errors.push("Invalid Quantity Amount");
  }

  if (orderData.AssignedReceiver) {
    //TODO: create a getEmployee function that checks if employee exists in DB
    getEmployee();
  }

  if (orderData.Inventory_Barcode) {
    //TODO: Create a getInventory function that checks if product exists in DB, returns both inventory barcode and product barcode
  }

  if (orderData.Product_Barcode) {
    // Retreive product barcode from getInventory function and check if. if Inventory barcode exists, product barcode exists.
  }

  if (orderData.Manager) {
    //TODO: Create a getManager functio that checks if Manager exists in DB. if not, return error to store in errors array
  }

  if (req.body.orderType == "IncomingShipmentOrder") {
    incoming = true;
  } else {
    incoming = false;
    if (typeof orderData.DeliveryAddress != "string") {
      errors.push("Please provide a valid Delivery Address");
    }
  }

  if (errors.length != 0) {
    return res.status(422).json({
      Message: "Order Creation Unsuccessful",
      field: errors,
    });
  }
  try {
    const result = await addOrder(orderData, incoming);
    return res.send(result);
  } catch (e) {
    return res.status(500).json({
      Message: "Order Creation Unsuccessful",
      field: e,
    });
  }
});
