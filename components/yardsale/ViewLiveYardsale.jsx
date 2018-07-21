/* eslint-disable jsx-a11y/label-has-for  */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

import SearchYardsaleProducts from './SearchYardsaleProducts.jsx';

const ViewLiveYardsale = ({
  admin, paginate, pagination, products, yardsaleName,
  search, fetchYardsaleProducts, handleSearch, deleteYardsaleProduct
}) => (
  <div className="container hide-sidebar-display">
    {/* SHOW YARDSALE PRODUCTS IF YARDSALE IS ACTIVE */}
    <div className="page-header text-center">
      <h1>{yardsaleName} Yard sale</h1>
    </div>{/* End .page-header */}
    {/* Search and Sort */}
    <SearchYardsaleProducts 
      search = {search}
      fetchYardsaleProducts = {fetchYardsaleProducts}
      handleSearch = {handleSearch}
    />

    <div className="portfolio-row">
      <div className="portfolio-container max-col-4">
        {
          products.length < 1 ?
            <div className="container no-yardsale-products">
            No Products Found
            </div> :
            products.map(product => (
              <div className="portfolio-item brand logo" key={product.id}>
                <figure>
                  <img
                    src={product.productImages[0]}
                    alt={product.productName}
                  />
                  {
                    product.productQuantity > 0 ?
                      <Link
                        to={`/product/${product.slug}?type=yardsale`}
                        className="btn-detail"
                        role="button"
                      >
                        View Details
                      </Link> :
                      <a className="btn-sold-out btn-danger" role="button">
                        Sold-out
                      </a>
                  }
                </figure>
                <div className="portfolio-meta">
                  <h3 className="portfolio-title">
                    <a href="single-portfolio.html" title="Portfolio name">
                      {product.productName}
                    </a>
                  </h3>
                  <div className="manipulate-product">
                    {
                      admin &&
                      <Link
                        to={`/yardsale/product/edit/${product.slug}`}
                        className="btn-edit-product"
                        role="button"
                      >
                        Edit
                      </Link>
                    }
                    {
                      admin &&
                      <button
                        type="button"
                        onClick={() => deleteYardsaleProduct(product.slug)}
                        className="btn-btn-secondary btn-sm btn-edit-product"
                      >
                        Delete
                      </button>
                    }
                  </div>
                </div>{/* End .portfolio-meta */}
              </div>
            ))
        }


      </div>{/* End .portfolio-container */}
    </div>{/* End .portfolio-row */}

    {
      products.length < 1 ?
        <div className="empty-pagination">
        </div>
        :
        <nav aria-label="Page Navigation">
          {pagination.totalPages > 1 ? paginate : null}
        </nav>
    }
  </div>
);

export default ViewLiveYardsale;
