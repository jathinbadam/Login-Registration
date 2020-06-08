const express = require('express');
const app = express();
const cookieparser = require('cookie-parser');
const mongoose  = require('mongoose');
const Database = require("./config/keys.js")
const userRouter = express.Router();

app.use(cookieparser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//DB Config
const db = Database.MongoURI;

//Connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connectec..."))
  .catch((err) => console.log(err));

  //app.use('/user', require('./routes/User'));

  userRouter.get('/user',(req,res)=>  
  {
   console.log("wokring");
   return res.status(200).json({message : {msgBody : 'You are an admin', msgError : false}});
  }); 

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => 
  {
  console.log(`Server started on Port ${PORT}`)
  });
  
