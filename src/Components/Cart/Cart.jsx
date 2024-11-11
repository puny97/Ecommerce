import React from 'react'
import { useCart } from '../../Context/CartContex'
import './Cart.css'

const Cart = () => {
  const {cartItems, increaseQuantity, decreaseQuantity} = useCart();
  console.log(cartItems);
  
  return (
    <div className='cart-container'>
      <h2>Items in your cart</h2>
      <div className='cart-items-container'>
        <div className='cart-item-container cart-header'>
            <div className='cart-item'> Item </div>
            <div className='item-price'> Price </div>
            <div className='quantity'> Quantity </div>
            <div className='total'> Total </div>
        </div>
          {
            cartItems.map((item)=> {
              return (
                <div className='cart-item-container' key={item.id}>
                  <div className='cart-item'>
                    <img src={item.image} alt={item.title} />
                    <div>
                    <h3>{item.title}</h3>
                    <p>{item.rating.rate} ★ ★ ★ ★</p>
                    </div>
                  </div>
                  <div className='item-price'> ${item.price} </div>
                  <div className='item-quantity'>
                    <button onClick= {()=> decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick= {()=> increaseQuantity(item.id)}>+</button>
                  </div>
                  <div className='item-total'>
                    {item.quantity * item.price}
                  </div>
                </div>
              )
            })
          }
          <div className='cart-header cart-item-container'>
            <div></div>
            <div></div>
            <div></div>
              <div className='total'> 
                  $
                  {
                    cartItems.reduce(
                      (accumulator, currentItem) => 
                        accumulator + currentItem.quantity * currentItem.price, 0
                    )}
              </div>
          </div>
      </div>
    </div>
  )
}

export default Cart