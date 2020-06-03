const express = require("express");
const {check, validationResult} = require("express-validator/check")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const key = require("../config/secret")
const router = express.Router()
const auth = require('../config/auth')
const User = require('../models/UserModel')

router.post(
    "/signup",
    [
        check("name", "Please enter a valid name").not().isEmpty(),
        check("email", "Please enter a valid email").isEmail(),
        check("password", "Please enter a valid password").isLength({min:6})
    ],
    async (req, res) => {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            })
        }

        const {name, email, password} = req.body
        try {
            let user = await User.findOne({
                email
            })
            if (user) {
                return res.status(400).json({
                    errors: [{msg: "User already exists!"}]
                })
            }

            user = new User ({
                name, email, password
            })
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);

            await user.save()

            const payload = {
                user : {
                    id: user.id
                }
            }

            jwt.sign(payload, key, { expiresIn: 10000 }, (err, token) => {
                if (err) throw err;
                res.status(200).json({
                    token
                });
            })
        } catch (err) {
            console.log(err.message);
            res.status(500).send("Error in saving the user")
        }
    }
)

router.post("/login", [
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a valid password").isLength({min: 6})
],
async (req,res) => {
    const errors = validationResult(req)

    if(!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    }

    const {email, password} = req.body;

    try {
        let user = await User.findOne({
            email
        })
        if(!user) {
            return res.status(400).json({
                errors:[{msg: "User not exist"}]
            })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) {
            return res.status(400).json({
                errors: [{msg: "Incorrect password!"}]
            })
        }
        
        const payload = {
            user: {
                id: user.id
            }
        }
        jwt.sign(
            payload,
            key,
            {
              expiresIn: 3600
            },
            (err, token) => {
              if (err) throw err;
              res.status(200).json({
                token
              });
            }
          );
        
    } catch (e) {
        console.error(e);
        res.status(500).json({
          message: "Server Error"
        });
    }
})

router.get("/me", auth, async (req, res) => {
    try {
      const user = await User.findById(req.user.id);
      res.json(user);
    } catch (e) {
      res.send({errors:[{ msg: "Error in Fetching user" }]});
    }
});

module.exports = router