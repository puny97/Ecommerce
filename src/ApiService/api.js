import axios from "axios";

const BASE_URL = 'https://fakestoreapi.com';

export const getAllProducts = async () => {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
}

export const getProductDetail = async (id) => {
    const response = await axios.get(`${BASE_URL}/products/${id}`);
    return response.data;
}

export const getAllCategories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
    ]

export const fetchProductsByCategory = async (category) => {
    const response = await axios.get(`${BASE_URL}/products/category/${category}`);
    return response.data;
}

