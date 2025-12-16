const BASE_URL = 'https://paw-hut.b.goit.study';
const ENDPOINTS = {
    CATEGORIES: '/api/categories',
    PRODUCTS: '/api/animals',
    BY_CATEGORY: '/api/animals',

};

import axios from "axios";

axios.defaults.baseURL = BASE_URL;

export const fetchCategories = async () => {
    const { data } = await axios(`${ENDPOINTS.CATEGORIES}`);
    return data;
};

const currentPage = 1;

export const fetchAllProducts = async (page, limit) => {
    const { data } = await axios(`${ENDPOINTS.PRODUCTS}`, {
        params: {
            limit,
            page,
        },
    });
    
    return data;
};

export const fetchProductsByCategory = async (
    categoryId,
    limit = 9,
    page = 1,
    
) => {
    
const { data } = await axios(`${ENDPOINTS.PRODUCTS}`, {
    params: {
        categoryId,
        page,
        limit,
    }
});
    return data;
};