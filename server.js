'use strict';

import express from 'express';
import bodyParser from 'body-parser';
var app = express();
var port = process.env.PORT || 1525;
import dotenv from 'dotenv';
// import {Mongoose} from './src/db/mongodb'
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

app.get("/", function (req, res) {
    res.send({ message: "Smaroh server is up and running" });
});

app.listen(port, function (err, serve) {
    if (err) {
        console.log("Error in server.");
    } else {
        console.log(`App running successfully on ${port}`);
    }
});