const pool = require("../utils/dbConnector.js");

const promisePool = pool.promise();

const getBarcode = async (inventory_barcode) => {
  let sql = `SELECT Barcode FROM Inventory WHERE Barcode = '${inventory_barcode}';`;
  try {
    let query = await promisePool.query(sql);
    query = JSON.parse(JSON.stringify(query));
    let result = query[0][0];
    return result;
  } catch (e) {
    throw e;
  }
};

getBarcode(0);

module.exports = { getBarcode: getBarcode };
