import React from 'react';
import Card from 'react-bootstrap/Card'

function ProductDetailsRender (props) {
console.log(props.productDetails.Name)
return (
   <div className="product-details">
     <Card>
  <Card.Header as="h5">Featured</Card.Header>
  <Card.Body>
    <Card.Title> <img variant="top" height="80" src={props.productDetails.ImgUrl} alt={props.productDetails.Name} /></Card.Title>
    <Card.Text>
    {`Brand : ${props.productDetails.Brand}`}
                        <br />{`Price :`} <span>&#8377;</span> {props.productDetails.Price}
    </Card.Text>
    </Card.Body>
</Card>
      {/* <Card className="text-center" bg="light">
      <Card.Img variant="top" height="80" src={props.productDetails.ImgUrl} />
            <Card.Body >
                    <Card.Title>{`Name : ${props.productDetails.Name}`}</Card.Title>
                    <Card.Text>
                        {`Brand : ${props.productDetails.Brand}`}
                        <br />{`Price :`} <span>&#8377;</span> {props.productDetails.Price}
                    </Card.Text>
                </Card.Body>
            </Card> */}
</div>
)

}


export default ProductDetailsRender