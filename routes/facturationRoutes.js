const express = require('express')
const { getApiStatus, askInvoice, confirmInvoice, resetInvoice, getInvoiceStatus } = require('../controller/facturationController')

const router = express.Router()

router.get('/getStatus', getApiStatus)
router.post('/askInovice', askInvoice)
router.put('/confirmInovice/:uid', confirmInvoice)
router.put('/resetInovice/:uid', resetInvoice)
router.get('/getInoviceSatus/:uid', getInvoiceStatus)

module.exports = router