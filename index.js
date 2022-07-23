// const express=require('express');
// const morgan=require("morgan");                                      
// const helmet=require("helmet");
// const Port=process.env.PORT ||5001;
// const app=express();
// app.use(express.json())
// app.use(helmet());                          
// app.use(morgan());



// // app.post('/',(req,res,next) => {
// //     console.log(req.body.email)

// //  res.json({

// //     message:"port is running on 5001"
// //  })
// // })
// // error handling route
// // 1. route does not exist

// app.use('*',(req,res)=>{
//     // res.send("route does not exist")
//     // res.sendStatus(404)
//     res.status(404).send("Page not found!")
// })


// // we will import loginrouter here and use it to login

// const Loginrouter = require('./routers/Loginrouter');
// app.use("/test",Loginrouter);


// app.listen(5001,()=>{
//     console.log("server running")
// })
// express => server , backened routers
// libraries => morgan,bcrypt,helmet  =>
// process library => environment path => port
// get and post request => postman
// npm install or npm i
// nodemon => automatic file run based on changes.
// porject intialize => npm init -y
// nodemon => npm i nodemon / npm i nodemon -g
// morgan /helmet => npm i morgan helmet
// morgan => it keeps the log of your application
// helmet => it provides security to your application headers.

const express = require('express');
const morgan =require("morgan")//log data
const helmet =require("helmet")
const cors= require('cors')
// npm i cors chala lena hai

const app = express();
// to make sure our server understands json information from client we use,
app.use(express.json());
app.use(helmet());
app.use(morgan());
app.use(cors())

const Port = process.env.PORT || 5000;


// get request
// req => REQUEST  = >request it is sent by client , frontend
// res => response => it is sent by server , backened
// whenever you are writing requests routes , in  the callback function you have three
// paramter =>(req,res,next)
// get,post,patch, delete => types of network request
// app.get('/', (req, res, next) => {
//     console.log(req.body.name)
//     // res.send("server running on port 5000")
//     res.json({
//         message :" server is running"
//     })
// })
// get request => they depend on url
app.get('/', (req, res, next) => {
    console.log(req.body)
    // res.send("server running on port 5000")
    //req,res,next are the callbacks
    res.json({
        message :" server is running"
    })

})


// we will import loginrouter here and use it.

const Loginrouter = require('./routers/Loginrouter');
//assigning the value
// app.use => on particular route invoke the router and make 
// use of the router
app.use("/test",Loginrouter)
//call when we use test











// errorhandling
// 1.routes does not exit
// status code => res.status().send()
// 
app.use('*', (req, res) => {
    
  res.status(404).send("route not found")
    // res.sendStatus(404)

})


app.listen(Port,() => {
    console.log("port running on 5000")
})


