const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
    avatar: {
        type: Buffer
        }
})

userSchema.methods.toJSON = function () {
    const userObject = this.toObject()

/*     delete userObject.password
    delete userObject.tokens
    delete userObject.admin */
    delete userObject.avatar
     
    return userObject
}


//efter som vi inte kommer använda this så funkar () => {}
//annars hadde vi använt  function () {}


//  metodere kan nås via router
userSchema.methods.generateAuthToken = async function () {
    const token = jwt.sign({ _id: this._id.toString()  }, process.env.MAIL_PASSWORD);

    this.tokens = this.tokens.concat({token});
    await this.save();

    return token
}

//  statics metoder  kan nås i modelen
userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })

    if(!user) {
        throw new Error('Unable to login');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch) {
        throw new Error('Unable to login :/')
    }

    return user
} 

// hase the plan text berfor saving 
userSchema.pre('save', async function (next) {
    
    if(this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 8);
    }


    next()

})

const User = mongoose.model('User', userSchema)

module.exports = User;