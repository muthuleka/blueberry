import React from "react";
import "./Category.css";
import "swiper/css/navigation";
import category from "../../Assets/category.jpg";
import drinks from "../../Assets/drinks.svg";
import bakery from "../../Assets/bakery1.svg";
import veg from "../../Assets/veg1.svg";
import fruits from "../../Assets/fruits.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Category = () => {
  let cart = [
    {
      image: veg,
      title: "Cold Drinks",
      items: "465 items",
    },
    {
      image: bakery,
      title: "Bakery",
      items: "08 items",
    },
    {
      image: drinks,
      title: "Vegetables",
      items: "261 items",
    },
    {
      image: fruits,
      title: "Fruits",
      items: "485 items",
    },
    {
      image: veg,
      title: "Cold Drinks",
      items: "465 items",
    },
    {
      image: bakery,
      title: "Bakery",
      items: "08 items",
    },
    {
      image: drinks,
      title: "Vegetables",
      items: "261 items",
    },
    {
      image: fruits,
      title: "Fruits",
      items: "485 items",
    },
    {
      image: veg,
      title: "Cold Drinks",
      items: "465 items",
    },
    {
      image: bakery,
      title: "Bakery",
      items: "08 items",
    },
    {
      image: drinks,
      title: "Vegetables",
      items: "261 items",
    },
    {
      image: fruits,
      title: "Fruits",
      items: "485 items",
    },
  ];
  console.log(cart);

  return (
    <>
      <div className="category">
        <div className="cat_img">
          <div className="offer_img">
            <img src={category} alt="" />
          </div>

          <div className="cat_con">
            <h1>Explore</h1>
            <h1>Categories</h1>
            <div className="cart1">
              <div className="cart_map">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={30}
                  loop={true}
                  autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                  }}
                  modules={[Pagination, Autoplay]}
                  className="mySwiper"
                >
                  {cart.map(function (data) {
                    return (
                      <SwiperSlide>
                        <div className="map1">
                          <img src={data.image} alt="" />
                          <p className="drink">{data.title}</p>
                          <p className="item">{data.items}</p>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;