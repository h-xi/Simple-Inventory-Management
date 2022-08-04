const pool = require("../utils/dbConnector.js");

const promisePool = pool.promise();

const getEmployee = async (table, employee_id) => {
  let sql = `SELECT * FROM ${table} WHERE Employee_ID = '${employee_id}';`;
  try {
    let query = await promisePool.query(sql);
    query = JSON.parse(JSON.stringify(query));
    const result = query[0][0];
    console.log(result);
    return result;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

module.exports = {
  getEmployee: getEmployee,
};
