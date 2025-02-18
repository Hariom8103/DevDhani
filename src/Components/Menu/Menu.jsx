import React, { useRef, useState } from 'react'
import './Menu.css'
import Card from '../Card/Card'
import DaalCardData from '../CardData/DaalCardData'
import Rotis from '../CardData/RotiData'
import SliderData from '../Slider/SliderData'
import Slider2 from '../Slider/Slider'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Menu = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768, // Jab screen width 768px se kam ho jaye
        settings: {
          slidesToShow: 2, // Mobile view me 2 items dikhenge
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Jab screen width 480px se kam ho jaye
        settings: {
          slidesToShow: 2, // Chhoti screen pe 1 item dikhana hai
          slidesToScroll: 2,
        },
      },
    ],
  };
  const cardRef = useRef()
  const cardRef2 = useRef()
  
  return (
    <div className="body">
    <div className="menuheader">
      <h1>Our Menu</h1>
      <div className="menudiscription">
      <span>Dev Dhani Restaurant offers an authentic and delicious menu with rich Rajasthani flavors. 
      Their dishes, like Dal Baati Churma and Gatte Ki Sabzi, are made with traditional ingredients 
      for an unforgettable taste. The variety, quality, and cultural essence make their menu special</span>
      </div>
    </div>
    <div className="slidebody">
      <div className="SliderContainer">
      <Slider className='my-slider' {...settings}>
        {SliderData.map((item,i)=>
        <Slider2  key={item.id} titel={item.titel} image={item.image}/>
        )}
        </Slider>
      </div>
      </div>
      <div className="bigContainer">
    <div ref={cardRef} className="CardDataContainer">
     {DaalCardData
     .map((item)=>{
      return (
        <Card
         key = {item.title}
         titel={item.title}
         img= {item.image}
         price = {item.price}
         star = {item.star}
         />
      )
     })}
     {Rotis
     .map((item)=>{
      return (
        <Card
         key = {item.title}
         titel={item.title}
         img= {item.image}
         price = {item.price}
         star = {item.star}
         />
      )
     })}
    </div>
    </div>
    </div>
  )
}

export default Menu