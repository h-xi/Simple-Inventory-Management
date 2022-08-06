const pool = require("../utils/dbConnector.js");
const { buildQuery } = require("../utils/dataQuery");

const promisePool = pool.promise();


const nestedAggregationGroup = async (params) => {
//This finds the maximum price of the products for each brand.
    var sql = `SELECT		P.Brand_ID, AVG(P.Price) FROM		Product P WHERE		P.Size LIKE 'Small' GROUP BY 	P.Brand_ID;`;

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




module.exports = { nestedAggregationGroup: nestedAggregationGroup };