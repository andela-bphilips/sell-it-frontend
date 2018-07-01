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
          <h1>Create yardsale</h1>
        </div>
        <div>
          <form className="col-lg-10 col-lg-push-1">
            <div className="form-group">
              <label>Yardsale Department</label>
              <input
                type="text"
                name="department"
                className="form-control"
                placeholder="e.g 'operations' for Operations yardsale"
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
              <label>Terms and Conditions</label>
              <textarea
                name="t_and_c"
                className="form-control"
                rows="5"
                required
              />
            </div>

            <div className="form-group">
              <label>Yardsale Administrators</label>
              <input
                type="text"
                name="yardsale_admins"
                className="form-control"
                required
              />
            </div>

            <div className="form-group">
              <div className="row">
                <div className="col-sm-4">
                  <label>Buyer Limit</label>
                  <div className="row">
                    <select
                      name="buyer_limit"
                      className="col-sm-6 form-control"
                      required
                    >
                      <option>-</option>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                    </select>
                    <input
                      type="number"
                      name=""
                      className="col-sm-6 form-control"
                      min="1"
                      required
                    />
                  </div>
                </div>

                <div className="col-sm-7 col-sm-push-1">
                  <label>Yardsale Time</label>
                  <div className="row">
                    <input
                      type="date"
                      name="yardsale_date"
                      className="col-md-6 inline form-control"
                      required
                    />
                    <input
                      type="time"
                      name="yardsale_time"
                      className="col-md-6 inline form-control"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="form-group clearfix form-action">
              <button
                type="submit"
                className="btn btn-primary pull-left min-width"
              >
                Create Yardsale
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateYardsale;
