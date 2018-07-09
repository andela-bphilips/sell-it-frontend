/* eslint-disable jsx-a11y/label-has-for  */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import toastr from 'toastr';

import { createYardsaleProduct } from '../../actions/yardsale.js';

const { CLOUDNAME } = process.env;

class CreateYardsale extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      images: [],
      product: {},
      saving: false,
      disableUploadButton: false,
      yardsale: ''
    };

    this.handleFormChange = this.handleFormChange.bind(this);
    this.saveYardsaleProduct = this.saveYardsaleProduct.bind(this);
    this.uploadImages = this.uploadImages.bind(this);
    this.onUpload = this.onUpload.bind(this);
  }

  componentWillMount() {
    const urlData = queryString.parse(this.props.location.search);
    const { yardsale } = urlData;
    if (!yardsale) {
      this.props.history.push('/404');
    }
    this.setState({ yardsale });
  }

  onUpload(images) {
    const { product } = this.state;
    const urlList = [];

    images.map(image => urlList.push(image.secure_url));

    product.product_images = urlList;
    this.setState({ product, disableUploadButton: false });
  }

  handleFormChange(event) {
    const field = event.target.name;
    const { product } = this.state;

    product[field] = event.target.value;
    return this.setState({ product });
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
    const { product, yardsale } = this.state;
    this.setState({ saving: true });

    this.props.createYardsaleProduct(yardsale, product)
      .then(() => {
        toastr.success(this.props.message);
        this.props.history.push(`/yardsale/${yardsale}`);
        this.setState({ saving: false });
      })
      .catch(() => {
        toastr.error(this.props.message);
        this.setState({ saving: false });
      });
  }

  render() {
    const { product, saving, disableUploadButton } = this.state;
    return (
      <div className="col-md-9 col-md-push-3">
        <div className="page-header text-center">
          <h1>Add yardsale Product</h1>
        </div>
        <div>
          <form
            className="col-lg-10 col-lg-push-1"
            onSubmit={this.saveYardsaleProduct}
          >
            <div className="form-group">
              <label>Product name</label>
              <input
                type="text"
                name="product_name"
                className="form-control"
                placeholder="e.g 'Macbook'"
                value={product.product_name || ''}
                onChange={this.handleFormChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                name="product_description"
                className="form-control"
                rows="5"
                value={product.product_description}
                onChange={this.handleFormChange}
                required
              />
            </div>

            <div className="form-group">
              <div className="row">
                <div className="inline-fields col-sm-12 col-md-4">
                  <label>Condition</label>
                  <select
                    name="product_condition"
                    className="form-control"
                    value={product.product_condition}
                    onChange={this.handleFormChange}
                    required
                  >
                    <option>-</option>
                    <option value="new">New</option>
                    <option value="used">Used</option>
                    <option value="good">Good</option>
                    <option value="fair">Fairly good</option>
                    <option value="bad">Bad</option>
                    <option value="very bad">Very bad</option>
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
                    name="product_quantity"
                    className="form-control"
                    min="1"
                    value={product.product_quantity || ''}
                    onChange={this.handleFormChange}
                    required
                  />
                </div>
                <div className="inline-fields col-sm-12 col-md-4">
                  <label>Currency</label>
                  <select
                    name="currency"
                    className="form-control"
                    value={product.currency || ''}
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
                    name="product_price"
                    className="form-control"
                    min="0"
                    value={product.product_price || ''}
                    onChange={this.handleFormChange}
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
                { saving ? 'Saving' : 'Add item' }
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({
  auth, message
}) => ({
  auth, message
});

export default connect(mapStateToProps, {
  createYardsaleProduct
})(CreateYardsale);
