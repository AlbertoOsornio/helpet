const Case = require('../models/case_model')
const cOwner = require('../models/case_owner_model')


const getCases = (req,res) => {
    console.log("llegando a getCases")
    Case.find(function (err, cases) {
        if (err) {
            console.log(err);
        } else {
            res.json(cases);
        }
    });
}

const publishCase = (req, res) => {
    let caso = new Case(req.body)
    caso.save()
    .then( todo1 => {
        assignOwner(req.body.case_owner)
    })
        .then(todo => {
            res.status(200).json({
                success: 'true',
                message: 'Case Created'

            })
        })
        .catch(err => {
            res.status(400).json({
                success: 'false',
                message: 'Case Created failure ' + err

            })

        })
}

function assignOwner(owner){
    caseOwner = {
        case_owner: owner
    }
    newOwner = new cOwner(caseOwner)
    newOwner.save().then(todo =>{
        res.status(200).json({
            success: 'true',
            message: 'Case Created'

        })
    })
        .catch(err => {
            res.status(400).json({
                success: 'false',
                message: 'Case Created failure ' + err

            })
        })
}

const addLikes = (req,res) => {
  Case.findByIdAndUpdate({_id:req.body.id},{$inc:{case_likes:1}},(err,response)=>{
    if(err){
        res.status(400).json({
            success: 'false',
            message: 'Case Not Updated: ' + err

        })
    }else{
        res.status(200).json({
            success: 'true',
            message: 'Case updated'
        })
    }
  })
}

module.exports = {
    getCases,publishCase,addLikes
}