import React, { useState } from 'react'
import { MdCloudUpload } from 'react-icons/md';
import imagetoBase from "../utils/imagetoBase"


export default function NewProduct() {

const uploadImage=async(e)=>{
console.log(e.target.files[0])
  const data= await imagetoBase(e.target.files[0])
  // console.log(data)
  setimg(data)


}
const[img,setimg]=useState("")





  return (
       <div className='  pt-[102px] h-[105vh] bg-slate-200'>
      <form className='m-auto bg-white max-w-sm p-3 shadow-md flex flex-col ' action="">
       <label htmlFor="name">Name</label>
       <input className=' bg-gray-200 rounded-lg px-2 mb-2 py-1  outline-blue-500' type="text" name='name' />
       <label className='mb-1' htmlFor="Category">Category</label>
       <select className='rounded-xl p-2 bg-gray-200'  name="name" id="">
        <option >Fruits</option>
        <option >Vegetable</option>
        <option >IceCreame</option>
        <option >Dosa</option>
        <option >Pizza</option>
       </select>
       <label className='mb-1 cursor-pointer' htmlFor="Image">Image
       <div>
       
       <span className='w-full mt-2 flex justify-center items-center text-6xl rounded-lg px-3 bg-gray-200 h-[15rem]'>
        {img?(<img className='h-[15rem] w-full overflow-hidden py-2  rounded-xl' src={img} alt="" srcset="" />):(<MdCloudUpload/>)}

       
       <input type="file" className='hidden' id='Image'  accept='image/*' onChange={uploadImage}/>
       </span>
       </div>
       </label>
       <label className='mb-1' htmlFor="price">Price</label>
       <input className=' bg-gray-200 rounded-lg px-2 mb-2 py-1  outline-blue-500' type="number" name='price' />
       <label className='mb-1' htmlFor="description">Description</label>
       <textarea  rows={3} className=' bg-gray-200 rounded-lg px-2 mb-2 py-1 resize-none   outline-blue-500' type="number" name='description' />

         <button className='bg-red-500 text-white rounded-full text-lg font-bold hover:bg-red-600'>Save</button>








      </form>
    </div>
  )
}
