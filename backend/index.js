const express = require("express");
const cors=require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const User = require('./db/Users')
const Message = require('./db/Message')
const Appointment = require('./db/Appointment')
const Admin = require('./db/Admin')
const Doctor = require('./db/Doctor')

const jwt = require('jsonwebtoken');
const jwtkey ="hms";


require('./db/config')


app.post('/register' ,async (req,resp)=>{

     let user = new User(req.body);
     let result = await user.save();

     if(result){
          jwt.sign({result},jwtkey,{expiresIn:"2h"},(err,token)=>{
               
               if(err){
                    resp.send({result: "something went wrong , please try after some time"})
               }
               resp.send({result,auth: token})
          })

}});

app.post("/login" , async (req,resp)=>{
    if(req.body.Password && req.body.Email){
         let user = await User.findOne(req.body).select("-password");

         if(user){
          jwt.sign({user},jwtkey,{expiresIn:"2h"},(err,token)=>{
               
               if(err){
                    resp.send({result: "something went wrong , please try after some time"})
               }
               resp.send({user,auth: token})
          })
            
         }else{
            resp.send({result : "no user found"})
         }

    }else{
         resp.send({result : "no user found"})
    }
});

app.post("/message", async (req, resp)=>{
     let message = new Message(req.body)

     if(!req.body.FirstName || !req.body.LastName || !req.body.Email || !req.body.Mobile || !req.body.Message){
          resp.send({result : "All Fields are Required"})
     }else{

     let result = await message.save();
     resp.send(result)
     }
});

app.get('/message', async (req,resp)=>{

     const message = await Message.find();
     if (message.length>0){
       resp.send(message)
     }else{
       resp.send({error : "No Product Found"})
     }
   })

   app.delete('/message/:id',verifyToken , async (req,resp)=>{
      let message = await Message.deleteOne({id : req.params._id})

      resp.send({result : "Message Delted Successfully"})
   });

app.post("/appointment", verifyToken, async (req, resp)=>{

     let appointment = new Appointment(req.body)

     let result = await appointment.save();

     resp.send(result);
});

app.get("/appointment",verifyToken, async (req,resp)=>{

     const appointment = await Appointment.find();

     if(appointment.length > 0){
          resp.send(appointment)
     }else 
     {
          resp.send({result : "No appointment Found"})
     }

});

app.post("/admin", async (req, resp)=>{
     let admin = new Admin(req.body)
     let result = await admin.save()
    if(result){
          jwt.sign({result},jwtkey,{expiresIn:"2h"},(err,token)=>{
               
               if(err){
                    resp.send({result: "something went wrong , please try after some time"})
               }
               resp.send({result,auth: token})
          })
     }
});



app.post("/adminlogin" , async (req, resp)=>{
     if(req.body.Password && req.body.Gmail){
          let admin = await Admin.findOne(req.body);
 
         if(admin){
          jwt.sign({admin},jwtkey,{expiresIn:"2h"},(err,token)=>{
               
               if(err){
                    resp.send({result: "something went wrong , please try after some time"})
               }
               resp.send({admin,auth: token})
          })
            
         }else{
            resp.send({result : "no user found"})
         }

    }else{
         resp.send({result : "no user found"})
    }
 });

 app.post("/doctor",verifyToken, async (req,resp) =>{

     let doctor = new Doctor(req.body)

     const result = await doctor.save();

     resp.send(result)

 });

 app.get("/doctor", verifyToken, async (req,resp)=>{
 
     const doctor = await Doctor.find();

     if(doctor.length>0){
          resp.send(doctor)
     }else{
          resp.send({result : "No Doctor Found"})
     }

 });

 app.delete("/doctor/:id", verifyToken , async (req,resp)=>{

     const doctor =  await Doctor.deleteOne({_id : req.params.id})

     resp.send({result : "Doctor is Deleted Successfully"})
    
 })

 // Token Verification 

 function verifyToken(req,resp,next) {
      let token = req.headers['authorization'];

      if(token){

          token = token.split(' ')[1];
          console.warn("middleware called if ",token)

          jwt.verify(token, jwtkey , (err, valid)=>{
               if(err){
                    resp.status(401).send({result : "Please Provide valid token"})
               }else{
                    next();
               }
          })

         

      }else {

          resp.status(403).send({result:"Please add token with header"})

      }
     
 }


app.listen(5000)