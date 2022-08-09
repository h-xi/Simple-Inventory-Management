const express = require("express");
const router = express.Router();
const {
  addOrder,
  getIncomingOrder,
  getOutgoingOrder,
  updateOrder,
} = require("../controllers/orderController");
const { getEmployee } = require("../controllers/employeeController");
const { getBarcode } = require("../controllers/inventoryController");

router.get("/incoming", async (req, res) => {
  const params = {};
  if (req.query.Order_ID) {
    params.Order_ID = req.query.Order_ID;
  }
  if (req.query.ShipmentDate) {
    params.ShipmentDate = req.query.ShipmentDate;
  }
  if (req.query.Quantity) {
    params.Quantity = req.query.Quantity;
  }
  if (req.query.AssignedReceiver) {
    params.AssignedReceiver = req.query.AssignedReceiver;
  }
  if (req.query.Inventory_Barcode) {
    params.Inventory_Barcode = req.query.Inventory_Barcode;
  }
  if (req.query.Product_Barcode) {
    params.Product_Barcode = req.query.Product_Barcode;
  }
  if (req.query.Manager) {
    params.Manager = req.query.Manager;
  }
  console.log({ theParams: params });
  try {
    const result = await getIncomingOrder(params);
    console.log(result);
    return res.send(result);
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: "Internal Error" });
  }
});
router.get("/outgoing", async (req, res) => {
  const params = {};
  if (req.query.Order_ID) {
    params.Order_ID = req.query.Order_ID;
  }
  if (req.query.ShipmentDate) {
    params.ShipmentDate = req.query.ShipmentDate;
  }
  if (req.query.Quantity) {
    params.Quantity = req.query.Quantity;
  }
  if (req.query.AssignedDriver) {
    params.AssignedDriver = req.query.AssignedDriver;
  }
  if (req.query.DeliveryAddress) {
    params.DeliveryAddress = req.query.DeliveryAddress;
  }
  if (req.query.DaysToShipment) {
    params.DaysToShipment = req.query.DaysToShipment;
  }
  if (req.query.Inventory_Barcode) {
    params.Inventory_Barcode = req.query.Inventory_Barcode;
  }
  if (req.query.Product_Barcode) {
    params.Product_Barcode = req.query.Product_Barcode;
  }
  if (req.query.Manager) {
    params.Manager = req.query.Manager;
  }
  console.log({ theParams: params });
  try {
    const result = await getOutgoingOrder(params);
    console.log(result);
    return res.send(result);
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: "Internal Error" });
  }
});

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

  // if (isNaN(new Date(orderData.ShipmentDate))) {
  //   errors.push("Shipment Date value is invalid");
  // }

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
    return res.send({ Message: "Order Creation Successful!" });
  } catch (e) {
    return res.status(500).json({
      Message: "Order Creation Unsuccessful",
      field: e.message,
    });
  }
});

router.post("/update", async (req, res) => {
  let errors = [];
  let incoming;
  const orderData = req.body.orderData;
  if (req.body.orderType == "IncomingShipmentOrder") {
    incoming = true;
  } else {
    incoming = false;
  }
  try {
    const result = await updateOrder(orderData, incoming);
    res.send(result);
  } catch (e) {
    console.error(e);
    res.status(500).json({
      Message: "Unsuccessful Update Attempt",
      Error: e,
    });
  }
});

module.exports = router;
