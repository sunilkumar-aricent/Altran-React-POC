import React, { Component } from 'react'
import './ProductDashBoard.css'
import ProductTile from '../ProductTile/ProductTile';

class ProductDashBoard extends Component {

    render() {
        return (<div className="MainController">
            <header>

            </header>
            <ProductTile />
            <footer>

            </footer>
        </div>);
    }
}

export default ProductDashBoard