/* eslint-disable react/prop-types */
import _ from 'lodash';
import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import toastr from 'toastr';

import { getProducts } from '../../actions/products.js';
import { placeOrder } from '../../actions/orders.js';

import Loader from '../includes/Loader.jsx';
import numberWithCommas from '../../utils/helper.js';
import MakeOrderModal from './includes/MakeOrderModal.jsx';

class AllProducts extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      limit: 20,
      order: 'desc',
      open: false,
      page: 1,
      product: {},
      productOrder: {},
      saving: false,
      searchQuery: '',
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
    this.getProductsApiCall();
  }

  componentDidUpdate() {
    const { updateComponent } = this.state;
    if (updateComponent) {
      this.getProductsApiCall();
    }
  }

  onOpenModal() {
    this.setState({ open: true });
  }

  onCloseModal() {
    this.setState({ open: false });
  }

  getProductsApiCall() {
    const {
      page, limit, searchQuery, order, sort
    } = this.state;
    this.props.getProducts(searchQuery, limit, page, sort, order)
      .then(() => {
        this.setState({
          searchQuery: '',
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

  showOrderModal(product) {
    this.setState({ product }, () => {
      this.onOpenModal();
    });
  }

  placeOrder(event) {
    event.preventDefault();
    const { product, productOrder } = this.state;

    this.setState({ saving: true });
    productOrder.product_id = product.id;

    if (!productOrder.negotiated_price) {
      productOrder.negotiated_price = product.productPrice;
    }

    this.props.placeOrder(productOrder)
      .then(() => {
        this.setState({ saving: false, updateComponent: true });
        this.onCloseModal();
        this.forceUpdate();
        toastr.success(this.props.message);
      })
      .catch(() => {
        this.setState({ saving: false });
        toastr.error(this.props.message);
      });
  }

  render() {
    const { auth, products } = this.props;
    const {
      open, product, saving
    } = this.state;

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
                          src={product.productImages ? product.productImages[0] : 'http://res.cloudinary.com/zoewox-technologies/image/upload/v1525369665/No-image-available_jw7wqc.jpg'}
                          alt={product.productName}
                        />
                      </Link>
                      <a href="#" className="btn-quick-view">Quick View</a>
                      <div className="product-action">
                        { auth && auth.user.id !== product.userId ?
                          <div>
                            <a
                              href="#"
                              className="btn-product btn-wishlist"
                              title="Add to Wishlist"
                            >
                              <i className="icon-product icon-heart" />
                            </a>
                            <a onClick={() => this.showOrderModal(product)} className="btn-product btn-add-cart">
                              <i className="icon-product icon-bag" />
                              <span>Place Order</span>
                            </a>
                          </div> : ''
                        }
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
                    </div>
                  </div>
                </div>
              ))}

          </div>
        </div>

        <nav aria-label="Page Navigation">
          {products.pagination.totalPages > 1 ? pagination : null}
        </nav>

        { open
          ? <MakeOrderModal
            product={product}
            placeOrder={this.placeOrder}
            saving={saving}
            open={open}
            handleFormChange={this.handleMakeOrderFormChange}
            onCloseModal={this.onCloseModal}
          />
          : '' }
      </div>
    );
  }
}

const mapStateToProps = ({ auth, message, products }) => ({
  auth, message, products
});

export default connect(mapStateToProps, { getProducts, placeOrder })(AllProducts);
