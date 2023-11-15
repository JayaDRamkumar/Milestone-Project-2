require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require ('path')
const app = express()

const mongoose = require('mongoose')



app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use(express.json());
// server static FE in production mode
if (process.env.NODE_ENV === 'production') {
app.use(express.static(path.join(__dirname, 'client', 'build')));

}

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

app.use('/movies', require('./controllers/movies.js'))

app.listen(process.env.PORT)








