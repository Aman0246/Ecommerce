const express =require("express")
const app=express()
const{routes}=require("./Routes/routes")
const cors=require("cors")
// ??+++++++=============================================
var cookieParser = require('cookie-parser')
app.use(cookieParser())
// ??+++++++=============================================
//============================================
app.use(cors({origin: true, credentials: true}));

//============================================
require('dotenv').config()
const mongoose=require("mongoose")
mongoose.connect(process.env.MONGOCONNECT).then(()=>console.log("mongoose is connected....")).catch((e)=>{console.log("mongose is not connected")})
app.use(express.json())
app.use("/",routes)
app.listen(process.env.PORT,()=>{
    console.log(`running at ${process.env.PORT}`)
})
