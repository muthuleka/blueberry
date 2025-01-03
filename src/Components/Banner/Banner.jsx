import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "./Banner.css";
import { Navigation } from "swiper/modules";
import banner from "../../Assets/banner.png";
import swiper2 from "../../Assets/swiper 2.png";
import swiper3 from "../../Assets/swiper3.png";
import { Pagination, Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className="ban_img1">
            <div className="ban_hole">
              <div className="ban_con1">
                <p className="offer">Flat 30% offer</p>
                <p className="fruit">
                  Explore <span>Healthy</span>
                </p>
                <p className="fresh">& Fresh Fruits</p>
                <button>Shop Now</button>
              </div>
              <div className="ban_img">
                <img src={banner} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="ban_hole">
              <div className="ban_con1">
                <p className="fruit">
                  Fresh <span>Fruits</span>
                </p>
                <p className="fresh">& Vegetables</p>
                <p className="healthy">A healthy meal for every one</p>
                <button>Shop Now</button>
              </div>
              <div className="ban_img">
                <img src={swiper2} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="ban_hole">
              <div className="ban_con1">
                <p className="fruit">
                  Tasty <span>Snack</span>
                </p>
                <p className="fresh">& Fast food</p>
                <p className="healthy">The flavour of something special</p>
                <button>Shop Now</button>
              </div>
              <div className="ban_img">
                <img src={swiper3} alt="" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
