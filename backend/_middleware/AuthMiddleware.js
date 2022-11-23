const jwt = require('jsonwebtoken');
const User = require('../_models/userModel');

const authMiddleware = async (req, res, next) => {
    let token 
    
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(' ')[1]
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
               
        if( !decoded ){
                res.json({
                    status : false,
                    message : 'Invalid Token'
                })
        }
        else{
            req.user = await User.findById(decoded._id);
            next()
        } 
    }
    else{
        res.json({
            status : false,
            message : 'No Token Found'
        })
    } 
}

module.exports = authMiddleware;