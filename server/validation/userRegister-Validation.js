const validator  = require('validator');
const isEmpty = require('is-empty');


module.exports = registerInputValidation= (user) => {
    errors = {};
    user.name = isEmpty(user.name) ? "" : user.name;
    user.lastName = isEmpty(user.lastName) ? "" : user.lastName;
    user.email = isEmpty(user.email) ? "" : user.email;
    user.birthDate = isEmpty(user.birthDate) ? '' : user.birthDate;
    user.password = isEmpty(user.password) ? "" : user.password;
    user.passwordValid = isEmpty(user.passwordValid) ? "" : user.passwordValid;

    if (validator.isEmpty(user.name)) errors.name = "First Name Is required";
    if (validator.isEmpty(user.lastName)) errors.lastName = "last name Is required";
    if(!validator.isEmail(user.email)) errors.email = "email Is not valid";
    if(validator.isEmpty(user.birthDate)) errors.birthDate = "birth date is require";
    if (validator.isEmpty(user.password)) errors.password = "password Is required";
    if (!validator.equals(user.password, user.passwordValid)) errors.passwordValid = "Passwords not match"
    return {
        errors,
        isValid: isEmpty(errors)
    }
}