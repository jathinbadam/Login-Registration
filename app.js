const express = require('express');
const app = express();
const cookieparser = require('cookie-parser');
const mongoose  = require('mongoose');
const Database = require("./config/keys.js")
const bodyParser = require('body-parser');
const userRouter = express.Router();

app.use(cookieparser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.json);


//DB Config
const db = Database.MongoURI;

//Connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

  app.use('/user', require('./routes/User'));

  userRouter.get('/',(req,res)=>
  {
   console.log("working");
   return res.status(200).json({message : {msgBody : 'You are an admin', msgError : false}});
  }); 

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => 
  {
  console.log(`Server started on Port ${PORT}`)
  });
  
