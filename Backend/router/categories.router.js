const express = require('express')
const categoryRouter = express.Router();
const quizes = require('../db/quizes');

categoryRouter.route("/").get((req,res) => {
    res.json(quizes)
});

module.exports = categoryRouter;