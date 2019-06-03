import axios from 'axios';
import {  PAGE_LOAD } from '../actions/actionConstants';

export const  getData = (URL, actionType )=>{
    return function (dispatch) {
        axios.get(URL)
            .then(res => {
                const renderData = res.data;
                dispatch({ type: actionType, data: renderData });
            });
    };
}

export const handlePageChange = (pageNumber) => {
    return {
        type: PAGE_LOAD,
        activePage: pageNumber
    };
}
