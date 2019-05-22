import React, { Component } from 'react'
import './ProductDashBoard.scss'
import ProductTile from '../ProductTile/ProductTile';
import SearchProducts from '../SearchProducts/SearchProducts'

class ProductDashBoard extends Component {

    render() {
        return (<div className="main-container">
            <header>

            </header>
            <SearchProducts />
            <ProductTile customClass="product-tile-container"/>
            <footer>
            </footer>
        </div>);
    }
}

export default ProductDashBoard