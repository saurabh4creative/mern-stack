const User = require('../_models/userModel');
const Project = require('../_models/projectModel');
const Ticket = require('../_models/ticketModel');

const get_Data = async (req, res) => {
     const user = await User.find({});
     const project = await Project.find({});

     res.json({
          status : true,
          message : 'Data Fetch Successfully',
          users : user,
          projects : project
     })
}

const create_create = async (req, res) => { 
     const { assignee, discription, priority, project, reportar, title, type } = req.body;
 
     const ticket = await Ticket.create({ assignee, discription, priority, project, reportar, title, type });

     if( ticket ){
          res.json({
               status : true,
               message : 'Ticket Create Successfully...',
               data : ticket
          })
     } 
     else{
          res.json({
               status : false,
               message : 'Error in Creation',
          })
     }
}

const get_all = async (req, res) => {
     const ticket = await Ticket.find({}).populate('project').populate('assignee').populate('reportar');

     res.json({
          status  : true,
          messgae : 'Ticket Fetch Successfully',
          tickets : ticket
     })
}

const my_tickets = async (req, res) => {
     const u_id  = req.user._id;
     
     const ticketAssign   = await Ticket.find({ assignee : u_id }).populate('project').populate('assignee').populate('reportar');
     const ticketReportar = await Ticket.find({ reportar : u_id }).populate('project').populate('assignee').populate('reportar');

     res.json({
          status  : true,
          message : 'Tickets Fetched Successfully',
          ticketAssign : ticketAssign,
          ticketReportar : ticketReportar
     })
}

module.exports = { get_Data, create_create, get_all, my_tickets }