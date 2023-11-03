const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const routeAdmin = require("./routes/admin");
const shopAdmin = require("./routes/shop");
const routeContact = require("./routes/contact");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", routeAdmin);
app.use(shopAdmin);
app.use(routeContact);
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404error.html"));
});
app.listen(4000);
