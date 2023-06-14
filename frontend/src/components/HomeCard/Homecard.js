import React from 'react'
import {Link} from "react-router-dom";
export default function Homecard({name,category,image,description,price,id}) {

    return (
    <div className='bg-white p-2 h-[17rem] rounded-xl'>
      <Link to={`/menu/${id}`} >
      {name?(<><img src={image} className='w-40 h-40 rounded-3xl' alt="image" srcSet="" />
      <h3 className='pt-2 font-semibold text-lg  text-slate-600 text-center capitalize'>{name}</h3>
      <p className='text-center text-slate-500 font-medium '>{category}</p>
      <p className='text-center font-bold'><span className='text-red-500'>₹</span> <span>{price}</span></p></>):("sadasd")}
      </Link>
        
  </div>
  )
}
