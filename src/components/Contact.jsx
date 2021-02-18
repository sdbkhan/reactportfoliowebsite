import React from 'react'
import Img from "../images/logo.png";
import {FaFacebookF,FaTwitter,FaPinterest,FaInstagram} from "react-icons/fa"
const Contact = () => {

    return (
        <div className="Contact">
            <div className="container">
          <div className="contactSection">
              
                  <div className="row justifyCenter">
                      <div className="col-6">
                      <div className="contactSection-logo">
                  <img src={Img} alt="imgabout"/>
                  </div>
                    <p>  Building a website is, in many ways, an exercise of willpower. 
                      It’s tempting to get distracted by the bells and whistles of the 
                      design process, and forget all about creating compelling content
                      </p>
                      <div className="contactCircle">
                          <ul>
                          <li><FaFacebookF/></li>
                          <li><FaPinterest/></li>
                           <li><FaTwitter/></li>
                           <li><FaInstagram/></li>
                          </ul>
                      </div>
                      </div>
                  </div>
              
          </div>
            </div>
            
        </div>
    )
}

export default Contact
