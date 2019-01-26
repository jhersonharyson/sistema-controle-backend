'use strict';
const express = require('express');
const router  = express();
const controller = require('../controlles/index-controller');

router.get('/',controller.index);

module.exports = router;


