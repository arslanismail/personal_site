const express = require("express");
const main = require("./router/main");
const app = express();
const port = process.env.PORT || 3000;

// include routes
app.set("view engine", "ejs");
app.use(express.static("public"));

// Index route

// initialize store
app.use("/", main);
// start server
const server = app.listen(port, () => {
  console.log("Server started on port " + port);
});

module.exports = server;
