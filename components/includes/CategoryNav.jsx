import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getCategories } from '../../actions/category.js';

class CategoryNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };

    // this.onChange = this.onChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCategorySelect = this.handleCategorySelect.bind(this);
  }

  componentDidMount() {
    this.props.getCategories('categories')
      .then(() => {
        this.setState({ categories: this.props.categories });
      })
      .catch(() => console.log(this.props.message));
  }

  handleCategorySelect(category) {
    this.setState({ category }, () => {
      this.context.router.history.push(
        `/products?search=&category=${category}`);
    });
  }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   const { category, search } = this.state;
  // }

  render() {
    const { categories } = this.state;

    return (
      <aside className="col-md-3 col-md-pull-9 sidebar sidebar-shop">
        <div className="widget widget-box widget-shop-category active">
          <h3 className="widget-title">
            Categories
            <a href="#" className="btn-filter" role="button">
              Filter
              <i className="fa fa-caret-down" />
            </a>
          </h3>
          <ul className="shop-category-list accordion">
            {
              categories.map(category =>
                  (
                    <li key={category.id}>
                      <a
                        onClick={() =>
                          this.handleCategorySelect(category.category_title)}
                      >
                        {category.category_title}
                      </a>
                    </li>
                  ))
            }
            {/* <li>
              <a href="category.html">Fashion</a>
              <button
                className="accordion-btn collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#accordion-ul-1"
                aria-expanded="false"
                aria-controls="accordion-ul-1"
              >
                <span className="accordion-icon" />
              </button>
              <ul
                className="collapse"
                id="accordion-ul-1"
                aria-expanded="false"
              >
                <li>
                  <a href="category.html">
                    <i className="fa fa-caret-right" />Women Clothes
                  </a>
                </li>
                <li>
                  <a href="category.html">
                    <i className="fa fa-caret-right" />Men Clothes
                  </a>
                </li>
                <li>
                  <a href="category.html">
                    <i className="fa fa-caret-right" />Shoes
                  </a>
                </li>
              </ul>
            </li> */}
            
            <li>
              <a href="category.html">Health and Beauty</a>
            </li>
          </ul>
        </div>
        {/* End .widget */}
        <div className="widget widget-box widget-shop-filter">
          <h3 className="widget-title">
            Filter{' '}
              <a href="#" className="btn-category" role="button">
              Categories<i className="fa fa-caret-down" />
            </a>
            </h3>
          <div className="filter-box">
              <h5 className="filter-label">Sort By</h5>
              <ul className="shop-filter-list">
              <li>
                <a href="#">
                  <i className="fa fa-caret-right" />Default
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-caret-right" />Popularity
                </a>
              </li>
              <li className="active">
                <a href="#">
                  <i className="fa fa-caret-right" />Average Rating
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-caret-right" />Newness
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-caret-right" />Price: Low to
                  high
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-caret-right" />Price: high to
                  Low
                </a>
              </li>
            </ul>
            </div>
          {/* End .filter-box */}
          <div className="filter-box">
              <h5 className="filter-label">
              Price{' '}
              <span className="filter-price-text">
                <span className="filter-price-prefix">₦</span>
                <span id="filter-price-range" />
              </span>
            </h5>
              <div className="price-slider-wrapper">
              <div id="price-slider" />
              {/* End #price-slider */}
            </div>
              {/* End .price-slider-wrapper */}
            </div>
          {/* End .filter-box */}
          <div className="filter-box">
              <h5 className="filter-label">Color</h5>
              <div className="row">
              <div className="col-xs-6">
                <ul className="filter-color-list">
                  <li>
                    <span
                      className="filter-color"
                      style={{ backgroundColor: '#1e73be' }}
                    />
                    <span className="filter-color-text">Blue</span>
                  </li>
                  <li>
                    <span
                      className="filter-color"
                      style={{ backgroundColor: '#c0c0c0' }}
                    />
                    <span className="filter-color-text">Gray</span>
                  </li>
                  <li>
                    <span
                      className="filter-color"
                      style={{ backgroundColor: '#dc9814' }}
                    />
                    <span className="filter-color-text">Orange</span>
                  </li>
                </ul>
              </div>
              {/* End col-xs-6 */}
              <div className="col-xs-6">
                <ul className="filter-color-list">
                  <li>
                    <span
                      className="filter-color"
                      style={{ backgroundColor: '#736751' }}
                    />
                    <span className="filter-color-text">Brown</span>
                  </li>
                  <li>
                    <span
                      className="filter-color"
                      style={{ backgroundColor: '#05ac92' }}
                    />
                    <span className="filter-color-text">Green</span>
                  </li>
                  <li>
                    <span
                      className="filter-color"
                      style={{ backgroundColor: '#fff' }}
                    />
                    <span className="filter-color-text">White</span>
                  </li>
                </ul>
              </div>
              {/* End col-xs-6 */}
            </div>
              {/* End row */}
            </div>
          {/* End .filter-box */}
          <a href="#" className="btn btn-apply btn-block">
            Apply Filter
            </a>
        </div>
        {/* End .widget */}
      </aside>
    );
  }
}

CategoryNav.contextTypes = {
  router: PropTypes.object.isRequired
};

const mapStateToProps = ({ categories, message }) => ({
  categories, message
});

export default connect(mapStateToProps, { getCategories })(CategoryNav);
