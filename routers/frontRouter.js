const express = require('express');
const router = express.Router();
const {showBooks} = require('../controllers/frontController');

router.get('/', showBooks)

module.exports=router;