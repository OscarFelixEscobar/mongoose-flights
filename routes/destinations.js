var express = require('express');
var router = express.Router();
const destinationCtrl = require('../controllers/destinations')

router.post('/flights/:id/destinations', destinationCtrl.create)

module.exports = router;
