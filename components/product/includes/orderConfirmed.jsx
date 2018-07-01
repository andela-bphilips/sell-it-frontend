import React from 'react';
import { Link } from 'react-router-dom';

const OrderConfirmed = () => (
  <div className="col-md-9 col-md-push-3">
    <div className="row">
      <h1>Order Confirmed</h1>
      Your order has been confirmed and is being processed.
      Click <Link to='/user/orders'>here</Link> to view your orders.
    </div>
  </div>
);

export default OrderConfirmed;
