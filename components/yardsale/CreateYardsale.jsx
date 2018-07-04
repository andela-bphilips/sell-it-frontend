/* eslint-disable jsx-a11y/label-has-for  */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import toastr from 'toastr';

import Loader from '../includes/Loader.jsx';

import { getUsers } from '../../actions/users.js';
import { createYardsale } from '../../actions/yardsale.js';

class CreateYardsale extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      users: [],
      saving: false,
      selectedUser: '',
      yardsale: {}
    };

    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.saveYardsale = this.saveYardsale.bind(this);
  }

  componentWillMount() {
    this.setState({ loading: true });
    this.props.getUsers()
      .then(() => {
        const { users } = this.props;

        const usersData = users.map(user => ({
          label: user.email,
          value: user.id
        }));

        this.setState({
          loading: false,
          users: usersData,
        });
      })
      .catch(() => toastr.error(this.props.message));
  }

  handleFormChange(event) {
    const field = event.target.name;
    const { yardsale } = this.state;

    yardsale[field] = event.target.value;
    return this.setState({ yardsale });
  }

  handleSelectChange(value) {
    this.setState({ selectedUser: value });
  }

  saveYardsale(event) {
    event.preventDefault();
    const { selectedUser, yardsale } = this.state;
    const timeNow = new Date();
    let startTime = `${yardsale.start_date} ${yardsale.start_time}`;
    let endTime = `${yardsale.end_date} ${yardsale.end_time}`;
    startTime = new Date(startTime);
    endTime = new Date(endTime);

    if (!yardsale.location) {
      return toastr.error('Please select a location');
    } else if (startTime.getTime() < timeNow.getTime()) {
      return toastr.error('The start time cannot be in the past.');
    } else if (endTime.getTime() <= timeNow.getTime()) {
      return toastr.error('The end time cannot be in the past.');
    } else if (endTime.getTime() <= startTime.getTime()) {
      return toastr.error('The start time must be before the end time.');
    } else if (selectedUser) {
      yardsale.administrators = selectedUser.replace(' ', '').split(',');
    }

    this.props.createYardsale(yardsale)
      .then(() => {
        toastr.success(this.props.message);
        this.props.history.push(`/yardsale/${yardsale.name}`);
      })
      .catch(() => {
        toastr.error(this.props.message);
      });
  }

  render() {
    const {
      disabled, loading, saving, users,
      selectedUser, yardsale
    } = this.state;

    if (loading) {
      return <Loader />;
    }
    return (
      <div className="col-md-9 col-md-push-3">
        <div className="page-header text-center">
          <h1>Create yardsale</h1>
        </div>
        <div className="row">
          <form
            className="col-lg-10 col-lg-push-1"
            onSubmit={this.saveYardsale}
          >
            <div className="form-group">
              <label>Yardsale Department</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={yardsale.name || ''}
                onChange={this.handleFormChange}
                placeholder="e.g 'operations' for Operations yardsale"
                required
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                name="description"
                className="form-control"
                value={yardsale.description || ''}
                onChange={this.handleFormChange}
                rows="5"
                required
              />
            </div>

            <div className="form-group">
              <label>Terms and Conditions</label>
              <textarea
                name="t_and_c"
                className="form-control"
                value={yardsale.t_and_c || ''}
                onChange={this.handleFormChange}
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
                onChange={this.handleSelectChange}
                options={users}
                removeSelected={false}
                rtl={false}
                simpleValue
                value={selectedUser}
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
                      value={yardsale.start_date || ''}
                      min={new Date().toISOString().slice(0, 10)}
                      onChange={this.handleFormChange}
                      required
                    />
                    <input
                      type="time"
                      name="start_time"
                      className="col-sm-12 col-md-4 inline form-control"
                      value={yardsale.start_time || ''}
                      onChange={this.handleFormChange}
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
                      value={yardsale.end_date || ''}
                      min={new Date().toISOString().slice(0, 10)}
                      onChange={this.handleFormChange}
                      required
                    />
                    <input
                      type="time"
                      name="end_time"
                      className="col-sm-12 col-md-4 inline form-control"
                      value={yardsale.end_time || ''}
                      onChange={this.handleFormChange}
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
                      onChange={this.handleFormChange}
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
                      name="buyer_limit"
                      className="form-control"
                      min="1"
                      value={yardsale.buyer_limit || ''}
                      onChange={this.handleFormChange}
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
                { saving ? 'Saving' : 'Create Yardsale' }
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({
  auth, message, statusCode, users
}) => ({
  auth, message, statusCode, users
});

export default connect(mapStateToProps, {
  createYardsale, getUsers
})(CreateYardsale);
