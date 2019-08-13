const express = require('express')
const router = express.Router()

const CaseController = require('../api/controllers/case_controller')
const CaseDonationController = require('../api/controllers/case_donation_controller')


router.get('/getCases', CaseController.getCases)

router.post('/publishCase', CaseController.publishCase)

router.post('/addLikes',CaseController.addLikes)
router.post('/updateCaseDonation',CaseDonationController.updateCaseDonation)
router.post('/makeCaseDonation',CaseDonationController.makeCaseDonation)
router.get('/getTotalDonations',CaseDonationController.getTotalDonations)


module.exports = router