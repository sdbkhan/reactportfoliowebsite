import React from "react";
import {Switch, Route, Redirect} from "react-router-dom"
import './App.css';
import Banner from "./components/Banner"
import Nav from "./components/Nav";
import Services from "./components/Services";
import About from "./components/About";
import Prices from "./components/Prices"
import Contact from "./components/Contact";
import Main from "./Main";
function App() {
  return (
    <>
      <Nav/>
  
    
    <Switch>
    
         <Route exact path="/" component={Main}/>
         <Route exact path="/home" component={Banner}/>
         <Route exact path="/services" component={Services}/>
         <Route exact path="/about" component={About}/>
         <Route exact path="/portfolio" component={Banner}/>
         <Route exact path="/prices" component={Prices}/>
         <Route exact path="/contact"component={Contact}/>
    </Switch>
    </>
  );
}

export default App;
