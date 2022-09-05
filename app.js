const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const logger = require('morgan')
const auth = require('./routes/auth')
const app = express()

dotenv.config({ path: './config.env' })

app.use(logger('dev'))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

//parse application/json
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))

//routes
app.use('/auth', auth)
;(async () => {
  const database = require('./db')
  const Task = require('./models/Task')
  const User = require('./models/User')

  User.hasMany(Task)
  Task.belongsTo(User)
  try {
    await database.sync(/* { force: true } */)
  } catch (error) {
    console.log(error)
  }
})()

module.exports = app
