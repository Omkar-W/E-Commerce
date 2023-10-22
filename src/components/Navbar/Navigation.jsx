import React, { useState } from 'react'
import './navbar.css'
import logo from '../Images/logo.png'
import cart_icon from '../Images/cart_icon.png'
import { Link } from 'react-router-dom'
const Navigation = () => {

  const {menu,setMenu}=useState("shop");
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='' width={50} height={50}/>
        <p>Maya BHAI</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}><Link to='/'>Shop {menu=="shop"?<hr/>:<></>}</Link></li>
        <li onClick={()=>{setMenu("mens")}}><Link to='/'>Mens {menu=="mens"?<hr/>:<></>}</Link></li>
        <li onClick={()=>{setMenu("womens")}}><Link to='/womens'>Womens {menu=="womens"?<hr/>:<></>}</Link></li>
        <li onClick={()=>{setMenu("kids")}}><Link to='/kids'>Kids {menu=="kids"?<hr/>:<></>}</Link></li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} width={60} height={60}/></Link>
        <div className='nav-cart-count'>0</div>
      </div>
      </div>
  )
}

export default Navigation