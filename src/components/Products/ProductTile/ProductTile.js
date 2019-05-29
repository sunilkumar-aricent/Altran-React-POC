import React from 'react'
import './productTile.scss'

function ProductTile(props) {
    let productRender = (products) => {
        return products.map(product => <div className="product"><a href="#">
            <img src={product.ImgUrl} alt="" width="100" height="100" /></a>
            <div className="product-description">
                {`Name : ${product.Name}`}
                <br />{`Brand : ${product.Brand}`}
                <br />{`Price : ${product.Price}`}
            </div></div>);
    }

    return (<div className={props.customClass}>
        {productRender(props.products)}
    </div>)

}

export default ProductTile