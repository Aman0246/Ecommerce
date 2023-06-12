const {productModel}=require("../Models/Product")

const UploadProduct=async(req,res)=>{
    const{name, image,category,price,description}=req.body
    console.log(name, image,category,price,description)
    if(!name||!image||!category||!price||!description)return res.status(200).send({status:false,message:"Empty field"})
    const UploadProduct=await productModel.create({name,category,image,price,description})
    res.send({status:true,message : "Upload successfully",data:UploadProduct})
}



const allProductes=async(req,res)=>{
    const allProductes=await productModel.find({})
    res.send({status:true,message:"allData",data:allProductes})
}
module.exports={UploadProduct,allProductes}