import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>© Ecommerce Store {new Date().getFullYear()}</div>
  )
}

export default Footer;