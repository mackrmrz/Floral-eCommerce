const userRouter = require('express').Router()
let User = require('../models/users.model');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");


userRouter.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

userRouter.route('/createUser').post((req, res) => {
    User.find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length >= 1) {
                return res.status(409).json({
                    message: "Email Already Exists"
                });
            }else{
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if(err) {
                        return res.status(500).json({
                            error: err
                        });
                    } else {
                        const user = new User({
                            email: req.body.email,
                            password: hash
                        });
                        user.save()
                            .then(results => {
                                console.log("Here is what i Created", results)
                                res.status(201).json({
                                    message: "SignUp Created"
                                })
                            })
                            .catch(err => {
                                console.log("This is the error I don't want to see", err)
                                res.status(500).json({
                                    error: err
                                });
                            });
                    }
                })
            }
        })
});


userRouter.route("/login").post((req, res) => {
    User.find({
        email: req.body.email
    })
        .exec()
        .then(user => {
            if (user.length < 1) {
                return res.status(401).json({
                    message: "Auth failed"
                });
            }
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if (err) {
                    return res.status(401).json({
                        message: "Auth failed"
                    });      
                }
                if (result) {
                    const token = jwt.sign(
                        {
                            email: user[0].email,
                            userId: user[0]._id
                        }, 
                            process.env.JWT_KEY,
                        {
                            expiresIn: "1hr"
                        }
                    );
                    return res.status(200).json({
                        message: "Succesful Login",
                        token: token
                    });
                }
                res.status(401).json({
                    message: "Auth failed"
                });      
            });
        });
})

userRouter.route("/:userId").delete((req, res, next) => {
    User.deleteOne({ _id: req.params.id })
        .exec()
        .then(result => {
            res.status(200).json({
                message: "User deleted"
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

module.exports = userRouter;