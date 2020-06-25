import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import dbConnect from './config/database.js'
import route from './api/routes/route.js'
dotenv.config()

const PORT = process.env.PORT || 3000
const app = express()

mongoose.set('useUnifiedTopology', true)
mongoose.set('useCreateIndex', true)
mongoose
  .connect(dbConnect, { useNewUrlParser: true })
  .then(() => { console.log(`Connected to ${process.env.DB_NAME} database`) })
  .catch(err => { console.log(err) })

//use cors
app.use(cors())

//configure body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//configure morgan
app.use(morgan('dev'))

//define first route
app.get('/', (req, res) => {
  res.json('menv work')
})

app.use('/music', route)

//define static dir
app.use('/uploads', express.static('uploads'))

app.listen(PORT, () => {
  console.log(`App is running at http://localhost:${PORT}`)
})