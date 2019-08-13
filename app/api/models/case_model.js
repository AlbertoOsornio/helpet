const mongoose = require('mongoose');
const Schema = mongoose.Schema;



let Case = new Schema({
    case_title: {
        type: String
    },
    case_description: {
        type: String
    },
    case_address:{
        type: mongoose.Schema.Types.ObjectId
    },
    case_initial_budget:{
        type: Number
    },
    case_likes:{
        type: Number,
        default:0
    },
    case_date_report:{
        type: Date
    },
    case_status:{
        type:String,
        default:"new"
    },
    case_updated_date:{
        type: Date,
        default: Date.now()
    },
    case_temporal_home:{
        type:Boolean
    },
    case_definite_home:{
        type:Boolean
    },
    
    case_owner:{
        type:mongoose.Schema.Types.ObjectId
    }

});
module.exports = mongoose.model('Case', Case);