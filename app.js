const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

//1. logging
app.use(function (req, res, next){
    console.log("Request IP: " + req.url);
    console.log("Request date: " + new Date());
    next();
})

//2. File Server
app.use(function (req, res, next){
    const filePath = path.join(__dirname, "static", req.url);
    fs.stat(filePath, function (err, fileInfo){
        if (err) {
            next();
            return;
        }

        if (fileInfo.isFile()){
            res.sendFile(filePath);
        } else {
            next();
        }
    });
});


app.listen(3000, function () {
    console.log("App started on port 3000");
})



