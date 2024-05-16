const express = require("express");
const cors=require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const User = require('./db/Users')
const Message = require('./db/Message')

require('./db/config')

app.post('/register' ,async (req,resp)=>{

    let user = new User(req.body);
    let result = await user.save();

    resp.send(result)

});

app.post("/login" , async (req,resp)=>{
    if(req.body.Password && req.body.Email){
        let user = await User.findOne(req.body).select("-password");

        if(user){
            resp.send(user)
        }else{
            resp.send({result : "no user found"})
        }

    }else{
        resp.send({result : "no user found"})
    }
});

app.post("/message",async (req, resp)=>{
    let message = new Message(req.body)

    let result = await message.save();
    resp.send(result)
})

app.listen(5000)