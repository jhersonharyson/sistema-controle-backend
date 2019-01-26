'use strict';

exports.index = (req, res, next) =>{
    res.status(200).send({
        version: '1.0',
        product: 'sender',
    })
}