const express = require('express')
const router = express.Router()
const ticketsCtrl = require('../controllers/tickets')

router.get('/flights/:id/tickets/new', ticketsCtrl.newTicketView)
router.post('/flights/:id/tickets', ticketsCtrl.addToFlight)

module.exports = router;