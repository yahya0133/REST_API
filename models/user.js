const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'you name']
    },
    email: {
        type: String,
        required: [true, ' your email'],
        unique: true
    },
    age: {
        type: Number,
        min: [0, ' your age >0']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);