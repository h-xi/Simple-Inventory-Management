const fs = require("fs");
const mysql = require("mysql2/promise");
const dotenv = require("dotenv");
// const log = require("../util/log");
const pool = require("../dbConnector");
const poolPromise = pool.promise();

// dotenv.config({ path: "./config.env" });

// const createTables = async () => {
//   const schemasString = fs.readFileSync(
//     "createTable_minus_foreign_keys.sql",
//     "utf-8"
//   );
//   //Split and filter logic taken from cccttt10's "super-rent-backend"
//   const tableSchemas = schemasString
//     .split(";")
//     .filter(
//       (tableSchema) => typeof tableSchema === "string" && tableSchema.length > 0
//     );
//   for (const tableSchema of tableSchemas) {
//     try {
//       await poolPromise.query(tableSchema);
//       console.log("Tables succesfully Created");
//     } catch (e) {
//       console.error(e);
//       throw e;
//     }
//   }
// };

const modifyTables = async (operation) => {
  let schemaString;
  if (operation == "create") {
    schemaString = fs.readFileSync(
      "createTable_minus_foreign_keys.sql",
      "utf-8"
    );
  } else {
    schemaString = fs.readFileSync("dropTable.sql", "utf-8");
  }
  //Split and filter logic taken from cccttt10's "super-rent-backend"
  const operations = schemaString
    .split(";")
    .filter(
      (operations) => typeof operations === "string" && operations.length > 0
    );
  for (const operation of operations) {
    try {
      await poolPromise.query(operation);
      console.log("Tables succesfully Created");
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
};

const main = async () => {
  try {
    await poolPromise();
    if (process.argv[2] === "--create") {
      await modifyTables("create");
    } else if (process.argv[2] === "--delete") {
      await modifyTables("delete");
    }
  } catch (err) {
    log.error(err);
    process.exit(1);
  }
};

main();
