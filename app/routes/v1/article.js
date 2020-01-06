var express = require('express');
var router = express.Router();

router.get('/test', function (req, res) {
    res.json({
        message:"This is article api"
    });
});

module.exports = router;