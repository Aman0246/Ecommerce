import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Signup() {
  const handlesubmit=(e)=>{
    e.preventDefault()
    console.log(fname,lname,email,password)
  }

  const [eye, seteye] = useState(false);
  const eyehandle = () => {
    seteye(!eye);
  };
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  

  return (
    <div className="w-full h-[100vh] flex  justify-center pt-[95px] bg-slate-200">
      <div className="bg-white h-[35rem] w-[20rem]  flex flex-col items-center  md:w-[30rem] md:mt-8 rounded-lg ">
        <div className=" flex  text-6xl text-center justify-items-center pt-3 items-center ">
          <FaUserCircle></FaUserCircle>
        </div>
        <h1 className="item-center md:text-3xl text-2xl font-bold">Sign Up</h1>
        <div className=" w-full left-0 mt-5">
          <form className="w-full  flex flex-col gap-2 px-5 "  onSubmit={handlesubmit} action="">
            <label className="text-xl font-bold" htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={fname}
              onChange={(e) => setfname(e.target.value)}
              className=" mt-2 focus-within:outline-blue-500 border-2 h-8 px-5 bg-gray-200  rounded-xl"
            />
            <label className="text-xl font-bold" htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={lname}
              onChange={(e) => setlname(e.target.value)}
              className=" mt-2 border-2 h-8 px-5 bg-gray-200 focus-within:outline-blue-500 rounded-xl"
            />
            <label className="text-xl font-bold" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className=" mt-2 focus-within:outline-blue-500 border-2 h-8 px-5 bg-gray-200  rounded-xl"
            />
            <div className="relative w-full flex flex-col ">
              <label className="text-xl font-bold" htmlFor="password">
                Password
              </label>
              <input
                type={eye ? "text" : "password"}
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                className=" mt-2 border-2 h-8 focus-within:outline-blue-500 px-5 bg-gray-200  rounded-xl"
              />
              {eye ? (
                <div className="absolute right-2 bottom-2">
                  <AiFillEye onClick={eyehandle}></AiFillEye>
                </div>
              ) : (
                <div className="absolute right-2 bottom-2">
                  <AiFillEyeInvisible onClick={eyehandle}></AiFillEyeInvisible>
                </div>
              )}
            </div>
            <button type="submit" className="m-auto px-9 py-3 rounded-full font-bold shadow-md bg-blue-300 ">
              Sign up
            </button>
            <div className="text-l font-bold">
              Already have Accout ?{" "}
              <Link className="underline underline-offset-1" to="/login">
                Login
              </Link>{" "}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
