const pool = require("../dbConnector.js");

const promisePool = pool.promise();

const getEmployee = async (req, res, next) => {
    const id = req.params.id;
    let sql = `SELECT * FROM Employee WHERE id = '${employeeId}';`
    let query = await pool.query(sql, (err, results) => {
        if(err) {
            throw err
        }
        console.log(results)
        res.send('Employee fetched')
    });
}