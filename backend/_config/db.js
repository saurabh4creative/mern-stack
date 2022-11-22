const mongose = require('mongoose');
const colors = require('colors');
 
const connectionDB = async() => {
    try{
        const conn = await mongose.connect(process.env.MONGO_URI,{
            useUnifiedTopology: true,
            useNewUrlParser: true 
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`.green)
    } catch (error) {
        console.error(`Error: ${error.message}`.red.underline.bold) 
    }
}

module.exports = connectionDB;