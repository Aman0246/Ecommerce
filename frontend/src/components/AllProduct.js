import React, { useEffect, useRef, useState } from 'react'
import CardVegetable from './CardVegetable'
import FilterProduct from './FilterProduct'
import { useSelector } from 'react-redux'

export default function AllProduct() {
    let prev=useRef()

    const allProductData=useSelector((state)=>state.product)

      let data=allProductData.productList

   
  const categoryList= [...new Set(data.map((e)=>e.category))]

  
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
  return (
    <div className="my-5 ">
    <h2 className="font-bold px-10  text-2xl text-slate-800 mb-4">
    All Products
      <div className='w-full h-[1px] bg-black m-5'></div>
    </h2>
    <div className="  overflow-scroll  scrollbar-none justify-center items-center text-center flex ">
        
    


    { categoryList[0]&&categoryList.map(e => {
      return(
      <FilterProduct category={e} onClick={()=>handleFilterProducts(e)} />)})
      }
    </div>
    <div className="flex flex-wrap justify-center gap-4">

{
dataFilter.map((e,i)=>{
return(
  
  <div key={i}>
  <CardVegetable  
  price={e.price}
  id={e._id}
  image={e.image}
  name={e.name}
  category={e.category}
  
  
  ></CardVegetable>
  </div>
)
})
}

    </div>
  </div>
  )
}
