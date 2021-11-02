const mongoose = require('mongoose')

const Students = new mongoose.Schema({
    name:{type: String, required: true},
    Telegram:{type: String, required: true},
    Instagram:{type: String, required: true},
    date:{type: String, required: true},
    login:{type: String, required: true},
    modules:{type: Array, required: true}
})


module.exports = mongoose.model('Students',Students)