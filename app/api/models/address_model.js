const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let Address = new Schema({
    address: {
        type:String
    },
    state: {
        type: String
    },
    zip_code:{
        type: String
    },
    country:{
        type: String
    }
})

module.exports = mongoose.model('Address',Address);