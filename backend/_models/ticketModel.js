const mongoose = require('mongoose'); 

const ticketSchema = mongoose.Schema({
    title:{
        type : String,
        required : true
    },
    discription:{
        type : String,
        required : true
    }, 
    priority:{
        type : String,
        required : true, 
    },
    type:{
        type : String,
        required : true, 
    },
    estimate:{
        type : String,
        required : false, 
    },
    points:{
        type : Number,
        default : 0,
        required : false, 
    },
    status:{
        type : String,
        required : false,
        default : 'Backlog' 
    },
    project : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref : 'Project' 
    },
    reportar : {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref : 'User' 
    },
    assignee : {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref : 'User' 
    },
    board : [{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref : 'Karbon' 
    }],
},{
    timestamps:true
})

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;