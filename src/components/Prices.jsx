import React from 'react'

const Prices = () => {
    const [header]=React.useState({
        mainHeader:"CHOOSE A PLAN",
        subHeading:"Pricing Plan",
        text:"The sample BRM pricing plans described in this chapter show a range of possibilities", 
       
    })
    const [pricesPlan]=React.useState([
        {
            id:1,
            heading:"Basic",
            price:50,
            msg1:"5GB Storage",
            msg2:"2GB Monthly Bandwidth",
            msg3:"My SQL Database",
            msg4:"100 Email Accounts",
            msg5:"10 Free Domain Names",
            rs:"Purchase",
        },
        {
            id:2,
            heading:"Standard",
            price:80,
            msg1:"10GB Storage",
            msg2:"5GB Monthly Bandwidth",
            msg3:"My SQL Database",
            msg4:"150 Email Accounts",
            msg5:"20 Free Domain Names",
            rs:"Purchase",
        },
        {
            id:3,
            heading:"Premium",
            price:160,
            msg1:"Unlimited Storage",
            msg2:"15 GB Monthly Bandwidth",
            msg3:"My SQL Database",
            msg4:"Unlimited Email Accounts",
            msg5:"50 Free Domain Names",
            rs:"Purchase",
        },
    ])
    return (
        <div className="prices">
           <div className="container">
           <div className="common">
                    <h3 className="heading">{header.mainHeader}</h3>
                    <h1 className="mainheader">
                        {header.subHeading}
                    </h1>
                    <p className="mainContent">{header.text}</p>
                    <div className="commonBorder"></div>
                    </div>
               <div className="row">
                {pricesPlan.map(prices=>(
                     <div className="col-4" key={prices.id}>
                     <div className="price">
                         <div className="priceHeading"> {prices.heading}</div>
                         <div className="price_rs">
                             <span>$</span>{prices.price}
                         </div>
                         <ul>
                             <li>{prices.msg1}</li>
                             <li>{prices.msg2}</li>
                             <li>{prices.msg3}</li>
                             <li>{prices.msg4}</li>
                             <li>{prices.msg5}</li>
                         </ul>
                         <div className="price_btn">
                             <a href="" className="btn btn-outline">{prices.rs}</a>
                         </div>
                     </div>
                 </div>  
                )) }
               </div>
               </div> 
        </div>
    )
}

export default Prices
