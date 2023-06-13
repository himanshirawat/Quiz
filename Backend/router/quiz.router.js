const express = require('express')
const quizRouter = express.Router();
const quizes = require('../db/quizes');
const authVerify = require("../middleware/authverify")

quizRouter.route("/").get(authVerify,(req,res) => {
    res.json(quizes)
});

module.exports = quizRouter;