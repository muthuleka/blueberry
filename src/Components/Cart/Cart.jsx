import React, { useEffect } from 'react'
import "./Cart.css"
import cartimg from "../../Assets/cartimg.jpg"
import { MdOutlineStarBorder } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";
import cart from "../../Assets/category.jpg"
import { FaRegHeart } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { GoGitCompare } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { myreducers } from '../../Redux/Store';







const Cart = () => {
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
        },
        {
          categoryName: "Vegetables",
          productName: "Broccoli",
          price: 2.99,
          images: [cartimg,cart],
          offerPrice: 2.69,
          itemCount: 60,
          rating: 4.7
        },
        {
          categoryName: "Vegetables",
          productName: "Spinach",
          price: 1.99,
          images: [cartimg,cart],
          offerPrice: 1.79,
          itemCount: 120,
          rating: 4.4
        },
        {
          categoryName: "Vegetables",
          productName: "Cucumber",
          price: 1.29,
          images: [cartimg,cart],
          offerPrice: 1.09,
          itemCount: 100,
          rating: 4.2
        },
        {
          categoryName: "Vegetables",
          productName: "Tomato",
          price: 2.49,
          images: [cartimg,cart],
          offerPrice: 2.19,
          itemCount: 150,
          rating: 4.6
        },
        {
          categoryName: "Vegetables",
          productName: "Lettuce",
          price: 1.99,
          images: [cartimg,cart],
          offerPrice: 1.79,
          itemCount: 90,
          rating: 4.1
        },
        {
          categoryName: "Vegetables",
          productName: "Bell Pepper",
          price: 2.99,
          images: [cartimg,cart],
          offerPrice: 2.49,
          itemCount: 110,
          rating: 4.7
        }
      
    ,
    {
      categoryName: "Snacks",
          productName: "Potato Chips",
          price: 3.49,
          images: [cartimg,cart],
          offerPrice: 2.99,
          itemCount: 200,
          rating: 4.3
        },
        {
          categoryName: "Snacks",
          productName: "Chocolate Bar",
          price: 1.99,
          images: [cartimg,cart],
          offerPrice: 1.59,
          itemCount: 150,
          rating: 4.6
        },
        {
          categoryName: "Snacks",
          productName: "Popcorn",
          price: 2.49,
          images: [cartimg,cart],
          offerPrice: 2.19,
          itemCount: 180,
          rating: 4.4
        },
        {
          
          categoryName: "Snacks",
          productName: "Cookies",
          price: 3.99,
          images: [cartimg,cart],
          offerPrice: 3.49,
          itemCount: 140,
          rating: 4.7
        },
        {
          categoryName: "Snacks", 
          productName: "Peanuts",
          price: 2.99,
          images: [cartimg,cart],
          offerPrice: 2.49,
          itemCount: 220,
          rating: 4.2
        },
        {
          categoryName: "Snacks",
          productName: "Gummy Bears",
          price: 2.49,
          images: [cartimg,cart],
          offerPrice: 2.19,
          itemCount: 300,
          rating: 4.8
        },
        {
          categoryName: "Snacks",
          productName: "Fruit Snacks",
          price: 3.49,
          images: [cartimg,cart],
          offerPrice: 2.99,
          itemCount: 160,
          rating: 4.5
        }
    
    ,
    {
      categoryName: "Dairy",
      
        
          productName: "Milk",
          price: 1.49,
          images: [cartimg,cart],
          offerPrice: 1.29,
          itemCount: 250,
          rating: 4.6
        },
        {
          categoryName: "Dairy",
          productName: "Cheese",
          price: 4.99,
          images: [cartimg,cart],
          offerPrice: 4.49,
          itemCount: 100,
          rating: 4.8
        },
        {
          categoryName: "Dairy",
          productName: "Yogurt",
          price: 2.49,
          images: [cartimg,cart],
          offerPrice: 2.19,
          itemCount: 120,
          rating: 4.4
        },
        {
          categoryName: "Dairy",
          productName: "Butter",
          price: 3.49,
          images: [cartimg,cart],
          offerPrice: 3.29,
          itemCount: 80,
          rating: 4.7
        },
        {
          categoryName: "Dairy",
          productName: "Ice Cream",
          price: 5.99,
          images: [cartimg,cart],
          offerPrice: 4.99,
          itemCount: 60,
          rating: 4.9
        }
      
    ,
    {
      categoryName: "Beverages",
      
          productName: "Coffee",
          price: 4.99,
          images: [cartimg,cart],
          offerPrice: 4.49,
          itemCount: 80,
          rating: 4.6
        },
        {
          categoryName: "Beverages",
          productName: "Tea",
          price: 2.99,
          images: [cartimg,cart],
          offerPrice: 2.49,
          itemCount: 150,
          rating: 4.4
        },
        
      
       
      
    
  ];
  const [product, setproduct] = useState([])
  let dispatch = useDispatch()

  useEffect(()=>{
    async function viewAll() {
      try {
        let response = await axios.get("http://localhost:4000/product/viewAll")
        console.log((response.data.data));
        setproduct(response.data.data)
        
      } catch (error) {
        console.log(error);
        
      }
    }
  viewAll()
  },[])

  async function viewOne(event) {
    console.log(event);
    
    try {
      let request = await axios.get(`http://localhost:4000/product/view/${event}`)
      console.log(request.data.data);
      
      dispatch(myreducers.viewOnedata(request.data.data))

    } catch (error) {
      console.log(error);
      
    }
   
  }
  return (
    <>
      <div className='cart'>
        <div className='cart_img'>
          <p className='deal'>Day Of The <span> Deal</span></p>
          <p className='wait'>Don't wait. The time will never be just right.</p>
        </div>
        <div className='grid'>
        {
          product.map(function (data) {
            return(
            <div className='props'>
            <div className='propsimg'>
            <div className='i'>
            <img src={data.productimg1} className = 'img1'alt="" />
            <img src={data.productimg2}  className = 'img2'alt="" />
            <div className='cart_i'>
              <p><FaRegHeart className='ca'/></p>
                <Link to = '/pop'>
                <p><FiEye className='ca' onClick={()=>viewOne(data.id)}/></p>
                </Link>
                <p><GoGitCompare className='ca'/></p>
                <p><HiOutlineShoppingBag className='ca'/></p>
            </div>
            </div>
            <div className='detail'>
              <div className='star'>
                  <p>{data.categoryname}</p>
                <div className='star1'>
                <p><MdOutlineStarPurple500 /></p>
                <p><MdOutlineStarPurple500 /></p>
                <p><MdOutlineStarPurple500 /></p>
                <p><MdOutlineStarPurple500 /></p>
                <p><MdOutlineStarBorder /></p>
                </div>
              </div>
            
                 <p className='ch'>{data.productname}</p>
              <div className='price'>
              <div className='price1'>
                  <p>{data.offerprice}</p>
                  <p>{data.rating}</p>
              </div>
                  <p>{data.quantity}</p>
              </div>
              
            </div>
          </div>  
        </div>
            )
          })
        }
        </div>
        
      </div>
    </>
  )
}

export default Cart
