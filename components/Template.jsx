import React from 'react';
import { Route, Switch } from 'react-router-dom';

// ORDERS
import MyOrders from './user/MyOrders.jsx';
import ReceivedOrders from './user/ReceivedOrders.jsx';

// PRODUCTS
import ProductPage from './product/ProductPage.jsx';
import AllProduct from './product/AllProductPage.jsx';
import MyProductPage from './product/MyProductPage.jsx';
import CreateProduct from './product/CreateProduct.jsx';
import EditProduct from './product/EditProduct.jsx';

// USERS
import MyProfile from './user/MyProfile.jsx';

// YARDSALE
import CreateYardsale from './yardsale/CreateYardsale.jsx';
import CreateYardsaleProduct from './yardsale/CreateYardsaleProduct.jsx';
import EditYardsaleProduct from './yardsale/EditYardsaleProduct.jsx';
import EditYardsale from './yardsale/EditYardsale.jsx';
import ViewYardsale from './yardsale/ViewYardsale.jsx';

// OTHERS
import Home from './home/Home.jsx';
import Header from './includes/Header.jsx';
import SideNav from './includes/SideNav.jsx';
import CategoryNav from './includes/CategoryNav.jsx';
import Footer from './includes/Footer.jsx';

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
                path="/edit/product/:productId"
                component={EditProduct}
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
              <Route
                exact="exact"
                path="/user/orders"
                component={MyOrders}
              />
              <Route
                exact="exact"
                path="/orders"
                component={ReceivedOrders}
              />
              <Route
                exact="exact"
                path="/user/profile"
                component={MyProfile}
              />
              <Route
                exact="exact"
                path="/new/yardsale"
                component={CreateYardsale}
              />
              <Route
                exact="exact"
                path="/edit/yardsale/:yardsale_name"
                component={EditYardsale}
              />
              <Route
                exact="exact"
                path="/yardsale/:name"
                component={ViewYardsale}
              />
              <Route
                exact="exact"
                path="/new/yardsale/product"
                component={CreateYardsaleProduct}
              />
              <Route
                exact="exact"
                path="/edit/yardsale/product/:yardsale_name"
                component={EditYardsaleProduct}
              />
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
