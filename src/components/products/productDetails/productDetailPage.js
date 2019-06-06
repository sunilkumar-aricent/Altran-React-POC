import React, { Component } from 'react'
import ProductDetailsRender from './ProductDetailsRender'
import { PRODUCTS_URL } from './../../../constants/constants'
import axios from 'axios'

class ProductDetailPage extends Component {


    constructor(props) {
        super(props);
        this.state = {
            productDetails: null,
            id: this.props.match.params.id
        }
    }

    componentWillMount() {
        this.getData(PRODUCTS_URL, this.state.id,
            (selectedProduct) => {
                this.setState({ productDetails: selectedProduct })
            })
    }

    getData = (PRODUCTS_URL, id, callback) => {
        axios.get(PRODUCTS_URL)
            .then(res => {
                const renderData = res.data;
                const returnValue = renderData.find(product => product.id === Number(id))
                callback(returnValue);
                this.setState({ productDetails: returnValue })
            });
    }

    render() {
        if( !this.state.productDetails ) {
            return null;
        }
        return (
            <div>
                <h1>This is product render page</h1>
                <ProductDetailsRender productDetails={this.state.productDetails} />
            </div>
        )
    }
}


export default ProductDetailPage
