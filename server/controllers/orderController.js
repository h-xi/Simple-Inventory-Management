const pool = require("../utils/dbConnector.js");
const { buildQuery } = require("../utils/dataQuery");
const e = require("express");

const promisePool = pool.promise();

// const getOrder = async (params) => {
//   const conditions = buildQuery(params);
//   var outgoing = false;
//   if (
//     params.AssignedDriver ||
//     params.DeliveryAddress ||
//     params.DaysToShipment
//   ) {
//     outgoing = true;
//     var sql = `SELECT * FROM inventory_system.OutgoingShipmentOrder WHERE ${conditions.where};`;
//   }
//   try {
//     console.log(sql);
//     if (outgoing) {
//       const result = await promisePool.query(sql, conditions.values);
//       console.log(result[0][0]);
//       return result[0][0];
//     } else {
//       var sql = `SELECT * FROM inventory_system.IncomingShipmentOrder WHERE ${conditions.where};`;
//       const result = await promisePool.query(sql, conditions.values);
//       console.log(result);
//       if (result[0][0].length() < 0) {
//         var sql = `SELECT * FROM inventory_system.OutgoingShipmentOrder WHERE ${conditions.where};`;
//         const result1 = await promisePool.query(sql, conditions.values);
//         console.log(result1);
//       }
//     }
//   } catch (e) {
//     console.error(e);
//     throw e;
//   }
// };

const getIncomingOrder = async (params) => {
  let result;
  let Gotconditions;
  let conditions;
  const paramLength = Object.keys(params).length;
  console.log(paramLength);
  if (paramLength == 0) {
    var sql = `SELECT * FROM inventory_system.IncomingShipmentOrder;`;
  } else {
    conditions = buildQuery(params);
    var sql = `SELECT * FROM inventory_system.IncomingShipmentOrder WHERE ${conditions.where};`;
    Gotconditions = true;
  }
  try {
    console.log(sql);
    if (Gotconditions) {
      result = await promisePool.query(sql, conditions.values);
    } else {
      result = await promisePool.query(sql);
    }
    if (result[0].length < 1) {
      return null;
    } else return result[0];
  } catch (e) {
    console.error(e);
    throw error;
  }
};
const getOutgoingOrder = async (params) => {
  const conditions = buildQuery(params);
  var sql = `SELECT * FROM inventory_system.OutgoingShipmentOrder WHERE ${conditions.where};`;
  try {
    const result = await promisePool.query(sql, conditions.values);
    if (result[0][0].length < 1) {
      return null;
    } else return result[0][0];
  } catch (e) {
    console.error(e);
    throw error;
  }
};

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

module.exports = {
  addOrder: addOrder,
  deleteOrder: deleteOrder,
  getIncomingOrder: getIncomingOrder,
  getOutgoingOrder: getOutgoingOrder,
};

// if (params.Order_ID) {
//   queries.push(Order_ID);
// }
// if (params.ShipmentDate) {
//   queries.push(ShipmentDate);
// }
// if (params.Quantity) {
//   queries.push(Quantity);
// }
// if (params.AssignedReceiver) {
//   queries.push(AssignedReceiver);
// }
// if (params.AssignedDriver) {
//   incoming = false;
//   queries.push(AssignedDriver);
// }
// if (params.Inventory_barcode) {
//   queries.push(Inventory_barcode);
// }
// if (params.Product_Barcode) {
//   queries.push(Product_Barcode);
// }
// if (params.Manager) {
//   queries.push(Manager);
// }
// if (params.DeliveryAddress) {
//   queries.push();
// }
