'use strict';
const mongoose = require('mongoose');
require('../models/inquilino-model');
const Inquilino = mongoose.model('Inquilino')


exports.testCreate = (req, res, next) => {

    let inquilino = new Inquilino(req.body)
    inquilino
    .save().then(_ => {
        res.status(200).send({
            ...inquilino
        })
    }).catch(error => {
        res.status(403).send({
            error
        })
    })
}

exports.testRead = (req, res, next) => {
    Inquilino
        .find({})
        .then(data => {
            res.status(200).send({
                data
            })
        }).catch(error => {
            res.status(403).send({
                error
            })
        })
}

exports.testDelete = async (req, res, next) => {
    await Inquilino.deleteMany({ _id: req.params.id });
    Inquilino
        .find({})
        .then(data => {
            res.status(200).send(
                data
            )
        }).catch(error => {
            res.status(403).send(
                error
            )
        })
}