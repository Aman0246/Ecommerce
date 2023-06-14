import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Loader from '../components/Loader/Loader'
import AllProduct from '../components/AllProduct'
import { addCartItem } from '../Redux/ProductSlice'

export default function  Menu() {
  const {filterby}= useParams()
  const produData=useSelector(state=>state.product.productList)
  const productDisplay=produData.filter(e=>e._id === filterby)
  const dispatch=useDispatch()
  console.log(produData)
  const handleAddToCart=(e)=>{

      dispatch(addCartItem({ 
        name:e.name,
        price:e.price,
        description:e.description,
        category:e.category,
        image:e.image,
        _id:e._id

      }))
      
    }  

  return (
    <div>
         <div className='pt-[100px] px-10' >
        { productDisplay[0]?(
        <div className='w-full max-w-4xl m-auto gap-7 p-1 md:p-4 md:flex '>
          <div className='  overflow-hidden '>
            <img src={productDisplay[0].image} className='hover:scale-105 h-full transition-all' alt="" srcset="" />
          </div>
<div>

          <h3 className='pt-2 md:text-4xl font-semibold text-lg  text-black  capitalize'>{productDisplay[0].name}</h3>
      <p className=' text-slate-500 md:text-2xl font-medium '>{productDisplay[0].category}</p>
      <p className=' font-bold md:text-2xl'><span className='text-red-500'>₹</span> <span>{productDisplay[0].price}</span></p>
<div className='flex gap-3'>
      <button  className='bg-yellow-500 px-5 rounded-lg hover:bg-yellow-600 font-bold  py-2 min-w-[100px]'> Buy </button>
     <Link to={"/cart"}> <button onClick={()=>{handleAddToCart(productDisplay[0])}} className='bg-yellow-500 px-5 rounded-lg hover:bg-yellow-600 font-bold  py-2 min-w-[100px]'>Add Cart</button></Link>


</div>

<p className='text-slate-600 md:text-2xl text-xl font-sm pt-5'>Description:</p>
<p  className='text-slate-500 md:text-xl '>{productDisplay[0].description}</p>
</div>



        </div>
):(<div></div> )}
      </div>
<AllProduct></AllProduct>


    </div>

  )
}
