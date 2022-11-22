const Project = require('../_models/projectModel');
const Ticket = require('../_models/ticketModel');

const create_project = async (req, res) => {
    const { title, discription, _id, status } = req.body;

    const project = await Project.create({ title, discription, isUser : _id, status });

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

    res.json({
          status : true,
          message : 'Project Fetched Successfully',
          projects : project
    })
}

const get_detail = async (req, res) => {
    const id = req.params.id;
   
    const ticket = await Ticket.find({}).where('project').in(id).populate('project').populate('assignee').populate('reportar');

    res.json({
         status  : true,
         message : 'Project Fetched Successfully',
         tickets : ticket
    })
}

module.exports = { create_project, get_list, get_detail }