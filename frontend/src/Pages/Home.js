import React, { useEffect, useRef, useState } from "react";
import { GrCaretNext } from 'react-icons/gr';
import { GrCaretPrevious } from 'react-icons/gr';
import "./a.css"
import c2 from "./img/c2.png";
import { useDispatch, useSelector, useStore } from "react-redux";
// import Homecard from "../components/HomeCard/Homecard";
import Loader from "../components/Loader/Loader"
import CardVegetable from "../components/CardVegetable";
// import FilterProduct from "../components/FilterProduct";
import AllProduct from "../components/AllProduct";
import { setDataProduct } from "../Redux/ProductSlice";
import axios from "axios";

export default function Home() {
  //==============================================================


//===========================================
  let prev=useRef()
  const prevoisproduct=()=>{
 
    prev.current.scrollLeft -= 250;  
  }
  const NextProduct=()=>{
    prev.current.scrollLeft += 250;  
  }
//==============================================================


  //=============================================================
  const allProductData=useSelector((state)=>state.product)
  // console.log(allProductData.productList.slice(0,4) )
  const homeProducts=allProductData.productList.slice(0,4)
  //=========PAGINATION===============
  // const homeproductCard= allProductData.slice(0,4)
  //=============================================================
  // console.log(allProductData.productList)
  let data=allProductData.productList
  const handleCardVegetable=data.filter(e=> e.category=="Vegetable")
  // console.log(handleCardVegetable)
  //=======================================================
  
const categoryList= [...new Set(data.map((e)=>e.category))]
// console.log(categoryList)

const[filterby,setfilterBy]=useState("")
const[dataFilter,setDataFilter]=useState([])
useEffect(()=>{
setDataFilter(data)
},[data])
const handleFilterProducts=(category)=>{
  const filter=data.filter(e=>e.category.toLowerCase() ==  category.toLowerCase())
  setDataFilter(()=>{
        return[
          ...filter
        ]
  })
  
}


  //=======================================================
  return (
    <div className=" w-full a bg-gray-200 h-full md:pt-[98px] pt-[70px] px-5 ">
      <div className="md:flex   md:mt-5  flex-wrap">
        <div className="md:w-1/2">
          <div className=" relative  z-1 flex pt-3 shadow-md border-2 border-gray-200 rounded-full  bg-gray-300 w-[10rem]">
            <p className="text-sm pb-3 px-2 font-semibold text-orange-500">
              Bike Delivery
            </p>
            <img
              className="h-[5rem] absolute -top-4 left-[5rem] "
              src={c2}
              alt="Logo"

            />
          </div>
          <h2 className="md:text-7xl py-3 text-2xl ">
            The Fastest Delivery in{" "}
            <span className="text-red-500 font-bold">Your City</span>
          </h2>
          <p className="pt-2 mb-5 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            nulla, quod eos modibr tempore rerum provident voluptatum! Saepe,
            modi neque voluptates reprehenderit deserunt odio dignissimos, sunt
            dolor, doloribus maiores ullam! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. <br />  Quibusdam,libero. Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Sapiente, beatae? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quasi, ipsam
            aperiam! Itaque eveniet incidunt ex quae quis beatae facere?
            Repellendus? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique fuga fugit quia officia corporis nemo odio, quaerat quidem distinctio dolore eos ut reiciendis mollitia ducimus sint error suscipit, at odit! 
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos aliquid similique animi fuga maxime repudiandae a asperiores eligendi, dolores qui, inventore consequuntur explicabo doloribus modi amet, assumenda libero debitis doloremque!
          </p>
          <button className="font-bold mb-15 bg-red-500 px-3 py-1 mt-2  rounded-full">Order Now</button>
        </div>
        <div className="md:w-1/2 flex flex-wrap gap-5 p-4 justify-center">
        <img src="https://media.easemytrip.com/media/Blog/India/636977607425696252/636977607425696252QYiiUU.jpg"  />  
        
        </div>
      </div>
      <div className="">
        <h2 className="font-bold text-2xl  text-slate-800">Fresh Vegitables </h2>
        <div className="  flex w-full justify-end px-5 gap-2 text-2xl">
        <GrCaretPrevious className="cursor-pointer hover:bg-slate-500 p-1 bg-slate-300   " onClick={prevoisproduct} ></GrCaretPrevious>
        <span className=" bg-slate-300  hover:bg-slate-500  cursor-pointer">
      
          <GrCaretNext  onClick={NextProduct} className="p-1 " ></GrCaretNext>
          </span> 
          </div>
        <div ref={prev}  className=" w-full flex  gap-5  overflow-scroll scrollbar scroll-smooth">
       {handleCardVegetable[0]?handleCardVegetable.map((e,i)=>{
            return(
              <div key={i}>
             <CardVegetable
             name={e.name}
             id={e._id}
             category={e.category}
             price={e.price}
             image={e.image}
             ></CardVegetable>
             </div>
          )}):(<Loader></Loader>)}
        


        </div>
      </div>
      
      <AllProduct/>
    </div>
  );
}

