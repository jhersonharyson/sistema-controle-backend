'use strict';

const mogoose = require('mongoose');
const Schema = mogoose.Schema;

const schema = new Schema({
    nome:{
        type: String,
        required: true,
        trim: true,
    },
    valorAluguel:{
        type: Number,
        required: true,
    },
    valorAluguelTexto:{
        type: String,
        required: true,
    },
    apartamento:{
        type: String,
        required: true,
    },
    ip:{
        type: String,
        required: true
    },
    apartamentoIp:{
        type: String,
        unique: true, 
        required: true,
    },
    taxaAgua:{
        type: Number,
        required: true,
    },
    taxaAguaTexto:{
        type: String,
        required: true,
    },
    "garagem.valor":{
        type: Number,
    },
    "garagem.valorTexto":{
        type: String,
    },
    vencimento:{
        type: Number,
        required: true,
        max: 31,
        min: 1
    },
    pendencias:[{
        type:String,
    }],
    active:{
        type: Boolean,
        require: true,
        default: true,
    }
});

module.exports = mogoose.model('Inquilino',schema)