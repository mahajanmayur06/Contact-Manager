const mongoose = require('mongoose');

const connectDB = async () =>  await mongoose.connect(process.env.CONNECTION_URI,
    {  
        useNewUrlParser:true,
        useUnifiedTopology:true,
        family: 4
    })
    .then(()=>{
        console.log('connected to mongoDB successfully');
    }).catch(err=>{console.log('No connection')}
);

module.exports = connectDB;