/* eslint-disable react/prop-types */
import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getCategories } from '../../actions/category.js';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      category: '',
      search: ''
    };

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getCategories('categories')
      .then(() => {
        this.setState({ categories: this.props.categories });
      })
      .catch(() => console.log(this.props.message));
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleCategorySelect(category) {
    this.setState({ category });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { category, search } = this.state;
    this.context.router.history.push(
      `/products?search=${search}&category=${category}`);
  }

  render() {
    const { categories, category, search } = this.state;

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
              {category === '' ? 'All categories' : category }
              <i className="fa fa-caret-down" />
            </a>
            <ul className="dropdown-menu">
              {
                categories.map(categ =>
                  (
                    <li key={categ.id}>
                      <a
                        onClick={() =>
                          this.handleCategorySelect(categ.category_title)}
                      >
                        {categ.category_title}
                      </a>
                    </li>
                  ))
              }
            </ul>
          </div>{/* End .dropddown */}
          <input
            type="search"
            name="search"
            className="form-control"
            value={search}
            onChange={this.onChange}
            placeholder="Search"
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

const mapStateToProps = ({ categories, message }) => ({
  categories, message
});

export default connect(mapStateToProps, { getCategories })(SearchBar);
