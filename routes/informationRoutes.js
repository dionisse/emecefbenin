const express = require('express')
const { getInfoStatus, getTaxInfo, getInvoiceType, getPaymentType } = require('../controller/informationController')

const router = express.Router()

router.get('/getInfoStatus',getInfoStatus)
router.get('/getTaxInfo',getTaxInfo)
router.get('/getInoviceType',getInvoiceType)
router.get('/getPaymentType', getPaymentType)

module.exports = router