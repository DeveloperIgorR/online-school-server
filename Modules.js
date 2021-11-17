const mongoose = require('mongoose')

const Modules = new mongoose.Schema({
    name:{type: String, required: true},
    color:{type: String, required: true}
    
})


module.exports = mongoose.model('Modules',Modules)