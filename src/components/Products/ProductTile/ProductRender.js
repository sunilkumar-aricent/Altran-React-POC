import React, { Component } from 'react'

function ProductRender(props) {
    return props.products.map(product => <div className="product"><a href="#">
        <img src={product.ImgUrl} width="100" height="100" /></a>
        <div className="product-description">
            Product Name : {product.Name}
            <br />Brand : {product.Brand}
            <br />Price : {product.Price}
        </div></div>);
}

export default ProductRender