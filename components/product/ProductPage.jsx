/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import toastr from 'toastr';
import Clipboard from 'react-clipboard.js';
import queryString from 'query-string';

import ConfirmOrder from './includes/ConfirmOrder.jsx';
import ErrorPage from '../includes/ErrorPage.jsx';
import Loader from '../includes/Loader.jsx';
import { jsUcFirst, numberWithCommas } from '../../utils/helper.js';
import MakeOrderModal from './includes/MakeOrderModal.jsx';

import { getProduct } from '../../actions/products.js';
import { getYardsaleProduct } from '../../actions/yardsale.js';
import { placeOrder } from '../../actions/orders.js';

const { baseUrl } = process.env;

class ProductPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      confirmOrder: false,
      loading: false,
      pageHasError: false,
      product: {},
      productOrder: {},
      open: false,
      orderConfirmed: false,
      saving: false,
      slug: '',
      updateComponent: false,
      type: null
    };

    this.placeOrder = this.placeOrder.bind(this);
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
    this.handleMakeOrderFormChange = this.handleMakeOrderFormChange.bind(this);
    this.setConfirmOrder = this.setConfirmOrder.bind(this);
    this.showOrderModal = this.showOrderModal.bind(this);
  }

  componentWillMount() {
    const urlData = queryString.parse(this.props.location.search);
    const { type } = urlData;
    this.setState({ loading: true });

    /* eslint-disable react/no-did-mount-set-state */
    this.setState({ slug: this.props.match.params.product }, () => {
      if (!type) {
        this.props.getProduct(this.state.slug)
          .then(() => {
            this.setState({
              loading: false,
              product: this.props.product
            });
          })
          .catch(() => {
            this.setState({ loading: false, pageHasError: true });
            toastr.error(this.props.message);
          });
      } else {
        this.props.getYardsaleProduct(this.state.slug)
          .then(() => {
            this.setState({
              loading: false,
              product: this.props.product,
              type
            });
          })
          .catch(() => {
            this.setState({ loading: false, pageHasError: true });
            toastr.error(this.props.message);
          });
      }
    });
  }

  componentDidUpdate(prevProps) {
    const { updateComponent } = this.state;
    if (prevProps.match.params.product !== this.props.match.params.product
      || updateComponent) {
      /* eslint-disable react/no-did-mount-set-state */
      this.props.getProduct(this.props.match.params.product)
        .then(() => {
          this.setState({
            product: this.props.product,
            updateComponent: false
          });
        })
        .catch(() => {
          toastr.error(this.props.message);
        });
    }
  }

  onOpenModal() {
    this.setState({ open: true });
  }

  onCloseModal() {
    this.setState({ open: false });
  }

  setConfirmOrder(event) {
    event.preventDefault();
    this.setState({
      saving: true
    });
    const { productOrder } = this.state;
    productOrder.payment_method = 'transfer';

    this.props.placeOrder(productOrder)
      .then(() => {
        this.setState({
          confirmOrder: false,
          saving: false,
          orderConfirmed: true
        });
        toastr.success(this.props.message);
      })
      .catch(() => {
        this.setState({ saving: false });
        toastr.error(this.props.message);
      });
  }

  placeOrder(event) {
    event.preventDefault();
    const { product, productOrder, type } = this.state;

    this.setState({
      confirmOrder: true
    });
    this.onCloseModal();
    if (type === 'yardsale') {
      productOrder.yard_sale_product_id = product.id;
    } else {
      productOrder.product_id = product.id;
    }

    if (!productOrder.negotiated_price) {
      productOrder.negotiated_price = product.productPrice;
    }
  }

  handleMakeOrderFormChange(event) {
    const field = event.target.name;
    const { productOrder } = this.state;

    if (event.target.type === 'number') {
      productOrder[field] = parseInt(event.target.value, 10);
    } else {
      productOrder[field] = event.target.value;
    }

    return this.setState({ productOrder });
  }

  showOrderModal(product) {
    this.setState({ product }, () => {
      this.onOpenModal();
    });
  }

  render() {
    const {
      confirmOrder, open, orderConfirmed, product, productOrder, saving,
      pageHasError, loading, type
    } = this.state;

    if (loading) {
      return <Loader />;
    } else if (pageHasError) {
      return <ErrorPage message={this.props.message} />;
    } else if (confirmOrder) {
      return (<ConfirmOrder
        product={product}
        productOrder={productOrder}
        saving={saving}
        setConfirmOrder={this.setConfirmOrder}
      />);
    } else if (orderConfirmed) {
      return (
        <div className="col-md-9 col-md-push-3">
          <div className="row">
            <div className="checkout-confirm">
              <img src={process.env.OKAYIMAGE} alt="Okay" />
              <h3>Payment Complete</h3>
              <h4>Thank you for your order</h4>
              <p>
                We have sent an email with all the details of your order to
                your email address.
              </p>
              <p>
                Click <Link to="/user/orders">here</Link> to view your orders.
              </p>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="col-md-9 col-md-push-3">
        <div className="row">
          <div className="product-gallery-container">
            <div className="product-zoom-wrapper">
              <div className="product-zoom-container">
                <img
                  className="xzoom"
                  id="product-zoom"
                  src={
                    product.productImages
                    ? product.productImages[0]
                    : process.env.DEFAULTNOIMAGE
                  }
                  alt={product.productName}
                />
              </div>{/* End .product-zoom-container */}
            </div>{/* End .product-zoom-wrapper */}
            <div className="product-gallery-wrapper">
              <div
                className="owl-data-carousel owl-carousel product-gallery"
                data-owl-settings="{ &quot;items&quot;:4, &quot;margin&quot;:14,
                  &quot;nav&quot;: true, &quot;dots&quot;:false }"
                data-owl-responsive="{&quot;240&quot;: {&quot;items&quot;: 2},
                  &quot;360&quot;: {&quot;items&quot;: 3},
                  &quot;768&quot;: {&quot;items&quot;: 4},
                  &quot;992&quot;: {&quot;items&quot;: 3},
                  &quot;1200&quot;: {&quot;items&quot;: 4} }"
              >
                {product.productImages && product.productImages.map(image =>
                  (
                    <a
                      key={image}
                      href="#"
                      data-image={image}
                      data-zoom-image={image}
                      className="product-gallery-item"
                    >
                      <img
                        src="/assets/images/products/single/thumbs/product2.jpg"
                        alt="product-small-2"
                      />
                    </a>
                  ))}
              </div>
            </div>
            <div>
              <div style={{ fontSize: `${16}px` }}>
                <span className="text-light">Quantity: </span>
                <span className="">{product.productQuantity}</span>
              </div>
              {
                type !== 'yardsale' &&
                <div style={{ fontSize: `${16}px` }}>
                  <span className="text-light">Views: </span>
                  <span className="">{product.views}</span>
                </div>
              }
            </div>
            <br />

            {
              type !== 'yardsale' &&
              <Clipboard
                component="button"
                className="btn btn-primary"
                button-href="#"
                data-clipboard-text={`${baseUrl}/product/${product.slug}`}
                button-title="Copy Link"
              >
                Copy Share Link
              </Clipboard>
            }
            <br />
            <br />
            { product.creator ? '' :
            <div className="product-action">
              <a
                className="btn btn-accent btn-addtobag"
                onClick={() => this.showOrderModal(product)}
              >
                <i className="icon-product icon-bag" />
                <span>Place Order</span>
              </a>
            </div>
            }
          </div>

          <div className="product-details">
            <h2 className="product-title">{product.productName}</h2>
            {
              type !== 'yardsale' &&
              <div style={{ fontSize: `${16}px` }}>
                <span className="text-light">Seller: </span>
                <span className="product-stock">
                  {product.ownerName}
                </span>
              </div>
            }
            <div className="product-price-container">
              <span className="product-price">
                {product.currency}{numberWithCommas(product.productPrice)}
              </span>
            </div>
            <hr />
            <h4 className="">Product Description</h4>
            <span className="lead">{product.productDescription}</span>
            <hr />
            <h4 className="">Other Info</h4>
            {
              type === 'yardsale' &&
              <div>
                <div>
                  <span className="text-light">Quality: </span>
                  <span className="product-stock">
                    {product.productCondition}
                  </span>
                </div>
              </div>
            }
            {
              type !== 'yardsale' &&
                <div>
                  <span className="text-light">Category: </span>
                  { !product.category && !product.subCategory &&
                    <span className="product-stock">
                      Not available
                    </span>
                  }
                  { product.category
                    ? product.category.toUpperCase()
                    : product.subCategory.toUpperCase()
                  }
                </div>
            }
            { type !== 'yardsale' && product.creator ?
              <div>
                <div>
                  <span className="text-light">Availability: </span>
                  <span className="product-stock"> {product.status}</span>
                </div>
                <div>
                  <span className="text-light">Location: </span>
                  <span className="product-stock">
                    {product.productLocation.toUpperCase()}
                  </span>
                </div>
              </div>
              : ''
            }
            {Object.keys(product.meta).map(key =>
            (
              <div key={key}>
                <span className="text-light">
                  {jsUcFirst(key.split('_').join(' '))}:
                </span>
                <span className="product-stock">
                  {product.meta[key]}
                </span>
              </div>
            ))}
          </div>
        </div>
        {
          type === 'yardsale' &&
          <div className="product-details-tab">
            {/* Nav tabs */}
            <ul className="nav nav-tabs" role="tablist">
              <li role="presentation" className="active">
                <a
                  href="#paymentMethod"
                  aria-controls="paymentMethod"
                  role="tab"
                  data-toggle="tab"
                >
                  Payment Methods
                </a>
              </li>
              <li role="presentation">
                <a
                  href="#returnPolicy"
                  aria-controls="returnPolicy"
                  role="tab"
                  data-toggle="tab"
                >
                  Return Policy
                </a>
              </li>
              <li role="presentation">
                <a
                  href="#pickupPolicy"
                  aria-controls="pickupPolicy"
                  role="tab"
                  data-toggle="tab"
                >
                  Pickup/Delivery Policy
                </a>
              </li>
            </ul>
            {/* Tab panes */}
            <div className="tab-content">
              <div
                role="tabpanel"
                className="tab-pane active"
                id="paymentMethod"
              >
                <p>Payment methods here</p>
              </div>{/* End .tab-pane */}
              <div role="tabpanel" className="tab-pane" id="returnPolicy">
                <p>Return policy here</p>
              </div>{/* End .tab-pane */}
              <div role="tabpanel" className="tab-pane" id="pickupPolicy">
                <p>Pickup Policy here</p>
              </div>

            </div>
          </div>
        }

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
        <div className="mb50" />
      </div>
    );
  }
}

const mapStateToProps = ({ message, product }) => ({
  message, product
});

export default connect(mapStateToProps, {
  getProduct, getYardsaleProduct, placeOrder
})(ProductPage);
