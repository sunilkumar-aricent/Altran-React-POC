import React, { Component } from 'react'
import './ProductDashBoard.scss'
import ProductTile from '../ProductTile/ProductTile';
import axios from 'axios'
import Pagination from 'react-js-pagination';
import { ITEMS_PER_PAGE, PAGE_RANGE , INITIAL_PAGE } from '../../../constants/Constants.js'


class ProductDashBoard extends Component {

    constructor() {
        super();
      this.state = {
            products: [],
            activePage: INITIAL_PAGE,
        }
    }

    handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        this.setState({ activePage: pageNumber });
    }

    pagination = () => {
        return <div>
            {this.state.products && this.state.products.length && <Pagination
                activePage={this.state.activePage}
                itemsCountPerPage={ITEMS_PER_PAGE}
                totalItemsCount={this.state.products.length}
                pageRangeDisplayed={PAGE_RANGE}
                onChange={this.handlePageChange}
            />}
        </div>
    }

    getData() {
        axios.get('/res/products.json')
            .then(res => {
                const products = res.data;
                this.setState({ products });
            })
    }

    componentWillMount() {
        this.getData()
    }

    render() {
        const currentPage = this.state.activePage;
        const startIndex = ((currentPage - 1) * ITEMS_PER_PAGE);
        const productOnCurrentPage = this.state.products.slice(startIndex, startIndex + ITEMS_PER_PAGE);
        return (<div className="main-container">
            <header>
            </header>
            <ProductTile products={productOnCurrentPage} customClass="product-tile-container" />
            {this.pagination()}
            <footer>
            </footer>
        </div>);
    }
}

export default ProductDashBoard


