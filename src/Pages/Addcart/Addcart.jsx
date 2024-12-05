import React from "react";
import "./Addcart.css";
import groundnuts from "../../Assets/groundnuts.jpg";
import juice from "../../Assets/juicepack.jpg";
import banana from "../../Assets/banana.jpg";
import spicepark from "../../Assets/spice park.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Addcart = () => {
  return (
    <>
      <div className="addcart">
        <div className="addcart_head">
          <div className="addcart_right">
            <div className="right_head">
              <h1>My Cart</h1>
              <div className="addcart_product">
                <img src={groundnuts} alt="" />
                <div className="addcart_content">
                  <p>Ground Nuts and Oil Pack</p>
                  <p>
                    $15 x <span>500 g</span>
                  </p>
                  <button>- 1 +</button>
                </div>
              </div>
              <div className="addcart_product">
                <img src={juice} alt="" />
                <div className="addcart_content">
                  <p>Organic Litchi Juice Park</p>
                  <p>
                    $25 x <span>500 ml</span>
                  </p>
                  <button>- 1 +</button>
                </div>
              </div>
              <div className="addcart_product">
                <img src={banana} alt="" />
                <div className="addcart_content">
                  <p>Crunchy Banana Chips</p>
                  <p>
                    $1 x <span>500 g</span>
                  </p>
                  <button>- 1 +</button>
                </div>
              </div>
              <div className="addcart_product">
                <img src={spicepark} alt="" />
                <div className="addcart_content">
                  <p>Small Cardamom Spice Park</p>
                  <p>
                    $4 x <span>500 g</span>
                  </p>
                  <button>- 1 +</button>
                </div>
              </div>
            </div>
          </div>
          <div className="addcart_left">
            <div className="addcart_swiper">
              <Swiper
                spaceBetween={30}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                pagination={false}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src={groundnuts} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={banana} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={juice} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={spicepark} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={groundnuts} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={banana} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={juice} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={spicepark} alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="addcart_checkout">
              <div className="subtotal">
                <p>Sub-Total:</p>
                <p>$300.00</p>
              </div>
              <div className="subtotal">
                <p>VAT(20%):</p>
                <p>$60.00</p>
              </div>
              <div className="subtotal">
                <p>Total:</p>
                <p>$360.00</p>
              </div>
              <div className="subtotal1">
                <button>View Cart</button>
                <button>Check Out</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addcart;
