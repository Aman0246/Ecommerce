import React from 'react'
import Loader from '../Loader/Loader'
export default function Homecard({name,category,image,description,price}) {

    return (
    <div className='bg-white p-2 h-[17rem] rounded-xl'>
      {name?(<><img src={image} className='w-40 h-40 rounded-3xl' alt="image" srcSet="" />
      <h3 className='pt-2 font-semibold text-lg  text-slate-600 text-center capitalize'>{name}</h3>
      <p className='text-center text-slate-500 font-medium '>{category}</p>
      <p className='text-center font-bold'><span className='text-red-500'>₹</span> <span>{price}</span></p></>):("sadasd")}
        
  </div>
  )
}
