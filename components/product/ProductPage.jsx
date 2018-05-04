import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import toastr from 'toastr';

import { getProduct } from '../../actions/products.js';

import Loader from '../includes/Loader.jsx';
import numberWithCommas from '../../utils/helper.js';

class ProductPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      product: {},
      slug: ''
    };
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

  render() {
    const { product } = this.state;

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
                  src={product.productImages ? product.producImages[0] : 'http://res.cloudinary.com/zoewox-technologies/image/upload/v1525369665/No-image-available_jw7wqc.jpg'}
                  alt={product.productName}
                />
              </div>{/* End .product-zoom-container */}
            </div>{/* End .product-zoom-wrapper */}
            <div className="product-gallery-wrapper">
              <div
                className="owl-data-carousel owl-carousel product-gallery"
                data-owl-settings="{ &quot;items&quot;:4,
                  &quot;margin&quot;:14, &quot;nav&quot;: true, &quot;dots&quot;:false }"
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
                      data-image="/assets/images/products/single/product2.jpg"
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
          </div>

          <div className="product-details">
            <h2 className="product-title">{product.productName}</h2>
            <div className="product-meta-row">
              <div className="product-price-container">
                <span className="product-price">
                  {product.currency} {numberWithCommas(product.productPrice)}
                </span>
              </div>
            </div>
            <div className="product-content">
              <p>{product.category ? product.category : product.subCategory}</p>
            </div>
            <ul className="product-meta-list">
              {/* eslint-disable jsx-a11y/label-has-for */}
              { product.creator ?
                <li>
                  <label>Availability:  </label>
                  <span className="product-stock">  {product.status}</span>
                </li> : ''
              }
              <li>
                <label>Seller:  </label>
                <span className="product-stock">  {product.ownerName}</span>
              </li>
              <li>
                <label>Location:  </label>
                <span className="product-stock">  {product.productLocation}</span>
              </li>
              <li>
                <label>Quantity:  </label>
                <span className="product-stock">  {product.productQuantity}</span>
              </li>
              <li>
                <label>Views:  </label>
                <span className="product-stock">  {product.views}</span>
              </li>
            </ul>
            { product.creator ? '' :
            <div className="product-action">
              <a href="#" className="btn btn-accent btn-addtobag">Buy Now</a>
            </div>
            }
          </div>
        </div>
        <div className="product-details-tab">
          {/* Nav tabs */}
          <ul className="nav nav-tabs" role="tablist">
            <li role="presentation" className="active">
              <a
                href="#description"
                aria-controls="description"
                role="tab"
                data-toggle="tab"
              >
                Description
              </a>
            </li>
            <li role="presentation">
              <a
                href="#information"
                aria-controls="information"
                role="tab"
                data-toggle="tab"
              >
                Information
              </a>
            </li>
          </ul>
          {/* Tab panes */}
          <div className="tab-content">
            <div role="tabpanel" className="tab-pane active" id="description">
              <p>{product.productDescription}</p>
            </div>{/* End .tab-pane */}
            <div role="tabpanel" className="tab-pane" id="information">
              <div className="table-responsive">
                <table className="table product-info-table">
                  <tbody>
                    {Object.keys(product.meta).map(key =>
                      (
                        <tr key={key}>
                          <td>{key}:</td>
                          <td>{product.meta[key]}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
        <div className="mb50" />
      </div>
    );
  }
}

const mapStateToProps = ({ message, product }) => ({
  message, product
});

export default connect(mapStateToProps, { getProduct })(ProductPage);
