const express = require("express");

const quizRouter = require("./router/quiz.router");
const {loginRouter,signupRouter} = require("./router/auth.router")
const routeNotFound = require("./middleware/routeNotFound");
const quizes = require("./db/quizes");
const categoryRouter = require("./router/categories.router");
require("dotenv").config();

const app = express(); // Creating a server
app.use(express.json()); // body parser

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello from Himanshi");
});

app.use("/categories", categoryRouter);
app.use("/quiz", quizRouter);
app.use("/auth/login", loginRouter);
app.use("/auth/signup", signupRouter);
app.use(routeNotFound);

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server Started on port ${PORT}`);
});
