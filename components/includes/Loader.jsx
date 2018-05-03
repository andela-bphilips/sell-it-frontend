import React from 'react';
import { PacmanLoader } from 'react-spinners';

/**
 * @class Loader
 * @extends {Component}
 */
const Loader = () => (
  <div className="container">
    <center className="loader-container">
      <PacmanLoader size="50" margin="35px" color="#3359DF" />
    </center>
  </div>);

export default Loader;
