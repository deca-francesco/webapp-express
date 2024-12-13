// import express
const express = require('express');
// create server
const server = express();
// import host and port from env
const HOST = process.env.HOST
const PORT = process.env.PORT

// import cors
const cors = require('cors');
// cors policy unlock only for this domain
server.use(cors({ origin: process.env.WEBAPP_FRONT_ORIGIN }))


// import routes
const MoviesRoutes = require('./routes/movies');

// import middlewares
const error404HandlerMiddleware = require('./middlewares/error404HandlerMiddleware');
const error500HandlerMiddleware = require('./middlewares/error500HandlerMiddleware');




// server start
server.listen(PORT, () => {
    console.log(`Server is running at ${HOST}:${PORT}`);
})

// body parser
server.use(express.json());


// use routes
server.use('/api/movies', MoviesRoutes)

// error 404 handler middleware
server.use(error404HandlerMiddleware);


// error 500 handler middleware
server.use(error500HandlerMiddleware);
