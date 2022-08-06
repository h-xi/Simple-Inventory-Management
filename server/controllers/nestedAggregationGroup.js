const pool = require("../utils/dbConnector.js");
const { buildQuery } = require("../utils/dataQuery");

const promisePool = pool.promise();


const nestedAggregationGroup = async (params) => {
//This finds the average price of products, sized small, for each brand (Returning Brand ID, Brand Name and Price).
    var sql = `SELECT		P.Brand_ID, B.B_Name, AVG(P.Price)
    FROM		Product P, Brands B
    WHERE		B.Brand_ID = P.Brand_ID AND P.Size LIKE 'Small'
    GROUP BY 	P.Brand_ID;
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




module.exports = { nestedAggregationGroup: nestedAggregationGroup };