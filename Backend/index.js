const express = require("express");
const jwt = require("jsonwebtoken");
const quizRouter = require("./router/quiz.router");
const loginRouter = require("./router/auth.router")
const userdata = require("./db/users");
require("dotenv").config();

const app = express(); // Creating a server
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json()); // body parser
app.use("/quiz", quizRouter);
app.use("/auth/login", loginRouter);

app.listen(process.env.PORT || PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
