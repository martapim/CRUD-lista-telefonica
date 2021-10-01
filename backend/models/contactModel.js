const mongoose = require('mongoose');

const Contact = new mongoose.Schema({
    nome:{
       type:String,
       required:true
    },
    telefone: {
        type: Number,
        
    },
    celular: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    endereco: {
        type: String,
        required: true,
    },
    date:{
        type:Date,
        default:Date.now
    }
    });

module.exports = mongoose.model('contact', Contact);