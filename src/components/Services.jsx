import React from 'react'
import {FaGithub,FaCamera,FaBullseye,FaApple,FaSearchengin,FaFileVideo} from "react-icons/fa";
const Services = () => {
    const[header]=React.useState({
        mainHeader:"SERVICES",
        subHeading:"My services",
        text:"this the main content of the services."
    });
    const [state]=React.useState([
        {
            id:1,
     icon:<FaGithub/>,
     heading:'Web Development',
    text:'I can make any type of website with the help of React js and HTML,CSS. JAVASCRIPT'
},
{
    id:2,
icon:<FaCamera/>,
heading:'Photography',
text:'I can make any type of website with the help of React js and HTML,CSS. JAVASCRIPT'
},
{
    id:3,
icon:<FaBullseye/>,
heading:'Web Design',
text:'I can make any type of website with the help of React js and HTML,CSS. JAVASCRIPT'
},
{
    id:4,
icon:<FaApple/>,
heading:'App Development',
text:'I can make any type of website with the help of React js and HTML,CSS. JAVASCRIPT'
},
{
    id:5,
icon:<FaSearchengin/>,
heading:'SEO',
text:'I can make any type of website with the help of React js and HTML,CSS. JAVASCRIPT'
},
{
    id:6,
icon:<FaFileVideo/>,
heading:'Vide Editing',
text:'I can make any type of website with the help of React js and HTML,CSS. JAVASCRIPT'
},
    ])
    return (
        <div className="services">
            <div className="container">
                <div className="services_header">
                   
                    <div className="common">
                    <h3 className="heading">{header.mainHeader}</h3>
                    <h1 className="mainheader">
                        {header.subHeading}
                    </h1>
                    <p className="mainContent">{header.text}</p>
                    <div className="commonBorder"></div>
                    </div>
                 <div className="row">
                     {state.map(info=>(
 <div className="col-4">
 <div className="services_box">
 <button style={{ color: '#ff4a57',fontSize: "40px",marginBottom: "15px"}}> {info.icon}</button>

 {/* font-size: 40px;
  color: '#ff4a57';
  margin-bottom: 15px; */}
{/* <FaGithub className="commonIcons"/> */}
<div className="services_box-header">
    {info.heading}
</div>
<div className="services_box-p">
   {info.text}
</div>
 </div>
</div>

                     ))}
                    
                  
                 </div>
                </div>
            </div>
            
        </div>
    );
};

export default Services
