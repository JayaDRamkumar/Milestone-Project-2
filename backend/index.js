
require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const mongoose = require('mongoose')


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})


app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


app.use('/movies', require('./controllers/movies.js'))
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))




app.get('/', (req, res) => {
    res.render('home')
  })
  
  app.get('*', (req, res) => {
    res.render('error404')
  })
  
  
// app.get('/', function (req, res) {
//     res.send(` 
//     <body style="margin: 0;">
//         <div style="border: 1px solid black; height: 10vh; background-color: white;">
//         <h2 style="text-align: center;">NAV BAR</h2>
//         </div>
//             <h1>Hello World</h1>
//         </body>
//     `)
// })


// app.get('/reviews', function (req, res) {
//     res.send(` 
//     <body style="margin: 0;">
//     <div style="border: 1px solid black; height: 10vh; background-color: white;">
//         <h2 style="text-align: center;">NAV BAR</h2>
//         </div>
//         <h1>Review Page</h1>
//     </body>
// `)
// })

// app.get('*', (req, res) => {
//     res.status(404).send('<h1>404 Page</h1>')
// })



app.listen(process.env.PORT)







/* remnants of server.js .... goodbye
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
  )*/

