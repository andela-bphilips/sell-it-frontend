/* eslint-disable react/prop-types */
import React from 'react';

const defaultMessage = 'Oops! The requested page was not found!!!';

/**
 * @class Loader
 * @extends {Component}
 */
const ErrorPage = ({ message = defaultMessage, statusCode = 404 }) => (
  <div className="hide-sidebar-display col-md-12">
    <center className="count-down-wrapper">
      <div className="error-box">
        <h1>{statusCode}</h1>
        <p>{message}</p>
      </div>
    </center>
  </div>);

export default ErrorPage;
