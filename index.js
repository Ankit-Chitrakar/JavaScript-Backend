// console.log("Ankit Hello");

const express = require('express');
require('dotenv').config()
// import express from "express";
const app = express();

const port = process.env.PORT

app.get('/', (req, res)=>{
    res.send("Hello Ankit Chitrakar")
})

app.get('/me', (req, res)=>{
    res.send("Tiasa Chitrakar")
})

app.get('/youtube', (req, res)=>{
    res.send("Hello Youtube")
})

app.listen(port, ()=>{
    console.log(`App listen on port ${port}`);
})