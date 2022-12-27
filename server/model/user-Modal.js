const mongoose = require('mongoose')
// order: [{ type: Schema.Types.ObjectId, ref: 'Orders' }],
// address: { type: Array , require: false},
const userSchema = new mongoose.Schema({
    name: { type: String, require: true },
    lastName: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    passwordValid: { type: String, require: false },
    birthDate: { type: Date, require: true },
    id: { type: Number, require: false },
},
    {
        timestamps: true
        ,
    })

module.exports = mongoose.model("users", userSchema)