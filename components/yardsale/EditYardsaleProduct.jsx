/* eslint-disable jsx-a11y/label-has-for  */
/* eslint-disable react/prop-types */
import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import toastr from 'toastr';

import {
  getYardsaleProduct,
  editYardsaleProduct
} from '../../actions/yardsale.js';

import ErrorPage from '../includes/ErrorPage.jsx';
import Loader from '../includes/Loader.jsx';

import { camelCaseToUnderscore } from '../../utils/helper.js';

const { CLOUDNAME } = process.env;

class EditYardsaleProduct extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      disableUploadButton: false,
      loading: false,
      images: [],
      product: {},
      productToUpdate: {},
      productSlug: null,
      saving: false,
      yardsaleName: null
    };

    this.fetchProductData = this.fetchProductData.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.saveYardsaleProduct = this.saveYardsaleProduct.bind(this);
    this.uploadImages = this.uploadImages.bind(this);
    this.onUpload = this.onUpload.bind(this);
  }

  componentWillMount() {
    const productName = this.props.match.params.name;

    this.fetchProductData(productName);
  }

  onUpload(images) {
    const { product, productToUpdate } = this.state;
    const urlList = [];

    images.map(image => urlList.push(image.secure_url));
    urlList.concat(product.productImages);

    product.productImages = urlList;
    productToUpdate.productImages = urlList;
    this.setState({ product, productToUpdate, disableUploadButton: false });
  }

  fetchProductData(productName) {
    this.setState({ loading: true });
    this.props.getYardsaleProduct(productName)
      .then(() => {
        this.setState({
          loading: false,
          product: this.props.product,
          productSlug: productName,
          yardsaleName: this.props.product.yardsaleName
        });
      })
      .catch(() => {
        this.setState({ loading: false });
        toastr.error(this.props.message);
      });
  }

  handleFormChange(event) {
    const field = event.target.name;
    const { product, productToUpdate } = this.state;

    product[field] = event.target.value;
    productToUpdate[field] = event.target.value;
    return this.setState({ product, productToUpdate });
  }

  uploadImages(event) {
    /* eslint-disable no-undef */
    event.preventDefault();
    this.setState({ disableUploadButton: true });
    cloudinary.openUploadWidget(
      { cloud_name: CLOUDNAME, upload_preset: 'sell-it' },
      (error, result) => {
        if (result) {
          const images = [...new Set([...this.state.images, ...result])];
          this.onUpload(images);
        } else {
          this.setState({ disableUploadButton: false });
        }
      }
    );
  }

  saveYardsaleProduct(event) {
    event.preventDefault();
    const { productSlug, productToUpdate, yardsaleName } = this.state;
    const editedProduct = {};
    if (_.isEmpty(productToUpdate)) {
      return toastr.error('Please select at least one field to update');
    }
    Object.keys(productToUpdate).forEach((key) => {
      editedProduct[camelCaseToUnderscore(key)] = productToUpdate[key];
    });

    this.setState({ saving: true });
    this.props.editYardsaleProduct(productSlug, editedProduct)
      .then(() => {
        this.props.history.push(`/yardsale/products/${yardsaleName}`);
        toastr.success(this.props.message);
      })
      .catch(() => toastr.error(this.props.message));
    this.setState({ saving: false });
  }

  render() {
    const {
      disableUploadButton, loading, product,
      saving
    } = this.state;
    const errorMessage = 'Oops! You are not authorized to view this page!';

    if (loading) {
      return <Loader />;
    } else if (!_.isEmpty(product) && !product.admin) {
      return <ErrorPage message={errorMessage} statusCode={401} />;
    }
    return (
      <div className="col-md-9 col-md-push-3">
        <div className="page-header text-center">
          <h1>Edit Product</h1>
        </div>
        <div>
          <form
            className="col-lg-10 col-lg-push-1"
            onSubmit={this.saveYardsaleProduct}
          >
            <div className="form-group">
              <label>Product Name</label>
              <input
                type="text"
                name="productName"
                className="form-control"
                placeholder="Macbook"
                value={product.productName}
                onChange={this.handleFormChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                name="productDescription"
                className="form-control"
                rows="5"
                value={product.productDescription}
                onChange={this.handleFormChange}
                required
              />
            </div>

            <div className="form-group">
              <div className="row">
                <div className="inline-fields col-sm-12 col-md-4">
                  <label>Condition</label>
                  <select
                    name="productCondition"
                    className="form-control"
                    value={product.productCondition}
                    onChange={this.handleFormChange}
                    required
                  >
                    <option>-</option>
                    <option value="new">New</option>
                    <option value="good">Good</option>
                    <option value="fairly_good">Fairly good</option>
                    <option value="bad">Bad</option>
                    <option value="scrap">Scrap</option>
                  </select>
                </div>
                <div className="inline-fields col-sm-12 col-md-8">
                  <label>Upload Images</label>
                  <button
                    type="button"
                    onClick={this.uploadImages}
                    className="btn-btn-secondary inline form-control"
                    disabled={disableUploadButton}
                  >
                    Add Images
                  </button>
                </div>
              </div>
            </div>

            <div className="form-group">
              <div className="row">
                <div className="inline-fields col-sm-12 col-md-2">
                  <label>Quantity</label>
                  <input
                    type="number"
                    name="productQuantity"
                    className="form-control"
                    value={product.productQuantity}
                    onChange={this.handleFormChange}
                    min="1"
                    required
                  />
                </div>
                <div className="inline-fields col-sm-12 col-md-4">
                  <label>Currency</label>
                  <select
                    name="currency"
                    className="form-control"
                    value={product.currency}
                    onChange={this.handleFormChange}
                    required
                  >
                    <option>-</option>
                    <option value="₦">Naira</option>
                    <option value="$">Dollar</option>
                    <option value="KSh">Kenyan Shilling</option>
                    <option value="USh">Ugandan Shilling</option>
                  </select>
                </div>
                <div className="inline-fields col-sm-12 col-md-6">
                  <label>Product price</label>
                  <input
                    type="number"
                    name="productPrice"
                    className="form-control"
                    value={product.productPrice}
                    onChange={this.handleFormChange}
                    min="0"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-group clearfix form-action">
              <button
                type="submit"
                className="btn btn-primary pull-left min-width"
                disabled={saving}
              >
                { saving ? 'Saving' : 'Update Product' }
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({
  auth, message, product
}) => ({
  auth, message, product
});

export default connect(mapStateToProps, {
  getYardsaleProduct, editYardsaleProduct
})(EditYardsaleProduct);
