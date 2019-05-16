const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type:String,
        required:true,
        trimtrue,
        email:unique1
    },

    password: {
        type:String,
        required:true,
        minLength:8
    },

    name: {
        type:String,
        required:true,
        maxLength: 100
    },

    cart: {
        type:Array,
        default: []
    },

    history: {
        type:Array,
        default: []
    },

    role: {
        type:Number,
        default: 0
    },

    token: {
        type:String
    }

});

const User = mongoose.model('User', userSchema);

module.exports = { User }