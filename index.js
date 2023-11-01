const express = require("express");
const app = express();
app.use((req, res, next) => {
  console.log("in the middleware");
  next();
});
app.use((req, res, next) => {
  console.log("in the middleware");
  res.send(" <h1> hello from express </h1>");
  next();
});

app.listen(4000);
