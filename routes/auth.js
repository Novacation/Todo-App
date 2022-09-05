const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const isUsernameUnique = require('../middlewares/auth/isUsernameUnique')
const saltRounds = 10

router.post('/login', (req, res) => {})

router.post('/register', isUsernameUnique, async (req, res) => {
  const { nickname, username, password } = req.body
  try {
    bcrypt.hash(password, saltRounds, async (err, hash) => {
      // Store hash in your password DB.
      await User.create({
        name: nickname,
        username,
        password: hash
      })
    })

    res.json({
      status: true
    })
  } catch (e) {
    console.log(e)
    res.json({
      status: false,
      error: 'Invalid credentials'
    })
  }
})

router.post('/token', (req, res, next) => {
  const token = req.headers['x-access-token']

  console.log(token)
  return res.json({
    status: 200
  })
})

module.exports = router
