const express = require('express');
const router = express.Router();
const path = require('path');

router.get("/route1", function (req, res, next){
    res.send("Success!!");
    next();
});

router.get("/product/:productId", function (req, res){
    const pid = parseInt(req.params.productId, 10);
    console.log("ProductID = "+pid);
    const fileID = pid + ".html";
    const filename = path.join(__dirname, "../product", fileID);
    res.sendFile(filename)
})

//app.get(/^\/products\/(\d+)$/, (req, res) =>{
router.get(/^\/articles\/(\d+)$/, function(req, res){
    const aId = parseInt(req.params[0], 10);
    console.log("The user is asking for article"+aId);
    //we can send a file related to request
    const articleID = "a" + aId + ".html"; // change this based on your setup
    const filename = path.join(__dirname, "../articles", articleID);
    res.sendFile(filename);
});

module.exports = router;
