/* eslint-disable jsx-a11y/label-has-for  */
/* eslint-disable react/prop-types */
import React from 'react';

const EditProductForm = ({
  saveProduct, disabled, handleFormChange, handleFormMetaChange,
  product, uploadImages, saving, categories
}) => (
  <div className="col-md-9 col-md-push-3">
    <div className="page-header text-center">
      <h1>Create Product</h1>
    </div>

    <div className="row">
      <form className="col-lg-10 col-lg-push-1" onSubmit={saveProduct}>
        <div className="form-group">
          <label>Product Name *</label>
          <input
            type="text"
            name="productName"
            className="form-control"
            value={product.productName}
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
            name="productDescription"
            value={product.productDescription}
            onChange={handleFormChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Quantity *</label>
          <input
            type="number"
            name="productQuantity"
            min="0"
            className="form-control"
            value={product.productQuantity}
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
                name="productLocation"
                value={product.productLocation}
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
                <option value="₦">₦</option>
                <option value="$">$</option>
                <option value="ksh">KSh</option>
                <option value="ush">USh</option>
              </select>
            </div>

            <div className="col-sm-12 col-lg-5">
              <label>Price *</label>
              <input
                type="number"
                name="productPrice"
                min="0"
                value={product.productPrice}
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
                <select
                  className="form-control"
                  name="category"
                  value={product.category}
                  onChange={handleFormChange}
                >
                  <option>-</option>
                  {categories.length > 0 && categories.map(category =>
                  (
                    category.category_title !== 'yard sale' &&
                    <option
                      key={category.id}
                      value={
                        category.category_title
                        ? category.category_title
                        : category.sub_category_title
                      }
                    >
                      {
                        category.category_title
                        ? category.category_title.toUpperCase()
                        : category.sub_category_title.toUpperCase()
                      }
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label>Other Info</label>
          <textarea
            className="form-control"
            rows="2"
            maxLength="400"
            name="other_info"
            value={product.meta.other_info ? product.meta.other_info : 'NA'}
            onChange={handleFormMetaChange}
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
            { saving ? 'Saving' : 'Update Product' }
          </button>
        </div>
      </form>
    </div>
  </div>
);

export default EditProductForm;
