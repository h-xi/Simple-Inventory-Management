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
  let price = Product.Price;

  sql = `INSERT INTO inventory_system.${Product} VALUES(${barcode}, "${p_name}", "${size}", "${bin_name}", ${aisle_no}, ${category_id}, ${brand_id}, ${inventory_barcode}, ${supplier_id}, ${price})`;

  try {
    console.log(sql);
    const [rows, fields] = await promisePool.query(sql);
    console.debug(rows);
    console.debug(fields);
  } catch (e) {
    throw e;
  }
};

const getFilteredProduct = async (filters) => {
  const params = filters.join(", ");
  console.log(params);
  const sql = `SELECT ${params} FROM inventory_system.product`;
  try {
    const result = await promisePool.query(sql);
    console.log(result[0]);
    return result[0];
  } catch (e) {
    console.error(e);
    throw e;
  }
};

//Delete Product function
const deleteProduct = async (barcode) => {
  console.log(barcode);
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
  let price = Product.Price;

  sql = `UPDATE inventory_system.${Product} SET P_name = "${p_name}", Size = "${size}", Bin_name = "${bin_name}", Aisle_no = ${aisle_no}, Category_ID = ${category_id}, Brand_ID = ${brand_id}, Inventory_barcode =  ${inventory_barcode}, SupplierID = ${supplier_id}, Price = ${price} WHERE Barcode = ${barcode})`;

  try {
    console.log(sql);
    const [rows, fields] = await promisePool.query(sql);
    console.debug(rows);
    console.debug(fields);
  } catch (e) {
    throw e;
  }
};

//What is this?
module.exports = {
  deleteProduct: deleteProduct,
  getFilteredProduct: getFilteredProduct,
};
