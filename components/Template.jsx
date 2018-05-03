import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home/Home.jsx';
import Header from './includes/Header.jsx';
import SideNav from './includes/SideNav.jsx';
import CategoryNav from './includes/CategoryNav.jsx';
import Footer from './includes/Footer.jsx';
import ProductPage from './product/ProductPage.jsx';
import AllProductPage from './product/AllProductPage.jsx';
import MyProductPage from './product/MyProductPage.jsx';
import MyOrdersPage from './user/MyOrdersPage.jsx';
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
              <Route exact="exact" path="/product" component={ProductPage} />
              <Route exact="exact" path="/product/create" component={CreateProduct} />
              <Route
                exact="exact"
                path="/products"
                component={AllProductPage}
              />
              <Route exact="exact" path="/user/products" component={MyProductPage} />
              <Route exact="exact" path="/user/orders" component={MyOrdersPage} />
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
