const express = require ('express')
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








//Routes
app.get('/', (req, res) => {
    res.send('Welsome to an Awesome App about Breads!')
})

//Breads
const breadsController = require ('./controllers/breads_controller.js')
app.use('/breads', breadsController)

// 404 Page
app.get('*', (req, res) => {
    res.send('404')
  })
  



//Listen
app.listen(PORT, () => {
    console.log('listening on port', PORT);
})

console.log(PORT)