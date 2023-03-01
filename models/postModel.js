const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    body : {
        type : String,
        require : true
    },
    image : {
        type : String,
        require : true
    }
})

module.exports = mongoose.model('Post', postSchema)