const express = require('express')
const { renderLogin } = require('./homeSvc')
const domainCtrl = require('../domain/domainCtrl')
const userCtrl = require('../user/userCtrl')
const authCtrl = require('../auth/authCtrl')
const v1Ctrl = require('../v1/v1Ctrl')
const router = express.Router();


router.use('/domain', domainCtrl)
router.use('/user', userCtrl)
router.use('/auth', authCtrl)
router.use('/v1', v1Ctrl)

router.get('/', renderLogin);

module.exports = router;