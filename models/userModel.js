const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username : {
        type : String,
        required : [true, "please add username"]
    },
    email : {
        type : String,
        required : [true, "Please add email address"],
        unique : [true, "Email address already taken"]
    },
    password : {
        type : String,
        required : [true, "Set a password"]
    }
}
,
{
    timestamp : true
})

module.exports = mongoose.model('User', userSchema);