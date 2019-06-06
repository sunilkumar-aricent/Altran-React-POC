import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from '../../app'
import ProductDetails from '../products/productDetails/productDetailPage'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
      <Route exact path="/" component={App} />
      <Route path="/details/:id" component={ProductDetails} />
      </div>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root