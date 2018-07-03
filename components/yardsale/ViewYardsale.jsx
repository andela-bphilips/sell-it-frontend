/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Countdown from 'react-countdown-now';
import { connect } from 'react-redux';
import toastr from 'toastr';

import AdminViewYardsale from './AdminViewYardsale.jsx';
import ErrorPage from '../includes/ErrorPage.jsx';
import Loader from '../includes/Loader.jsx';
import ViewLiveYardsale from './ViewLiveYardsale.jsx';

import { getUsers } from '../../actions/users.js';
import { getYardsale } from '../../actions/yardsale.js';

class ViewYardsale extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      countdown: false,
      countdownTo: null,
      loading: false,
      message: '',
      products: [],
      statusCode: null,
      userId: null,
      users: [],
      selectedUser: [],
      yardsale: {}
    };

    this.getYardsaleProducts = this.getYardsaleProducts.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  componentWillMount() {
    const yardsaleName = this.props.match.params.name;

    let date1, date2, countdown;
    this.setState({ loading: true });
    this.props.getYardsale(yardsaleName)
      .then(() => {
        const { auth, yardsale } = this.props;
        date1 = new Date();
        date2 = new Date(`${yardsale.start_date} ${yardsale.start_time}`);
        if (date1.getTime() >= date2.getTime()) {
          countdown = false;
        } else {
          countdown = true;
        }
        this.props.getUsers()
          .then(() => {
            const { users } = this.props;

            const usersData = users.map(user => ({
              label: user.email,
              value: user.id
            }));

            const selectedUsers = [];
            yardsale.administrators.forEach((id) => {
              usersData.forEach((user) => {
                if (user.value === id) {
                  selectedUsers.push(user);
                }
              });
            });

            this.setState({
              countdown,
              countdownTo: date2.getTime(),
              loading: false,
              selectedUser: selectedUsers,
              statusCode: null,
              userId: auth.user.id,
              users: usersData,
              yardsale
            });
          })
          .catch(() => toastr.error(this.props.message));
      })
      .catch(() => {
        if (this.props.statusCode !== 401) {
          this.setState({
            loading: false,
            message: this.props.message,
            statusCode: this.props.statusCode
          });
        } else {
          this.setState({
            loading: false
          }, () => this.getYardsaleProducts());
        }
      });
  }

  getYardsaleProducts() {
    this.setState({ products: ['asdas'] });
  }

  handleSelectChange(value) {
    console.log('You\'ve selected:', value);
    this.setState({ selectedUser: value });
  }

  render() {
    const {
      countdown, countdownTo, loading, message, products,
      statusCode, userId, users, selectedUser, yardsale
    } = this.state;

    if (loading) {
      return <Loader />;
    } else if (countdown) {
      // IF VISITOR IS CREATOR OR ADMIN, DISPLAY THE YARDSALE DETAILS
      // ELSE SHOW THE COUNTDOWN TIMER
      if ((userId === yardsale.user_id) ||
        (yardsale.administrators.indexOf(userId)) >= 0) {
        return (
          <AdminViewYardsale
            handleSelectChange={this.handleSelectChange}
            users={users}
            value={selectedUser}
            yardsale={yardsale}
          />
        );
      }
      return (
        <div className="hide-sidebar-display col-md-12">
          <center className="count-down-wrapper">
            <div className="count-down">
              <h1>Going live in</h1>
              <div className="time-wrapper">
                <Countdown date={countdownTo} />
              </div>
            </div>
          </center>
        </div>
      );
    } else if (statusCode) {
      return <ErrorPage message={message} statusCode={statusCode} />;
    } else if (products.length > 0) {
      return (
        <ViewLiveYardsale products={products} yardsale={yardsale} />
      );
    } else if (products.length === 0) {
      return (
        <div>
          An error occured. Yard sale not displayed (Products exhausted)
        </div>
      );
    }
  }
}

const mapStateToProps = ({
  auth, message, statusCode, users, yardsale
}) => ({
  auth, message, statusCode, users, yardsale
});

export default connect(mapStateToProps, {
  getUsers, getYardsale
})(ViewYardsale);
