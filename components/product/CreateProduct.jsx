/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import toastr from 'toastr';

import { createProduct } from '../../actions/products.js';
import { getAllCategory } from '../../actions/category';

import CreateProductForm from './includes/CreateProductForm.jsx';

const { CLOUDNAME } = process.env;

class CreateProduct extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleFormMetaChange = this.handleFormMetaChange.bind(this);
    this.createNewProduct = this.createNewProduct.bind(this);
    this.uploadImages = this.uploadImages.bind(this);
    this.onUpload = this.onUpload.bind(this);

    this.state = {
      disabled: false,
      images: [],
      product: {
        meta: {}
      },
      categories: [],
      saving: false
    };
  }
  componentDidMount() {
    this.props.getAllCategory().then(() => {
      this.setState({ categories: this.props.category });
    });
  }

  onUpload(images) {
    const { product } = this.state;
    const urlList = [];

    images.map(image => urlList.push(image.secure_url));

    product.product_images = urlList;
    this.setState({ product });
  }

  uploadImages(event) {
    /* eslint-disable no-undef */
    event.preventDefault();
    cloudinary.openUploadWidget(
      { cloud_name: CLOUDNAME, upload_preset: 'sell-it' },
      (error, result) => {
        const images = [...new Set([...this.state.images, ...result])];
        this.onUpload(images);
      }
    );
  }

  handleFormMetaChange(event) {
    const { value, name } = event.target;
    const meta = this.state.product.meta || {};
    const { product } = this.state;

    meta[name] = value;
    product.meta = meta;
    return this.setState({ product });
  }

  createNewProduct(event) {
    event.preventDefault();
    const { product } = this.state;
    this.setState({ disabled: true, saving: true });
    this.props.createProduct(product)
      .then(() => {
        this.setState({ disabled: false, saving: false });
        toastr.success(this.props.message);
        this.props.history.push('/user/products');
      })
      .catch(() => {
        toastr.error(this.props.message);
        this.setState({ disabled: false, saving: false });
      });
  }

  handleFormChange(event) {
    const field = event.target.name;
    const { product } = this.state;

    product[field] = event.target.value;
    return this.setState({ product });
  }

  render() {
    const {
      disabled, product, saving, categories
    } = this.state;
    return (
      <CreateProductForm
        handleFormChange={this.handleFormChange}
        handleFormMetaChange={this.handleFormMetaChange}
        createNewProduct={this.createNewProduct}
        disabled={disabled}
        product={product}
        saving={saving}
        categories={categories}
        uploadImages={this.uploadImages}
      />
    );
  }
}

const mapStateToProps = state => ({
  message: state.message,
  category: state.category.categories
});

export default connect(mapStateToProps, {
  createProduct, getAllCategory
})(CreateProduct);
