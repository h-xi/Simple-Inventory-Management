const pool = require("../dbConnector.js");

const promisePool = pool.promise();

const getEmployee = async (req, res, next) => {
    const id = req.params.id;
    let results = await pool.query(
        `SELECT * FROM Employee WHERE id = '${employeeId}';`
    );
}