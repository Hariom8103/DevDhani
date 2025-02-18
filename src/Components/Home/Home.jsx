import React from 'react'
import './Home.css'
import bg from '../../assets/image/namste.png'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>      
      <header className='header2'>
        <div className="homeLeft">
          <h4 className='homeh4'>Welcome to ...</h4>
          <h2 className='homeh2'>होटल</h2>
         <h1 className='homeh1'>देव ढाणी</h1>
         <NavLink to='menu'>
         <button className='Exploremenu'>
          Explore Menu
          </button>
          </NavLink>
        </div>
        <div className="imgcontain">
        <img width={205} src={bg} alt="" />
        </div>
      </header>
         <main className="main">
        <div className="left">
          <h2 className='firsth2'>Are You Hungry ?</h2>
          <h1>Don't Wait !</h1>
        <div className="ex">
        <h2>Experience the Taste of Perfection</h2>
        <p>Fresh Ingredients, Authentic Flavors, Memorable Dining</p>
        </div>
        </div>
        <div className="right">
        </div>
      </main>
      </>
  )
}

export default Home