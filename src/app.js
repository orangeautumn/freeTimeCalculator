var express = require("express");
var usersRouter = require("./routes/freeTime");

var app = express();


app.use(express.json());
app.use("/freeTime", usersRouter);

module.exports = app;