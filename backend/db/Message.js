const mongoose = require("mongoose")

const messageschema = new mongoose.Schema({
    FirstName : String,
    LastName : String,
    Email: String,
    Mobile: String,
    Message : String
})

module.exports = mongoose.model("message" , messageschema)