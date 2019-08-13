const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let cExpense= new Schema({
    case_id: {
        type: mongoose.Schema.Types.ObjectId
    },
    expense_description: {
        type: String
    },
    expense_evidence:{
        type: String
    },
    expense_valid:{
        type: Boolean
    },
    expense_reimbursed:{
        type: Boolean
    },
    expense_owner:{
        type: mongoose.Schema.Types.ObjectId
    },
    expense_updated_date:{
        type: Date,
        default: Date.now()
    },
    expense_updated_by:{
        type: mongoose.Schema.Types.ObjectId
    }

});
module.exports = mongoose.model('cExpense', cExpense);