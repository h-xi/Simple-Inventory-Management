const pool = require("../utils/dbConnector.js");

const promisePool = pool.promise();

//Find brands that have been ordered (outgoing shipment order) more than 'x' number of times (Returns Brand ID and Brand Name.)

const getBrandsMoreThanX = async (numberTimes) => {
  let sql = `SELECT	P.Brand_ID, B.b_name
                FROM	Product P, outgoingshipmentorder O, brands B
                WHERE	O.Product_Barcode = P.Barcode AND P.Brand_ID = B.Brand_ID
                GROUP BY	P.Brand_ID
                HAVING	Count(*) > ${numberTimes};`;

  try {
    console.log(sql);
    let query = await promisePool.query(sql);
    query = JSON.parse(JSON.stringify(query));
    const result = query[0];
    console.log(result);
    return result;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
const findBrandsWithAllSizes = async () => {
  //Find brands that offer products in all 3 sizes. (Returning Brand ID and Brand Name.)
  var sql = `CREATE VIEW	Zip as
                              SELECT		Brand_ID, SIZE
                              FROM		  Product
                              GROUP BY	BRAND_ID, SIZE;
                            CREATE VIEW	Zip2 as
                              SELECT		Brand_ID
                              FROM		Zip
                              GROUP BY	Brand_ID
                              HAVING	count(*)>2;

              SELECT	Zip2.Brand_ID, B_Name
              FROM		Zip2, Brands
              WHERE		Zip2.Brand_ID = Brands.Brand_ID;

              Drop View Zip;
              Drop View Zip2;`;

  try {
    console.log(sql);
    const result = await promisePool.query(sql);
    console.log(result[0][2]);
    return result[0][2];
  } catch (e) {
    console.error(e);
    throw e;
  }
};

module.exports = {
  getBrandsMoreThanX: getBrandsMoreThanX,
  findBrandsWithAllSizes: findBrandsWithAllSizes,
};
