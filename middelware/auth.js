const User = require('../models/user')
const jwt = require('jsonwebtoken')

exports.auth = async (req, res, next) => {
    try {
        
        const token = req.header('Authorization').replace('Bearer ','')
        const decoded = jwt.verify(token, process.env.MAIL_PASSWORD)
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })

        if(!user) {
            throw new Error()
        }

        req.user = user
        req.token = token
        next()
        
    } catch (error) {
      console.log(error)
      res.sendStatus(500)  
    }
}

