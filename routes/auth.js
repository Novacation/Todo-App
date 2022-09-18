const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const isUsernameUnique = require('../middlewares/auth/isUsernameUnique')
const { sign, verify } = require('jsonwebtoken')
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
      status: true,
      token: sign(
        {
          data: 'foobar'
        },
        process.env.SECRET,
        { expiresIn: '1h' }
      )
    })
  } catch (e) {
    console.log(e)
    res.json({
      status: false,
      errorMessage: 'Internal server error. Try again later.'
    })
  }
})

router.post('/token', (req, res, next) => {
  const token = req.headers['x-access-token']

  try {
    const result = verify(token, process.env.SECRET)

    return res.json({
      tokenStatus: true
    })
  } catch (error) {
    console.log(error)
    return res.json({
      tokenStatus: false
    })
  }
})

module.exports = router
