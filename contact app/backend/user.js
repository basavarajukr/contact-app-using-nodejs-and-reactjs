const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcryptjs = require('bcryptjs');
const userModel = require("./user_model");
const contactModel = require('./contact_model');

const app = express();

//middleware settings
app.use(express.json());
app.use(cors());

//mongo connection

mongoose.connect("mongodb://localhost:27017/auth")
.then(()=> console.log("Mongo connection established"))
.catch(()=> console.log("Problem"));

app.post("/signup",(req, res) => {

    let email = req.body.email;
    let password = req.body.password;
    let secretcode = req.body.secretcode;

    let user = {
        email: email,
        password: password,
        secretcode: secretcode
    }

    bcryptjs.genSalt(10,(err,salt)=> {
        bcryptjs.hash(user.password,salt,(err,enp_pwd)=> {
            user.password = enp_pwd;

            let userObj = new userModel(user);

            userObj.save()
            .then(()=>{
                res.send({message: "User signin successful!"});
            })
            .catch((err)=> {
                console.log(err);
                res.send({message: "some problem in signing"});
            })
                })
    })


})

//login endpoint

app.post("/signin",(req, res)=>{

    let email = req.body.email;
    let password = req.body.password;

    let userCred = {
        email: email,
        password: password
    };

    userModel.findOne({email: userCred.email})
    .then((user)=>{
        if (user!=null){

            bcryptjs.compare(userCred.password,user.password,(err,result)=>{
                if(result!=true){
                    res.send({message: "user found but password is incorrect"});
                }
                else{

                    res.send({message: "user found"});
                    
                }
            })

        }
        else{
            res.send({message: "User not found"});
        }
        
    })
    .catch((err)=>{
        console.log(err);
        res.send({message: "some problem"});
    })
})

//contact form endpoint

app.post("/contact",(req, res)=>{

    let name = req.body.name;
    let number = req.body.number;
    let email = req.body.email;

    let contact = {
        name: name,
        number: number,
        email: email
    };

    let contactObj = new contactModel(contact);

            contactObj.save()
            .then(()=>{
                res.send({message: "contact save successful!"});
            })
            .catch((err)=> {
                console.log(err);
                res.send({message: "some problem in saving"});
            })

});

app.get("/contacts",(req,res)=> {
    contactModel.find()
    .then((contacts)=> {
        res.send(contacts);
    })
    .catch((err)=> {
        console.log(err);
        res.send({message:"Some problem"})
    })
})

app.listen(8000);