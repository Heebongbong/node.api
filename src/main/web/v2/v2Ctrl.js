const express = require('express')
const router = express.Router();
const { createToken, tokenTest } = require('./v2Svc')
const {verifyToken} = require("../../middle/jwt");
const postCtrl = require("../post/postCtrl");

router.post('/token', createToken);
router.get('/test', verifyToken, tokenTest);

router.use('/posts', postCtrl);


module.exports = router;