const express =require("express")
const routes=express.Router()
const{register,login,logOut}=require("../Auth/LoginRegister.")
routes.post("/register",register)
routes.post("/login",login)  
routes.get("/logOut",logOut)  
module.exports={routes}