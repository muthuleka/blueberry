import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './Viewproduct.css';
import { useState } from 'react';
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import swiper1 from "../../Assets/category.jpg"
import { FaRegStar } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Viewproduct = () => {
const [thumbsSwiper, setThumbsSwiper] = useState(null);

    let selector = useSelector(function name(event) {
      return event.cartarray
    })
    console.log(selector);
    let navigate = useNavigate()

    function cart() {
      navigate("/Cart")
    }
    function home() {
      navigate("/")
    }


  return (
    <>
      <div className='popup_view'>
        {
          selector.map(function name(data) {
            return(
              <div className='popup_hole'>
        <div className='popup_left'>
        <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={data.productimg1} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={data.productimg2} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={data.productimg3} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={data.productimg4} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={data.productimg5} />
        </SwiperSlide>
       </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={data.productimg1} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={data.productimg2} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={data.productimg3} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={data.productimg4} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={data.productimg5} />
        </SwiperSlide>
        
       
      </Swiper>


        </div>
         <div className='popup_right'>
          <h3>{data.categoryname}</h3>
          <h3>{data.productname}</h3>
         <div className='star_i'>
          {/* <p>{data.rating}</p> */}
         <FaRegStar />
         <FaRegStar />
         <FaRegStar />
         <FaRegStar />
         </div>
         <p>{data.description}</p>
         <div className='rat'>
         <p>${data.price}</p>
         <p>${data.offerprice}</p>
         </div>
         <div className='gram'>
          <p>{data.quantity}kg/-</p>
         </div>
         <div className='back_btnn'>
          <p onClick={cart}>Add To Cart</p>
          <p onClick={home}>Back To home</p>
         </div>
         </div>
        </div>
            )
          })
        }
      </div>
 
    </>
  )
}

export default Viewproduct