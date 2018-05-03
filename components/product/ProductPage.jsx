import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class ProductPage extends Component {
  render() {
    return (
      <div className="col-md-9 col-md-push-3">
        <div className="row">
          <div className="product-gallery-container">
                <div className="product-zoom-wrapper">
                    <div className="product-zoom-container">
                    <img className="xzoom" id="product-zoom" src="/assets/images/products/single/product1.jpg" data-xoriginal="/assets/images/products/single/big/product1.jpg" alt="Zoom image" />
                  </div>{/* End .product-zoom-container */}
                  </div>{/* End .product-zoom-wrapper */}
                <div className="product-gallery-wrapper">
                    <div className="owl-data-carousel owl-carousel product-gallery" data-owl-settings="{ &quot;items&quot;:4, &quot;margin&quot;:14, &quot;nav&quot;: true, &quot;dots&quot;:false }" data-owl-responsive="{&quot;240&quot;: {&quot;items&quot;: 2}, &quot;360&quot;: {&quot;items&quot;: 3}, &quot;768&quot;: {&quot;items&quot;: 4}, &quot;992&quot;: {&quot;items&quot;: 3}, &quot;1200&quot;: {&quot;items&quot;: 4} }">
                    <a href="#" data-image="/assets/images/products/single/product1.jpg" data-zoom-image="/assets/images/products/single/big/product1.jpg" className="product-gallery-item">
                      <img src="/assets/images/products/single/thumbs/product1.jpg" alt="product-small-1" />
                    </a>
                    <a href="#" data-image="/assets/images/products/single/product2.jpg" data-zoom-image="/assets/images/products/single/big/product2.jpg" className="product-gallery-item">
                      <img src="/assets/images/products/single/thumbs/product2.jpg" alt="product-small-2" />
                    </a>
                    <a href="#" data-image="/assets/images/products/single/product3.jpg" data-zoom-image="/assets/images/products/single/big/product3.jpg" className="product-gallery-item">
                      <img src="/assets/images/products/single/thumbs/product3.jpg" alt="product-small-3" />
                    </a>
                    <a href="#" data-image="/assets/images/products/single/product4.jpg" data-zoom-image="/assets/images/products/single/big/product4.jpg" className="product-gallery-item">
                      <img src="/assets/images/products/single/thumbs/product4.jpg" alt="product-small-4" />
                    </a>
                    <a href="#" data-image="/assets/images/products/single/product5.jpg" data-zoom-image="/assets/images/products/single/big/product5.jpg" className="product-gallery-item">
                      <img src="/assets/images/products/single/thumbs/product5.jpg" alt="product-small-5" />
                    </a>
                    <a href="#" data-image="/assets/images/products/single/product6.jpg" data-zoom-image="/assets/images/products/single/big/product6.jpg" className="product-gallery-item">
                      <img src="/assets/images/products/single/thumbs/product6.jpg" alt="product-small-6" />
                    </a>
                  </div>{/* End .product-gallery */}
                  </div>{/* End .product-gallery-wrapper */}
              </div>{/* End .product-gallery-container */}
          <div className="product-details">
                <h2 className="product-title">Comfort Couch Classic Single Seater Sofa</h2>
                <div className="product-meta-row">
                    <div className="product-price-container">
                    <span className="product-price">₦250.00</span>
                  </div>{/* Endd .product-price-container */}
                  </div>{/* End .product-meta-row */}
                <div className="product-content">
                    <p>Comfort Couch Classic sigle Seater Soft is Relax in supreme comfort and add style to your living room with this fabulously designed single.</p>
                  </div>{/* End .product-content */}
                <ul className="product-meta-list">
                    <li><label>Availability:</label> <span className="product-stock">Availiable</span></li>
                    <li><label>Sold By:</label> <span className="product-stock">Philips Blessing</span></li>
                    <li><label>Location:</label> <span className="product-stock">Nigeria</span></li>
                    <li><label>Quantity:</label> <span className="product-stock">2</span></li>
                    <li><label>View(s):</label> <span className="product-stock">15</span></li>
                  </ul>
                <div className="product-action">
                    <a href="#" className="btn btn-accent btn-addtobag">Buy Now</a>
                  </div>{/* End .product-action */}
              </div>{/* End .product-details */}
        </div>{/* End .row */}
        <div className="product-details-tab">
          {/* Nav tabs */}
          <ul className="nav nav-tabs" role="tablist">
                <li role="presentation" className="active"><a href="#description" aria-controls="description" role="tab" data-toggle="tab">Description</a></li>
                <li role="presentation"><a href="#information" aria-controls="information" role="tab" data-toggle="tab">Information</a></li>
                {/* <li role="presentation"><a href="#reviews" aria-controls="reviews" role="tab" data-toggle="tab">Reviews</a></li> */}
              </ul>
          {/* Tab panes */}
          <div className="tab-content">
                <div role="tabpanel" className="tab-pane active" id="description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,</p>
                    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
                  </div>{/* End .tab-pane */}
                <div role="tabpanel" className="tab-pane" id="information">
                    <div className="table-responsive">
                    <table className="table product-info-table">
                      <tbody>
                        <tr>
                          <td>Weight:</td>
                          <td>50 KG</td>
                        </tr>
                        <tr>
                          <td>Dimensions:</td>
                          <td>120 x 120 x 120 cm</td>
                        </tr>
                        <tr>
                          <td>Material:</td>
                          <td>Wood, Leather</td>
                        </tr>
                        <tr>
                          <td>Colors:</td>
                          <td>Beige, Black</td>
                        </tr>
                        <tr>
                          <td>Size:</td>
                          <td>SM, MD, LG</td>
                        </tr>
                        <tr>
                          <td>Other Info:</td>
                          <td>Comfort Couch Classic sigle Seater Soft is Relax in supreme comfort.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>{/* End .table-responsive */}
                  </div>{/* End .tab-pane */}
                {/* End .tab-pane */}
              </div>
        </div>{/* End .product-details-tab */}
        <div className="mb50" />{/* margin */}
      </div>
    );
  }
}
