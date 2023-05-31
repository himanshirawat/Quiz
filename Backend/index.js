const express = require('express')
const  quizes = require('./db/quizes')
const app = express()   // Creating a server
const quizRouter = require('./router/quiz.router')
const PORT = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/quiz",quizRouter);


app.listen(process.env.PORT || PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})