const express = require("express");
const Router = express();
Router.get("/login", (req, res, next) => {
  res.send(`<form action="/login" method="POST" onsubmit="localStorage.setItem('username',document.getElementById('username').value)" >
    <input type="text" name="title" id="username" >
    <button type="summit">click </button>
    </form>`);
});

Router.post("/login", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = Router;
