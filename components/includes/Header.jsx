import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar.jsx';

class Header extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      location: ''
    };
    this.setLocation = this.setLocation.bind(this);
  }

  setLocation(location) {
    localStorage.setItem('userLocation', location);
    this.setState({ location });
    axios.defaults.headers.common.Location = location;
  }

  componentWillMount() {
    const location = localStorage.getItem('userLocation');
    this.setState({ location });
    axios.defaults.headers.common.Location = location;    
  }

  render() {
    return (
      <header className="header sticky-header">
        <div className="container">
          <Link to="/" className="site-logo" title="Andela Sell It">
              <img
                src="/assets/images/andela-logo.png"
                width={100}
                height={48}
                alt="Logo"
              />
              <span className="sr-only">Andela Sell It</span>
            </Link>

          <div className="header-dropdowns">
            <div className="dropdown header-dropdown">
               <a className="dropdown-toggle" href="#" data-toggle="dropdown" role="button" aria-expanded="false">
            {this.state.location}
            <i className="fa fa-caret-down" />
          </a>
               <ul className="dropdown-menu">
                <li><Link to="#" onClick={() => { this.setLocation('Lagos'); location.reload() }} title="Spanish">Lagos</Link></li>
                <li><Link to="#" onClick={() => { this.setLocation('Nairobi'); location.reload() }} title="Spanish">Nairobi</Link></li>
                <li><Link to="#" onClick={() => { this.setLocation('Kampala'); location.reload() }} title="Turkish">Kampala</Link></li>
                <li><Link to="#" onClick={() => { this.setLocation('New York'); location.reload() }} title="German">New York</Link></li>
              </ul>
             </div>{/* End .dropddown */}
          </div>

          <a href="#" className="sidemenu-btn" title="Menu Toggle">
            <span />
            <span />
            <span />
          </a>

          <SearchBar />
          {/* End .search-form-container */}

          <ul className="top-links">
            <li>
               <Link to="/products/create" id="sell-product">Sell A Product</Link>
             </li>
          </ul>
          
        </div>{/* End .container-fluid */}
      </header>
    );
  }
}

export default Header;
