const pool = require("../dbConnector.js");

const promisePool = pool.promise();

const getManager = async (employee_id) => {
  let sql = `SELECT * FROM ManagerEmployee WHERE Employee_ID = ${employee_id}`;

  try {
    let query = await promisePool.query(sql);
    query = JSON.parse(JSON.stringify(query));
    console.log(query);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

getManager(12345);

const getWorker = async (employee_id) => {
  let sql = `SELECT * FROM WorkerEmployee WHERE Employee_ID = '${employee_id}';`;
  try {
    let query = await promisePool.query(sql);
    query = JSON.parse(JSON.stringify(query));
    console.log(query);
    if (query) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    throw e;
  }
};

const getDriver = async (employee_id) => {
  let sql = `SELECT * FROM DriverEmployee WHERE Employee_ID = '${employee_id}';`;
  try {
    let query = await promisePool.query(sql);
    query = JSON.parse(JSON.stringify(query));
    console.log(query);
    if (query) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    throw e;
  }
};

module.exports = { getEmployee: getEmployee };
