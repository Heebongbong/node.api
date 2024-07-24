const express = require('express')
const router = express.Router();
const { renderJoin } = require('./userSvc')
const {isLoggedIn, isNotLoggedIn} = require("../../middle/logInCheck");

router.get('/join', isNotLoggedIn, renderJoin);

module.exports = router;