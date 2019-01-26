'use strict';
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'harysonjherson@gmail.com',
        pass: '24081998'
    }
});
const mailOptions = {
    from: 'harysonjherson@gmail.com',
    to: 'jherson_k-f@hotmail.com',
    subject: 'Enviando email usando Node.js',
    text: 'Easy!'
};

exports.sender = (req, res, next) => {
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            res.status(200).send({
                message: 'Erro ' + error
            })
            console.log(error);
        } else {
            res.status(200).send({
                message: 'Email enviado: ' + info.response
            })
            console.log('Email enviado: ' + info.response);
        }
    });
}


const mongoose = require('mongoose');
require('./../models/index-model');
const Product = mongoose.model('Product')


exports.testCreate = (req, res, next) => {
    let product = new Product(req.body)
    product.save().then(_ => {
        res.status(200).send({
            ...product
        })
    }).catch(error => {
        res.status(403).send({
            error
        })
    })




}

exports.testRead = (req, res, next) => {

    Product
        .find({ active: true }, 'title price slug')
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

// exports.testRead = async (req, res, next) => {
//     await Product.deleteMany({ _id: "5c01851270b41b11344688be" });
//     Product
//         .find({ active: true }, '_id title price slug')
//         .then(data => {
//             res.status(200).send(
//                 data
//             )
//         }).catch(error => {
//             res.status(403).send(
//                 error
//             )
//         })
// }