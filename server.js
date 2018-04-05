'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post('/', function (req, res) {
    console.log(req.body);

    res.send(req.body)
});

app.use(express.static('.'));


app.listen(3000, function () {
    console.log("listening on port 3000");
});
