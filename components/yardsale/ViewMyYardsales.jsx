/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import toastr from 'toastr';

import Loader from '../includes/Loader.jsx';

import { getMyYardsales } from '../../actions/yardsale.js';

class ViewAllYardsales extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      loading: false,
      yardsales: []
    };
  }

  componentWillMount() {
    this.setState({ loading: true });
    this.props.getMyYardsales()
      .then(() => this.setState({
        loading: false,
        yardsales: this.props.yardsales
      }))
      .catch(() => {
        this.setState({ loading: false });
        toastr.error(this.props.message);
      });
  }

  render() {
    const { loading, yardsales } = this.state;

    if (loading) {
      return <Loader />;
    }
    return (
      <div className="col-md-9 col-md-push-3">
        <div className="page-header">
          <h1>My Yardsales</h1>
          <div className="text-right">
            <Link
              className="btn btn-primary admin-view-button"
              to="/yardsale/new"
              type="button"
            >
              Add new yardsale
            </Link>
          </div>
        </div>
        <hr />
        <div>
          {
            yardsales.map(yardsale => (
              <div
                key={yardsale.id}
                className="row"
                style={{ padding: `${10}px`, margin: `${0} ${20}px` }}
              >
                <span
                  className="col-md-6 product-title"
                  style={{ fontSize: `${16}px` }}
                >
                  {yardsale.name.toUpperCase()}
                </span>
                <div className="col-md-3">
                  <Link to={`/yardsale/${yardsale.name}`}>
                    View Yardsale
                  </Link>
                </div>
                <div className="col-md-3">
                  <Link to={`/yardsale/products/${yardsale.name}`}>
                    View Products
                  </Link>
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

export default connect(mapStateToProps, { getMyYardsales })(ViewAllYardsales);
