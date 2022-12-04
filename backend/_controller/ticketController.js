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
     const { assignee, discription, priority, project, reportar, title, type, estimate } = req.body;
 
     const ticket = await Ticket.create({ assignee, discription, priority, project, reportar, title, type, estimate });

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
     const ticket = await Ticket.find({}).populate('project').populate('assignee').populate('reportar').populate('board').sort({createdAt:-1});

     res.json({
          status  : true,
          messgae : 'Ticket Fetch Successfully',
          tickets : ticket
     })
}

const my_tickets = async (req, res) => {
     const u_id  = req.user._id;
     
     const ticketAssign   = await Ticket.find({ assignee : u_id }).populate('project').populate('assignee').populate('reportar').sort({createdAt:-1});
     const ticketReportar = await Ticket.find({ reportar : u_id }).populate('project').populate('assignee').populate('reportar').sort({createdAt:-1});

     res.json({
          status  : true,
          message : 'Tickets Fetched Successfully',
          ticketAssign : ticketAssign,
          ticketReportar : ticketReportar
     })
}

const get_ticket = async ( req, res ) => {
     const id = req.params.id;

     if( id ){
          try{
               const ticket = await Ticket.findById(id).populate('project').populate('assignee').populate('reportar').populate('board'); 

               if( ticket ){
                    res.json({
                         status  : true,
                         message : 'Ticket Details',
                         ticket  : ticket
                    })
               }
               else{
                    res.json({
                         status  : false,
                         message : 'No Ticket Found', 
                    })
               }

          }catch(err){
               res.json({
                    status : false,
                    message : 'Something Wrong with Ticket ID or May be not matched...',  
               }) 
          }
     }
     else{
          res.json({
                status : false,
                message : 'Please Provide the ID',
          })
     }
}

const edit_ticket = async (req, res) => {
     const id = req.params.id;
     
     const { assignee, discription, priority, project, reportar, title, type, estimate, status, points } = req.body;
 
     const ticket = await Ticket.findOneAndUpdate({_id: id }, 
                        { $set : { assignee, discription, priority, project, reportar, title, type, estimate, status, points } } 
     );

     res.json({
          statuc : true,
          data : ticket
     })
}

module.exports = { get_Data, create_create, get_all, my_tickets, get_ticket, edit_ticket }