require('dotenv').config();
const express = require('express');
const router = express.Router();

const appController = require('../controller/appController')

router.route('/:code').get(
    appController.check
)

module.exports = router