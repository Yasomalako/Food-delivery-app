const mongoose = require('mongoose');

mongoose.set('strictQuery',true)

mongoose.connect('mongodb+srv://yasomalako:0506522015@cluster0.nt0itcx.mongodb.net/delivery-app?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("connection to db succeed..."))
    .catch((err) => console.error('connection felid', err))

const db = mongoose.connection
module.exports = db


