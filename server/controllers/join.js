const pool = require("../utils/dbConnector.js");

const promisePool = pool.promise();

//Find brands that have been ordered (outgoing shipment order) more than 'x' number of times (Returns Brand ID and Brand Name.)

const join = async (numberTimes) => {
  
  let sql =   `SELECT	P.Brand_ID, B.b_name
                FROM	Product P, outgoingshipmentorder O, brands B
                WHERE	O.Product_Barcode = P.Barcode AND P.Brand_ID = B.Brand_ID
                GROUP BY	P.Brand_ID
                HAVING	Count(*) > ${numberTimes};`;
  
  try {
    let query = await promisePool.query(sql);
    query = JSON.parse(JSON.stringify(query));
    const result = query[0][0];
    console.log(result);
    return result;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

module.exports = {
  join: join,
};