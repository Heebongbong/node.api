const express = require('express')
const { isLoggedIn, isNotLoggedIn } = require('../../middle/logInCheck')
const { createDomain } = require('./domainSvc')
const router = express.Router();

router.get('/', isLoggedIn, createDomain);

module.exports = router;