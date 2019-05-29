import axios from 'axios'
import { PRODUCT_LOAD, PAGE_LOAD } from '../actions/actionConstants'

export const getProduct = (name) => {
    return function (dispatch) {
        axios.get('/res/products.json')
            .then(res => {
                const products = res.data;
                dispatch({ type: PRODUCT_LOAD, data: products });
            });
    };
}

export const handlePageChange = (pageNumber) => {
    return {
        type: PAGE_LOAD,
        activePage: pageNumber
    };
}
