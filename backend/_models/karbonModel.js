const mongoose = require('mongoose'); 

const karbonSchema = mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    discription:{
        type : String,
        required : true
    }, 
    isActive:{
        type : Boolean,
        required : true,
        default : false
    },
    status:{
        type : String,
        required : true,
        default : 'Backlog'
    },
    isUser : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref : 'User' 
    },
    listUser : [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref : 'User' 
    }],
    tickets : [{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Ticket' 
    }],
    start:{
        type : Date,
        required : false,
    },
    end:{
        type : Date,
        required : false,
    },
},{
    timestamps:true
})

const Karbon = mongoose.model('Karbon', karbonSchema);

module.exports = Karbon;