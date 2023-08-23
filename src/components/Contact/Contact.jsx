import React, { useContext, useRef, useState } from 'react'
import "./Contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context'

const Contact = () => {
 const formRef=useRef()
 const [done,setDone]=useState(false)
 const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
 const handleSubmit=(e)=>{
  e.preventDefault()
  emailjs.sendForm('service_ys8j6zk', 'template_agegy3e', formRef.current, 'yLh3kCxd61ZGJMt7o')
  .then((result) => {
      console.log(result.text);
      setDone(true)
  }, (error) => {
      console.log(error.text);
  });
 }
  return (
    <div className="c">
      <div className="c-bg">
        <div className="c-wrapper">
          <div className="c-left">
            <h1 className="c-title">Contact Info</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />8519316659
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />adarshgop02@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />Private
            </div>
          </div>
          </div>
          <div className="c-right">
          <form ref={formRef} onSubmit={handleSubmit}>
          <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Sent Successfully!"}
          </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact