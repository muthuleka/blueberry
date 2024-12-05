import React from 'react'
import "./Footer.css"
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineWhatsapp } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { TiSocialFacebook } from "react-icons/ti";
import { FiTwitter } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import logo from "../../Assets/logo.png"
import googleplay from "../../Assets/googleplay.png"
import apple from "../../Assets/apple.png"








const Footer = () => {
  return (
    <>
      <div className='foot'>
        <div className='foot-head'>
            <div className='berry'>
                <img src={logo} className = 'logo_img' alt="" />
                <p>BlueBerry is the biggest market of grocery products. Get your daily needs from our store.</p>
            <div className='foot_btn'>
            <div className='google'>
                <img src={googleplay} alt="" />
            </div>
            <div className='apple'>
                <img src={apple} alt="" />
            </div>
            </div>
            </div>
            <div className='cate'>
                <h1>Category</h1>
                <p>Dairy & Milk</p>
                <p>Snack & Spice</p>
                <p>Fast Food</p>
                <p>Juice & Drinks</p>
                <p>Bakery</p>
                <p>Seafood</p>
            </div>
            <div className='company'>
                <h1>Company</h1>
                <p>About Us</p>
                <p>Delivery</p>
                <p>Legal Notice</p>
                <p>Terms & conditions</p>
                <p>Secure payment</p>
                <p>Contact us</p>
            </div>
            <div className='account'>
                <h1>Account</h1>
                <p>SignIn</p>
                <p>View Cart</p>
                <p>Return Policy</p>
                <p>Become a Vendor</p>
                <p>Affiliate Program</p>
                <p>Payments</p>
            </div>
            <div className='contact'>
                <h1>Contact</h1>
                <p className='loc'> <IoLocationOutline className='loc_i'/>
                971 Lajamni, Motavarachha, Surat, Gujarat, Bharat 394101.</p>
                <p className='whats'><MdOutlineWhatsapp className='whats_i'/>
                +00 9876543210</p>
                <p className='mail'><MdOutlineMail className='mail_i'/>
                example@email.com</p>
                
            <div className='foot_icon'>
                <span><TiSocialFacebook  /></span>
                <span><FiTwitter/></span>
                <span><FaLinkedinIn /></span>
                <span><AiOutlineInstagram /></span>
            </div>
            </div>

        </div>

      </div>
    </>
  )
}

export default Footer
