const User = require('../../models/User')

module.exports = async (req, res, next) => {
  try {
    const { username } = req.body
    console.log(username)
    const hasUser = await User.findOne({ where: { username } })

    console.log(hasUser)
    if (hasUser == null) {
      next()
    } else {
      res.json({
        status: false
      })
    }
  } catch (error) {
    res.json({
      status: false
    })
  }
}
