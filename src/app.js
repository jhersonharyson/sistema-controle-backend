const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();
mongoose.connect('mongodb://sistema-controle-db:sistema-controle-db-123@ds119164.mlab.com:19164/sistema-controle-db',
{ useCreateIndex: true, useNewUrlParser: true,  });

const indexRoutes = require('../src/routes/index-routes')
const emailRoutes = require('../src/routes/email-routes')
const serverRoutes = require('../src/routes/server-routes')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', indexRoutes);
app.use('/sender/ws/v1/', emailRoutes);
app.use('/server/ws/v1/', serverRoutes);
module.exports = app;