import React from 'react';
import ImgAbout from "../images/aboutpic.png";

const About = () => {
    const[state]=React.useState({
        subHeader:"About me",
        text:"I am here for you."

    });
    const[bioData]=React.useState([
        {id:1, title:"Name:",text:"Shadab Khan"},
        {id:2, title:"Email:",text:"Shadabashrafi8417@gmail.com"},
        {id:3, title:"Phone:",text:"7683064334"},
        {id:4, title:"Linkdin:",text:"Shadabkhan"},
    ])
    return (
        <div className="about">
            <div className="container">
            <div className="common">
                    <h1 className="mainheader">
                        {state.subHeader}
                    </h1>
                    <p className="mainContent">{state.text}</p>
                    <div className="commonBorder"></div>
                    </div>
                    <div className="row h-650 alignCenter">
                        <div className="col-6">
<div className="about_img">
    <img src={ImgAbout} alt="aboutpic"/>
</div>
                        </div>
                        <div className="col-6">
<div className="about_info">
    <h1>Hi There</h1>
    <div className="about_info-p1">
    Shadab is a personal portfolio website template for software developers. 
    The template features ten different home page styles, while the default demo content fits designers. 
    </div>
    <div className="about_info-p2">
    However, the home page consists of essential sections, including a bio, blog, 
    portfolio, resume, and contact form
    </div>
    <div className="info_contacts">
        <div className="row">
        {bioData.map(info=>(
           <div className="col-6">
           <strong>{info.title}</strong>
           <p>{info.text}</p>
       </div>
       ))}
        </div>
    </div>
</div>
                        </div>
                    </div>
                    </div>
        </div>
    )
}

export default About
