/* eslint-disable jsx-a11y/label-has-for  */
import React from 'react';

const CreateProductForm = ({
  createNewProduct, disabled, handleFormChange, handleFormMetaChange, product, uploadImages, saving
}) => (
  <div className="col-md-9 col-md-push-3">
    <div className="page-header text-center">
      <h1>Create Product</h1>
    </div>

    <div className="row">
      <form className="col-lg-10 col-lg-push-1" onSubmit={createNewProduct}>
        <div className="form-group">
          <label>Product Name *</label>
          <input
            type="text"
            name="product_name"
            className="form-control"
            value={product.product_name}
            onChange={handleFormChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Product Description*</label>
          <textarea
            className="form-control"
            rows="5"
            maxLength="500"
            name="product_description"
            value={product.product_description}
            onChange={handleFormChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Quantity *</label>
          <input
            type="number"
            name="product_quantity"
            min="0"
            className="form-control"
            value={product.product_quantity}
            onChange={handleFormChange}
            required
          />
        </div>

        <div className="form-group">
          <div className="row">
            <div className="col-sm-12 col-lg-4">
              <label>Location *</label>
              <select
                className="form-control"
                name="product_location"
                value={product.product_location}
                onChange={handleFormChange}
              >
                <option>-</option>
                <option value="lagos">Lagos</option>
                <option value="nairobi">Nairobi</option>
                <option value="kampala">Kampala</option>
                <option value="new york">New York</option>
              </select>
            </div>
            <div className="col-sm-12 col-lg-3">
              <label>Currency *</label>
              <select
                className="form-control"
                name="currency"
                value={product.currency}
                onChange={handleFormChange}
              >
                <option>-</option>
                <option value="naira">N</option>
                <option value="dollars">$</option>
                <option value="ksh">KSh</option>
                <option value="ush">USh</option>
              </select>
            </div>

            <div className="col-sm-12 col-lg-5">
              <label>Price *</label>
              <input
                type="number"
                name="product_price"
                min="0"
                value={product.product_price}
                className="form-control"
                onChange={handleFormChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <div className="row">
            <div className="col-sm-12 col-lg-4">
              <label>Status *</label>
              <select
                className="form-control"
                name="status"
                value={product.status}
                onChange={handleFormChange}
              >
                <option>-</option>
                <option value="published">Published</option>
                <option value="draft">Draft</option>
              </select>
            </div>

            <div className="col-sm-12 col-lg-3">
              <label>Negotiable *</label>
              <select
                className="form-control"
                name="negotiable"
                value={product.negotiable}
                onChange={handleFormChange}
              >
                <option>-</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>

            <div className="col-sm-12 col-lg-5">
              <label>Category *</label>
              <div>
                <input
                  type="text"
                  name="category"
                  className="form-control"
                  value={product.category}
                  onChange={handleFormChange}
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label>Other Info *</label>
          <textarea
            className="form-control"
            rows="2"
            maxLength="400"
            name="other_info"
            value={product.meta.other_info ? product.meta.other_info : ''}
            onChange={handleFormMetaChange}
            required
          />
        </div>
        <div className="form-group">
          <button
            type="button"
            onClick={uploadImages}
            className="btn-btn-secondary btn-sm"
          >
            Add Image
          </button>
        </div>

        <div className="form-group clearfix form-action">
          <button
            type="submit"
            className="btn btn-primary pull-left min-width"
            disabled={disabled}
          >
            { saving ? 'Saving' : 'Create Product' }
          </button>
        </div>
      </form>
    </div>
  </div>
);

export default CreateProductForm;
