const pool = require("../utils/dbConnector.js");

const promisePool = pool.promise();

const nestedAggregationGroup = async () => {
  // //This finds Brands that have at least two products that are above 100 in price and finds their average price (Returns Brand_ID and Price).
  // var sql = `SELECT P.Brand_ID, AVG(Price)
  //               FROM Product P 
  //               GROUP BY P.Brand_ID 
  //               HAVING 2 <= (SELECT COUNT(*) 
  //                             FROM Product P2 
  //                             WHERE P2.Price>100 AND P.Brand_ID = P2.Brand_ID); 
    
  //   `;

  //This finds Brands that have at least two products priced above 100 and finds the average price of these products for each brand (Returns Brand_ID and Price).

    var sql = `SELECT P.Brand_ID, AVG(Price) as AVG_Price
                FROM Product P
                WHERE	P.price>100
                GROUP BY P.Brand_ID 
                HAVING 1 < (SELECT COUNT(P.Brand_ID));`;





  try {
    console.log(sql);
    const result = await promisePool.query(sql);
    console.log(result[0][0]);
    return result[0];
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const aggregationGroup = async () => {
  //This finds the average price of products, sized small, for each brand (returning their Brand ID and Brand Name).
  var sql = `SELECT		P.Brand_ID, B.B_Name as Brand_Name, AVG(P.Price) as AVG_Price
    FROM		Product P, Brands B
    WHERE		B.Brand_ID = P.Brand_ID AND P.Size LIKE 'Small'
    GROUP BY 	P.Brand_ID;
    `;

  try {
    console.log(sql);
    const result = await promisePool.query(sql);
    console.log(result[0][0]);
    return result[0];
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const aggregationHaving = async () => {
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
    console.log(result);
    return result[0];
  } catch (e) {
    console.error(e);
    throw e;
  }
};

module.exports = {
  nestedAggregationGroup: nestedAggregationGroup,
  aggregationGroup: aggregationGroup,
  aggregationHaving: aggregationHaving,
};
