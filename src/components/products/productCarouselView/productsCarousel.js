import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './productsCarousel.scss'

const CarouselRender = (props) =>{
    let carouselItems= (carouselProducts)=> {
return carouselProducts.map((carouselProduct)=>
  <Carousel.Item>
      <img
        className="d-block w-100"
        src={carouselProduct.ImgUrl}
        alt={`${carouselProduct.Id} slide`}
      />
      <Carousel.Caption>
        <h1>{carouselProduct.Name}</h1> 
        </Carousel.Caption>
    </Carousel.Item>
);
}
return (<Carousel>{carouselItems(props.carouselProducts)}</Carousel>)
}

export default CarouselRender