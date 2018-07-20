/* eslint-disable jsx-a11y/label-has-for  */
/* eslint-disable react/prop-types */
import React from 'react';

const SearchYardsaleProducts = ({
  fetchYardsaleProducts, handleSearch
}) => (
    <div className="container hide-sidebar-display">
        {/* Search and Sort */}
        <div className="container yardsale-tab">
        <div className='search-yardsale-products'>
            <input 
            type="text" 
            name="search"
            placeholder="Search.."
            onChange={handleSearch}
            />
        </div>

        <div className="dropdown">
            <button className="dropbtn">Sort by <i className="fa fa-angle-down"></i></button>
            <div className="dropdown-content">
            <a href="#" onClick={() => fetchYardsaleProducts('created_at', '', 'desc')}>Latest</a>
            <a href="#" onClick={() => fetchYardsaleProducts('created_at', '', 'asc')}>Oldest</a>
            <a href="#" onClick={() => fetchYardsaleProducts('product_name', '', 'asc')}>Product name</a>
            </div>
        </div>
        </div>
    </div>
);

export default SearchYardsaleProducts;
