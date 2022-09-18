const User = require('../../models/User')

module.exports = async (req, res, next) => {
  try {
    const { username } = req.body
    const hasUser = await User.findOne({ where: { username } })

    if (hasUser == null) {
      next()
    } else {
      res.json({
        status: false,
        errorMessage: 'Username already in use'
      })
    }
  } catch (error) {
    res.json({
      status: false,
      errorMessage: 'Internal server error. Try again later.'
    })
  }
}
