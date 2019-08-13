const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let cDonation= new Schema({
    case_id: {
        type: mongoose.Schema.Types.ObjectId
    },
    donation_description: {
        type: String
    },
    donation_amount:{
        type: Number
    },
    donation_comments:{
        type: String
    },
    donation_userid:{
        type: String,
        default: "anonimo"
    }

});
module.exports = mongoose.model('cDonation', cDonation);