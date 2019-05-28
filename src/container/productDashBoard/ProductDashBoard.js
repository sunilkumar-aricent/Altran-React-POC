import React, { Component } from 'react'
import './productDashBoard.scss'
import ProductTile from '../../components/products/productTile/productTile';
import Pagination from 'react-js-pagination';
import { ITEMS_PER_PAGE, PAGE_RANGE } from '../../constants/constants'
import { connect } from 'react-redux';
import * as actions from '../../store/actions/action'

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
        this.props.getData()
    }

    render() {
        const currentPage = this.props.activePage;
        const startIndex = ((currentPage - 1) * ITEMS_PER_PAGE);
        const productOnCurrentPage = this.props.products.slice(startIndex, startIndex + ITEMS_PER_PAGE);
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

const mapStateToProps = state => {
    return {
        products: state.products,
        activePage: state.activePage
    }
};

const mapDispatchToProps = {
    handlePageChange: actions.handlePageChange,
    getData: actions.getProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDashBoard)


