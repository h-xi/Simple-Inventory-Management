const pool = require("../utils/dbConnector.js");
const { buildQuery } = require("../utils/dataQuery");

const promisePool = pool.promise();


const aggregationGroup = async (params) => {
//This finds the average price of products, sized small, for each brand (returning their Brand ID and Brand Name).
    var sql = `SELECT		P.Brand_ID, B.B_Name as Brand_Name, AVG(P.Price)
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




module.exports = { aggregationGroup: aggregationGroup };