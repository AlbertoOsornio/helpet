const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Address= require('../models/address_model')
const bcrypt = require ('bcrypt')
const saltRounds = 10

let User = new Schema({
    user_name: {
        type: String
    },
    user_password: {
        type: String
    },
    user_email:{
        type: String
    },
    user_phone:{
        type: Number
    },
    user_dob:{
        type: Date
    },
    user_address:{
        type: mongoose.Schema.Types.ObjectId
    }

});

User.pre('save',function(next){
    this.user_password = bcrypt.hashSync(this.user_password,saltRounds);
    next()
})
module.exports = mongoose.model('User', User);