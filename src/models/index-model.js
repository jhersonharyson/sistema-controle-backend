'use strict';

const mogoose = require('mongoose');
const Schema = mogoose.Schema;

const schema = new Schema({
    title:{
        type: String,
        required: true,
        trim: true,
    },
    slug:{
        type: String,
        required: true,
        unique: true,
        index: true
    },
    description:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    active:{
        type: Boolean,
        required: true,
        default: true,
    },
    tags:[{
        type: String,
        required: true,
    }]
});

module.exports = mogoose.model('Product',schema)