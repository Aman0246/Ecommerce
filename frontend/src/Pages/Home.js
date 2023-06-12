import React from "react";
import cycle from "./img/cycle.png";
import c2 from "./img/c2.png";
import { useSelector } from "react-redux";
import Homecard from "../components/HomeCard/Homecard";

export default function Home() {
  //=============================================================
  const allProductData=useSelector((state)=>state.product)
  // console.log(allProductData.productList.slice(0,4) )
  const homeProducts=allProductData.productList.slice(0,4)
  //=========PAGINATION===============
  // const homeproductCard= allProductData.slice(0,4)
  //=============================================================
  return (
    <div className=" bg-gray-200 h-[100vh] md:pt-[98px] pt-[70px] px-5 ">
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
          <p className="pt-2 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            nulla, quod eos modibr tempore rerum provident voluptatum! Saepe,
            modi neque voluptates reprehenderit deserunt odio dignissimos, sunt
            dolor, doloribus maiores ullam! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. <br />  Quibusdam,libero. Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Sapiente, beatae? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quasi, ipsam
            aperiam! Itaque eveniet incidunt ex quae quis beatae facere?
            Repellendus?
          </p>
          <button className="font-bold bg-red-500 px-3 py-1 mt-2  rounded-full">Order Now</button>
        </div>
        <div className="md:w-1/2 flex flex-wrap gap-5 p-4 justify-center">
           {homeProducts.map((e,i)=>{
            return(
              <div key={i}>

              <Homecard 
              category={e.category}
              description={e.description}
              image={e.image}
              name={e.name}
              price={e.price}
              ></Homecard>
              </div>
            )
           })}
        </div>
      </div>
    </div>
  );
}
