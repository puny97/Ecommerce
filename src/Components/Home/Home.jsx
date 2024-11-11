import React, { useEffect, useState } from 'react'
import { getAllProducts, getAllCategories, fetchProductsByCategory } from '../../ApiService/api';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSort, setSelectedSort] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(products);

    const categories = getAllCategories;
    console.log(products);
    
    useEffect(() => {
        const fetchProducts = async ()=> {
            const data = await getAllProducts();
            setProducts(data);
        }
        fetchProducts();
    },[])

    useEffect(() => {
        const productsByCategory = async (selectedCategory)=> {
            const data = await fetchProductsByCategory(selectedCategory);
            setFilteredProducts(data);
        }
        productsByCategory(selectedCategory);
    },[selectedCategory])

    const handleCategoryChange = (event) => {
        const category = event.target.value;
        setSelectedCategory(category);
    }

    const handleSortChange = (event) => {
        const sortCriterion = event.target.value;
        setSelectedSort(sortCriterion);
        if(filteredProducts){
            setFilteredProducts(filteredProducts.sort((a,b) => sortCriterion === 'asc' ? a.price - b.price : b.price - a.price))
        } else {
            setProducts(products.sort((a,b) => sortCriterion === 'asc' ? a.price - b.price : b.price - a.price));
        }
    }
  return (
    <>
    <div className='sort-filter-container'>
        <div className='filter'>
            <label htmlFor='filterDropdown'> Filter by Category: </label>
            <select id='filterDropdown' value={selectedCategory} onChange={handleCategoryChange}>
                <option value={categories[0]}>{categories[0]}</option>
                <option value={categories[1]}>{categories[1]}</option>
                <option value={categories[2]}>{categories[2]}</option>
                <option value={categories[3]}>{categories[3]}</option>
            </select>
        </div>
        <div className='sort'>
            <label htmlFor='sortDropdown'> Sort By:</label> 
            <select id='sortDropdown' value={selectedSort} onChange={handleSortChange}>
                <option value='asc'>Ascending</option>
                <option value='desc'>Descending</option>
            </select>
        </div>
    </div>
    <div className='product-grid'> 
        { (filteredProducts ? filteredProducts : products)
            .map((product)=> {
                return (
                    <div className='product' key={product.id}>
                        <img src= {product.image} alt="alternative" />
                        <h2>{product.title}</h2>
                        <p>
                            <span className='price'> ${product.price}</span>
                        </p>
                        <Link to={`/product/${product.id}`}>
                            <button>Product Details</button>
                        </Link>
                        </div>
                )
            })
        }
    </div>
        </>
  )
}

export default Home