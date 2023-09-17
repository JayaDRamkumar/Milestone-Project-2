require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()

const mongoose = require('mongoose')


app.use('/movies', require('./controllers/movies.js'))
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use(express.json());

  
app.get('*', (req, res) => {
    res.render('error404')
  })
  
  
// app.get('/', function (req, res) {
//     res.send("home")
//   })



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

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
}

connectToDatabase();



app.listen(process.env.PORT)








