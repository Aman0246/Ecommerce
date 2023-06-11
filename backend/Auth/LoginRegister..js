const {UserModel}=require("../Models/LRmodel")
const {validString}=require("../utils/index")
const {hassPassword,compare}=require("../bcrypt/bcrypt")
var jwt = require('jsonwebtoken');
const { request } = require("express");

const register=async(req,res)=>{
    const{fname,lname,email,password,img}=req.body
    try { 
    if(!fname||!lname||!email||!password)return res.status(200).send({status:false,message:"field is empty"})
    if(!validString(fname)||!validString(lname))return res.status(200).send({status:false,message:"name should be in string"})
    const olduser=await UserModel.findOne({email:email})
    if(olduser)return res.status(200).send({status:false,message:"user Already Registerd"})
    const hpassword=await hassPassword(password)
    let newuse=await UserModel.create({fname,lname,email,password:hpassword,img})
    res.status(201).send({status:true,messege:"Registerd"})
    
} catch (error) {
    res.status(500).send({status:false,message:error.message})
          }
}

const login=async(req,res)=>{
    const{email,password}=req.body
    try { 
    if(!email||!password)return res.status(200).send({status:false,message:"field is empty"})
       const olduser=await UserModel.findOne({email})
    if(!olduser)return res.status(200).send({status:false,message:"user Not Registerd"})
     const cpassword=await compare(password,olduser.password)
    if(!cpassword) return res.status(200).send({status:false,message:"Wrong Password"})
    var token = jwt.sign({id:olduser._id},process.env.SKEY);
    res.cookie("token",token)
    res.status(200).send({status:true,messege:"Login successfull",token:token,user:olduser  })
    
} catch (error) {
    res.status(500).send({status:false,message:error.message})
          }
}


const logOut=async(req,res)=>{
    // let token= req.cookies["token"]
    // console.log(token)
    res.clearCookie("token")
    return res.status(200).send({status:true,message:"logOut Succesfully"})}

module.exports={register,login,logOut}