const mongoose = require('mongoose')

const todosSheme = mongoose.Schema({
    text: String,
    complated: {
        type: Boolean,
        default: false
    }
})

const Todos = mongoose.model('Todos', todosSheme)

module.exports = Todos