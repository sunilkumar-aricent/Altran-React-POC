import * as actionTypes from '../actions/actionConstants'

const initialState = {
    products: []
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PRODUCT_LOAD: return {
            ...state,
            products: action.state.data
        }
       default :  return state;
    }
} 

export default productReducer   