import React from 'react'
import "./Login.css"


const Login = () => {
  return (
    <>
      <div className='login'>
        <div className='login_form'>
        <div className='login_head'>
            <h1>Log <span>In</span></h1>
            <p>Best place to buy and sell digital products</p>
        </div>
        <div className='input_data'>
        <div className='input'>
            <h1>Email *</h1>
            <input type="text" placeholder='Enter Your Email ' />
            <h1>Password *</h1>
            <input type="text"  placeholder='Enter Your Password'/>
            <p>Forget Password ?</p>
        </div>
        <div className='button'>
            <button className='log_btn'>Login</button>
            <p>Register</p>
        </div>
        
        </div>

        </div>

      </div>
    </>
  )
}

export default Login
