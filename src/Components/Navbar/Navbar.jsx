import React from 'react'
import { AiOutlineAppstore } from "react-icons/ai";
import { RxDot } from "react-icons/rx";
import logo from "../../Assets/logo.png"
import { IoLocationOutline } from "react-icons/io5";
import { GoShieldCheck } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { RxPerson } from "react-icons/rx";
import { FaRegStar } from "react-icons/fa";
import { PiShoppingCartBold } from "react-icons/pi";
import { NavLink } from 'react-router-dom';


import { useState } from 'react';







const Navbar = () => {
  const [data,setdata]=useState(false)
  const [page,setpage]=useState(false)
function opendiv(params) {
  setdata(true)
}

function closediv(params) {
  setdata(false)
}
function pageopen(params) {
  setpage(true)
}

function pageclose(params) {
  setpage(false)
}

  return (
    <>
    <div className='w-[100%] h-[10%]  flex items-center justify-center'>
      <div className='w-[80%] h-[80px]  flex items-center justify-between '>
        <div className='text-3xl w-[10%] '>
          <img src={logo} alt="" />

        </div>
        <div className=' flex items-center justify-evenly w-[40%] h-[50px]  text-sm  text-gray-500 border-2 border-gray-200 rounded-xl'>
          <select name="" id="" className='outline-none ml-2 bg-transparent w-[35%] h-[100%]  border-solid border-r border-gray-200'>
            <option value="" className='text-sm  text-gray-500 '>Vegetables</option>
            <option value="" className='text-sm  text-gray-500'>Cold Drinks</option>
            <option value="" className='text-sm  text-gray-500'>Fruits</option>
            <option value="" className='text-sm  text-gray-500'>Bakkery</option>
          </select>
          <input type="text" placeholder='Search Products....' className='w-[100%] outline-none ml-5' />
          <p><FiSearch className='text-xl mx-2'/></p>
        </div>
        <div className=' w-auto h-auto flex items-center justify-end '>
          <div className='group flex items-center justify-start w-[100%] gap-[10px] z-10   relative ml-4' >
            <p><RxPerson className='flex  text-3xl text-blue-500 ml-3'/></p>
            <div className='w-[100%] h-auto flex items-start justify-end  flex-col'>
            <p className='text-xs'>Account</p>
            <p className=' text-bold' onMouseOver={opendiv} >Login</p>
            </div>
            <div className={`w-[150px] p-4 rounded-xl duration-1000  border-2 border-gray-300 bg-white absolute -z-10  ${data? 'opacity-100 top-[50px]': 'top-[40px] opacity-0'} flex items-start justify-start flex-col`} onMouseLeave={closediv}>
              <NavLink to = "/Register">
              <p className='text-gray-500 font-medium'>Register</p>

              </NavLink>
              <p className='text-gray-500 font-medium'>Checkout</p>
              <NavLink to= "/Login">
              <p className='text-gray-500 font-medium'>Login</p>

              </NavLink>
            </div>
          </div>
          <div className=' flex items-center  w-[100%] ml-4'>
            <p><FaRegStar className='flex text-3xl text-blue-500 mr-3'/></p>
            <div className='w-[100%] h-auto flex items-start justify-start flex-col'>
            <p className='text-xs'>3 Items</p>
            <NavLink to = "/Whishlist">
            <p className=' text-bold'>Whislist</p>

            </NavLink>
            </div>
            
          </div>
          <div className=' flex items-center  w-[100%] ml-4'>
            <p><PiShoppingCartBold className='flex text-3xl  text-blue-500 mr-3'/></p>
            <div className='w-[100%] h-auto flex items-start justify-start flex-col'>
            <p  className='text-xs'>4 Items</p>
            <NavLink to = "/Cart">
            <p className=' text-bold'>Cart</p>

            </NavLink>
            </div>
            
          </div>
        </div>
        

      </div>

    </div>
      <div className='w-[100%] h-[10%]  flex items-center justify-evenly border-2 border-gray-200 '>
        <div className='w-[85%] h-[60px] flex items-center justify-between'>
          <div className='w-[30px] h-auto  flex items-start justify-start mr-8 '>
            <span className=' w-[40px] h-auto border-2 border-gray-200 rounded  '><AiOutlineAppstore className='text-3xl text-blue-300 '/> </span>
          </div>
        <div className='w-[90%] h-[50px] flex  items-center justify-start gap-[55px]  '>
          <NavLink to="/">
          <p className='text-gray-500 font-medium hover:text-blue-400 transition-all duration-700'>Home</p>

          </NavLink>
          <NavLink to = "/Categories">
          <p className='text-gray-500 font-medium flex items-center justify-center hover:text-blue-400 transition-all duration-700'>Categories<RxDot className='text-xl text-gray-500 hover:text-blue-400 transition-all duration-700 '/></p>

          </NavLink>
          
          <div className='relative z-50'>
            <p className='text-gray-500 font-medium flex items-center justify-center hover:text-blue-400 transition-all duration-700'onMouseOver={pageopen} >Pages <RxDot className='text-xl text-gray-500 hover:text-blue-400 transition-all duration-700 '/></p>

          <div  className={`w-[150px] p-4 rounded-xl duration-1000  border-2 border-gray-300 bg-white absolute -z-10  ${page? 'opacity-100 top-[50px]': 'top-[40px] opacity-0'} flex items-start justify-start flex-col ` }onMouseLeave={pageclose}>
            <p className='text-gray-500 font-medium p-3'>About Us</p>
            <NavLink to = "/Contact">
            <p className='text-gray-500 font-medium p-2'>Contact Us</p>

            </NavLink>
            <p className='text-gray-500 font-medium p-2'>cart</p>
            <p className='text-gray-500 font-medium p-2'>CheckOut</p>
            <p className='text-gray-500 font-medium p-2'>Compare</p>
            <p className='text-gray-500 font-medium p-2'>Faq</p>
            

          </div>

          </div>
          <NavLink to = "/Product">
          <p className='text-gray-500 font-medium flex items-center justify-center hover:text-blue-400 transition-all duration-700'>Products <RxDot className='text-xl text-gray-500 hover:text-blue-400 transition-all duration-700 '/></p>

          </NavLink>
          <NavLink to = "/Blog">
          <p className='text-gray-500 font-medium flex items-center justify-center hover:text-blue-400 transition-all duration-700'>Blog <RxDot className='text-xl text-gray-500 hover:text-blue-400 transition-all duration-700'/></p>

          </NavLink>
          <NavLink to = "/Offers">
          <p className='text-gray-500 font-medium flex items-center justify-center hover:text-blue-400 transition-all duration-700'><GoShieldCheck className='text-sm text-gray-500 mr-2 hover:text-blue-400 transition-all duration-700'/>Offers</p>
          </NavLink>
        </div>
        <div className='w-[200px] h-[50px] flex justify-center items-center border-2 rounded   border-gray-200 text-gray-500'>
          <p><IoLocationOutline className='text-xl flex items-start justify-start' /></p>
          <select name="" id="" className='outline-none px-2'>
            <option value="" className='text-sm  text-gray-500'>Surat</option>
            <option value="" className='text-sm text-gray-500'>Delhi</option>
            <option value="" className='text-sm text-gray-500'>Rajkot</option>
            <option value="" className='text-sm text-gray-500'>Udaipur</option>
          </select>
        </div>
        </div>
    
        
        
      </div>
    </>
  )
}

export default Navbar
