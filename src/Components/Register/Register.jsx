import React from 'react'
import "./Register.css"

const Register = () => {
  return (
    <>
    <div className='register'>
        <div className='reg'>
            <div className='reg_head'>
                <h1>Register</h1>
                <p>Best place to buy and sell digital product</p>
            </div>
            <div className='reg_in'>
            <div className='reg_input'>
                <h1>First Name*</h1>
                <input type="text" name="" id="" placeholder='Enter Your First Name'/>
            </div>
            <div className='reg_input'>
                <h1>Last Name*</h1>
                <input type="text" name="" id="" placeholder='Enter Your Last Name'/>
            </div>
            <div className='reg_input'>
                <h1>Email*</h1>
                <input type="text" name="" id="" placeholder='Enter Your Email'/>
            </div>
            <div className='reg_input'>
                <h1>Phone Number*</h1>
                <input type="text" name="" id="" placeholder='Enter Your Phone Number'/>
            </div>




            

            </div>
            <div className='reg_input1'>
                <h1>Address</h1>
                <input type="text" name="" id="" placeholder='Address Line 1'/>
            </div>
            <div className='reg_in'>
            <div className='reg_input'>
                <h1>City*</h1>
                <select name="" id="">
                    <option value="">City 1</option>
                    <option value="">City 2</option>
                    <option value="">City 3</option>
                    <option value="">City 4</option>
                </select>
            </div>
            <div className='reg_input'>
                <h1>Post Code*</h1>
                <input type="text" name="" id="" placeholder='Enter Your First Name'/>
            </div>
            <div className='reg_input'>
                <h1>Country*</h1>
                <select name="" id="">
                    <option value="">Country 1</option>
                    <option value="">Country 2</option>
                    <option value="">Country 3</option>
                    <option value="">Country 4</option>
                </select>
            </div>
            <div className='reg_input'>
                <h1>Region State*</h1>
                <select name="" id="">
                    <option value="">Region/Slate 1</option>
                    <option value="">Region/Slate 2</option>
                    <option value="">Region/Slate 3</option>
                    <option value="">Region/Slate 4</option>
                </select>
            </div>
           </div>
            <div className='reg_btn'>
                <button className='reg_btn1'>Register</button>
            </div>
            
        </div>

    </div>
    </>
  )
}

export default Register


