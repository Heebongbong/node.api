const express = require('express')
const { renderLogin } = require('./homeSvc')
const domainCtrl = require('../domain/domainCtrl')
const userCtrl = require('../user/userCtrl')
const authCtrl = require('../auth/authCtrl')
const v1Ctrl = require('../v1/v1Ctrl')
const v2Ctrl = require('../v2/v2Ctrl')
const {deprecated, apiLimit} = require("../../middle/limit");
const router = express.Router();

router.use('/domain', domainCtrl)
router.use('/user', userCtrl)
router.use('/auth', authCtrl)
router.use('/v1', deprecated, v1Ctrl)
router.use('/v2', apiLimit, v2Ctrl)

router.get('/', renderLogin);

module.exports = router;