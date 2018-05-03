/* eslint-disable react/prop-types */
import _ from 'lodash';
import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import toastr from 'toastr';

import { getProducts } from '../../actions/products.js';

import Loader from '../includes/Loader.jsx';
import numberWithCommas from '../../utils/helper.js';

class AllProducts extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      limit: 20,
      order: 'desc',
      page: 1,
      searchQuery: '',
      sort: 'created_at'
    };

    this.getProductsApiCall = this.getProductsApiCall.bind(this);
  }

  componentDidMount() {
    this.getProductsApiCall();
  }

  getProductsApiCall() {
    const {
      page, limit, searchQuery, order, sort
    } = this.state;
    this.props.getProducts(searchQuery, limit, page, sort, order)
      .then(() => {
        this.setState({
          searchQuery: ''
        });
      })
      .catch(() => {
        toastr.error(this.props.message);
      });
  }

  render() {
    const { products } = this.props;

    if (_.isEmpty(products)) {
      return <Loader />;
    }

    const pagination = (<ReactPaginate
      previousLabel={<i className="fas fa-chevron-circle-left" />}
      nextLabel={<i className="fas fa-chevron-circle-right" />}
      breakLabel={<a href="">...</a>}
      breakClassName="break-me"
      pageCount={products.pagination.totalPages
        ? products.pagination.totalPages : null}
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
            <h2>SAve big on<br />Home Decor</h2>
            <a href="#" className="action-link">Shop now</a>
          </div>
        </div>{/* End .banner */}
        <div className="category-header">
          <h1>Home Decor</h1>
          <ol className="breadcrumb">
            <li><a href="#">Home &amp; Garden</a></li>
            <li className="active">Home Decor</li>
          </ol>
        </div>
        <div className="shop-row">
          <div className="shop-container max-col-4" data-layout="fitRows">

            {products.products.map(product =>
              (
                <div key={product.slug} className="product-item">
                  <div className="product">
                    <figure className="product-image-container">
                      <Link
                        to={`/product/${product.slug}`}
                        title="Product Name"
                        className="product-image-link"
                      >
                        <img
                          src={product.productImages[0]}
                          alt={product.productName}
                        />
                      </Link>
                      <a href="#" className="btn-quick-view">Quick View</a>
                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-wishlist"
                          title="Add to Wishlist"
                        >
                          <i className="icon-product icon-heart" />
                        </a>
                        <a
                          href="#"
                          className="btn-product btn-add-cart"
                          title="Add to Bag"
                        >
                          <i className="icon-product icon-bag" />
                          <span>Add to Bag</span>
                        </a>
                        {/* <a
                          href="#"
                          className="btn-product btn-compare"
                          title="Add to Compare"
                        >
                          <i className="icon-product icon-bar" />
                        </a> */}
                      </div>{/* End .product-action */}
                    </figure>
                    <h3 className="product-title">
                      <a href="product.html">{product.productName}</a>
                    </h3>
                    <div className="product-price-container">
                      <span className="product-price">
                        {/* eslint-disable max-len */}
                        {product.currency} {numberWithCommas(product.productPrice)}
                      </span>
                    </div>{/* Endd .product-price-container */}
                  </div>{/* End .product */}
                </div>
              ))}

          </div>{/* End .shop-container */}
        </div>{/* End .shop-row */}
        <nav aria-label="Page Navigation">
          {products.pagination.totalPages > 1 ? pagination : null}
        </nav>
      </div>
    );
  }
}

const mapStateToProps = ({ products }) => ({
  products
});

export default connect(mapStateToProps, { getProducts })(AllProducts);
