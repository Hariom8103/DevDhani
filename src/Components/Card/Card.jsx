import React from 'react'
import './Card.css'


const Card = ({titel, img, price, i}) => {
  return (
    <div key={i} className="menu-item">
        <img src={img} alt="Paneer Tikka"/>
        <div className="titelpricecontain">
            <h3 className="title">{titel}</h3>
            <span className="price">₹{price}</span>
        </div>
        <div className="description">Grilled cottage cheese with spices</div>
        
      </div>
  )
}

export default Card