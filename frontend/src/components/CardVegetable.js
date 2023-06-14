import React from 'react'
import {Link} from "react-router-dom";
import { addCartItem } from '../Redux/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function CardVegetable( {name,category,price,image,id}) {
const dispatch=useDispatch()
  const handleAddToCart=(e)=>{
     dispatch(addCartItem({_id:id,
      name:name,
      price:price,
      category:category,
      image:image
    }))
  }


  return (
    <div>

 <div className='mr-10 mt-5 flex-col min-w-[210px]      max-w-[200] p-4 shadow-md flex rounded-3xl bg-white '>

        <Link to={`/menu/${id}`} onClick={()=>window.scrollTo({top:0,behavior: "smooth"})}>
    <img className=' h-[10rem] w-[10rem] p-3 rounded-3xl' src={image} alt="" srcset="" />
    <div className='flex flex-col text-center justify-center items-center pt-3 pb-2 '>
        <div className='font-bold text-lg'>{name}</div>
        <div className='text-lg' >{category}</div>
        <div className='font-bold'> <span className='text-lg text-red-500 font-bold'>₹</span>{price}</div>
    </div>
        </Link>
         <button onClick={handleAddToCart} className='bg-yellow-500 px-5 hover:bg-yellow-600 rounded-lg font-bold'>Add Cart</button>
    

    </div>       
    </div>
  )
}


