import React, { Component } from 'react'
import './ProductTile.css'
import axios from 'axios';

class ProductTile extends Component {
    state = {
        products: []
    }

    componentWillMount() {
        axios.get('/res/products.json')
            .then(res => {
                const products = res.data;
                console.log(products)
                this.setState({ products });
            })
    }

    // productsRender (products) {
    //     return ({products.map((product) => <div className="product">
    //         <a href="#">
    //             <img src={product.ImgUrl} width="100" height="100" /></a>
    //         <div className="product-description">
    //             Product Name : {product.Name}
    //             <br />Brand : {product.Brand}
    //             <br />Price : {product.Price}
    //         </div>)})
    //     }

    render() {
        const productRender = this.state.products.map(product => <div className="product"><a href="#">
                <img src={product.ImgUrl} width="100" height="100" /></a>
            <div className="product-description">
                Product Name : {product.Name}
                <br />Brand : {product.Brand}
                <br />Price : {product.Price}
            </div></div>);
        return (<div className="ProductTileController">
       {productRender}
                </div>
            )}
      
        }


    export default ProductTile