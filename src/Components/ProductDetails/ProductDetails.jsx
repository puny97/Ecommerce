import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getProductDetail } from '../../ApiService/api';
import './ProductDetails.css';
import { useCart } from '../../Context/CartContex';

const ProductDetails = () => {
    const [productDetails, setProductDetails] = useState({});
    const {id} = useParams();
    const { addToCart } = useCart();

    useEffect(()=> {
        const fetchProductDetails = async () => {
            const data = await getProductDetail (id);
            setProductDetails(data);
        }

        fetchProductDetails();
    },[id])

    const handleCart = () => {
        addToCart(productDetails)
    }

  return (
    <div className='product-details-container'>
        <img src= {productDetails.image} alt='image' className='product-image'/>
        <div className='product-info'>
            <h2 className='product-title'> {productDetails.title} </h2>
            <p className='product-description'>
                {productDetails.description}
            </p>
            <p className='product-price'>
                ${productDetails.price}
            </p>
            <button className='cart' style={{textDecoration : 'none'}} onClick={handleCart}>Add to Cart</button>
            <Link to= '/'>
            <button className='go-back-home-button'>Go Back</button>
            </Link>
        </div>
    </div>
  )
}

export default ProductDetails