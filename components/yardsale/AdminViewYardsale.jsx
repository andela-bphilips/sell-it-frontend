/* eslint-disable jsx-a11y/label-has-for  */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import ReactFileReader from 'react-file-reader';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import Papa from 'papaparse';

import 'react-select/dist/react-select.css';

const handleCsvFiles = (bulkApiCall, file) => {
  const reader = new FileReader();
  let uploadedProducts;
  reader.onload = () => {
    uploadedProducts = reader.result;

    if (uploadedProducts) {
      Papa.parse(uploadedProducts, {
        header: true,
        complete: (results) => {
          bulkApiCall(results.data);
        }
      });
    }
  };
  reader.readAsText(file[0]);
};

const AdminViewYardsale = ({
  disabled, handleFormChange, handleSelectChange, saving, updateYardsale,
  users, value, yardsale, bulkApiCall
}) => (
  <div className="col-md-9 col-md-push-3">
    <div className="row">
      <div>
        <div className="col-lg-10 col-lg-push-1 title-group">
          <h1 className="title">{yardsale.name} yard sale</h1>
          <div className="text-right">
            {/* className="col-lg-10 col-lg-push-1" */}
            <Link
              className="btn btn-primary admin-view-button"
              to={`/yardsale/product/new?yardsale=${yardsale.name}`}
              type="button"
            >
              Add new yardsale product
            </Link>
            <ReactFileReader
              className="col-lg-10 col-lg-push-1"
              handleFiles={handleCsvFiles.bind(null, bulkApiCall)}
              fileTypes=".csv"
            >
              <button
                className="btn btn-primary admin-view-button"
                id="upload-csv-button"
              >
                Bulk Add products
              </button>
            </ReactFileReader>
          </div>
          <hr />
        </div>
        <form
          className="col-lg-10 col-lg-push-1"
          onSubmit={updateYardsale}
        >
          <div className="form-group">
            <label>Yardsale Department</label>
            <input
              type="text"
              name="department"
              className="form-control"
              value={yardsale.name}
              onChange={handleFormChange}
              placeholder="e.g 'operations' for Operations yardsale"
              readOnly
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              className="form-control"
              value={yardsale.description}
              onChange={handleFormChange}
              rows="5"
              required
            />
          </div>

          <div className="form-group">
            <label>Terms and Conditions</label>
            <textarea
              name="t_and_c"
              className="form-control"
              value={yardsale.t_and_c}
              onChange={handleFormChange}
              rows="5"
              required
            />
          </div>

          <div className="form-group">
            <label>Payment Information</label>
            <textarea
              name="payment_info"
              className="form-control"
              value={yardsale.payment_info}
              onChange={handleFormChange}
              rows="5"
              required
            />
          </div>


          <div className="form-group">
            <label>Yardsale Administrators</label>
            <Select
              className="react-select-field"
              closeOnSelect={false}
              disabled={disabled}
              multi
              name="yardsale_admins"
              onChange={handleSelectChange}
              options={users}
              removeSelected={false}
              rtl={false}
              simpleValue
              value={value}
            />
          </div>

          <div className="form-group">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <div className="row">
                  <label>Yardsale Start</label>
                </div>
                <div className="row">
                  <input
                    type="date"
                    name="start_date"
                    className="col-sm-12 col-md-8 inline form-control"
                    value={yardsale.start_date}
                    min={new Date().toISOString().slice(0, 10)}
                    onChange={handleFormChange}
                    disabled={yardsale.ongoing_yardsale
                      || yardsale.past_yardsale}
                    required
                  />
                  <input
                    type="time"
                    name="start_time"
                    className="col-sm-12 col-md-4 inline form-control"
                    value={yardsale.start_time}
                    onChange={handleFormChange}
                    disabled={yardsale.ongoing_yardsale
                      || yardsale.past_yardsale}
                    required
                  />
                </div>
              </div>

              <div className="col-sm-12 col-md-6">
                <label>Yardsale End</label>
                <div className="row">
                  <input
                    type="date"
                    name="end_date"
                    className="col-sm-12 col-md-8 inline form-control"
                    value={yardsale.end_date}
                    min={new Date().toISOString().slice(0, 10)}
                    onChange={handleFormChange}
                    disabled={yardsale.past_yardsale}
                    required
                  />
                  <input
                    type="time"
                    name="end_time"
                    className="col-sm-12 col-md-4 inline form-control"
                    value={yardsale.end_time}
                    onChange={handleFormChange}
                    disabled={yardsale.past_yardsale}
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="form-group">
            <div className="row">
              <div className="col-sm-12 col-md-3 insert-margin-right">
                <div className="row">
                  <label>Yardsale Location *</label>
                </div>
                <div className="row">
                  <select
                    className="form-control"
                    name="location"
                    value={yardsale.location}
                    onChange={handleFormChange}
                  >
                    <option>-</option>
                    <option value="lagos">Lagos</option>
                    <option value="nairobi">Nairobi</option>
                    <option value="kampala">Kampala</option>
                    <option value="new york">New York</option>
                  </select>
                </div>
              </div>

              <div className="col-sm-12 col-md-2">
                <div className="row">
                  <label>Buyer Limit</label>
                </div>
                <div className="row">
                  <input
                    type="number"
                    name=""
                    className="form-control"
                    min="1"
                    value={yardsale.buyer_limit}
                    onChange={handleFormChange}
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
              disabled={saving}
            >
              { saving ? 'Saving' : 'Update Yardsale' }
            </button>
          </div>
        </form>
      </div>
    </div>
    {/* <div className="mb50" /> */}
  </div>
);

export default AdminViewYardsale;
