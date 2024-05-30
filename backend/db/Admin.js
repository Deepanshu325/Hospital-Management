const mongoose = require("mongoose")


const Adminschema = new mongoose.Schema({
    FirstName:String,
    LastName:String,
    Email: String,
    MobileNumber:String,
    Nic:String,
    DOB:String,
    Gender:String,
    password:String
})

module.exports = mongoose.model("admin",Adminschema)