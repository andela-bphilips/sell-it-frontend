/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Countdown from 'react-countdown-now';
import { connect } from 'react-redux';
import toastr from 'toastr';

import ErrorPage from '../includes/ErrorPage.jsx';
import Loader from '../includes/Loader.jsx';
import ViewLiveYardsale from './ViewLiveYardsale.jsx';

import { getYardsaleProducts } from '../../actions/yardsale.js';

class YardsaleProducts extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      admin: false,
      buyerLimit: 0,
      countDown: false,
      countDownTo: null,
      location: null,
      loading: false,
      startDate: null,
      startTime: null,
      pagination: {},
      products: [],
      yardsaleName: null
    };
  }

  componentWillMount() {
    const { yardsaleName } = this.props.match.params;

    this.setState({ loading: true });
    this.props.getYardsaleProducts(yardsaleName)
      .then(() => {
        const { products } = this.props;
        let date2;

        this.setState({
          admin: products.yardsaleInfo.admin,
          buyerLimit: products.yardsaleInfo.buyerLimit,
          countDown: products.yardsaleInfo.countdown,
          location: products.yardsaleInfo.location,
          loading: false,
          startDate: products.yardsaleInfo.startDate,
          startTime: products.yardsaleInfo.startTime,
          pagination: products.pagination,
          products: products.products,
          yardsaleName: products.yardsaleInfo.name
        }, () => {
          console.log(this.state);
          const { startDate, startTime } = this.state;
          date2 = new Date(`${startDate} ${startTime}`);
          this.setState({ countDownTo: date2 });
        });
      })
      .catch(() => {
        this.setState({ loading: false });
        toastr.error(this.props.message);
      });
  }

  render() {
    const {
      countDown, countDownTo, loading,
      products, yardsaleName
    } = this.state;
    if (loading) {
      return <Loader />;
    } else if (countDown) {
      return (
        <div className="hide-sidebar-display col-md-12">
          <center className="count-down-wrapper">
            <div className="count-down">
              <h1>Going live in</h1>
              <div className="time-wrapper">
                <Countdown date={countDownTo} />
              </div>
            </div>
          </center>
        </div>
      );
    } else if (products.length > 0) {
      return (
        <ViewLiveYardsale products={products} yardsaleName={yardsaleName} />
      );
    }
    return <ErrorPage message="No products found for this yardsale." />;
  }
}

const mapStateToProps = ({
  auth, message, products, statusCode, users, yardsale
}) => ({
  auth, message, products, statusCode, users, yardsale
});

export default connect(mapStateToProps, {
  getYardsaleProducts
})(YardsaleProducts);
