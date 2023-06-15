import './App.css';
import Navbar from './components/Navbar';
import {Route,Routes} from "react-router-dom"
import Home from './Pages/Home';
import About from './Pages/About/About';
import Menu from './Pages/Menu';
import Contect from './Pages/Contect';
import Login from './Pages/Login';
import NewProduct from './Pages/NewProduct';
import Signup from "./Pages/Signup"
import axios  from 'axios';
import { useEffect } from 'react';
import {setDataProduct} from "./Redux/ProductSlice"
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
// ''============================================
axios.defaults.baseURL=process.env.REACT_APP_PORT
axios.defaults.withCredentials=true;
// ''============================================
console.log(process.env.REACT_APP_PORT)

function App() {
  //============================================ =====
  let dispatch=useDispatch()
  let use=useSelector((state) => state.product)
  useEffect(()=>(async()=>{
    const allproducts= await axios.get("https://ecommerceone.onrender.com/allproduct")
    console.log(allproducts)
     dispatch(setDataProduct(allproducts.data.data))
  }),[]
  )
  //================================================

    // console.log(use)
      //============================================ =====
    return (<>
 <Navbar></Navbar>
 <div className='h-full' >

 <Routes>
 <Route path="/home" element={<Home/>} ></Route> 
 <Route path="/" element={<Home/>} ></Route> 
 <Route path="/menu" element={<Menu/>} ></Route>  
 <Route path="/menu/:filterby" element={<Menu/>} ></Route> 
 <Route path="/about" element={<About/>} ></Route> 
 <Route path="/login" element={<Login/>} ></Route> 
 <Route path="/contect" element={<Contect/>} ></Route> 
 <Route path="/newProduct" element={<NewProduct/>} ></Route> 
 <Route path="/signup" element={<Signup/>} ></Route> 
 <Route path="/cart" element={<Cart/>} ></Route> 
</Routes>

 </div>

 
  </>
 
 );
}

export default App;
