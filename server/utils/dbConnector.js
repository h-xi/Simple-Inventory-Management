// Load module
var mysql = require("mysql2");
require("dotenv").config();

const HOST = process.env.HOST;
const MYUSER = process.env.MYUSER;
const PASSWORD = process.env.PASSWORD;
const DATABASE = process.env.DATABASE;

// Initialize pool
const pool = mysql.createPool({
  host: HOST || "localhost",
  user: MYUSER || "root",
  password: PASSWORD || "password",
  database: DATABASE || "inventory_system",
  waitForConnections: true,
  connectionLimit: 10,
  multipleStatements: true,
});

module.exports = pool;
