import React from 'react'
import contact from "./contact.gif"
export default function Contect() {
  return (
    <div className='pt-[100px] md:flex  justify-center items-center flex-col'>
     <img className='w-[30rem] mt-4  ' src={contact}  />
     <div className='bg-red-100  flex shadow-md shadow-yellow-100 flex-wrap flex-col md:justify-center justify-start  md:min-w-[50rem] p-2'>
      <div className='font-bold  text-xl'>Email: <span className='text-red-900'>amankashyap0246@gmail.com</span></div>
      <div className='font-bold text-xl'>Mobile: <span className='text-red-900'>9005267072</span></div>
      <div className='font-bold text-xl'>Address: <span className='text-red-900'>Uttar Pradesh,Gorakhpur,Jungle TulshiRam Bichhiya (MahallTola) </span></div>
     </div>
    </div>
  )
}
