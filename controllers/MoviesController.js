// import connection
const connection = require("../db/connection")

// index route
function index(req, res) {
    // query DB for all the movies
    const sql = "SELECT * FROM movies"

    // execute the sql query
    connection.query(sql, (err, results) => {
        // log the error if any
        if (err) return res.json({ error: err })
        // log results
        console.log(results);
        // create a response object
        const responseData = {
            count: results.length,
            data: results
        }
        // return the response
        res.status(200).json(responseData)
    })

}





module.exports = {
    index,
    // show
}