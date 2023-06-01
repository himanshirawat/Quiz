const express = require('express')
const quizRouter = express.Router();
const quizes = require('../db/quizes')

quizRouter.route('/').get((req,res) => {
    res.json(quizes.data)
});

module.exports = quizRouter;