// import mysql
const mysql = require('mysql2')

// create connection
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

// connect to db
connection.connect((err) => {
    if (err) {
        console.log('Error connecting to Db', err);
    } else {
        console.log(`Connected to database`)
    }
})


module.exports = connection