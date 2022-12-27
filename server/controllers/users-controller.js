const bcrypt = require('bcryptjs')
const userModel = require('../model/user-Modal')
const key = process.env.SECRET_KEY
const validateLoginInputs = require('../validation/logIn-Validation')
const registerInputValidation = require('../validation/userRegister-Validation')
const jwt = require('jsonwebtoken')



const register = async (req, res) => {
    const { isValid, errors } = registerInputValidation(req.body.user);
    if (!isValid) return res.status(400).json(errors)
    userModel.findOne({ email: req.body.user.email }, (err, user) => {
        if (err) return res.status(400).json(err)
        if (user) return res.json({ massage: "email already taken" })
        bcrypt.genSalt()
            .then((salt) => {
                bcrypt.hash(req.body.user.password, salt)
                    .then(async (hashPassword) => {
                        req.body.user.password = hashPassword;
                        await userModel.insertMany(req.body.user)
                            .then(() => res.json({ massage: "user registration pass successfully" }))
                            .catch(err => res.json(err))
                    })
                    .catch(err => { console.log(err); })
            })
            .catch(error => { console.log(error); })
    })
}


const logIn = async (req, res) => {
    const { isValid, errors } = validateLoginInputs(req.body.user)
    if (!isValid) return res.status(400).json(errors)
    const email = req.body.user.email;
    const password = req.body.user.password;
  await  userModel.findOne({ email })
        .then(user => {
            if (!user) {
                return res.status(404).json({ emailNotFound: "Email not found" });
            }
            bcrypt.compare(password, user.password).then(isMatch => {
                if (isMatch) {
                    const payload = {
                        id: user.id,
                        name: user.name,
                        email: user.email
                    };
                    jwt.sign(payload, key, { expiresIn: 31556926 }, (err, token) => {
                        if (err) return res.status(400).json(err)
                        res.json({ success: true, token: `Bearer ${token}` });
                    });
                }
                else {
                    return res.status(400).json({ passwordIncorrect: "Password incorrect" });
                }
            });
        });
}

const getUsers = async (req, res) => {
 return  await userModel.find()
        .then(user => {
            console.log(user,"111");
            res.status(200).json({success:true,user});
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to get user',
                error: err
            });
        });
}

module.exports = {
    logIn,
    register,
    getUsers
}

