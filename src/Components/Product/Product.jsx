import React from "react";
import "./Product.css";
import Cart from "../Cart/Cart";
import { CgCheck } from "react-icons/cg";

const Product = () => {
  return (
    <>
      <div className="product">
        <div className="product_left">
          <div className="product_search">
            <div className="sea">
              <h1>Search</h1>
              <input type="text" placeholder="Search By Name or Category" />
            </div>
            <div className="range">
              <h1>Select Amount</h1>
              <input type="range" name="" id="" />
              <div className="value">
                <h2>100</h2>
                <h2>10000</h2>
              </div>
            </div>
            <div className="product_cat">
              <h2>Search Category</h2>
              <div className="pro_category">
                <span>
                  <input type="checkbox" name="" id="" />
                  <h1>Clothes</h1>
                </span>
                <span>
                  <input type="checkbox" name="" id="" />
                  <h1>Bags</h1>
                </span>
                <span>
                  <input type="checkbox" name="" id="" />
                  <h1>Shoes</h1>
                </span>
                <span>
                  <input type="checkbox" name="" id="" />
                  <h1>Cosmetics</h1>
                </span>
                <span>
                  <input type="checkbox" name="" id="" />
                  <h1>Electrics</h1>
                </span>
                <span>
                  <input type="checkbox" name="" id="" />
                  <h1>Phone</h1>
                </span>
                <span>
                  <input type="checkbox" name="" id="" />
                  <h1>Watch</h1>
                </span>
              </div>
            </div>
            <div className="product_btn">
              <button className="refresh_btn">Refresh</button>
              <button className="back_btn">Back</button>
            </div>
          </div>
          <div className="product_right">
            <Cart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
