require('dotenv').config();
const Product = require('./model/productModel');
const express = require('express');
const data = require('./product.json');
const connectdb = require('./db/connect');


const start = async() => {
    try{
        connectdb(process.env.MONGODBURL);
        await Product.create(data);
        console.log("sucess");
    }catch(error){
        console.log(error.message);
    }

}

start()