/* eslint-disable react/prop-types */
import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import toastr from 'toastr';
import Clipboard from 'react-clipboard.js';

import { getProduct } from '../../actions/products.js';
import { placeOrder } from '../../actions/orders.js';

import Loader from '../includes/Loader.jsx';
import { jsUcFirst, numberWithCommas } from '../../utils/helper.js';
import MakeOrderModal from './includes/MakeOrderModal.jsx';

const { baseUrl } = process.env;

class ProductPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      product: {},
      productOrder: {},
      open: false,
      saving: false,
      slug: '',
      updateComponent: false
    };

    this.placeOrder = this.placeOrder.bind(this);
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
    this.handleMakeOrderFormChange = this.handleMakeOrderFormChange.bind(this);
    this.showOrderModal = this.showOrderModal.bind(this);
  }

  componentDidMount() {
    /* eslint-disable react/no-did-mount-set-state */
    this.setState({ slug: this.props.match.params.product }, () => {
      this.props.getProduct(this.state.slug)
        .then(() => {
          this.setState({ product: this.props.product });
        })
        .catch(() => {
          toastr.error(this.props.message);
        });
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
        toastr.success(this.props.message);
      })
      .catch(() => {
        this.setState({ saving: false });
        toastr.error(this.props.message);
      });
  }

  render() {
    const {
      open, product, saving
    } = this.state;

    if (_.isEmpty(product)) {
      return <Loader />;
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
              <div>
                <span className="text-light">Quantity: </span>
                <span className="">{product.productQuantity}</span>
              </div>
              <div>
                <span className="text-light">Views: </span>
                <span className="">{product.views}</span>
              </div>
            </div>
            <br />

            <Clipboard
              component="button"
              className="btn btn-primary"
              button-href="#"
              data-clipboard-text={`${baseUrl}/product/${product.slug}`}
              button-title="Copy Link"
            >
              Copy Share Link
            </Clipboard>
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
            <span className="text-light">Seller: </span>
            <span className="product-stock"> {product.ownerName}</span>
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
            <div>
              <span className="text-light">Category: </span>
              { !product.category && !product.subCategory &&
                <span className="product-stock">
                  Not available
                </span>
              }
              {
                product.category
                ? product.category.toUpperCase()
                : product.subCategory.toUpperCase()
              }
            </div>
            { product.creator ?
              <div>
                <span className="text-light">Availability: </span>
                <span className="product-stock"> {product.status}</span>
              </div>
              : ''
            }
            <div>
              <span className="text-light">Location: </span>
              <span className="product-stock">
                {product.productLocation.toUpperCase()}
              </span>
            </div>
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
        <div className="product-details-tab">
          {/* Nav tabs */}
          <ul className="nav nav-tabs" role="tablist">
            <li role="presentation" className="active">
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
                href="#disclaimer"
                aria-controls="disclaimer"
                role="tab"
                data-toggle="tab"
              >
                Disclaimer
              </a>
            </li>
          </ul>
          {/* Tab panes */}
          <div className="tab-content">
            <div role="tabpanel" className="tab-pane active" id="returnPolicy">
              <p>Return policy here</p>
            </div>{/* End .tab-pane */}
            <div role="tabpanel" className="tab-pane" id="disclaimer">
              <p>Disclaimer here</p>
            </div>

          </div>
        </div>

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
  getProduct, placeOrder
})(ProductPage);
