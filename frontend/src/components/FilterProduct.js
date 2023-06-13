import React from 'react'
import { ImSpoonKnife } from 'react-icons/im';
export default function FilterProduct({category,onClick}) {
  return (
  <>
  <div onClick={onClick} className='flex flex-col min-w-[200px] items-center'>
      
    <div className="text-3xl p-5  cursor-pointer bg-yellow-500 rounded-full ">
    <ImSpoonKnife/>

    </div>
    <p className='tex-center font-bold text-xl my-1 capitalize'>{category}</p>
  
  </div>
  
  
  
  </>
  )
}
