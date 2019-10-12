const User = require('../models/User')

module.exports = {
    async store (req, res) {
        const { email } = req.body
        let user = User.findOne({ email })

        if(!user) {
            user = await User.create({ email })
        }

        return res.json(user)
    }
}