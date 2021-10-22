import express,{Application,Request,Response,NextFunction, Router} from 'express';
import cors, { CorsOptions } from 'cors';
require('dotenv').config();

// express app instance creation
const app:Application=express();
const port = process.env.PORT||8000;

// callback function for Cross origin policy for specific domain
var whitelist = ['http://localhost:3000','http://localhost:5000']
var corsOptions:CorsOptions = {
  origin: function (origin:any, callback:any) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

//setting view engine and cors policy to express instance
app.use(cors(corsOptions))
// adding api routes to express
app.use('/api/rates',require('./routes/exchange'))

//sending error responce for unkonwn endpoint
app.use('/**', (req,res)=>{
    res.status(404).send(" This endpoint your searching for is not avail...")
})

//server listening on port 5000
app.listen(port,()=>{
    console.log(`Server running at port ${port}`)
});