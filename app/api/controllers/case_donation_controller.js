const cDonation = require('../models/case_donation_model')



const getTotalDonations = (req,res) => {
    cDonation.find(function (err, cases) {
        if (err) {
            console.log(err);
        } else {
            var total_amount = 0
            for(index in cases){
                total_amount = total_amount + cases[index].donation_amount  
            }
            res.send("Total Donations: " + total_amount)
        }
    });
}

const updateCaseDonation = (req,res) => {
    cDonation.findByIdAndUpdate({_id:req.body.case_id},
        {$inc:{
            donation_amount:req.body.donation_amount
            
        }},(err,response)=>{
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

  const makeCaseDonation = (req, res) => {
    let donation = new cDonation(req.body)
    donation.save()
        .then(todo => {
            res.status(200).json({
                success: 'true',
                message: 'Case Donation created'

            })
        })
        .catch(err => {
            res.status(400).json({
                success: 'false',
                message: 'Case Donation failure ' + err

            })

        })
}




module.exports = {
    getTotalDonations,updateCaseDonation,makeCaseDonation
}

