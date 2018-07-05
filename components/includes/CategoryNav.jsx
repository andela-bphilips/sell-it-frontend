/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import toastr from 'toastr';

import { getCategories } from '../../actions/category.js';

class CategoryNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      categories: []
    };

    this.handleCategorySelect = this.handleCategorySelect.bind(this);
  }

  componentDidMount() {
    this.props.getCategories('categories')
      .then(() => {
        this.setState({ categories: this.props.categories });
      })
      .catch(() => toastr.error(this.props.message));
  }

  handleCategorySelect(category = '') {
    this.setState({ category }, () => {
      if (category === '') {
        this.context.router.history.push('/products');
      } else {
        const newUrl = `/products?search=&category=${this.state.category}`;
        this.context.router.history.push(newUrl);
      }
    });
  }

  render() {
    const { categories } = this.state;

    return (
      <aside className="col-md-3 col-md-pull-9 sidebar sidebar-shop">
        <div className="widget widget-box widget-shop-category active">
          <h3 className="widget-title">
            Categories
          </h3>
          <ul className="shop-category-list accordion">
            <li>
              <a onClick={() => this.handleCategorySelect()}>
                All Categories
              </a>
            </li>
            {
              categories.map(category =>
                (
                  <li key={category.id}>
                    <a onClick={() =>
                      this.handleCategorySelect(category.category_title)}
                    >
                      {category.category_title}
                    </a>
                    {category.sub_categories.length > 0 ?
                      <span>
                        <button
                          className="accordion-btn collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target={`#${category.id}`}
                          aria-expanded="false"
                          aria-controls={category.id}
                        >
                          <span className="accordion-icon" />
                        </button>
                        <ul
                          className="collapse"
                          id={category.id}
                          aria-expanded="false"
                        >
                          {
                            category.sub_categories.map(subCategory =>
                            (
                              <li key={subCategory.id}>
                                {/* eslint-disable max-len */}
                                <a onClick={() =>
                                  this.handleCategorySelect(subCategory.sub_category_title)}
                                >
                                  <i className="fa fa-caret-right" />
                                  {subCategory.sub_category_title}
                                </a>
                              </li>
                            ))}
                        </ul>
                      </span>
                  : ''}
                  </li>
                ))
            }
          </ul>
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
