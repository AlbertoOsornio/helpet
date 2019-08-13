const express = require('express')
const router = express.Router()

const AddressController = require('../api/controllers/address_controller')

router.post('/get-addresses',AddressController.getAddresses)
router.post('/create-address',AddressController.createAddress)

module.exports = router