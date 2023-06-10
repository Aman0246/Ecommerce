import './App.css';
import Navbar from './components/Navbar';
import {Route,Routes} from "react-router-dom"
import Home from './Pages/Home';
import About from './Pages/About';
import Menu from './Pages/Menu';
import Contect from './Pages/Contect';
import Login from './Pages/Login';
import NewProduct from './Pages/NewProduct';
import Signup from "./Pages/Signup"
import axios  from 'axios';
// ''============================================
axios.defaults.baseURL="http://localhost:7000"
axios.defaults.withCredentials=true;
// ''============================================
function App() {
  return (<>
 <Navbar></Navbar>
 <div className='h-full' >

 <Routes>
 <Route path="/home" element={<Home/>} ></Route> 
 <Route path="/menu" element={<Menu/>} ></Route> 
 <Route path="/about" element={<About/>} ></Route> 
 <Route path="/login" element={<Login/>} ></Route> 
 <Route path="/contect" element={<Contect/>} ></Route> 
 <Route path="/newProduct" element={<NewProduct/>} ></Route> 
 <Route path="/signup" element={<Signup/>} ></Route> 
</Routes>

 </div>

 
  </>
 
 );
}

export default App;
