const Address = require('../models/address_model')


const getAddresses = (req,res) => {
    Address.find(function (err, addresses) {
        if (err) {
            console.log(err);
        } else {
            res.json(addresses);
        }
    });
}

const createAddress = (req, res) => {
    let address = new Address(req.body)
    address.save()
        .then(todo => {
            res.status(200).json({
                success: 'true',
                message: 'User Created'

            })
        })
        .catch(err => {
            res.status(400).json({
                success: 'false',
                message: 'User Created failure' + err

            })

        })
}

module.exports = {
    getAddresses,createAddress
}

