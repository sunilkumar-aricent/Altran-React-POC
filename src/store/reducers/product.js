import * as actionTypes from '../actions/actionConstants'
import { INITIAL_PAGE } from '../../constants/constants'

const initialState = {
    products: [],
    activePage : INITIAL_PAGE
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PRODUCT_LOAD: return {
            ...state,
            products: action.state.data
        }
        case actionTypes.PAGE_LOAD: return {
            ...state,
            activePage: action.activePage
        }
      default :  return state;
    }
} 
export default productReducer   