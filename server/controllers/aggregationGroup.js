const pool = require("../utils/dbConnector.js");
const { buildQuery } = require("../utils/dataQuery");

const promisePool = pool.promise();


const aggregationGroup = async (params) => {
//This finds the maximum price of the products for each brand (returning Brand ID, Brand Name and Price).
    var sql = `SELECT		P.Brand_ID, B.B_Name, MAX(P.Price)
    FROM		Product P, Brands B
    WHERE		B.Brand_ID = P.Brand_ID
    GROUP BY	P.Brand_ID;
    `;

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