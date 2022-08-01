const pool = require("../dbConnector.js");

const promisePool = pool.promise();

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
    sql = `INSERT INTO ${table} VALUES(${order_id}, ${shipmentDate}, ${quantity}, ${assignedEmployee}, ${barcode}, ${product}, ${manager})`;
  } else {
    table = "OutgoingShipmentOrder";
    let assignedEmployee = order.AssignedDriver;
    let daysToShipment = order.DaysToShipment;
    let deliveryAddress = order.DeliveryAddress;
    sql = `INSERT INTO ${table} VALUES(${order_id}, ${shipmentDate}, ${quantity}, ${assignedEmployee}, ${deliveryAddress}, ${daysToShipment}, ${barcode}, ${product}, ${manager})`;
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
//TODO: DELETE ON CASCADE

//TODO: UPDATE FN ON ORDER

module.exports = { addOrder: addOrder };
