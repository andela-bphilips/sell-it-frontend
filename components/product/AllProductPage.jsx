/* eslint-disable react/prop-types */
import _ from 'lodash';
import queryString from 'query-string';
import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import toastr from 'toastr';

import { getProducts } from '../../actions/products.js';

import Loader from '../includes/Loader.jsx';
import { numberWithCommas } from '../../utils/helper.js';

const { DEFAULTNOIMAGE } = process.env;

class AllProducts extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      category: '',
      limit: 20,
      order: 'desc',
      page: 1,
      productOrder: {},
      search: '',
      sort: 'created_at',
      updateComponent: false
    };

    this.getProductsApiCall = this.getProductsApiCall.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
    this.handleMakeOrderFormChange = this.handleMakeOrderFormChange.bind(this);
    this.showOrderModal = this.showOrderModal.bind(this);
  }

  componentDidMount() {
    /* eslint-disable react/no-did-mount-set-state */
    const urlData = queryString.parse(this.props.location.search);
    const { search, category } = urlData;

    this.setState({ category, search }, () => {
      this.getProductsApiCall();
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.search !== nextProps.location.search) {
      const urlData = queryString.parse(nextProps.location.search);
      const { search, category } = urlData;

      this.setState({
        category,
        search,
        updateComponent: true
      });
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.updateComponent !== this.state.updateComponent) {
      this.getProductsApiCall();
    }
  }

  getProductsApiCall() {
    const {
      category, page, limit, search, order, sort
    } = this.state;
    this.props.getProducts(search, category, limit, page, sort, order)
      .then(() => {
        this.setState({
          updateComponent: false
        });
      })
      .catch(() => {
        toastr.error(this.props.message);
      });
  }

  handleMakeOrderFormChange(event) {
    const field = event.target.name;
    const { productOrder } = this.state;

    productOrder[field] = parseInt(event.target.value, 10);
    return this.setState({ productOrder });
  }

  render() {
    const { auth, products } = this.props;
    if (_.isEmpty(products)) {
      return <Loader />;
    }

    const pagination = (<ReactPaginate
      previousLabel={<i className="fas fa-chevron-circle-left" />}
      nextLabel={<i className="fas fa-chevron-circle-right" />}
      breakLabel={<a href="">...</a>}
      breakClassName="break-me"
      pageCount={products.pagination.totalPages
        ? products.pagination.totalPages : 1}
      marginPagesDisplayed={3}
      pageRangeDisplayed={products.pagination.totalProducts > 9 ? 10
        : products.pagination.totalPages}
      onPageChange={this.handlePageClick}
      containerClassName="pagination justify-content-center"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      nextClassName="page-item next-button"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextLinkClassName="page-link"
      disabledClassName="disabled"
      activeClassName="active"
    />);
    return (
      <div className="col-md-9 col-md-push-3">
        <div className="banner banner-top">
          <img src="/assets/images/banners/banner-top.jpg" alt="Banner" />
          <div className="banner-content">
            <h2>Epic<br />Marketplace</h2>
          </div>
        </div>{/* End .banner */}
        <div className="category-header">
          <h1>Products</h1>
        </div>
        {products.products.length === 0
        ? <h2>No Product Found</h2>
        :
        <div>
          <div className="shop-row">
            <div className="shop-container max-col-4" data-layout="fitRows">
              {products.products.map(productRendered =>
                (
                  <div key={productRendered.slug} className="product-item">
                    <div className="product">
                      <figure className="product-image-container">
                        <Link
                          to={`/product/${productRendered.slug}`}
                          title="Product Name"
                          className="product-image-link"
                        >
                          <img
                            height="200px"
                            src={productRendered.productImages
                              ? productRendered.productImages[0]
                              : DEFAULTNOIMAGE}
                            alt={productRendered.productName}
                          />
                        </Link>
                        <div className="product-action">
                          { auth && auth.user.id === productRendered.userId ?
                            <div>
                              <Link
                                style={{ cursor: 'pointer' }}
                                to={`/edit/product/${productRendered.slug}`}
                                className="btn-product btn-add-cart"
                              >
                                <i className="" />
                                <span>Edit Product</span>
                              </Link>
                            </div> : ''
                          }
                        </div>
                        {/* End .product-action */}

                      </figure>
                      <h3 className="product-title">
                        <a href="product.html">{productRendered.productName}</a>
                      </h3>
                      <div className="product-price-container">
                        <span className="product-price">
                          {productRendered.currency}
                          {numberWithCommas(productRendered.productPrice)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

            </div>
          </div>

          <nav aria-label="Page Navigation">
            {products.pagination.totalPages > 1 ? pagination : null}
          </nav>
        </div>
        }
      </div>
    );
  }
}

const mapStateToProps = ({ auth, message, products }) => ({
  auth, message, products
});

export default connect(mapStateToProps, {
  getProducts
})(AllProducts);
