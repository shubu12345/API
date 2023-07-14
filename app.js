require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const connectdb = require('./db/connect');
const router = require('./router/Product');

app.use(express.json());

app.use("/api/products", router);

app.get("/", (req, res) => {
    res.send("Welcome to our api");
});



app.listen(port, (req, res) => {
    connectdb(process.env.MONGODBURL);
    console.log("server is started at port: ",port);
});