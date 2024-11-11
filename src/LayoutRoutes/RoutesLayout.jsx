import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../Components/Header/Header'
import Home from '../Components/Home/Home'
import ProductDetails from '../Components/ProductDetails/ProductDetails'
import Footer from '../Components/Footer/Footer'
import Cart from '../Components/Cart/Cart'

const RoutesLayout = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes> 
        <Route path='/' element = {<Home/>}/>
        <Route path='/cart' element = {<Cart/>}/>
        <Route path='/product/:id' element = {<ProductDetails/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default RoutesLayout