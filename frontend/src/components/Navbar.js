import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector,useDispatch } from "react-redux";
import {logOutRedux} from "../Redux/userSlice"
import { toast } from "react-hot-toast";
import axios from "axios";
export default function Navbar() {
  const userData = useSelector((state) => state.user);
  console.log(userData);
  const [showmenu, setmenu] = useState(false);
  const handleUserMenu = () => {
    setmenu(!showmenu);
  };
  

  const dispatch=useDispatch()
  const handleLogout=async()=>{
    await axios.get("/logout")
    dispatch(logOutRedux())
    toast.success("Logout")

  }

  return (
    <div className=" w-full pt-2 z-10 fixed flex flex-wrap  bg-white shadow-md items-center  justify-between px-5 pb-2 md:px-10 ">
      <Link to="/">
        <img
          className="md:w-20  bg-white md:h-20 w-10 h-10 rounded-full "
          src="https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/63bec2a12cb463609c6ea96a_Screen%20Shot%202023-01-11%20at%208.21.28%20PM.png"
          alt="Logo"
          srcSet=""
        />
      </Link>
      <nav className=" flex  bg-white gap-1 md:text-2xl md:gap-10 font-bold ">
        <Link
          className=" hover:underline  bg-white hover:text-orange-400 underline-offset-2 "
          to="/home"
        >
          Home
        </Link>
        <Link
          className=" hover:underline  bg-white hover:text-orange-400 underline-offset-2  "
          to="/menu"
        >
          Menu
        </Link>
        <Link
          className=" hover:underline  bg-white hover:text-orange-400 underline-offset-2  "
          to="/about"
        >
          About
        </Link>
        <Link
          className=" hover:underline  bg-white hover:text-orange-400 underline-offset-2  "
          to="/contect"
        >
          Contect
        </Link>
      </nav>
      <div className=" text-gray-500 md:text-2xl  bg-white flex gap-3 md:gap-7">
        <div className=" relative">
          <div className="absolute text-sm  flex justify-center items-center rounded-lg -top-2 -right-1 text-white bg-red-500 h-4 w-4 p-0">
            0
          </div>
          <div className=" hover:text-2xl cursor-pointer hover:text-gray-700">
            <FaShoppingCart></FaShoppingCart>
          </div>
        </div>
        <div className="relative  ">
          <div
            onClick={handleUserMenu}
            className="hover:text-2xl cursor-pointer  hover:text-gray-700"
          >
            {userData.img ? (
              <>
                <img
                  className="h-[1.9rem] w-[1.9rem] overflow-hidden rounded-full"
                  src={userData.img}
                  alt=""
                  srcset=""
                />
              </>
            ) : (
              <FaRegUserCircle></FaRegUserCircle>
            )}
          </div>
          {showmenu && (
            <div className="absolute right-0 bg-white py-2 px-2 shadow drop-shadow-md ">
              <p
                onClick={handleUserMenu}
                className="whitespace-nowrap cursor-pointer hover:bg-gray-100 px-5 rounded-lg"
              >
                  {process.env.REACT_APP_ADMIN_LOGIN==userData.email && <Link to="newProduct"> New Product</Link> }
               
              </p>
              <p
                onClick={handleUserMenu}
                className="whitespace-nowrap cursor-pointer hover:bg-gray-100 px-5 rounded-lg"
              >
                {userData.id?(<Link  className="text-red-500 " onClick={handleLogout} to="/home">Logout ({userData.fname})</Link>):(<Link to="/login">Login</Link>)}
                
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
