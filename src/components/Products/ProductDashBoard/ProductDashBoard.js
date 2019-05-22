import React, { Component } from 'react'
import './ProductDashBoard.scss'
import ProductTile from '../ProductTile/ProductTile';
import axios from 'axios'

class ProductDashBoard extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
    }

    componentWillMount() {
        axios.get('/res/products.json')
            .then(res => {
                const products = res.data;
                console.log(products)
                this.setState({ products });
            })
    }

    render() {
        return (<div className="main-container">
            <header>

            </header>
            <ProductTile products={this.state.products} customClass="product-tile-container" />
            <footer>
            </footer>
        </div>);
    }
}

export default ProductDashBoard