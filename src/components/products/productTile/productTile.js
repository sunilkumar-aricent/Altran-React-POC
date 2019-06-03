import React from 'react'
import './productTile.scss'
import Card from 'react-bootstrap/Card'


function ProductTile(props) {
    let productRender = (products) => {
        return products.map(product =>
            <Card className="text-center" bg="light">
                <a href="#" >
                    <Card.Img variant="top" height="80" src={product.ImgUrl} />
                </a>
                <Card.Body >
                    <Card.Title>{`Name : ${product.Name}`}</Card.Title>
                    <Card.Text>
                        {`Brand : ${product.Brand}`}
                        <br />{`Price :`} <span>&#8377;</span> {product.Price}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }



    return (<div className={props.customClass}>
        {productRender(props.products)}
    </div>)

}

export default ProductTile