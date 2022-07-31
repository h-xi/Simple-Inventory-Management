const pool = require("../DBConnector");

const createSupplier = () => {
  let sql =
    "CREATE TABLE supplier (s_contact VARCHAR(50), supplier_name VARCHAR(40), supplier_ID INT)";
  pool.query(sql, function (err, res) {
    if (err) throw err;
    console.log("i am here");
    return res;
  });
};

createProduct();
