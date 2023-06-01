const express = require("express");
const loginHandler = require("../controllers/auth.controller");

const loginRouter = express.Router();

loginRouter.route("/").post(loginHandler);

module.exports = loginRouter;
