import React from 'react'
import './contact.css'
import { FaRegUser } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

const contact = () => {
  return (
    <section id='contact'>
      <div className="container contact__container">
        <h1 className='center'>Contact Me</h1>
        <h2>Get in Touch</h2>
        <p>so if you have any vacancy contact me by using below email_id.</p>
      </div>

      <div className=" container contact_icon ">
        <div className='contact_icon-1 '><FaRegUser /></div>
        <div className="contact_icon-2">
          <p>Name </p>
          <small>Rohit Gound</small>
        </div>
      </div>

      <div className=" container contact_icon ">
        <div className='contact_icon-1'><HiOutlineMail /></div>
        <div className="contact_icon-2">
          <p>Email </p>
          <small>rohit87799@gmail.com</small>
        </div>
      </div>
    </section>
  )
}

export default contact
