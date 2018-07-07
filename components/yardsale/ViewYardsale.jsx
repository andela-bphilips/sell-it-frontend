/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import toastr from 'toastr';

import AdminViewYardsale from './AdminViewYardsale.jsx';
import ErrorPage from '../includes/ErrorPage.jsx';
import Loader from '../includes/Loader.jsx';

import { getUsers } from '../../actions/users.js';
import { editYardsale, getYardsale } from '../../actions/yardsale.js';

class ViewYardsale extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      loading: false,
      message: '',
      saving: false,
      statusCode: null,
      updatedYardsale: {},
      userId: null,
      users: [],
      selectedUser: [],
      yardsale: {},
      yardsaleName: ''
    };

    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.updateYardsale = this.updateYardsale.bind(this);
  }

  componentWillMount() {
    const yardsaleName = this.props.match.params.name;

    this.setState({ loading: true });
    this.props.getYardsale(yardsaleName)
      .then(() => {
        const { auth, yardsale } = this.props;

        this.props.getUsers()
          .then(() => {
            const { users } = this.props;

            const usersData = users.map(user => ({
              label: user.email,
              value: user.id
            }));

            const selectedUsers = [];
            if (yardsale.administrators) {
              yardsale.administrators.forEach((id) => {
                usersData.forEach((user) => {
                  if (user.value === id) {
                    selectedUsers.push(user);
                  }
                });
              });
            }

            this.setState({
              loading: false,
              selectedUser: selectedUsers,
              statusCode: null,
              userId: auth.user.id,
              users: usersData,
              yardsale,
              yardsaleName: yardsale.name
            });
          })
          .catch(() => toastr.error(this.props.message));
      })
      .catch(() => {
        this.setState({
          loading: false,
          message: this.props.message,
          statusCode: this.props.statusCode
        });
      });
  }

  handleFormChange(event) {
    const field = event.target.name;
    const { updatedYardsale, yardsale } = this.state;

    updatedYardsale[field] = event.target.value;
    yardsale[field] = event.target.value;
    return this.setState({ updatedYardsale, yardsale });
  }

  handleSelectChange(value) {
    const { updatedYardsale, yardsale } = this.state;

    yardsale.administrators = value.split(',').filter((val => val !== ''));
    updatedYardsale.administrators = yardsale.administrators;
    this.setState({ selectedUser: value, updatedYardsale, yardsale });
  }

  updateYardsale(event) {
    event.preventDefault();
    const { updatedYardsale, yardsale, yardsaleName } = this.state;
    this.setState({ saving: true });
    const timeNow = new Date();

    if (updatedYardsale.start_time) {
      const startTime =
        new Date(`${yardsale.start_date} ${updatedYardsale.start_time}`);

      if (startTime.getTime() < timeNow.getTime()) {
        toastr.error('The yard sale cannot start in the past.');
        return this.setState({ saving: false });
      }
    } else if (updatedYardsale.end_time) {
      const endTime =
        new Date(`${yardsale.end_date} ${updatedYardsale.end_time}`);

      if (endTime.getTime() < timeNow.getTime()) {
        toastr.error('The yard sale cannot end in the past.');
        return this.setState({ saving: false });
      }
    } else if (updatedYardsale.start_time && updatedYardsale.end_time) {
      const startTime =
        new Date(`${yardsale.start_date} ${updatedYardsale.start_time}`);
      const endTime =
        new Date(`${yardsale.end_date} ${updatedYardsale.end_time}`);

      if (endTime.getTime() < startTime.getTime()) {
        toastr.error('The yard sale cannot end before it starts.');
        return this.setState({ saving: false });
      }
    } else {
      if (!updatedYardsale[Object.keys(updatedYardsale)[0]]) {
        this.setState({ saving: false });
        return toastr.error('Please update at least one field to proceed.');
      }
      this.props.editYardsale(yardsaleName, updatedYardsale)
        .then(() => {
          this.setState({ saving: false });
          toastr.success(this.props.message);
        })
        .catch(() => {
          this.setState({ saving: false });
          toastr.error(this.props.message);
        });
    }
  }

  render() {
    const {
      loading, message, statusCode, userId,
      users, saving, selectedUser, yardsale
    } = this.state;

    if (loading) {
      return <Loader />;
    } else if (statusCode) {
      return <ErrorPage message={message} statusCode={statusCode} />;
    }
    return (
      <AdminViewYardsale
        disabled={userId !== yardsale.user_id}
        handleFormChange={this.handleFormChange}
        handleSelectChange={this.handleSelectChange}
        saving={saving}
        updateYardsale={this.updateYardsale}
        users={users}
        value={selectedUser}
        yardsale={yardsale}
      />
    );
  }
}

const mapStateToProps = ({
  auth, message, statusCode, users, yardsale
}) => ({
  auth, message, statusCode, users, yardsale
});

export default connect(mapStateToProps, {
  editYardsale, getUsers, getYardsale
})(ViewYardsale);
