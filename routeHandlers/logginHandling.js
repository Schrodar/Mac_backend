const User = require('../models/user')


exports.logginHandling = async (req, res) => {
            
    try {
            const user = await User.findByCredentials(req.body.email, req.body.password)
            const token = await user.generateAuthToken()
            res.send({ user, token })
        
        } catch (e) {
            res.status(400).send()
        }
}

exports.newUser = async (req, res) => {
        
         try {
            const user = new User(req.body);
            await user.save();
            res.sendStatus(200)
         }catch (err) {
             console.log(err)
         }
}