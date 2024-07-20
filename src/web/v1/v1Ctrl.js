const express = require('express')
const router = express.Router();
const { createToken, tokenTest } = require('./v1Svc')
const {isLoggedIn, isNotLoggedIn} = require("../../middle/logInCheck");
const {verifyToken} = require("../../middle/jwt");

router.post('/token', createToken);
router.get('/test', verifyToken, tokenTest);

module.exports = router;