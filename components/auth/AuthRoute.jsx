import React, { Component } from 'react';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import jwtDecode from 'jwt-decode';
import { connect } from 'react-redux';
import { PacmanLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import { userLoginRequest, resendVerificationMail } from '../../actions/auth';

import Loader from '../includes/Loader.jsx';


class AuthRoute extends Component {
  componentWillMount() {
    const urldata = queryString.parse(this.props.location.search);
    const token = urldata.token;
    if (token) {
      let user = jwtDecode(token);
      if (user) {
        user = user.UserInfo;
        const fullname = user.name;
        const email = user.email;
        const andela_id = user.id;
        const image_url = user.picture;
        this.props.userLoginRequest({
          fullname, email, andela_id, image_url
        });
      }
    } else {
      this.context.router.history.push('/login');
    }
  }
  render() {
    return <Loader />;
  }
}

AuthRoute.contextTypes = {
  router: PropTypes.object.isRequired
};

export default connect(null, { userLoginRequest })(AuthRoute);
