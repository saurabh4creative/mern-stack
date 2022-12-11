const User = require('../_models/userModel');
const Project = require('../_models/projectModel');
const Ticket = require('../_models/ticketModel');
const Karbon = require('../_models/karbonModel');

const jwt  = require('jsonwebtoken'); 
const secert = process.env.JWT_SECRET;

const user_register = async (req, res) => {
     const { firstName, lastName, email, password } = req.body;

     const checkUser = await User.findOne({ email });
     
     if( checkUser ){
          res.json({
               status : false,
               message : 'User Already Found...'
          })
     }
     else{
        const token = jwt.sign({
            firstName, lastName, email, password
        }, secert, {
            expiresIn: '30d'
        });

        res.json({
            status : true,
            message : 'Please Check your Email...',
            token : token
        })
     }
}

const user_activate = async (req, res) => {
     const { token } = req.body;

     if( token ){
         try{
            const decoded = jwt.verify(token, secert);
            const { firstName, lastName, email, password } = decoded;
 
            const userExists = await User.findOne({ email });
  
            if( userExists ){
                res.json({
                      status  : false,
                      message : 'User Already Registered...'
                }) 
            }
            else{
                const user = await User.create({
                    firstName, lastName, email, password,
                });

                res.json({
                    status : true,
                    message : 'User Registed Successfully...',
                    user : user
                }) 
            } 
         }
         catch(err){ 
            res.json({
                 status : false,
                 message : 'Invalid Token ID or May be Exprire...', 
            })
         }
     }
     else{
         res.json({
              status : false,
              message : 'Token Missing',
         })
     }
}

const user_login = async (req, res) => {
     const { email, password } = req.body; 
     const user = await User.findOne({ email })  

     if(user && (await user.matchPassword(password))){
          const { firstName, lastName, _id } = user;
          const token = jwt.sign({
            firstName, lastName, email, password, _id
          }, secert, {
                expiresIn: '30d'
          });
          res.json({
                status : true,
                message : 'User Login Successfully',
                user : {
                     firstName, lastName, email, _id
                },
                token : token
          })
     }
     else{
          res.json({
               status : false,
               message : 'Invalid Email or Password'
          })
     }
}

const user_dashboard = async (req, res) => {
     const id = req.user._id;
     
     const user = await User.findById(id);
     const project = await Project.find({});
     const ticket = await Ticket.find({});
     const ticketAssign   = await Ticket.find({ assignee : id });
     const ticketReportar = await Ticket.find({ reportar : id });
     const myprojects = await Project.find({ isUser : id });
     const doneticket = await Ticket.find({}).where({status : 'Done'});

     res.json({
          status : true,
          message : 'Details Fetch Successfully',
          // user : user,
          all_projects : project,
          my_projects  : myprojects,
          my_tickets   : ticketAssign,
          all_tickets  :  ticket
          // assignee : ticketAssign,
          // reportar : ticketReportar,
          // myprojects : myprojects,
          // allticket : ticket,
          // doneticket : doneticket
     })
}

const create_karbon = async (req, res) => {
     const id = req.user._id; 


     const karbon = await Karbon.create({ 
          name  : req.body.name,
          discription : req.body.discription,
          isUser : id,
          listUser : req.body.user, 
          start : req.body.start,
          end : req.body.end
     });

     res.json({
          status  : true,
          message : 'Data Fetch',
          data : karbon
     })
}

const get_karbon = async (req, res) => {
     const id = req.user._id;

     const kr = await Karbon.find({$or:[{listUser: id}, {isUser : id}]}).populate('isUser').populate('listUser').populate({
          path: 'tickets',
          populate : {
               path : 'project'
          }
     });
      
     res.json({
          status  : true,
          message : 'Data Fetch sad',
          data : kr
     })
}

var mongoose = require('mongoose');

const get_karbon_detail = async (req, res) => {
     const id = req.user._id;
     
     if( mongoose.isValidObjectId(req.params.id) ){
               const kr = await Karbon.find( { _id : req.params.id, $or:[{listUser: id}, {isUser : id}] } ).populate('isUser').populate('listUser').populate({
                    path: 'tickets',
                    populate : {
                         path : 'assignee'
                    } 
               }).populate({
                    path: 'tickets',
                    populate : {
                         path : 'reportar'
                    } 
               }).populate({
                    path: 'tickets',
                    populate : {
                         path : 'project'
                    } 
               }); 
               
               if( kr.length ){
                    res.json({
                         status  : true,
                         message : 'Data Fetch Successfully',
                         data : kr[0]
                    })
               }else{
                    res.json({
                         status  : false,
                         message : 'No Record Found...',
                         data    : {} 
                    })
               } 
     }else{
          res.json({
               status  : false,
               message : 'Wrond Karbon Board ID. Please check',
               data    : {} 
          })
     } 
}

const update_karbon_detail = async (req, res) => {
     
     const {id, ticket_ID} = req.body;

     const kr = await Karbon.findByIdAndUpdate(id, {$push: {"tickets": [ticket_ID]}} );
     const tk = await Ticket.findByIdAndUpdate(ticket_ID, {$push: {"board": [id]}} );
      
     res.json({
          status  : true,
          message : 'Data Fetch',
          data : kr,
          ticket : tk
     })
}

const active_karbon_detail = async (req, res) => {
     const {sprint_id, isActive, ticketR, ticketP} = req.body;
     
     if( isActive ){
          const karbon = await Karbon.findOneAndUpdate({ _id: sprint_id }, 
               { $set : { isActive : isActive, status : 'Start'  } } 
          );
          res.json({
               status : true,
               message : 'Start Successfully',
               board : karbon
          })
     }else{
          const karbon = await Karbon.findOneAndUpdate({ _id: sprint_id }, 
               { $set : { isActive : isActive, tickets : ticketP, status : 'Completed'  } } 
          );
          
          const ticket = await Ticket.updateMany(
               { _id : { $in: ticketR } },
               { $set  : { board : [] } } 
          ); 

          res.json({
               status  : true,
               message : 'Stop Successfully',
               board   : karbon,
               ticket  : ticket
          })
     } 
}

const get_lists = async (req, res) => {
     const user = await User.find({});
     const project = await Project.find({});

     res.json({
          status : true,
          message : 'Data Fetch Successfully',
          users : user,
          projects : project
     })
}

module.exports = {user_register, user_activate, user_login, user_dashboard, create_karbon, get_karbon, get_karbon_detail, update_karbon_detail, get_lists, active_karbon_detail};