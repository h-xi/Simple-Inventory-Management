const pool = require("../utils/dbConnector.js");

const promisePool = pool.promise();

//Given product object, add product into database, else throw error
const addProduct = async (order, incoming = true) => {
  let barcode = Product.Barcode;
  let p_name = Product.P_name;
  let size = Product.Size;
  let bin_name = Product.Bin_name;
  let aisle_no = Product.Aisle_no;
  let category_id = Product.Category_ID;
  let brand_id = Product.Brand_ID;
  let inventory_barcode = Product.Inventory_barcode;
  let supplier_id = Product.SupplierID;

  sql = `INSERT INTO inventory_system.${Product} VALUES(${barcode}, "${p_name}", "${size}", "${bin_name}", ${aisle_no}, ${category_id}, ${brand_id}, ${inventory_barcode}, ${supplier_id})`;

  try {
    console.log(sql);
    const [rows, fields] = await promisePool.query(sql);
    console.debug(rows);
    console.debug(fields);
  } catch (e) {
    throw e;
  }
};

//Delete Product function
const deleteProduct = async (barcode) => {
  table = "Product";
  sql = `DELETE FROM inventory_system.${table} WHERE Barcode = ${barcode}`;

  try {
    console.log(sql);
    const [rows, fields] = await promisePool.query(sql);
    console.debug(rows);
    console.debug(fields);
  } catch (e) {
    throw e;
  }
};

const updateProduct = async (product, incoming = true) => {
  let barcode = Product.Barcode;
  let p_name = Product.P_name;
  let size = Product.Size;
  let bin_name = Product.Bin_name;
  let aisle_no = Product.Aisle_no;
  let category_id = Product.Category_ID;
  let brand_id = Product.Brand_ID;
  let inventory_barcode = Product.Inventory_barcode;
  let supplier_id = Product.SupplierID;

  sql = `UPDATE inventory_system.${Product} SET P_name = "${p_name}", Size = "${size}", Bin_name = "${bin_name}", Aisle_no = ${aisle_no}, Category_ID = ${category_id}, Brand_ID = ${brand_id}, Inventory_barcode =  ${inventory_barcode}, SupplierID = ${supplier_id} WHERE Barcode = ${barcode})`;

  try {
    console.log(sql);
    const [rows, fields] = await promisePool.query(sql);
    console.debug(rows);
    console.debug(fields);
  } catch (e) {
    throw e;
  }
};

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

//What is this?
module.exports = { deleteProduct: deleteProduct };
