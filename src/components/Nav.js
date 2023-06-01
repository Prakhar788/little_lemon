import React from 'react'
import logo from '../assets/icons_assets/Logo.svg'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <nav>
        <ul>
            <li><a href='#header'><img src={logo} alt="logo"/></a></li>
            <li><a href='#Home'>Home</a></li>
            <li><a href='#About'>About</a></li>
            <li><a href='#Menu'>Menu</a></li>
            <li><a href='#Reservations'>Reservations</a></li>
            <li><a href='#Order_Online'>Order</a></li>
            <li><a href='#login'>Login</a></li>

        </ul>
       
    </nav>
    </>
  )
}

export default Nav