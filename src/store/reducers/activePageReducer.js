import * as actionTypes from '../actions/actionConstants'
import { INITIAL_PAGE } from '../../constants/constants'

const initialState = {
    activePage : INITIAL_PAGE
}

const activePageReducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.PAGE_LOAD: return {
            ...state,
            activePage: action.activePage
        }
      default :  return state;
    }
} 
export default activePageReducer   