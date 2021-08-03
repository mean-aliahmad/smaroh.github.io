'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _mongodb = require('./src/db/mongodb');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = process.env.PORT || 3000;

_dotenv2.default.config();

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true, limit: '50mb' }));

app.get("/", function (req, res) {
    res.send({ message: "Smaroh server is up and running" });
});

app.listen(port, function (err, serve) {
    if (err) {
        console.log("Error in server.");
    } else {
        console.log('App running successfully on ' + port);
    }
});