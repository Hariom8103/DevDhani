import React from 'react'
import './SearchBar.css'

export const SearchBar = ({setqueary}) => {
  
  return (
    <>
        <div className="search-container">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input onChange={ (e)=>setqueary(e.target.value)} type="text" placeholder="Search for a country..."/>
        </div>
    </>
  )
}
