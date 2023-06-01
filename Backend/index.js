const express = require('express')
const  quizes = require('./db/quizes')
const quizRouter = require('./router/quiz.router')
const userdata = require('./db/users')


const app = express()   // Creating a server
const PORT = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json()) // body parser
app.use("/quiz",quizRouter);

app.post("/auth/login",(req,res) => {
    const {username,password} = req.body;
    // console.log({username,password});
    // res.json({username, password, message:"got the values"})

    const isUserVerified = userdata.users.some(user=> user.username === username && user.password === password);
    if (isUserVerified){
      res.json({message: "User Verified"})
    } else {
      res.status(401).json({message : "Invalid Credentials"})
    }
})


app.listen(process.env.PORT || PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})