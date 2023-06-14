import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState ={
    
    productList:[],
    cartItem:[],
}

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setDataProduct: (state, action) => {
      // console.log(action.payload);

    state.productList=[...action.payload]

    },
    addCartItem:(state,action)=>{
      // var index= state.cartItem.findIndex((e)=>e._id===action.payload)
      const checking=state.cartItem.some(e=>e._id=== action.payload._id)
    if(checking==true){
      toast("Already in Cart")
    }
    else{
      const total=action.payload.price
      state.cartItem=[...state.cartItem,{...action.payload,qty:1,total:total}]
      toast.success("Added in Cart")
    }   
    },
    deleteCartItem:(state,action)=>{
console.log(action.payload)
const index= state.cartItem.findIndex((e)=>e._id===action.payload)

state.cartItem.splice(index,1)
toast("one item Removed")
console.log(index)


    },
increaseQty:(state,action)=>{
  var index= state.cartItem.findIndex((e)=>e._id===action.payload)
  var qty= state.cartItem[index].qty
  const incQty=++qty
  state.cartItem[index].qty=incQty

  const price=state.cartItem[index].price
  const total=incQty*price

  state.cartItem[index].total=total



},
decreaseQty:(state,action)=>{
  var index= state.cartItem.findIndex((e)=>e._id===action.payload)
  var qty= state.cartItem[index].qty
  if(qty>1){
    const incQty=--qty
    state.cartItem[index].qty=incQty


   


    
    const price=state.cartItem[index].price
    const total=incQty*price
  
    state.cartItem[index].total=total 


  }




}


  },
});
export const { setDataProduct,addCartItem ,deleteCartItem,increaseQty,decreaseQty} = productSlice.actions;
export default productSlice.reducer;
