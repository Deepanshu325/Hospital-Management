const mongoose = require("mongoose")
 
const doctorschema = new mongoose.Schema({

    FirstName : String,
    LastName : String,
    Email : String , 
    Mobile : String , 
    Nic : String, 
    Dob : String,
    Gender: String,
    Department : String,
    Password : String,
    Photo : String


})

module.exports = mongoose.model("doctor", doctorschema)