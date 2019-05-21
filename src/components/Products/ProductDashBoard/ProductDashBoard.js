import React, { Component } from 'react'
import './ProductDashBoard.scss'
import ProductTile from '../ProductTile/ProductTile';

class ProductDashBoard extends Component {

    render() {
        return (<div className="main-container">
            <header>

            </header>
            <ProductTile customClass="product-tile-container"/>
            <footer>
            </footer>
        </div>);
    }
}

export default ProductDashBoard