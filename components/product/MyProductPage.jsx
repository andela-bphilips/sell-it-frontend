/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import Loader from '../includes/Loader.jsx';

import { getMyProducts } from '../../actions/products.js';

const { DEFAULTNOIMAGE } = process.env;

class MyProductPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      products: [],
      loading: true,
      current: 'showAll'
    };
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts(current = 'showAll') {
    this.setState({ loading: true, current }, () => {
      if (current === 'showAll') {
        current = '';
      }
      this.props.getMyProducts(current).then(() => {
        this.setState({
          products: this.props.products,
          loading: false
        });
      });
    });
  }

  render() {
    const { products, loading } = this.state;
    let pagination;

    if (loading) {
      return <Loader />;
    }
    if (products.pagination) {
      pagination = (<ReactPaginate
        previousLabel={<i className="fas fa-chevron-circle-left" />}
        nextLabel={<i className="fas fa-chevron-circle-right" />}
        breakLabel={<a href="">...</a>}
        breakClassName="break-me"
        pageCount={products.pagination.totalPages
        ? products.pagination.totalPages : 0}
        marginPagesDisplayed={3}
        pageRangeDisplayed={products.pagination.totalProducts > 9 ? 10
        : products.pagination.totalPages}
        onPageChange={this.handlePageClick}
        containerClassName="pagination justify-content-center"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        nextClassName="page-item next-button"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"
        disabledClassName="disabled"
        activeClassName="active"
      />);
    }
    return (
      <div className="container">
        <div className="page-header text-center">
          <h1>My Products</h1>
          <p>List of my products</p>
        </div>{/* End .page-header */}
        <ul className="portfolio-filter text-right">
          <li className={this.state.current === 'showAll' ? 'active' : ''}>
            <Link
              to="#"
              onClick={() => this.getProducts('showAll')}
              data-filter="*"
            >
              Show All
            </Link>
          </li>
          <li className={this.state.current === 'published' ? 'active' : ''}>
            <Link
              to="#"
              onClick={() => this.getProducts('published')}
              data-filter=".brand"
            >
              Published
            </Link>
          </li>
          <li className={this.state.current === 'draft' ? 'active' : ''}>
            <Link
              to="#"
              onClick={() => this.getProducts('draft')}
              data-filter=".website"
            >
              Draft
            </Link>
          </li>
        </ul>
        <div className="portfolio-row">
          <div className="portfolio-container max-col-4">
            {!loading && products.products.length === 0 &&
              <h2>No Product Available</h2>
            }
            { products.products && products.products.map(product => (
              <div className="portfolio-item" key={product.id}>
                <div>
                  <figure className="product-image-container">
                    <img
                      height="270px"
                      src={product.productImages
                        ? product.productImages[0]
                        : DEFAULTNOIMAGE}
                      alt="Portfolio"
                    />
                    <Link
                      to={`/product/${product.slug}`}
                      className="btn-product btn-detail"
                      role="button"
                    >
                      View Details
                    </Link>
                  </figure>
                </div>
                <div className="portfolio-meta">
                  <h3 className="portfolio-title">
                    <Link
                      to={`/product/${product.slug}`}
                      title="Portfolio name"
                    >
                      {product.productName}
                    </Link>
                  </h3>
                  <div className="portfolio-tags">
                    <p>View(s): {product.views}</p>
                  </div>{/* End .portfolio-tags */}
                  <Link to={`/edit/product/${product.slug}`} className="btn-edit-product" role="button">
                    Edit Product
                  </Link>
                </div>{/* End .portfolio-meta */}
              </div>
            ))}

          </div>{/* End .portfolio-container */}
        </div>{/* End .portfolio-row */}
        <nav aria-label="Page Navigation">
          {
            products.pagination && products.pagination.totalPages > 1
              ? pagination
              : null
          }
        </nav>
      </div>

    );
  }
}

const mapStateToProps = ({ auth, message, products }) => ({
  auth, message, products
});

export default connect(mapStateToProps, { getMyProducts })(MyProductPage);
