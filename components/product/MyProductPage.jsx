import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import Loader from '../includes/Loader.jsx';
import toastr from 'toastr';

import { getMyProducts } from '../../actions/products.js';

class MyProductPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      limit: 20,
      order: 'desc',
      open: false,
      page: 1,
      sort: 'created_at',
      products: [],
      loading: true,
      current: 'showAll'
    };
    this.getPublished = this.getPublished.bind(this);
    this.getDraft = this.getDraft.bind(this);
  }

  getAll() {
    this.setState({ loading: true });    
    this.props.getMyProducts().then(() => {
      this.setState({ products: this.props.products, current: 'showAll', loading:false });
    });
  }

  getPublished() {
    this.setState({ loading: true });
    this.props.getMyProducts('published').then(() => {
      this.setState({ products: this.props.products, current: 'published', loading:false });
    });
  }

  getDraft() {
    this.setState({ loading: true });    
    this.props.getMyProducts('draft').then(() => {
      this.setState({ products: this.props.products, current: 'draft', loading:false });
    });
  }

  componentDidMount() {
    this.props.getMyProducts().then(() => {
      this.setState({ products: this.props.products, loading: false });
    });
    jQuery(document).ready(() => {
      let revapi;
      if ($('#rev_slider').revolution == undefined) {
        revslider_showDoubleJqueryError('#rev_slider');
      } else {
        revapi = $('#rev_slider').show().revolution({
          sliderType: 'standard',
          jsFileLocation: 'assets/js/',
          sliderLayout: 'auto',
          dottedOverlay: 'none',
          delay: 15000,
          navigation: {
            mouseScrollNavigation: 'off',
            onHoverStop: 'off',
            touch: {
              touchenabled: 'on'
            },
            arrows: {
              style: 'custom',
              enable: true,
              hide_onmobile: false,
              hide_under: 768,
              hide_onleave: false,
              tmp: '',
              left: {
                h_align: 'left',
                v_align: 'bottom',
                h_offset: 63,
                v_offset: 48
              },
              right: {
                h_align: 'left',
                v_align: 'bottom',
                h_offset: 85,
                v_offset: 48
              }
            },
            bullets: {
              enable: false
            }
          },
          responsiveLevels: [1200, 992, 768, 480],
          gridwidth: [870, 679, 640, 480],
          gridheight: [468, 400, 360, 300],
          lazyType: 'smart',
          spinner: 'spinner2',
          parallax: {
            type: 'off'
          },
          debugMode: false
        });
      }
    });
  }
  render() {
    console.log(this.state.products);
    const { products, loading } = this.state;
    let pagination;
    console.log(products);
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
        ? products.pagination.totalPages : null}
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
          <li className={this.state.current == 'showAll' && 'active'}><Link to="#" onClick={()=> { return this.getAll() }} data-filter="*">Show All</Link></li>
          <li className={this.state.current == 'published' && 'active'}><Link to="#" onClick={()=> { return this.getPublished() }} data-filter=".brand">Published</Link></li>
          <li className={this.state.current == 'draft' && 'active'}><Link to="#" onClick={()=> { return this.getDraft() }} data-filter=".website">Draft</Link></li>
          {/* <li><a href="#" data-filter=".logo">Trash</a></li> */}
        </ul> 
        <div className="portfolio-row">
          <div className="portfolio-container max-col-4">
          {!loading && products.products.length == 0 &&
        <h2>No Product Available</h2>
        }
            { products.products && products.products.map(product => (<div className="portfolio-item website">
              <figure>
                <img height="270px" src={product.productImages ? product.productImages[0] : 'http://res.cloudinary.com/zoewox-technologies/image/upload/v1525369665/No-image-available_jw7wqc.jpg'} alt="Portfolio Image" />
                <Link to={`/product/${product.slug}`} className="btn-detail" role="button">View Details</Link>
              </figure>
              <div className="portfolio-meta">
                <h3 className="portfolio-title"><Link to={`/product/${product.slug}`} title="Portfolio name">{product.productName}</Link></h3>
                <div className="portfolio-tags">
                  <p>View(s): {product.views}</p>
                </div>{/* End .portfolio-tags */}
              </div>{/* End .portfolio-meta */}
                                                                     </div>))}

          </div>{/* End .portfolio-container */}
        </div>{/* End .portfolio-row */}
        <nav aria-label="Page Navigation">
          {products.pagination && products.pagination.totalPages > 1 ? pagination : null}
        </nav>
      </div>

    );
  }
}

const mapStateToProps = ({ auth, message, products }) => ({
  auth, message, products
});

export default connect(mapStateToProps, { getMyProducts })(MyProductPage);
