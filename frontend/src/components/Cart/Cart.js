import React from "react";
import { useSelector } from "react-redux";
import CArtProducts from "./CArtProducts";

export default function Cart() {
  const productCartItems = useSelector((state) => state.product.cartItem);
  console.log(productCartItems)
  return (
    <div className="pt-[95px] md:flex  md:gap-8 ">

        <div className="">

        <h2 className="text-lg md:text-xl font-bold text-slate-700 md:p-5 p-3">
          your Cart items
        </h2>
        <div className="">
          <div className="w-full  ">

          {productCartItems.map((e) => {
            return (
              <CArtProducts
              key={e.id}
              name={e.name}
              image={e.image}
              category={e.category}
              qty={e.qty}
              total={e.total}
              price={e.price}
              description={e.description}
              />
              );
            })}
            </div>
            </div>
        </div>
          <div className="">{/* total Carts items? */}sadsada</div>
      </div>
  );
}
