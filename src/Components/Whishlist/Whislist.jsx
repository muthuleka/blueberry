import React from 'react'
import "./Whislist.css"
import cartimg from "../../Assets/cartimg.jpg"
import { MdOutlineStarBorder } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";
import cart from "../../Assets/category.jpg"
import { FaRegHeart } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { GoGitCompare } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Footer from '../Footer/Footer';

const Whislist = () => {
    const foodCategories = [
        {
          categoryName: "Fruits",
            
              productName: "Apple",
              price: 2.99,
              images: [cartimg,cart],
              offerPrice: 2.49,
              itemCount: 50,
              rating: 4.5
            },
            {
              categoryName: "Fruits",
              productName: "Banana",
              price: 1.99,
              images: [cartimg,cart],
              offerPrice: 1.79,
              itemCount: 100,
              rating: 4.2
            },
            {
              categoryName: "Fruits",
              productName: "Orange",
              price: 3.49,
              images: [cartimg,cart],
              offerPrice: 2.99,
              itemCount: 75,
              rating: 4.6
            },
            {
              categoryName: "Fruits",
              productName: "Strawberry",
              price: 4.99,
              images: [cartimg,cart],
              offerPrice: 4.49,
              itemCount: 60,
              rating: 4.8
            },
            {
              categoryName: "Fruits",
              productName: "Grapes",
              price: 5.99,
              images: [cartimg,cart],
              offerPrice: 4.99,
              itemCount: 120,
              rating: 4.3
            },
            {
              categoryName: "Fruits",
              productName: "Pineapple",
              price: 3.99,
              images: [cartimg,cart],
              offerPrice: 3.49,
              itemCount: 40,
              rating: 4.7
            },
            {
              categoryName: "Fruits",
              productName: "Watermelon",
              price: 6.99,
              images: [cartimg,cart],
              offerPrice: 5.99,
              itemCount: 90,
              rating: 4.5
            }
          
        ,
        {
          categoryName: "Vegetables",
              productName: "Carrot",
              price: 1.49,
              images: [cartimg,cart],
              offerPrice: 1.29,
              itemCount: 80,
              rating: 4.8
            }
        ]
  return (
    <>
    <div className='whislist'>
        
    <div className='cart'>
        <div className='cart_img'>
          <p className='deal'>Day Of The <span> Deal</span></p>
          <p className='wait'>Don't wait. The time will never be just right.</p>
        </div>
        <div className='grid'>
        {
          foodCategories.map(function (food) {
            return(
            <div className='props'>
            <div className='propsimg'>
            <div className='i'>
            <img src={cartimg} className = 'img1'alt="" />
            <img src={cart}  className = 'img2'alt="" />
            <div className='cart_i'>
              <p><FaRegHeart className='ca'/></p>
                <p><FiEye className='ca'/></p>
                <p><GoGitCompare className='ca'/></p>
                <p><HiOutlineShoppingBag className='ca'/></p>
            </div>
            </div>
            <div className='detail'>
              <div className='star'>
                  <p>{food.categoryName}</p>
                <div className='star1'>
                <p><MdOutlineStarPurple500 /></p>
                <p><MdOutlineStarPurple500 /></p>
                <p><MdOutlineStarPurple500 /></p>
                <p><MdOutlineStarPurple500 /></p>
                <p><MdOutlineStarBorder /></p>
                </div>
              </div>
            
                 <p className='ch'>{food.productName}</p>
              <div className='price'>
              <div className='price1'>
                  <p>{food.offerPrice}</p>
                  <p>{food.rating}</p>
              </div>
                  <p>{food.itemCount}</p>
              </div>
              
            </div>
          </div>  
        </div>
            )
          })
        }
        </div>
        
      </div>
    </div>
    <Footer/>
      
    </>
  )
}

export default Whislist
