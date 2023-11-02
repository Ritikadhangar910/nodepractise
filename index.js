const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const RouteLogin = require("./routes/login");
const Routeshowuser = require("./routes/showuser");
app.use(bodyparser.urlencoded({ extended: false }));
app.use("/", RouteLogin);
app.use("/", Routeshowuser);
app.listen(4000);
