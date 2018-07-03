/* eslint-disable react/prop-types */
import React from 'react';

/**
 * @class Loader
 * @extends {Component}
 */
const ErrorPage = ({ message, statusCode }) => (
  <div className="hide-sidebar-display col-md-12">
    <center className="count-down-wrapper">
      <div className="error-box">
        <h1>{statusCode}</h1>
        <p>{message}</p>
      </div>
    </center>
  </div>);

export default ErrorPage;
