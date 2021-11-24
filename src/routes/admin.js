const express = require('express');
const router = express.Router();

const { admin } = require('../controllers/adminController');

const userAuth = require('../middlewares/userAuth');

router.get('/', userAuth, admin);

module.exports = router;
