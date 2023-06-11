import { createSlice } from '@reduxjs/toolkit'

const initialState={
 
  email: "",
 
  fname:"",
 
  img:"",

  lname:"",
  id:""


}

export const userSlice = createSlice({
  name:"user",
  initialState,
  reducers:{
    loginRedux: (state,action)=>{
        // console.log(action.payload.data.user)
        state.email=action.payload.data.user.email
        state.fname=action.payload.data.user.fname
        state.lname=action.payload.data.user.lname
        state.img=action.payload.data.user.img
        state.id=action.payload.data.user._id
    },
    logOutRedux:(state,action)=>{
      state.email=""
      state.fname=""
      state.lname=""
      state.img=""
      state.id=""
    }
  }


})

export const { loginRedux ,logOutRedux} = userSlice.actions

export default userSlice.reducer