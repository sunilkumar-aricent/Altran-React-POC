import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createStore , applyMiddleware , combineReducers} from 'redux'
import thunk from 'redux-thunk';
import productReducer from './store/reducers/productReducer'
import activePageReducer from './store/reducers/activePageReducer'
import carouselProductsReducer from './store/reducers/carouselProductsReducer'
import Root from './components/router/root'


const rootReducer = combineReducers({
    activePage : activePageReducer,
    products   : productReducer,
    carouselProducts : carouselProductsReducer
 
})

const store = createStore(rootReducer,applyMiddleware(thunk));



ReactDOM.render( <Root store={store}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
