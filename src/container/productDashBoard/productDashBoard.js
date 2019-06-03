import React, { Component } from 'react'
import './productDashBoard.scss'
import ProductTile from '../../components/products/productTile/productTile';
import Pagination from 'react-js-pagination';
import { ITEMS_PER_PAGE, PAGE_RANGE, PRODUCTS_URL, CAROUSEL_PRODUCTS_URL } from '../../constants/constants'
import { connect } from 'react-redux';
import * as actions from '../../store/actions/action'
import * as actionTypes from '../../store/actions/actionConstants'
import CarouselRender from '../../components/products/productCarouselView/productsCarousel';

class ProductDashBoard extends Component {

    constructor(props) {
        super();
    }

    pagination = () => {
        return <div>
            {this.props.products && this.props.products.length && <Pagination
                activePage={this.props.activePage}
                itemsCountPerPage={ITEMS_PER_PAGE}
                totalItemsCount={this.props.products.length}
                pageRangeDisplayed={PAGE_RANGE}
                onChange={this.props.handlePageChange}
            />}
        </div>
    }

    componentWillMount() {
        this.props.getCarouselData(CAROUSEL_PRODUCTS_URL, actionTypes.CAROUSEL_PRODUCTS_LOAD)
        this.props.getProductData(PRODUCTS_URL, actionTypes.PRODUCT_LOAD);
    }

    render() {
        const currentPage = this.props.activePage;
        const startIndex = ((currentPage - 1) * ITEMS_PER_PAGE);
        const productOnCurrentPage = this.props.products.slice(startIndex, startIndex + ITEMS_PER_PAGE);
        return (<div className="main-container">
            <header>
            </header>
            <CarouselRender carouselProducts={this.props.carouselProducts}></CarouselRender>
            <ProductTile products={productOnCurrentPage} customClass="product-tile-container" />
            {this.pagination()}
            <footer>
            </footer>
        </div>);
    }
}

const mapStateToProps = state => {
    return {
        products: state.products.products,
        activePage: state.activePage.activePage,
        carouselProducts: state.carouselProducts.carouselProducts
    }
};

const mapDispatchToProps = {
    handlePageChange: actions.handlePageChange,
    getCarouselData: actions.getData,
    getProductData: actions.getData
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDashBoard)