const dotenv = require("dotenv")
dotenv.config()
const express = require('express')
const app = express()
const port = 8000;
const cors = require('cors')
require('./DB')
const passport = require('passport')
const passportMiddelWare = require('./config/passport-midellwear')(passport)
const usersRoute = require('./routes/users-router')
const productRoutes = require('./routes/products-route')
const {main} = require('./assets/fakerData')

app.use(express.json({express: true}))
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(passport.initialize())
main()


app.use('/api/users', usersRoute);
app.use('/api/products/', productRoutes);
// app.use('/flights',flightRoute);

 app.get('/',(req,res)=>{
    res.send({massage:"get data successfully"})
 })
//  process.on('warning', (warning) => {
//    console.log(warning.stack);
// });
 app.listen(port,()=>{
    console.log(`server is connected to ${port}`);
 })