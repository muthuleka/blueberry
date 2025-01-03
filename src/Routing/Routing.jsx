import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Myproduct from '../Pages/Myproduct/Myproduct'
import Addcart from '../Pages/Addcart/Addcart'
import Login from '../Components/Login/Login'
import Register from '../Components/Register/Register'
import Whislist from '../Components/Whishlist/Whislist'
import Contact from '../Pages/Contact/Contact'
import Categories from '../Components/Categories/Categories'
import Offers from '../Components/Offers/Offers'
import Blog from '../Components/Blog/Blog'
import Pop from '../Pages/Pop/Pop'

const Routing = () => {
  return (
    <>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Product' element={<Myproduct/>}/>
          <Route path='/Categories' element={<Categories/>}/>
          <Route path='/Cart' element={<Addcart/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/Whishlist' element={<Whislist/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Offers' element={<Offers/>}/>
          <Route path='/Blog' element={<Blog/>}/>
          <Route path='/Pop' element={<Pop/>}/>

        </Routes>
        
        
    </>
  )
}

export default Routing
