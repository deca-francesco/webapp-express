// import express
const express = require('express');
// create server
const server = express();
// import host and port from env
const HOST = process.env.HOST
const PORT = process.env.PORT

// import routes
const MoviesRoutes = require('./routes/movies');



// server start
server.listen(PORT, () => {
    console.log(`Server is running at ${HOST}:${PORT}`);
})

// use routes
server.use('/movies', MoviesRoutes)