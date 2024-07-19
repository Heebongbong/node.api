const express = require('express')
const { isLoggedIn, isNotLoggedIn } = require('../../middle/logInCheck')
const { renderLogin } = require('./homeSvc')
const domainCtrl = require('../domain/domainCtrl')
const router = express.Router();


router.use('/domain', domainCtrl)

router.get('/', renderLogin);

module.exports = router;