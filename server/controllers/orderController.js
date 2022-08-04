const pool = require("../utils/dbConnector.js");

const promisePool = pool.promise();

//Given order object and orderType flag, add order into database, else throw error
const addOrder = async (order, incoming = true) => {
  let order_id = order.Order_ID;
  let shipmentDate = order.ShipmentDate;
  let quantity = order.Quantity;
  let barcode = order.Inventory_Barcode;
  let product = order.Product_Barcode;
  let manager = order.Manager;
  let table;
  let assignedEmployee;
  let daysToShipment;
  let deliveryAddress;

  if (incoming) {
    table = "IncomingShipmentOrder";
    assignedEmployee = order.AssignedReceiver;
    sql = `INSERT INTO inventory_system.${table} VALUES(${order_id}, ${shipmentDate}, ${quantity}, ${assignedEmployee}, ${barcode}, ${product}, ${manager})`;
  } else {
    table = "OutgoingShipmentOrder";
    assignedEmployee = order.AssignedDriver;
    daysToShipment = order.DaysToShipment;
    deliveryAddress = order.DeliveryAddress;
    sql = `INSERT INTO inventory_system.${table} VALUES(${order_id}, ${shipmentDate}, ${quantity}, ${assignedEmployee}, ${deliveryAddress}, ${daysToShipment}, ${barcode}, ${product}, ${manager})`;
  }
  try {
    console.log(sql);
    const [rows, fields] = await promisePool.query(sql);
    console.debug(rows);
    console.debug(fields);
  } catch (e) {
    throw e;
  }
};

//Delete ORDER function
const deleteOrder = async (orderID, incoming = true) => {
  if (incoming) {
    table = "IncomingShipmentOrder";
    sql = `DELETE FROM inventory_system.${table} WHERE Order_ID = ${orderID}`;
  } else {
    table = "OutgoingShipmentOrder";
    sql = `DELETE FROM inventory_system.${table} WHERE Order_ID = ${orderID}`;
  }
  try {
    console.log(sql);
    const [rows, fields] = await promisePool.query(sql);
    console.debug(rows);
    console.debug(fields);
  } catch (e) {
    throw e;
  }
};

//UPDATE order function (need to check)
const updateOrder = async (order, incoming = true) => {
  let order_id = order.Order_ID;
  let shipmentDate = order.ShipmentDate;
  let quantity = order.Quantity;
  let barcode = order.Inventory_Barcode;
  let product = order.Product_Barcode;
  let manager = order.Manager;
  let table;
  let assignedEmployee;
  let daysToShipment;
  let deliveryAddress;

  if (incoming) {
    table = "IncomingShipmentOrder";
    assignedEmployee = order.AssignedReceiver;
    sql = `UPDATE inventory_system.${table} SET ShipmentDate = ${shipmentDate}, Quantity = ${quantity}, AssignedReceiver = ${assignedEmployee}, Inventory_Barcode = ${barcode}, Product_Barcode = ${product}, Manager = ${manager} WHERE Order_ID = ${order_id})`;
  } else {
    table = "OutgoingShipmentOrder";
    assignedEmployee = order.AssignedDriver;
    daysToShipment = order.DaysToShipment;
    deliveryAddress = order.DeliveryAddress;
    sql = `UPDATE inventory_system.${table} SET ShipmentDate = ${shipmentDate}, Quantity = ${quantity}, AssignedDriver = ${assignedEmployee}, DeliveryAddress = ${deliveryAddress}, DaysToShipment = ${daysToShipment}, Inventory_Barcode = ${barcode}, Product_Barcode = ${product}, Manager = ${manager} WHERE Order_ID = ${order_id})`;
  }
  try {
    console.log(sql);
    const [rows, fields] = await promisePool.query(sql);
    console.debug(rows);
    console.debug(fields);
  } catch (e) {
    throw e;
  }
};

// addOrder(
//   {
//     Order_ID: 48231,
//     ShipmentDate: `"12/06/1985"`,
//     Quantity: 2,
//     AssignedDriver: 30002,
//     DeliveryAddress: `"123 Almond Drive"`,
//     DaysToShipment: 12,
//     Inventory_Barcode: 354,
//     Product_Barcode: 354,
//     Manager: 35215,
//   },
//   false
// );

//USE This!!!! call with promisePool not pool
const createTest = async () => {
  try {
    const [rows, fields] = await promisePool.query(
      "CREATE TABLE hello (name VARCHAR(10))"
    );
    console.debug(rows);
    console.debug(fields);
  } catch (err) {
    throw err;
  }
};

module.exports = { addOrder: addOrder, deleteOrder: deleteOrder };