import React from 'react';
import {Link} from "react-router-dom";
import Img from "../images/logo.png";


const Nav = () => {
    const[state, setstate]=React.useState(true);
    return (
       <nav className="navbar">
           <div className="container">
               <div className="navbar_container">
               <ul className="navbar_left">
                   <div className="navbar_left-logo">
                       <img src={Img} alt ="logo"/>
                   </div>
               </ul>
               {state? <ul className="navbar_right">
               <li><Link exact to="/" activeClassName="active" style={{color:'#fff',textDecoration: 'none' }}>Visit</Link></li>
                   <li><Link to="/home"  activeClassName="activeRoute" style={{color:'#fff',textDecoration: 'none' }}>Home</Link></li>
                   <li><Link to="/services" style={{color:'#fff',textDecoration: 'none' }}>Services</Link></li>
                   <li><Link to="/about" style={{color:'#fff',textDecoration: 'none' }}>About</Link></li>
                   <li><Link to="/prices" style={{color:'#fff' ,textDecoration: 'none'}}>Prices</Link></li>
                   <li><Link to="/contact" style={{color:'#fff',textDecoration: 'none' }}>Contact</Link></li>
               </ul>:""

               }
              
               </div>
              
           </div>
<div className="toggle" onClick={()=>setstate(!state)}>
    <i class="fa fa-align-justify fa-6x"></i>
    </div>
       </nav>
    )
}

export default Nav
