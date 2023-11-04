const fs = require("fs");
const express = require("express");
const Router = express();
Router.get("/", (req, res, next) => {
  fs.readFile("message.txt", (err, data) => {
    if (err) {
      console.log(err);
      data = "No chat exists";
    }
    res.send(`
  <div>${data}</div>
  <form method="POST" action="/" onsubmit="document.getElementById('hiddenbox').value=localStorage.getItem('username')" > 
  <input type="text" name="field" >
  <input type="hidden" name="hiddenfield" id="hiddenbox">
  <button type="summit">Click</button></form> 
            `);
  });
});

Router.post("/", (req, res, next) => {
  console.log(req.body);
  fs.appendFile(
    "message.txt",
    " " + req.body.hiddenfield + ":  " + req.body.field,
    (err) => {
      console.log(err);
    }
  );
  res.redirect("/");
});
module.exports = Router;
