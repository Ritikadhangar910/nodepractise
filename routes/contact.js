const express = require("express");
const Router = express();
const path = require("path");
const rootDir = require("../util/path");
Router.get("/contactus", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contact.html"));
});
Router.post("/success", (req, res, next) => {
  res.send("Form successfuly filled");
});

module.exports = Router;
