const express = require('express')
const router = express.Router();
const {verifyToken} = require("../../middle/jwt");
const { getMyPost, getPostByHashtag } = require('./postSvc')

router.get('/my', verifyToken, getMyPost);
router.get('/hashtag/:title', verifyToken, getPostByHashtag);

module.exports = router;