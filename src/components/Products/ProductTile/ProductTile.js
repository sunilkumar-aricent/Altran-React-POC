import React, { Component } from 'react'
import './ProductTile.scss'
import axios from 'axios';
import ProductRender from './ProductRender';

class ProductTile extends Component {

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
        return (<div className={this.props.customClass}>
            <ProductRender products={this.state.products} />
        </div>)
    }
}

export default ProductTile