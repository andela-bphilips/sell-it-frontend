/* eslint-disable react/prop-types */
import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import toastr from 'toastr';

import { editProduct, getProduct } from '../../actions/products.js';
import { getAllCategory } from '../../actions/category';

import EditProductForm from './includes/EditProductForm.jsx';
import Loader from '../includes/Loader.jsx';

import { camelCaseToUnderscore } from '../../utils/helper.js';

const { CLOUDNAME } = process.env;

class EditProduct extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleFormMetaChange = this.handleFormMetaChange.bind(this);
    this.saveProduct = this.saveProduct.bind(this);
    this.uploadImages = this.uploadImages.bind(this);
    this.onUpload = this.onUpload.bind(this);

    this.state = {
      disabled: false,
      loading: false,
      images: [],
      product: {
        meta: {}
      },
      categories: [],
      saving: false
    };
  }

  componentWillMount() {
    this.setState({ loading: true }, () => {
      this.props.getProduct(this.props.match.params.productId)
        .then(() => {
          this.setState({
            loading: false,
            product: this.props.product
          });
        })
        .catch(() => {
          this.setState({ loading: false });
          toastr.error(this.props.message);
        });
    });
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

  saveProduct(event) {
    event.preventDefault();
    const { product } = this.state;
    const editedProduct = {};
    const keysToDelete = [
      'createdAt', 'creator', 'id', 'negotiable', 'slug', 'subCategory',
      'views', 'modifiedAt', 'ownerName', 'ownerSlackHandle', 'userId',
      'meta', 'category', 'condition'
    ];
    Object.keys(product).forEach((key) => {
      if (keysToDelete.indexOf(key) < 0) {
        editedProduct[camelCaseToUnderscore(key)] = product[key];
      }
    });
    console.log(editedProduct);

    this.setState({ disabled: true, saving: true });
    this.props.editProduct(product.slug, editedProduct)
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
    this.setState({ product });
  }

  render() {
    const {
      categories, disabled, loading, product, saving
    } = this.state;

    if (loading) {
      return <Loader />;
    } else if (!loading && _.isEmpty(this.props.product)) {
      return <h3>Product Not Found</h3>;
    }
    return (
      <EditProductForm
        handleFormChange={this.handleFormChange}
        handleFormMetaChange={this.handleFormMetaChange}
        saveProduct={this.saveProduct}
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
  category: state.category.categories,
  product: state.product
});

export default connect(mapStateToProps, {
  editProduct, getProduct, getAllCategory
})(EditProduct);
