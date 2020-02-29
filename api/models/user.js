const {Model} = require('sequelize');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        min: 6
    },
    password: {
        type: String,
        require: true,
        max: 1024,
        min: 8
    },
    name: {
        type: String,
        require: true,
        max: 255
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', userSchema);