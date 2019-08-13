const User = require('../models/user_model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const getUsers = (req,res) => {
    User.find(function (err, users) {
        if (err) {
            console.log(err);
        } else {
            res.json(users);
        }
    });
}


const authUser = (req,res) => {
    console.log("llegando a login: " + req.body.email,req.body.password)
    const user = {
        email: req.body.email,
        password: req.body.password
    }
    User.findOne({ email: user.email }, function (err, userData) {
        if (err) {
            const error = {
                success: false,
                error: err
            }
            next(error);
        } else {
            //console.log("userData: " + userData)
            if (userData != null && bcrypt.compareSync(req.body.password, userData.password)) {
        
                const token = jwt.sign({ user }, 'secreto', function (err, token) {
                    if (!err) {
                        res.json({
                            success: 'true',
                            username: userData.username,
                            token: token
                        })
                    } else {
                        res.json({
                            success: 'false',
                            error: err
                        })
                    }
                })
            } else {
                res.json({
                    success: false,
                    message: 'User not authenticated'
                })
            }
        }
    })
}

const create = (req, res) => {
    User.create({
        user_name: req.body.user_name,
        user_password: req.body.user_password,
        user_email: req.body.user_email,
        user_phone: req.body.user_phone,
        user_dob: req.body.user_dob,
        user_address: req.body.user_address
        }, 
        function (err, result) {
        if (err) {
            res.json({
                success: false,
                message: err + ' ' + result
            })
        } else {
            res.json({
                success: true,
                message: result
            })
        }
    })
}

const create2 = (req, res) => {
    let user = new User(req.body)
    user.save()
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
    create,create2,authUser,getUsers
}