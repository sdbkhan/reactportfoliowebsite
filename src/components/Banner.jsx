import React from 'react'
import Img2 from "../images/men2.png";
import {FaFacebookF,FaTwitter,FaPinterest,FaInstagram,FaYoutube} from "react-icons/fa"
const Banner = () => {
    const [state]=React.useState({
title:"I am Shadab Khan",
text:"i'm Shadab khan, professional web devloper & freelancer with good experience.",

    });
    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-6">
<div className="header_content">
    <div className="header_section">
    <ul className="header_ul">
        <li><FaFacebookF/></li>
        <li><FaPinterest/></li>
        <li><FaTwitter/></li>
        <li><FaInstagram/></li>
    </ul>
    <h1>{state.title}</h1>
    <p>{state.text}</p>
    <div className="header_buttons">
        <a href="" className="btn btn-outline">My Portfolio</a>&nbsp;&nbsp;&nbsp;
        <a href="" className="btn btn-smart"><FaYoutube className="play"/></a>
    </div>
</div>
                    </div>
                    </div>
                    <div className="col-6">
<div className="banner_img">
    <img src={Img2} alt="menpic"/>
</div>
                    </div>
                </div>
            </div>
            
        </header>
    )
}

export default Banner
