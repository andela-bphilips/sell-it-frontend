import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home/Home.jsx';
import Header from './includes/Header.jsx';
import SideNav from './includes/SideNav.jsx';
import CategoryNav from './includes/CategoryNav.jsx';
import Footer from './includes/Footer.jsx';
import ProductPage from './product/ProductPage.jsx';
import AllProduct from './product/AllProductPage.jsx';
import MyProductPage from './product/MyProductPage.jsx';
import MyOrders from './user/MyOrders.jsx';
import ReceivedOrders from './user/ReceivedOrders.jsx';
import MyProfile from './user/MyProfile.jsx';
import CreateProduct from './product/CreateProduct.jsx';

const Template = () => (
  <div>
    <div id="wrapper">
      <div className="sidemenu-overlay" />
      <div className="main">
        <div className="container">
          <div className="row">
            <Header />
            <SideNav />
            <Switch>
              <Route exact="exact" path="/" component={Home} />
              <Route
                exact="exact"
                path="/products/create"
                component={CreateProduct}
              />
              <Route
                exact="exact"
                path="/product/:product"
                component={ProductPage}
              />
              <Route
                exact="exact"
                path="/products"
                component={AllProduct}
              />
              <Route
                exact="exact"
                path="/user/products"
                component={MyProductPage}
              />
              <Route exact="exact" path="/user/orders" component={MyOrders} />
              <Route exact="exact" path="/orders" component={ReceivedOrders} />
              <Route exact="exact" path="/user/profile" component={MyProfile} />
            </Switch>
            <CategoryNav />
          </div>
        </div>
      </div>
      <Footer />
    </div>
    <a id="scroll-top" href="#top" title="Scroll top">
      <i className="fa fa-angle-up" />
    </a>
  </div>
);

export default Template;
