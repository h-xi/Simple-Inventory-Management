const pool = require("../dbConnector.js");

const promisePool = pool.promise();

const createBrands = async () => {
    try {
      const [rows, fields] = await promisePool.query(
        "CREATE TABLE Brands(Brand_ID Integer, B_name Char(30), PRIMARY KEY (Brand_ID))"
      );
      console.log(rows);
      console.log(fields);
    } catch (err) {
      throw err;
    }
};

createBrands();

const createAisle = async () => {
    try {
      const [rows, fields] = await promisePool.query(
        "CREATE TABLE Aisle(Aisle_no Integer, PRIMARY KEY (Aisle_no))"
      );
      console.log(rows);
      console.log(fields);
    } catch (err) {
      throw err;
    }
};

createAisle();

const createBin = async () => {
    try {
      const [rows, fields] = await promisePool.query(
        "CREATE TABLE Bin(Bin_name CHAR(2), Capacity Integer, Aisle_no Integer, quant_filled Integer, PRIMARY KEY (Bin_name,Aisle_no), FOREIGN KEY (Aisle_no) REFERENCES Aisle ON DELETE NO ACTION)"
      );
      console.log(rows);
      console.log(fields);
    } catch (err) {
      throw err;
    }
};

createBin();

const createCategories = async () => {
    try {
      const [rows, fields] = await promisePool.query(
        "CREATE TABLE Categories(Category_ID Integer, Cat_name Char(30), Aisle_no Integer, PRIMARY KEY (Category_ID), FOREIGN KEY (Aisle_no) REFERENCES Aisle)"
      );
      console.log(rows);
      console.log(fields);
    } catch (err) {
      throw err;
    }
};

createCategories();

    

    

  