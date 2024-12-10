// import express
const express = require('express');
// create router
const router = express.Router();
// import controller
const MoviesController = require("../controllers/MoviesController")



// index route
router.get("/", MoviesController.index);

// show route
// router.get("/:id", MoviesController.show);


module.exports = router;
