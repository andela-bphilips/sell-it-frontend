import React, { Component } from 'react';
import { connect } from 'react-redux';
import toastr from 'toastr';

import { createProduct } from '../../actions/products.js';

import CreateProductForm from './includes/CreateProductForm.jsx';

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
      saving: false
    }
  }
  componentDidMount() {
    console.log('cdm');
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
      { cloud_name: 'zoewox-technologies', upload_preset: 'sell-it' },
      (error, result) => {
        
        const images = [...new Set([...this.state.images, ...result])];
        this.onUpload(images);
        console.log(result, 'dasdsa', images);
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
    const { disabled, product, saving } = this.state;
    return (
      <CreateProductForm
        handleFormChange={this.handleFormChange}
        handleFormMetaChange={this.handleFormMetaChange}
        createNewProduct={this.createNewProduct}
        disabled={disabled}
        product={product}
        saving={saving}
        uploadImages={this.uploadImages}
      />
    );
  }
}

const mapStateToProps = ({ message }) => ({
  message
});

export default connect(mapStateToProps, { createProduct })(CreateProduct);
