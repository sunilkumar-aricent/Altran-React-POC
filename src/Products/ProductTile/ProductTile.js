import React, { Component } from 'react'
import './ProductTile.scss'
class ProductTile extends Component {
    
    render() {
        return (<div className={this.props.customClass}>
            <p>ProductTile</p>
        </div>)
    }
}

export default ProductTile