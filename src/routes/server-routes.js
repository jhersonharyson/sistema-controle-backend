'use strict';
const express = require('express');
const router  = express();
const controller = require('../controlles/inquilino-controller');

//router.get('/server',controller.sender);

router.post('/server', controller.testCreate);
router.get('/server', controller.testRead);
router.delete('/server/:id',controller.testDelete);

module.exports = router;