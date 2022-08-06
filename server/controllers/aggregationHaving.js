const pool = require("../utils/dbConnector.js");
const { buildQuery } = require("../utils/dataQuery");

const promisePool = pool.promise();


const aggregationHaving = async (params) => {
//This finds brands that have atleast 2 products that are available in large size (returning their Brand ID and Brand Name).
    var sql = `SELECT		P.Brand_ID, B.B_Name
                FROM		Product P, Brands B
                Where		B.Brand_ID = P.Brand_ID AND Size LIKE 'Large'
                Group By	P.Brand_ID
                Having		Count(*)>1;
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




module.exports = { aggregationHaving: aggregationHaving };