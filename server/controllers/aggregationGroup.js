const pool = require("../utils/dbConnector.js");
const { buildQuery } = require("../utils/dataQuery");

const promisePool = pool.promise();


const aggregationGroup = async (params) => {

    var sql = `SELECT	P.Brand_ID, MAX(P.Price) FROM	Product P GROUP BY	P.Brand_ID;`;

  try {
    console.log(sql);
    const result = await promisePool.query(sql);
    console.log(result[0][0]);
    return result[0][0];
  } catch (e) {
    console.error(e);
    throw e;
  }
};




module.exports = { aggregationGroup: aggregationGroup };