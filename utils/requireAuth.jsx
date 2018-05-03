import React from 'react';
import PropTypes from 'prop-types';
import jwt from 'jsonwebtoken';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';

/**
 *
 *
 * @export
 * @param {component} ComposedComponent
 */
export default function (ComposedComponent) {
  /**
   *
   *
   * @class Authenticate
   * @extends {React.Component}
   */
  class Authenticate extends React.Component {
    /**
     *
     *
     * @memberof Authenticate
     */
    componentDidMount() {
      let token = localStorage.getItem('jwtToken');
      if (token) {
        token = token.slice('7');
        jwt.verify(token, process.env.TOKEN_KEY, (error) => {
          if (error) {
            console.log(error);
            this.props.logout();
            return this.context.router.history.push('/login');
          }
        });
      } else {
        this.context.router.history.push('/login');
      }
    }

    /**
     *
     *
     * @param {object} nextProps
     * @memberof Authenticate
     */
    // componentWillUpdate(nextProps) {
    //   if (!nextProps.isAuthenticated) {
    //     this.context.router.history.push('/login');
    //   }
    // }

    /**
     *
     *
     * @returns
     * @memberof Authenticate
     */
    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  Authenticate.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
  };

  Authenticate.contextTypes = {
    router: PropTypes.object.isRequired
  };

  /**
 *
 *
 * @param {object} state
 * @returns {boolean}
 */
  function mapStateToProps(state) {
    let isAuthenticated;
    if (state.Auth) {
      isAuthenticated = state.Auth.isAuthenticated;
    } else {
      isAuthenticated = false;
    }
    return {
      isAuthenticated
    };
  }

  return connect(mapStateToProps, { logout })(Authenticate);
}
