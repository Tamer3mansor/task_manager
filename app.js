const express= require('express');
const app=express();
const tasks=require('./Routes/tasks')
const connectDB = require('./db/connect');
const nf=require('./middleWare/notFound')
require('dotenv').config()
// middle ware
app.use(express.static('./public'))
app.use(express.json());
//routes
app.use('/api/v1/tasks',tasks);
app.use(nf); 
// app.use('')
//connect 
const start = async () => {
    try {
      await connectDB(process.env.MONGO_URL);
      app.listen(8000, () =>
        console.log(`Server is listening on port ${8000}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };
  
  start();
