import React from 'react'

export default function CardVegetable( {name,category,price,image}) {
  return (
    <div>

 <div className='mr-10 mt-5 flex-col min-w-[210px]  max-w-[200] px-4 shadow-md flex rounded-3xl bg-white '>

    <img className=' h-[10rem] w-[10rem] p-3 rounded-3xl' src={image} alt="" srcset="" />
    <div className='flex flex-col text-center justify-center items-center pt-3 pb-2 '>
        <div className='font-bold text-lg'>{name}</div>
        <div className='text-lg' >{category}</div>
        <div className='font-bold'> <span className='text-lg text-red-500 font-bold'>₹</span> {price}</div>
        <button className='bg-yellow-500 px-5 rounded-lg font-bold'>Add Cart</button>
    </div>
    

    </div>       
    </div>
  )
}


