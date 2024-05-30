const mongoose = require("mongoose");

 const Appointment =new mongoose.Schema({
    
    FirstName : String ,
    LastName  :  String ,
    Email     : String ,
    Mobile    :  String,
    NIC       :  String,
    Date: String,
    Gender: String,
    Date2 : String,
    Pendiatics : String , 
    Doctor : String , 
    Address : String 
});

module.exports = mongoose.model("appointment",Appointment)