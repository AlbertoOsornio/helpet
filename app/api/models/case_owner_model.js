const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let cOwner = new Schema({
    case_owner: {
        type: mongoose.Schema.Types.ObjectId
    },
    owner_rate: {
        type: Number,
        defalut:0
    },
    owner_cases:{
        type: Number,
        default:0
    }

});

module.exports = mongoose.model('cOwner', cOwner);