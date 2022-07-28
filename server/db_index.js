const express = require("express");
const mySQL = require("mysql");
const bodyParser = require("body-parser");

require("dotenv").config();

const HOST = process.env.HOST;
const MYUSER = process.env.MYUSER;
const PASSWORD = process.env.PASSWORD;
const DATABASE = process.env.DATABASE;

myServer = express();

const database = mySQL.createConnection({
  host: HOST,
  user: MYUSER,
  password: PASSWORD,
  database: DATABASE,
  multipleStatments: true,
});

database.connect(function (error) {
  if (error) {
    console.error("error connecting :" + error.stack);
    return;
  }
  console.log("Connected as id :" + database.threadId);
});

myServer.use(bodyParser.json());
myServer.use(bodyParser.urlencoded({ extended: true }));

myServer.listen(5000);
