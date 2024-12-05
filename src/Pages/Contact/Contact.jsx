import React from 'react'
import "./Contact.css"
import Footer from '../../Components/Footer/Footer'

const Contact = () => {
  return (

    <>
    <div className='contact_touch'>
        <h1>Get In <span>Touch</span></h1>
        <p>Please select a topic below related to you inquiry. If you don't fint what you need, fill out our contact form.</p>

    </div>
      <div className='contact1'>
        
        <div className='contact_head'>
            <div className='contact_left'>
                <div className='contact_input'>
                <input type="text" placeholder='Enter Your First Name' />

                </div>
                <div className='contact_input'>
                <input type="text" placeholder='Enter Your Last Name' />

                </div>
                <div className='contact_input'>
                <input type="text" placeholder='Enter Your Email' />

                </div>
                <div className='contact_input'>
                <input type="text" placeholder='Enter Your Mobile Number' />

                </div>
                <div className='contact_text'>
                    <textarea name="" id="" placeholder='Please leave your comments here.....'></textarea>
                </div>
                <div className='contact_button'>
                    <button>Submit</button>
                </div>

            </div>
            <div className='contact_right'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.175519902064!2d77.01702147452013!3d11.025454354552057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85714a7923b81%3A0x3a8d075b0057c895!2sCode%20Purple%20academy%20%7C%20Full%20stack%20development%7C%20Data%20science%20%7C%20Video%20editing%20%7C%20Coding%20classes!5e0!3m2!1sen!2sin!4v1733404043275!5m2!1sen!2sin"  style={{width:"100%",height:"100%"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>

        </div>

      </div>
    </>
  )
}

export default Contact
