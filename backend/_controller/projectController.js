const Project = require('../_models/projectModel');
const Ticket = require('../_models/ticketModel');

const create_project = async (req, res) => {
    const { title, discription, status } = req.body;
    const isUser = req.user._id;
    const project = await Project.create({ title, discription, isUser, status });

    if( project ){
        res.json({
            status : true,
            message : 'Project Created Successfully'
        })
    }else{
        res.json({
            status : false,
            message : 'Error in Creation'
        })
    }
}

const get_list = async (req, res) => {
    const project = await Project.find({}).populate('isUser');
    const ticket = await Ticket.find({}).populate('project');
    
    res.json({
          status : true,
          message : 'Project Fetched Successfullys',
          projects : project,
          tickets : ticket
    })
}

const get_detail = async (req, res) => {
    const id = req.params.id;
   
    const ticket = await Ticket.find({}).where('project').in(id).populate('project').populate('assignee').populate('reportar');
    const project = await Project.findById(id).populate('isUser');

    if( ticket || project ){
        res.json({
            status  : true,
            message : 'Project Fetched Successfully',
            tickets : ticket,
            project : project
        })
    }
    else{
        res.json({
            status  : false,
            message : 'No Data Found', 
        }) 
    }
    
}

module.exports = { create_project, get_list, get_detail }