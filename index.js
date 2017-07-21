"use strict";

const express = require("express"),
      bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/", function(req, res, next) {
    res.status(200).end("Hello World");
})

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), function(err) {
    console.log("Server started successfully at http://localhost:4000");
});