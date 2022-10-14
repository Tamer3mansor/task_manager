// // const mongoose = require('mongoose');
// const {MongoClient} = require('mongodb')
// require('dotenv').config()
// let dbConnecion;

// module.exports={
//     connectTodb: (cb)=>{ //establish connectiocn 
//  MongoClient.connect(process.env.MONGO_URL)
//  .then((client)=>{
//     dbConnecion=client.db();
//     return cb()
//  })
//  .catch(error => {console.log(error); return cb(error)})
//     },
//     getDb: ()=> dbConnecion//return connection 

    
// }

const mongoose = require('mongoose')

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
}

module.exports = connectDB
