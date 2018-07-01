/* eslint-disable jsx-a11y/label-has-for  */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';

class CreateYardsale extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  componentWillMount() {
    console.log('CWM');
  }

  render() {
    return (
      <div className="col-md-9 col-md-push-3">
        <div className="page-header text-center">
          <h1>Add yardsale Product</h1>
        </div>
        <div>
          <form className="col-lg-10 col-lg-push-1">
            <div className="form-group">
              <label>Product name</label>
              <input
                type="text"
                name="product_name"
                className="form-control"
                placeholder="Macbook"
                required
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                name="description"
                className="form-control"
                rows="5"
                required
              />
            </div>

            <div className="form-group">
              <div className="row">
                <div className="inline-fields col-sm-12 col-md-4">
                  <label>Condition</label>
                  <select
                    name="condition"
                    className="form-control"
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
                    className="btn-btn-secondary inline form-control"
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
                    name="quantity"
                    className="form-control"
                    min="1"
                    required
                  />
                </div>
                <div className="inline-fields col-sm-12 col-md-4">
                  <label>Currency</label>
                  <select
                    name="currency"
                    className="form-control"
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
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-group clearfix form-action">
              <button
                type="submit"
                className="btn btn-primary pull-left min-width"
              >
                Add item
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateYardsale;
