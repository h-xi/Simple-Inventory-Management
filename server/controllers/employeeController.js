const pool = require("../dbConnector.js");

const promisePool = pool.promise();

const getEmployee = async (employee_id) => {
  let sql = `SELECT * FROM Employee WHERE id = '${employee_id}';`;
  try {
    const query = await promisePool.query(sql);
    console.log(query);
    return query;
  } catch (e) {
    throw e;
  }
};

module.exports = { getEmployee: getEmployee };
