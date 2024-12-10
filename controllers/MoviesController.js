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


function show(req, res) {
    // get the movie ID from the params
    const id = req.params.id
    // query DB for a single movie
    const movieSql = "SELECT * FROM movies WHERE id = ?"
    // query DB for the reviews of the movie
    const reviewsSql = `
    SELECT reviews.id, reviews.movie_id, reviews.name, reviews.vote, reviews.text, reviews.created_at, reviews.updated_at
    FROM reviews
    JOIN movies 
    ON movies.id = reviews.movie_id
    WHERE reviews.movie_id = ?
    `
    // execute the sql query for movie
    connection.query(movieSql, [Number(id)], (err, results) => {
        if (err) return res.status(500).json({ error: err })

        const movie = results[0]

        if (!movie) {
            return res.status(404).json({
                error: `404! Nessun risultato`
            })
        }

        connection.query(reviewsSql, [Number(id)], (err, reviewsResults) => {
            if (err) return res.status(500).json({ error: err })

            movie.reviews = reviewsResults

            const responseData = {
                data: movie
            }
            console.log(responseData);
            res.status(200).json(responseData)
        })
    })
}


module.exports = {
    index,
    show
}