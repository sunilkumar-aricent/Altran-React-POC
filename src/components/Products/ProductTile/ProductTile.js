import React from 'react'
import './productTile.scss'

function productTile(props) {
    let ProductRender = (products) => {
        return products.map(product => <div className="product"><a href="#">
            <img src={product.ImgUrl} alt="" width="100" height="100" /></a>
            <div className="product-description">
                Name : {product.Name}
                <br />Brand : {product.Brand}
                <br />Price : {product.Price}
            </div></div>);
    }

    return (<div className={props.customClass}>
        {ProductRender(props.products)}
    </div>)

}

export default productTile