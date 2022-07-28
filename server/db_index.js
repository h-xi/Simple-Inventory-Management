const express = require("express");
const mySQL = require("mysql");
const bodyParser = require("body-parser");

require("dotenv").config();
const HOST = process.env.HOST;
const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;
const DATABASE = process.env.DATABASE;
const SECRET = process.env.SECRET;

myServer = express();

const database = mySQL.createConnection({
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DATABASE,
  multipleStatments: true,
});

database.connect();

myServer.set("serverSecret", SECRET);
myServer.use(bodyParser.json());
myServer.use(bodyParser.urlencoded({ extended: true }));

myServer.listen(5000);
