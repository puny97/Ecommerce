import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { useCart } from '../../Context/CartContex'

const Header = () => {
  const {cartCount} = useCart();
  return (
    <> 
    <nav className='header'>
        <Link to= '/' style={{textDecoration: 'none', color: '#fff'}}> 
        <h1>Ecommerce Store</h1>
        </Link>
        <Link to= '/cart'> 
        <button className='cart-button'>Cart</button>
        </Link>
        <span className='cart-value'> {cartCount} </span>
    </nav>
    </>
  )
}

export default Header