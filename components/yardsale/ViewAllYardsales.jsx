/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import toastr from 'toastr';

// import ErrorPage from '../includes/ErrorPage.jsx';
// import Loader from '../includes/Loader.jsx';

import { getAllYardsales } from '../../actions/yardsale.js';

class ViewAllYardsales extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      // loading: false,
      yardsales: []
    };
  }

  componentWillMount() {
    this.props.getAllYardsales()
      .then(() => this.setState({ yardsales: this.props.yardsales }))
      .catch(() => toastr.error(this.props.message));
  }

  render() {
    const { yardsales } = this.state;
    return (
      <div className="col-md-9 col-md-push-3">
        <h1>Current and Upcoming Yardsales</h1>
        <div>
          {
            yardsales.map(yardsale => (
              <div key={yardsale.id}>
                <span className="float-left">{yardsale.name}</span>
                <div className="float-right">
                  <Link to={`/yardsale/${yardsale.name}`}>View Yardsale</Link>
                  <Link to={`/yardsale/products/${yardsale.name}`}>View Products</Link>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({
  auth, message, yardsales
}) => ({
  auth, message, yardsales
});

export default connect(mapStateToProps, { getAllYardsales })(ViewAllYardsales);
