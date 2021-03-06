const express = require('express')
var router = express.Router();
const flightController = require('../controller/flightController')

router.get('/', function (req, res) {
    res.json({
        'API': '1.0'
    });
});

router.post('/get',flightController.check)
router.post('/fetchAllCities', flightController.getCities);
module.exports = router;