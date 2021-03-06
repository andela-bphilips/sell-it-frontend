/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Countdown from 'react-countdown-now';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';
import toastr from 'toastr';
import swal from 'sweetalert'

import Loader from '../includes/Loader.jsx';
import ViewLiveYardsale from './ViewLiveYardsale.jsx';
import { getYardsaleProducts, deleteYardsaleProduct } from '../../actions/yardsale.js';
import ErrorPage from '../includes/ErrorPage.jsx';
import SearchYardsaleProducts from './SearchYardsaleProducts.jsx';

class YardsaleProducts extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      admin: false,
      // buyerLimit: 0,
      countDown: false,
      countDownTo: null,
      // location: null,
      limit: 16,
      loading: false,
      search: '',
      startDate: null,
      startTime: null,
      page: 1,
      pagination: {},
      products: [],
      yardsaleName: null
    };

    this.fetchYardsaleProducts = this.fetchYardsaleProducts.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.deleteYardsaleProduct = this.deleteYardsaleProduct.bind(this);
  }

  componentWillMount() {
    this.fetchYardsaleProducts();
  }

  handleSearch(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value }, () => {
      this.fetchYardsaleProducts('created_at', this.state.search, 'desc');
    });
  }

  deleteYardsaleProduct(slug) {
    swal({
      title: 'Are you sure?',
      text: 'Deleting this product cannot be reverted',
      icon: 'warning',
      dangerMode: true,
      buttons: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          this.props.deleteYardsaleProduct(slug)
            .then(() => {
              swal('Deleted!', 'Your product has been successfully deleted');
            })
            .then(() => {
              this.fetchYardsaleProducts();
            });
        } else {
          swal('Product was not deleted');
        }
      })
      .catch(() => {
        toastr.error(this.props.message);
      });
  }

  fetchYardsaleProducts(sort = 'created_at', search = '', order = 'desc') {
    const { yardsaleName } = this.props.match.params;
    const { limit, page } = this.state;
    this.props.getYardsaleProducts(yardsaleName, limit, page, sort, search, order)
      .then(() => {
        const { products } = this.props;
        let date2;

        this.setState({
          admin: products.yardsaleInfo.admin,
          // buyerLimit: products.yardsaleInfo.buyerLimit,
          countDown: products.yardsaleInfo.countdown,
          // location: products.yardsaleInfo.location,
          startDate: products.yardsaleInfo.startDate,
          startTime: products.yardsaleInfo.startTime,
          pagination: products.pagination,
          products: products.products,
          yardsaleName: products.yardsaleInfo.name
        }, () => {
          const { startDate, startTime } = this.state;
          date2 = new Date(`${startDate} ${startTime}`);
          this.setState({ countDownTo: date2 });
        });
      })
      .catch(() => {
        toastr.error(this.props.message);
      });
  }

  handlePageClick(data) {
    const { selected } = data;

    this.setState({ page: Math.ceil(selected) + 1 }, () => {
      this.fetchYardsaleProducts();
    });
  }

  render() {
    const {
      admin, countDown, countDownTo, loading, search,
      pagination, products, yardsaleName
    } = this.state;
    if (loading) {
      return <Loader />;
    } else if (countDown) {
      return (
        <div className="hide-sidebar-display col-md-12">
          <center className="count-down-wrapper">
            <div className="count-down">
              <h1>Going live in</h1>
              <div className="time-wrapper">
                <Countdown date={countDownTo} />
              </div>
            </div>
          </center>
        </div>
      );
    } else if (products.length > 0) {
      const paginate = (<ReactPaginate
        previousLabel="<"
        nextLabel=">"
        breakLabel={<a href="">...</a>}
        breakClassName="break-me"
        pageCount={pagination.totalPages
          ? pagination.totalPages : 0}
        marginPagesDisplayed={3}
        pageRangeDisplayed={pagination.totalProducts > 9 ? 10
          : pagination.totalPages}
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
      return (
        <ViewLiveYardsale
          admin={admin}
          paginate={paginate}
          pagination={pagination}
          products={products}
          yardsaleName={yardsaleName}
          search = {search}
          fetchYardsaleProducts={this.fetchYardsaleProducts}
          handleSearch={this.handleSearch}
          deleteYardsaleProduct={this.deleteYardsaleProduct}
        />
      );
    } 
    return (
      <ViewLiveYardsale
        admin={admin}
        products={products}
        yardsaleName={yardsaleName}
        search = {search}
        fetchYardsaleProducts={this.fetchYardsaleProducts}
        handleSearch={this.handleSearch}
      />
    );
    // return <ErrorPage message="No products found for this yardsale." />;
  }
}

const mapStateToProps = ({
  auth, message, products, statusCode, users, yardsale
}) => ({
  auth, message, products, statusCode, users, yardsale
});

export default connect(mapStateToProps, {
  getYardsaleProducts, deleteYardsaleProduct
})(YardsaleProducts);
