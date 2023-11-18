const express = require("express");
//import express from "express"

// importing for variable reloading
require('dotenv').config()

const app = express();
const port = 100;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter",(req,resp)=>{
    resp.send("Hello twitter")
})

app.get("/login",(req,res)=>{
    res.send("<h1>please login to my site </h1>")
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});



console.log("chai aur code");
