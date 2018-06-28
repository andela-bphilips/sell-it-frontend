/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import toastr from 'toastr';
import moment from 'moment';

import {
  getReceivedOrders, cancelOrder,
  processOrder
} from '../../actions/orders.js';

import Loader from '../includes/Loader.jsx';
import numberWithCommas from '../../utils/helper.js';

class ReceivedOrders extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      orders: [],
      loading: true
    };

    this.handleOrder = this.handleOrder.bind(this);
  }

  componentDidMount() {
    this.props.getReceivedOrders()
      .then(() => {
        this.setState({ orders: this.props.orders, loading: false });
      })
      .catch(() => {
        toastr.error(this.props.message);
      });
  }

  handleOrder(action, orderId) {
    this.props.processOrder({ status: action, order_id: orderId })
      .then(() => {
        this.setState({ orders: this.props.orders });
        toastr.success(this.props.message);
      })
      .catch(() => {
        toastr.error(this.props.message);
      });
  }

  render() {
    const { orders, loading } = this.state;
    let pagination;


    if (loading) {
      return <Loader />;
    }
    if (orders.pagination) {
      pagination = (<ReactPaginate
        previousLabel={<i className="fas fa-chevron-circle-left" />}
        nextLabel={<i className="fas fa-chevron-circle-right" />}
        breakLabel={<a href="">...</a>}
        breakClassName="break-me"
        pageCount={orders.pagination.totalPages
          ? orders.pagination.totalPages : 0}
        marginPagesDisplayed={3}
        pageRangeDisplayed={orders.pagination.totalOrders > 9 ? 10
          : orders.pagination.totalPages}
        onPageChange={this.handlePageClick}
        containerClassName="pagination justify-content-center"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        nextClassName="page-item next-button"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"
        disabledClassName="disabled"
        activeClassName="active"
      />);
    }
    return (
      <div className="col-md-9 col-md-push-3">
        <div className="page-header text-center">
          <h1>Received Orders</h1>
          <p>This is the list of orders you receive from intrested buyers </p>
        </div>
        {!loading && orders.orders.length === 0 &&
        <h2>You have no orders yet</h2>
        }
        {!loading && orders.orders.length > 0 &&
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Status</th>
                <th>Qty</th>
                <th>Date</th>
                <th>Buyer Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              { orders.orders.map(order =>
                (
                  <tr key={order.id}>
                    <td className="product-col">
                      <div className="product">
                        <Link to="#">
                          {order.product.productName}
                        </Link>
                        <h3 className="product-title">
                          <Link to="#">{order.productName}</Link>
                        </h3>
                      </div>
                    </td>
                    <td className="price-col">
                      {order.currency} {numberWithCommas(order.negotiatedPrice)}
                    </td>
                    <td className="status-col">
                      {order.buyerOrderStatus === 'in_progress'
                        ? 'Pending' : ''}
                      {order.buyerOrderStatus === 'cancelled'
                        ? 'Cancelled' : ''}
                      {order.sellerOrderStatus === 'approved'
                        ? 'Approved' : ''}
                      {order.sellerOrderStatus === 'rejected'
                        ? 'Rejected' : ''}
                      {order.sellerOrderStatus === 'completed'
                        ? 'Completed' : ''}
                    </td>
                    <td className="quantity-col">{order.orderQuantity}</td>
                    <td className="date-col">
                      {moment(order.createdAt).fromNow()}
                    </td>
                    <td className="buyer-col">
                      {order.buyer_name}
                    </td>
                    {
                      order.sellerOrderStatus !== 'rejected' &&
                      <td>
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-primary dropdown-toggle"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Action <span className="caret" />
                          </button>
                          {
                            order.buyerOrderStatus === 'in_progress' &&
                            <ul className="dropdown-menu">
                              <li>
                                <a onClick={() =>
                                  this.handleOrder('approved', order.id)}
                                >
                                  Accept
                                </a>
                              </li>
                              <li role="separator" className="divider" />
                              <li>
                                <a onClick={() =>
                                  this.handleOrder('rejected', order.id)}
                                >
                                  Reject
                                </a>
                              </li>
                            </ul>
                          }
                          {
                            order.sellerOrderStatus === 'approved' &&
                            <ul className="dropdown-menu">
                              <li>
                                <a onClick={() =>
                                  this.handleOrder('completed', order.id)}
                                >
                                  Complete
                                </a>
                              </li>
                            </ul>
                          }
                        </div>
                      </td>
                    }
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        }
        <nav aria-label="Page Navigation">
          {orders.pagination.totalPages > 1 ? pagination : null}
        </nav>
      </div>
    );
  }
}

const mapStateToProps = ({ message, orders }) => ({
  message, orders
});

export default connect(mapStateToProps, {
  getReceivedOrders, cancelOrder, processOrder
})(ReceivedOrders);
