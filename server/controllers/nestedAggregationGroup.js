const pool = require("../utils/dbConnector.js");
const { buildQuery } = require("../utils/dataQuery");

const promisePool = pool.promise();


const nestedAggregationGroup = async (params) => {
//This finds Brands that have at least two products that are above 100 in price (Returns Brand_ID).
    var sql = `SELECT P.Brand_ID
                FROM Product P 
                GROUP BY P.Brand_ID 
                HAVING 2 <= (SELECT COUNT(*) 
                              FROM Product P2 
                              WHERE P2.Price>100 AND P.Brand_ID = P2.Brand_ID); 
    
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