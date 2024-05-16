const  mongoose = require("mongoose");

const Users = new mongoose.Schema({
    FirstName:String,
    LastName:String,
    Email:String,
    Mobile_No:String,
    NIC :String,
    DateofBirth : String,
    Gender:String,
    Password:String
});

module.exports=mongoose.model("user",Users);