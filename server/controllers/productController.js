const pool = require("../dbConnector.js");

const promisePool = pool.promise();

//USE This!!!! call with promisePool not pool
const createTest = async () => {
  try {
    const [rows, fields] = await promisePool.query(
      "CREATE TABLE hello (name VARCHAR(10))"
    );
    console.debug(rows);
    console.debug(fields);
  } catch (err) {
    throw err;
  }
};

// const createSupplier = () => {
//   let sql =
//     "CREATE TABLE supplier (s_contact VARCHAR(50), supplier_name VARCHAR(40), supplier_ID INT)";
//   pool.query(sql, function (err, res) {
//     if (err) throw err;
//     console.log("i am here");
//     return res;
//   });
// };

createTest();

// const createTable = (tableName, params) => {
//   let sql = `CREATE TABLE ${tableName} ${params}`;
//   pool.query(sql, function (err, res) {
//     if (err) throw err;
//     console.log("i am here");
//     return res;
//   });
// };
