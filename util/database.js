const Sequelize = require("sequelize");
const sequelize = new Sequelize("node_complete", "root", "ritika91@", {
  dialect: "mysql",
  host: "localhost",
});
module.exports = sequelize;
