import React from 'react'
import food from "../assets/icons_assets/restauranfood.jpg"

const Header = () => {
  return (
    <section id='header'>
      <div className='header_text'>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
    We are a family owned Mediterranean restaurant,focused on traditional recipes served with a modern twist.
        </p>
        <div className='button'>
        <a href="#Reservations"><button >Reserve a Table</button></a>
        </div>
      </div>
      <div className='HomePage_Image'>
    <img src={food} alt='HomePage_Image'></img>
      </div>
    </section>
  )
}

export default Header