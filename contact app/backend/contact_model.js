const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name:{type:String,required:true},
    number:{type:Number,required: true},
    email:{type:String,required:true}
    
})

const contactModel = new mongoose.model("contacts",contactSchema);

module.exports = contactModel;