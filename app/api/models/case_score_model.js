const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let cScore= new Schema({
    case_id: {
        type: mongoose.Schema.Types.ObjectId
    },
    case_gender: {
        type: String
    },
    case_sickness:{
        type: Boolean
    },
    case_pregnant:{
        type: Boolean
    },
    case_puppy:{
        type: Boolean
    },
    case_pedigree:{
        type: Boolean
    },
    case_size:{
        type: String
    },
    case_hurt:{
        type: Boolean
    },
    case_sterilized:{
        type:Boolean
    },
    case_updated_date:{
        type: Date,
        default: Date.now()
    },
    case_updated_by:{
        type: mongoose.Schema.Types.ObjectId
    }

});
module.exports = mongoose.model('cScore', cScore);