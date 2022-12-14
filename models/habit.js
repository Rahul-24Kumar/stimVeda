const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
    habit: {
        type: String,
        required: true,
        unique: true
    },
    day: {
        type: String,
        required: true
    },
    frequency: {
        type: Number,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('habit', habitSchema);