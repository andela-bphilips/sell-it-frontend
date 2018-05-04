import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.context.router.history.push(`/products?search=${this.state.search}`);
  }
  render() {
    return (
      <div className="search-form-container">
        <a href="#" className="search-form-toggle" title="Toggle Search">
          <i className="fa fa-search" />
        </a>
        <form onSubmit={this.handleSubmit}>
          <div className="dropdown search-dropdown">
            <a
              className="dropdown-toggle"
              href="#"
              data-toggle="dropdown"
              role="button"
              aria-expanded="false"
            >
              All Category
              <i className="fa fa-caret-down" />
            </a>
            <ul className="dropdown-menu">
              <li>
                  <a href="#">Fashion</a>
                </li>
              <li>
                  <a href="#">Electronics</a>
                </li>
              <li>
                  <a href="#">Furniture</a>
                </li>
              <li>
                  <a href="#">Equipments</a>
                </li>
            </ul>
          </div>{/* End .dropddown */}
          <input
            type="search"
            name="search"
            className="form-control"
            value={this.state.search}
            onChange={this.onChange}
            placeholder="Search"
            required="required"
          />
          <button type="submit" title="Search" className="btn">
            <i className="fa fa-search" />
          </button>
        </form>
      </div>
    );
  }
}

SearchBar.contextTypes = {
  router: PropTypes.object.isRequired
};
