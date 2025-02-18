import React from 'react'
import './Slider.css'


const Slider2 = ({image, titel,key, onclick}) => {
  return (
    <div key={key} onClick={onclick} className='slidercard'>
        <div className="sliderimg">
        <img src={image} alt="" />

        </div>
        <h2>{titel}</h2>
    </div>
  )
}

export default Slider2