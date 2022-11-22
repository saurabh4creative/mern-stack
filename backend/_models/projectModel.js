const mongoose = require('mongoose'); 

const projectSchema = mongoose.Schema({
    title:{
        type : String,
        required : true
    },
    discription:{
        type : String,
        required : true
    },
    status:{
        type : String,
        required : true,
        default : 'Backlog'
    }, 
    isActive:{
        type : Boolean,
        required : true,
        default : true
    },
    isUser : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref : 'User' 
    }
},{
    timestamps:true
})

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;