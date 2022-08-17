const router = require('express').Router()
const User = require('../models/User')

router.post('/login', (req, res) => {})

router.post('/register', async (req, res) => {
  const { name, username, password } = req.body
  try {
    await User.create({
      name: '',
      username,
      password
    })
  } catch (e) {
    console.log(e)
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
