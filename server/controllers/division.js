const pool = require("../utils/dbConnector.js");
const { buildQuery } = require("../utils/dataQuery");

const promisePool = pool.promise();


const division = async (params) => {
//Find brands that offer products in all sizes.
    var sql = `CREATE VIEW	Zip as
    SELECT		Brand_ID, SIZE
    FROM		Product
    GROUP BY	BRAND_ID, SIZE;
    
    
    SELECT		Brand_ID
    FROM		Zip
    GROUP BY	Brand_ID
    HAVING		count(*)>2;
    
    Drop View Zip;
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




module.exports = { division: division };