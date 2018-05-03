import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class CategoryNav extends Component {
  render() {
    return (
      <aside className="col-md-3 col-md-pull-9 sidebar sidebar-shop">
        <div className="widget widget-box widget-shop-category active">
          <h3 className="widget-title">
            Category
              {/* <a href="#" class="btn-filter" role="button">Filter<i class="fa fa-caret-down"></i></a> */}
            </h3>
          <ul className="shop-category-list accordion">
              <li>
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
            </li>
              <li>
              <a href="category.html">Electronics </a>
              <button
                className="accordion-btn collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#accordion-ul-2"
                aria-expanded="false"
                aria-controls="accordion-ul-2"
              >
                <span className="accordion-icon" />
              </button>
              <ul
                className="collapse"
                id="accordion-ul-2"
                aria-expanded="false"
              >
                <li>
                  <a href="category.html">
                    <i className="fa fa-caret-right" />Computers
                  </a>
                </li>
                <li>
                  <a href="category.html">
                    <i className="fa fa-caret-right" />Mobile Phones
                  </a>
                </li>
                <li>
                  <a href="category.html">
                    <i className="fa fa-caret-right" />Tablets
                  </a>
                </li>
              </ul>
            </li>
              <li>
              <a href="category.html">Home &amp; Garden</a>
              <button
                className="accordion-btn collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#accordion-ul-3"
                aria-expanded="false"
                aria-controls="accordion-ul-3"
              >
                <span className="accordion-icon" />
              </button>
              <ul
                className="collapse"
                id="accordion-ul-3"
                aria-expanded="false"
              >
                <li>
                  <a href="category.html">
                    <i className="fa fa-caret-right" />Bedding
                  </a>
                </li>
                <li>
                  <a href="category.html">
                    <i className="fa fa-caret-right" />Furniture
                  </a>
                </li>
                <li>
                  <a href="category.html">
                    <i className="fa fa-caret-right" />Home Decor
                  </a>
                </li>
                <li>
                  <a href="category.html">
                    <i className="fa fa-caret-right" />Kitchen, Dining
                    &amp; Bar
                  </a>
                </li>
                <li>
                  <a href="category.html">
                    <i className="fa fa-caret-right" />Gardening
                    Supplies
                  </a>
                </li>
                <li>
                  <a href="category.html">
                    <i className="fa fa-caret-right" />Outdoor
                    Lightning
                  </a>
                </li>
              </ul>
            </li>
              <li>
              <a href="category.html">Music Instruments</a>
              <button
                className="accordion-btn collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#accordion-ul-4"
                aria-expanded="false"
                aria-controls="accordion-ul-4"
              >
                <span className="accordion-icon" />
              </button>
              <ul
                className="collapse"
                id="accordion-ul-4"
                aria-expanded="false"
              >
                <li>
                  <a href="category.html">
                    <i className="fa fa-caret-right" />SubCategory
                  </a>
                </li>
                <li>
                  <a href="category.html">
                    <i className="fa fa-caret-right" />SubCategory
                  </a>
                </li>
                <li>
                  <a href="category.html">
                    <i className="fa fa-caret-right" />SubCategory
                  </a>
                </li>
                <li>
                  <a href="category.html">
                    <i className="fa fa-caret-right" />SubCategory
                  </a>
                </li>
              </ul>
            </li>
              <li>
              <a href="category.html">Real Estate</a>
            </li>
              <li>
              <a href="category.html">Vehicles</a>
            </li>
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
