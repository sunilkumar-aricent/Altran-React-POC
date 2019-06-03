import * as actionTypes from '../actions/actionConstants'

const initialState = {
    carouselProducts: []
}

const carouselProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CAROUSEL_PRODUCTS_LOAD: return {
            ...state,
            carouselProducts: action.data
        }
       default :  return state;
    }
} 

export default carouselProductReducer   