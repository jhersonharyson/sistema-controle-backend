'use strict';
const express = require('express');
const router  = express();
const controller = require('../controlles/email-controller');

router.get('/',controller.sender);

router.post('/test', controller.testCreate);
router.get('/test', controller.testRead);

module.exports = router;