const bodyParser = require("body-parser");
const express = require("express");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/addproduct", (req, res, next) => {
  res.send(`<form action="/product" method="POST" >
  <input type="text" name="title">
  <input type="text" name="length">
  <button type="summit" >add product</button> 
  </form>`);
});
app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>hello expensee</h1>");
});
app.listen(4000);
