import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
          <div className="footer-inner">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3">
                <div className="widget widget-about">
                  <h4 className="widget-title">Developers</h4>
                  <address>
                    <span>Philips Blessing</span>
                    <span>Oluwaseun Owonikoko</span>
                    <span>Maranatha Ilesanmi</span>
                    <span>Johnbosco Ohia</span>
                    <a href="mailto:sellitteam@gmail.com">
                      sell.it.helpdesk@gmail.com
                    </a>
                  </address>
                </div>
                {/* End .widget */}
              </div>
              {/* End .col-md-3 */}
              {/* End .col-md-3 */}
              <div className="clearfix visible-sm" />
              {/* clearfix */}
              <div className="col-sm-6 col-md-3">
                <div className="widget">
                  <h4 className="widget-title">My Account</h4>
                  <ul className="links">
                    <li>
                    <Link to="/user/profile">My Profile</Link>
                  </li>
                    <li>
                      <Link to="/user/products">My Products</Link>
                    </li>
                    <li>
                        <Link to="/orders">Received Orders</Link>
                      </li>
                    <li>
                      <Link to="/user/orders">My Orders</Link>
                    </li>
                    <li>
                      <Link to="/products/create">Sell A Product</Link>
                    </li>
                    {/* <li><a href="#">My cart</a></li>
                                    <li><a href="#">Wishlist</a></li>
                                    <li><a href="#">Checkout</a></li> */}
                  </ul>
                </div>
                {/* End .widget */}
              </div>
              {/* End .col-md-3 */}
            </div>
            {/* End .row */}
          </div>
          {/* End .container */}
        </div>
          {/* End .footer-inner */}
          <div className="footer-bottom">
          <div className="container">
            <p className="copyright">Sell It © 2018. All Rights Reserved</p>
            {/* <img src="/assets/images/cards.png" alt="Payment Methods" class="img-cards"> */}
          </div>
          {/* End .container */}
        </div>
          {/* End .footer-bottom */}
        </footer>
    );
  }
}
