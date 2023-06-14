import React from "react";
import { BsFillTrashFill } from 'react-icons/bs';
import { useDispatch, useSelector } from "react-redux";
import {deleteCartItem} from "../../Redux/ProductSlice"
import {increaseQty,decreaseQty} from "../../Redux/ProductSlice"
export default function CArtProducts({
  name,
  id,
  image,
  category,
  qty,
  total,
  description,
  price,
}) {
const dispatch=useDispatch()
const selector=useSelector((state) => state.product)
console.log(selector)

  return (
    <div className="bg-slate-300 my-2 w-full md:p-2 md:ml-5 md:w-[60rem] flex ">
      <img
        src={image}
        className=" md:h-60 md:w-60 h-60 w-40 object-cover p-3"
      />

      <div className="w-full relative max-w-4xl md:gap-3 p-1 md:p-4 md:flex ">
        <div className="">
          <h3 className="pt-2 md:text-4xl font-semibold text-lg  text-black  capitalize">
            {name}
          </h3>
          <div className=" absolute right-10 top-5 text-2xl cursor-pointer hover:text-red-500 " onClick={()=>dispatch(deleteCartItem(id))}>
          <BsFillTrashFill></BsFillTrashFill>

          </div>
          <p className=" text-slate-500 md:text-2xl font-medium ">{category}</p>
          <p className=" font-bold md:text-2xl">
            <span className="text-red-500">₹</span> <span>{price}</span>
          </p>
           <div className="flex  justify-between md:gap-80 mr-10">

          <div className="text-center md:flex">
            <button onClick={()=>dispatch(increaseQty(id))} className="bg-yellow-500 px-4 md:mx-1 rounded-lg hover:bg-green-600 font-bold   md:min-w-[80px]">
              +
            </button>
            <p className=" text-slate-500 md:text-2xl font-medium ">{qty}</p>
            <button onClick={()=>dispatch(decreaseQty(id))}  className="bg-yellow-500 px-4 md:mx-1 rounded-lg hover:bg-red-600 font-bold  md:min-w-[80px]">
              -
            </button>
          </div>
                    <div className="font-bold  md:text-lg">
                        <p>Total:<span className="text-red-500   p-1" >₹</span>{total}</p>
                        </div>  
          </div>

          <p className="text-slate-600 md:text-2xl text-xl font-sm pt-5">
            Description:
          </p>
          <p className="text-slate-500 md:text-xl ">{description}</p>
        </div>
      </div>
    </div>
  );
}
