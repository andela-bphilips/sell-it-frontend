/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { logout } from '../../actions/auth';

class SideNav extends Component {
  constructor(props, context) {
    super(props, context);

    this.logout = this.logout.bind(this);
  }

  logout(event) {
    event.preventDefault();
    this.props.logout();
    this.context.router.history.push('/login');
  }

  render() {
    return (
      <aside className="sidemenu">
        <div className="sidemenu-wrapper">
          <div className="sidemenu-header">
            <a href="index.html" className="sidemenu-logo">
              <img src="/assets/images/andela-logo.png" alt="logo" />
            </a>
          </div>

          <ul className="metismenu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/user/profile">My Profile</Link>
            </li>
            <li>
              <Link to="/user/products">My Products</Link>
            </li>
            <li>
              <Link to="/orders">Received Orders</Link>
            </li>
            <li>
              <Link to="/user/orders">My Orders</Link>
            </li>
            <li>
              <Link to="/products/create">Sell A Product</Link>
            </li>
            <li>
              <Link to="/yardsales">View All Yardsales</Link>
            </li>
            <li>
              <Link to="/user/yardsales">View My Yardsales</Link>
            </li>
            <li>
              <Link to="#" onClick={this.logout} >Logout</Link>
            </li>
          </ul>
        </div>
      </aside>
    );
  }
}

SideNav.contextTypes = {
  router: PropTypes.object.isRequired
};

export default connect(null, { logout })(SideNav);
