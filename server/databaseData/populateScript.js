const fs = require("fs");
const mysql = require("mysql2/promise");
const dotenv = require("dotenv");
const pool = require("../utils/dbConnector");
const { create } = require("domain");
const poolPromise = pool.promise();

// dotenv.config({ path: "./config.env" });

const createTables = async () => {
  const schemasString = fs.readFileSync(
    "createTable_minus_foreign_keys.sql",
    "utf-8"
  );
  //Split and filter logic taken from cccttt10's "super-rent-backend"
  const tableSchemas = schemasString
    .split(";")
    .filter(
      (tableSchema) => typeof tableSchema === "string" && tableSchema.length > 0
    );
  for (const tableSchema of tableSchemas) {
    try {
      await poolPromise.query(tableSchema);
      console.log("Tables succesfully Created");
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
};

const dropTables = async () => {
  const schemasString = fs.readFileSync("DeleteTable.sql", "utf-8");
  //Split and filter logic taken from cccttt10's "super-rent-backend"
  const tableSchemas = schemasString
    .split(";")
    .filter(
      (tableSchema) => typeof tableSchema === "string" && tableSchema.length > 0
    );
  for (const tableSchema of tableSchemas) {
    try {
      await poolPromise.query(tableSchema);
      console.log("Tables succesfully Deleted");
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
};

const checkConnection = async () => {
  try {
    await poolPromise.getConnection();
    const result = "Connection Successful!";
    console.log(result);
    return result;
  } catch (e) {
    const result = "Connection Unsuccessful";
    console.log(result);
    return result;
  }
};

const main = async () => {
  const connection = await checkConnection();
  console.log(connection);
  if (connection == "Connection Successful!") {
    if (process.argv[2] === "--create") {
      try {
        const tables = await createTables();
        return tables;
      } catch (e) {
        console.error(e);
      }
    } else if (process.argv[2] === "--delete") {
      try {
        await dropTables();
      } catch (e) {
        console.error(e);
      }
    }
  }
  //   console.log("connection Unsuccessful!");
  //   return null;
};

main();
