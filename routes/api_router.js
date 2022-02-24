const express = require('express');
const router = express.Router();

router.get("/route1", function (req, res, next){
    res.send("Success!!");
    next();
});

module.exports = router;
