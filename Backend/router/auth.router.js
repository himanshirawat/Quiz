const express = require("express");
const {loginHandler,signupHandler} = require("../controllers/auth.controller");

const loginRouter = express.Router();
const signupRouter = express.Router();

loginRouter.route("/").post(loginHandler);
signupRouter.route("/").post(signupHandler);

module.exports = {loginRouter,signupRouter};
