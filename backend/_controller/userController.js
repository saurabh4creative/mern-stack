const User = require('../_models/userModel');
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

module.exports = {user_register, user_activate, user_login};