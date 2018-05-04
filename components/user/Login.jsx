import React, { Component } from 'react';

const loginGateway = process.env.loginGateway;
const baseUrl = process.env.baseUrl;

class Login extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-4 col-lg-3 align-items-center login-main">
            <div className="container">
              <div className="mt-4">
                <img
                  src="assets/images/andela-logo.png"
                  height={70}
                  alt="Logo"
                  className="mt-3"
                />
              </div>
              <div>
                <p className="login-title-text">
                  Welcome to Sell-It!
                </p>
                <p className="login-helper-text">
                  Sign in with your andela email to proceed
                </p>
                <div className="pt-3 mt-4">
                  <a
                    className="btn btn-primary btn-lg"
                    href={`${loginGateway}/login?redirect_url=${baseUrl}/auth`}
                  >
                    LOGIN WITH GOOGLE
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 col-lg-9 login-side" />
        </div>
      </div>
    );
  }
}

export default Login;
