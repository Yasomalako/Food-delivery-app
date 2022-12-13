const validator = require('validator');
const isEmpty = require('is-empty');
module.exports = function validateLoginInputs(user) {
    let errors = {};
    user.email = isEmpty(user.email) ? '' : user.email;
    user.password = isEmpty(user.password) ? '' : user.password;

    if (!validator.isEmail(user.email)) {
        errors.email = 'email is required'
    }
    else if (validator.isEmpty(user.password)) {
        errors.password = "email is require"
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};