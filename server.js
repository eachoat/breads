const express = require ('express')
const mongoose = require('mongoose')




// DEPENDENCIES
const methodOverride = require('method-override')

//Configuration
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))


mongoose.connect(process.env.MONGO_URI, 
    {useNewUrlParser: true, useUnifiedTopology: true}).then(() =>
     console.log('connected to mongo: ', process.env.MONGO_URI))
     



//Routes
app.get('/', (req, res) => {
    res.send('Welsome to an Awesome App about Breads!')
})

//breads
const breadsController = require ('./controllers/breads_controller.js')
app.use('/breads', breadsController)


// bakers 
const bakersController = require('./controllers/bakers_controller.js')
app.use('/bakers', bakersController)


// 404 Page
app.get('*', (req, res) => {
    res.send('404')
  })
  



//Listen
app.listen(PORT, () => {
    console.log('listening on port', PORT);
})

console.log(PORT)