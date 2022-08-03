const express = require("express");
const router = express.Router();
const { addOrder } = require("../controllers/orderController");
const { getEmployee } = require("../controllers/employeeController");
const { getBarcode } = require("../controllers/inventoryController");
const { app } = require("tailwind");

// const cors = require('cors');
// app.use(cors());
// app.use(express.json());

router.post("/", async (req, res) => {
  let errors = [];
  let incoming;
  const orderData = req.body.orderData;
  console.log(orderData);
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

  if (orderData.Inventory_Barcode) {
    let result = await getBarcode(orderData.Inventory_Barcode);
    if (!result) {
      errors.push("Invalid Inventory Barcode");
      errors.push("Invalid Product Barcode");
    }
  }

  if (orderData.Manager) {
    const manager = await getEmployee("ManagerEmployee", orderData.Manager);
    if (!manager) {
      errors.push("Invalid Manager ID");
    }
  }

  if (req.body.orderType == "IncomingShipmentOrder") {
    incoming = true;
    if (orderData.AssignedReceiver) {
      try {
        result = await getEmployee(
          "WorkerEmployee",
          orderData.AssignedReceiver
        );
        if (!result) {
          errors.push("Invalid Employee ID");
        }
      } catch (e) {
        console.error(e);
        errors.push(e.Error);
      }
    }
  } else {
    incoming = false;
    try {
      result = await getEmployee("DriverEmployee", orderData.AssignedDriver);
      if (!result) {
        errors.push("Invalid Employee ID");
      }
    } catch (e) {
      console.error(e);
      // errors.push(e);
    }
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

module.exports = router;
