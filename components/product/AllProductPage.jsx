import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class ProductPage extends Component {
  render() {
    return (
        <div className="col-md-9 col-md-push-3">
        <div className="banner banner-top">
          <img src="/assets/images/banners/banner-top.jpg" alt="Banner" />
          <div className="banner-content">
            <h2>SAve big on<br />Home Decor</h2>
            <a href="#" className="action-link">Shop now</a>
          </div>
        </div>{/* End .banner */}
        <div className="category-header">
          <h1>Home Decor</h1>
          <ol className="breadcrumb">
            <li><a href="#">Home &amp; Garden</a></li>
            <li className="active">Home Decor</li>
          </ol>
        </div>
        <div className="shop-row">
          <div className="shop-container max-col-4" data-layout="fitRows">
            <div className="product-item">
              <div className="product">
                <figure className="product-image-container">
                  <a href="product.html" title="Product Name" className="product-image-link">
                    <img src="/assets/images/products/product1.jpg" alt="Product Image" />
                  </a>
                  <span className="product-label">-55%</span>
                  <a href="#" className="btn-quick-view">Quick View</a>
                  <div className="product-action">
                    <a href="#" className="btn-product btn-wishlist" title="Add to Wishlist">
                      <i className="icon-product icon-heart" />
                    </a>
                    <a href="#" className="btn-product btn-add-cart" title="Add to Bag">
                      <i className="icon-product icon-bag" />
                      <span>Add to Bag</span>
                    </a>
                    <a href="#" className="btn-product btn-compare" title="Add to Compare">
                      <i className="icon-product icon-bar" />
                    </a>
                  </div>{/* End .product-action */}
                </figure>
                <h3 className="product-title">
                  <a href="product.html">Classic Chair</a>
                </h3>
                <div className="product-price-container">
                  <span className="product-price">$250.00</span>
                </div>{/* Endd .product-price-container */}
              </div>{/* End .product */}
            </div>{/* End .product-item */}
            <div className="product-item">
              <div className="product">
                <figure className="product-image-container">
                  <a href="product.html" title="Product Name" className="product-image-link">
                    <img src="/assets/images/products/product2.jpg" alt="Product Image" />
                  </a>
                  <a href="#" className="btn-quick-view">Quick View</a>
                  <div className="product-action">
                    <a href="#" className="btn-product btn-wishlist" title="Add to Wishlist">
                      <i className="icon-product icon-heart" />
                    </a>
                    <a href="#" className="btn-product btn-add-cart" title="Add to Bag">
                      <i className="icon-product icon-bag" />
                      <span>Add to Bag</span>
                    </a>
                    <a href="#" className="btn-product btn-compare" title="Add to Compare">
                      <i className="icon-product icon-bar" />
                    </a>
                  </div>{/* End .product-action */}
                </figure>
                <h3 className="product-title">
                  <a href="product.html">Decorative Pots</a>
                </h3>
                <div className="product-price-container">
                  <span className="product-price">$130.00</span>
                </div>{/* Endd .product-price-container */}
              </div>{/* End .product */}
            </div>{/* End .product-item */}
            <div className="product-item">
              <div className="product">
                <figure className="product-image-container">
                  <a href="product.html" title="Product Name" className="product-image-link">
                    <img src="/assets/images/products/product3.jpg" alt="Product Image" />
                  </a>
                  <a href="#" className="btn-quick-view">Quick View</a>
                  <div className="product-action">
                    <a href="#" className="btn-product btn-wishlist" title="Add to Wishlist">
                      <i className="icon-product icon-heart" />
                    </a>
                    <a href="#" className="btn-product btn-add-cart" title="Add to Bag">
                      <i className="icon-product icon-bag" />
                      <span>Add to Bag</span>
                    </a>
                    <a href="#" className="btn-product btn-compare" title="Add to Compare">
                      <i className="icon-product icon-bar" />
                    </a>
                  </div>{/* End .product-action */}
                </figure>
                <h3 className="product-title">
                  <a href="product.html">Miniature Chair</a>
                </h3>
                <div className="product-price-container">
                  <span className="product-price">$95.00</span>
                </div>{/* Endd .product-price-container */}
              </div>{/* End .product */}
            </div>{/* End .product-item */}
            <div className="product-item">
              <div className="product">
                <figure className="product-image-container">
                  <a href="product.html" title="Product Name" className="product-image-link">
                    <img src="/assets/images/products/product4.jpg" alt="Product Image" />
                  </a>
                  <a href="#" className="btn-quick-view">Quick View</a>
                  <div className="product-action">
                    <a href="#" className="btn-product btn-wishlist" title="Add to Wishlist">
                      <i className="icon-product icon-heart" />
                    </a>
                    <a href="#" className="btn-product btn-add-cart" title="Add to Bag">
                      <i className="icon-product icon-bag" />
                      <span>Add to Bag</span>
                    </a>
                    <a href="#" className="btn-product btn-compare" title="Add to Compare">
                      <i className="icon-product icon-bar" />
                    </a>
                  </div>{/* End .product-action */}
                </figure>
                <h3 className="product-title">
                  <a href="product.html">Modern Lampshade</a>
                </h3>
                <div className="product-price-container">
                  <span className="product-price">$180.00</span>
                </div>{/* Endd .product-price-container */}
              </div>{/* End .product */}
            </div>{/* End .product-item */}
            <div className="product-item">
              <div className="product">
                <figure className="product-image-container">
                  <a href="product.html" title="Product Name" className="product-image-link">
                    <img src="/assets/images/products/product5.jpg" alt="Product Image" />
                  </a>
                  <span className="product-label">-55%</span>
                  <a href="#" className="btn-quick-view">Quick View</a>
                  <div className="product-action">
                    <a href="#" className="btn-product btn-wishlist" title="Add to Wishlist">
                      <i className="icon-product icon-heart" />
                    </a>
                    <a href="#" className="btn-product btn-add-cart" title="Add to Bag">
                      <i className="icon-product icon-bag" />
                      <span>Add to Bag</span>
                    </a>
                    <a href="#" className="btn-product btn-compare" title="Add to Compare">
                      <i className="icon-product icon-bar" />
                    </a>
                  </div>{/* End .product-action */}
                </figure>
                <h3 className="product-title">
                  <a href="product.html">Modern Edison Light</a>
                </h3>
                <div className="product-price-container">
                  <span className="product-price">$250.00</span>
                </div>{/* Endd .product-price-container */}
              </div>{/* End .product */}
            </div>{/* End .product-item */}
            <div className="product-item">
              <div className="product">
                <figure className="product-image-container">
                  <a href="product.html" title="Product Name" className="product-image-link">
                    <img src="/assets/images/products/product6.jpg" alt="Product Image" />
                  </a>
                  <a href="#" className="btn-quick-view">Quick View</a>
                  <div className="product-action">
                    <a href="#" className="btn-product btn-wishlist" title="Add to Wishlist">
                      <i className="icon-product icon-heart" />
                    </a>
                    <a href="#" className="btn-product btn-add-cart" title="Add to Bag">
                      <i className="icon-product icon-bag" />
                      <span>Add to Bag</span>
                    </a>
                    <a href="#" className="btn-product btn-compare" title="Add to Compare">
                      <i className="icon-product icon-bar" />
                    </a>
                  </div>{/* End .product-action */}
                </figure>
                <h3 className="product-title">
                  <a href="product.html">Decor Pot Clay</a>
                </h3>
                <div className="product-price-container">
                  <span className="product-price">$130.00</span>
                </div>{/* Endd .product-price-container */}
              </div>{/* End .product */}
            </div>{/* End .product-item */}
            <div className="product-item">
              <div className="product">
                <figure className="product-image-container">
                  <a href="product.html" title="Product Name" className="product-image-link">
                    <img src="/assets/images/products/product7.jpg" alt="Product Image" />
                  </a>
                  <a href="#" className="btn-quick-view">Quick View</a>
                  <div className="product-action">
                    <a href="#" className="btn-product btn-wishlist" title="Add to Wishlist">
                      <i className="icon-product icon-heart" />
                    </a>
                    <a href="#" className="btn-product btn-add-cart" title="Add to Bag">
                      <i className="icon-product icon-bag" />
                      <span>Add to Bag</span>
                    </a>
                    <a href="#" className="btn-product btn-compare" title="Add to Compare">
                      <i className="icon-product icon-bar" />
                    </a>
                  </div>{/* End .product-action */}
                </figure>
                <h3 className="product-title">
                  <a href="product.html">Show Piece Cup</a>
                </h3>
                <div className="product-price-container">
                  <span className="product-price">$95.00</span>
                </div>{/* Endd .product-price-container */}
              </div>{/* End .product */}
            </div>{/* End .product-item */}
            <div className="product-item">
              <div className="product">
                <figure className="product-image-container">
                  <a href="product.html" title="Product Name" className="product-image-link">
                    <img src="/assets/images/products/product8.jpg" alt="Product Image" />
                  </a>
                  <a href="#" className="btn-quick-view">Quick View</a>
                  <div className="product-action">
                    <a href="#" className="btn-product btn-wishlist" title="Add to Wishlist">
                      <i className="icon-product icon-heart" />
                    </a>
                    <a href="#" className="btn-product btn-add-cart" title="Add to Bag">
                      <i className="icon-product icon-bag" />
                      <span>Add to Bag</span>
                    </a>
                    <a href="#" className="btn-product btn-compare" title="Add to Compare">
                      <i className="icon-product icon-bar" />
                    </a>
                  </div>{/* End .product-action */}
                </figure>
                <h3 className="product-title">
                  <a href="product.html">Classic Chair Wodden</a>
                </h3>
                <div className="product-price-container">
                  <span className="product-price">$180.00</span>
                </div>{/* Endd .product-price-container */}
              </div>{/* End .product */}
            </div>{/* End .product-item */}
            <div className="product-item">
              <div className="product">
                <figure className="product-image-container">
                  <a href="product.html" title="Product Name" className="product-image-link">
                    <img src="/assets/images/products/product9.jpg" alt="Product Image" />
                  </a>
                  <span className="product-label">-55%</span>
                  <a href="#" className="btn-quick-view">Quick View</a>
                  <div className="product-action">
                    <a href="#" className="btn-product btn-wishlist" title="Add to Wishlist">
                      <i className="icon-product icon-heart" />
                    </a>
                    <a href="#" className="btn-product btn-add-cart" title="Add to Bag">
                      <i className="icon-product icon-bag" />
                      <span>Add to Bag</span>
                    </a>
                    <a href="#" className="btn-product btn-compare" title="Add to Compare">
                      <i className="icon-product icon-bar" />
                    </a>
                  </div>{/* End .product-action */}
                </figure>
                <h3 className="product-title">
                  <a href="product.html">White Pots</a>
                </h3>
                <div className="product-price-container">
                  <span className="product-price">$250.00</span>
                </div>{/* Endd .product-price-container */}
              </div>{/* End .product */}
            </div>{/* End .product-item */}
            <div className="product-item">
              <div className="product">
                <figure className="product-image-container">
                  <a href="product.html" title="Product Name" className="product-image-link">
                    <img src="/assets/images/products/product10.jpg" alt="Product Image" />
                  </a>
                  <a href="#" className="btn-quick-view">Quick View</a>
                  <div className="product-action">
                    <a href="#" className="btn-product btn-wishlist" title="Add to Wishlist">
                      <i className="icon-product icon-heart" />
                    </a>
                    <a href="#" className="btn-product btn-add-cart" title="Add to Bag">
                      <i className="icon-product icon-bag" />
                      <span>Add to Bag</span>
                    </a>
                    <a href="#" className="btn-product btn-compare" title="Add to Compare">
                      <i className="icon-product icon-bar" />
                    </a>
                  </div>{/* End .product-action */}
                </figure>
                <h3 className="product-title">
                  <a href="product.html">Single Couch</a>
                </h3>
                <div className="product-price-container">
                  <span className="product-price">$130.00</span>
                </div>{/* Endd .product-price-container */}
              </div>{/* End .product */}
            </div>{/* End .product-item */}
            <div className="product-item">
              <div className="product">
                <figure className="product-image-container">
                  <a href="product.html" title="Product Name" className="product-image-link">
                    <img src="/assets/images/products/product11.jpg" alt="Product Image" />
                  </a>
                  <a href="#" className="btn-quick-view">Quick View</a>
                  <div className="product-action">
                    <a href="#" className="btn-product btn-wishlist" title="Add to Wishlist">
                      <i className="icon-product icon-heart" />
                    </a>
                    <a href="#" className="btn-product btn-add-cart" title="Add to Bag">
                      <i className="icon-product icon-bag" />
                      <span>Add to Bag</span>
                    </a>
                    <a href="#" className="btn-product btn-compare" title="Add to Compare">
                      <i className="icon-product icon-bar" />
                    </a>
                  </div>{/* End .product-action */}
                </figure>
                <h3 className="product-title">
                  <a href="product.html">Woolen scarf</a>
                </h3>
                <div className="product-price-container">
                  <span className="product-price">$95.00</span>
                </div>{/* Endd .product-price-container */}
              </div>{/* End .product */}
            </div>{/* End .product-item */}
            <div className="product-item">
              <div className="product">
                <figure className="product-image-container">
                  <a href="product.html" title="Product Name" className="product-image-link">
                    <img src="/assets/images/products/product12.jpg" alt="Product Image" />
                  </a>
                  <a href="#" className="btn-quick-view">Quick View</a>
                  <div className="product-action">
                    <a href="#" className="btn-product btn-wishlist" title="Add to Wishlist">
                      <i className="icon-product icon-heart" />
                    </a>
                    <a href="#" className="btn-product btn-add-cart" title="Add to Bag">
                      <i className="icon-product icon-bag" />
                      <span>Add to Bag</span>
                    </a>
                    <a href="#" className="btn-product btn-compare" title="Add to Compare">
                      <i className="icon-product icon-bar" />
                    </a>
                  </div>{/* End .product-action */}
                </figure>
                <h3 className="product-title">
                  <a href="product.html">Tripod lampshade</a>
                </h3>
                <div className="product-price-container">
                  <span className="product-price">$180.00</span>
                </div>{/* Endd .product-price-container */}
              </div>{/* End .product */}
            </div>{/* End .product-item */}
            <div className="product-item">
              <div className="product">
                <figure className="product-image-container">
                  <a href="product.html" title="Product Name" className="product-image-link">
                    <img src="/assets/images/products/product13.jpg" alt="Product Image" />
                  </a>
                  <a href="#" className="btn-quick-view">Quick View</a>
                  <div className="product-action">
                    <a href="#" className="btn-product btn-wishlist" title="Add to Wishlist">
                      <i className="icon-product icon-heart" />
                    </a>
                    <a href="#" className="btn-product btn-add-cart" title="Add to Bag">
                      <i className="icon-product icon-bag" />
                      <span>Add to Bag</span>
                    </a>
                    <a href="#" className="btn-product btn-compare" title="Add to Compare">
                      <i className="icon-product icon-bar" />
                    </a>
                  </div>{/* End .product-action */}
                </figure>
                <h3 className="product-title">
                  <a href="product.html">Clay Lamp</a>
                </h3>
                <div className="product-price-container">
                  <span className="product-price">$250.00</span>
                </div>{/* Endd .product-price-container */}
              </div>{/* End .product */}
            </div>{/* End .product-item */}
            <div className="product-item">
              <div className="product">
                <figure className="product-image-container">
                  <a href="product.html" title="Product Name" className="product-image-link">
                    <img src="/assets/images/products/product14.jpg" alt="Product Image" />
                  </a>
                  <a href="#" className="btn-quick-view">Quick View</a>
                  <div className="product-action">
                    <a href="#" className="btn-product btn-wishlist" title="Add to Wishlist">
                      <i className="icon-product icon-heart" />
                    </a>
                    <a href="#" className="btn-product btn-add-cart" title="Add to Bag">
                      <i className="icon-product icon-bag" />
                      <span>Add to Bag</span>
                    </a>
                    <a href="#" className="btn-product btn-compare" title="Add to Compare">
                      <i className="icon-product icon-bar" />
                    </a>
                  </div>{/* End .product-action */}
                </figure>
                <h3 className="product-title">
                  <a href="product.html">Ceiling lights</a>
                </h3>
                <div className="product-price-container">
                  <span className="product-price">$130.00</span>
                </div>{/* Endd .product-price-container */}
              </div>{/* End .product */}
            </div>{/* End .product-item */}
            <div className="product-item">
              <div className="product">
                <figure className="product-image-container">
                  <a href="product.html" title="Product Name" className="product-image-link">
                    <img src="/assets/images/products/product15.jpg" alt="Product Image" />
                  </a>
                  <a href="#" className="btn-quick-view">Quick View</a>
                  <div className="product-action">
                    <a href="#" className="btn-product btn-wishlist" title="Add to Wishlist">
                      <i className="icon-product icon-heart" />
                    </a>
                    <a href="#" className="btn-product btn-add-cart" title="Add to Bag">
                      <i className="icon-product icon-bag" />
                      <span>Add to Bag</span>
                    </a>
                    <a href="#" className="btn-product btn-compare" title="Add to Compare">
                      <i className="icon-product icon-bar" />
                    </a>
                  </div>{/* End .product-action */}
                </figure>
                <h3 className="product-title">
                  <a href="product.html">Teapoe Wodden</a>
                </h3>
                <div className="product-price-container">
                  <span className="product-price">$95.00</span>
                </div>{/* Endd .product-price-container */}
              </div>{/* End .product */}
            </div>{/* End .product-item */}
            <div className="product-item">
              <div className="product">
                <figure className="product-image-container">
                  <a href="product.html" title="Product Name" className="product-image-link">
                    <img src="/assets/images/products/product16.jpg" alt="Product Image" />
                  </a>
                  <a href="#" className="btn-quick-view">Quick View</a>
                  <div className="product-action">
                    <a href="#" className="btn-product btn-wishlist" title="Add to Wishlist">
                      <i className="icon-product icon-heart" />
                    </a>
                    <a href="#" className="btn-product btn-add-cart" title="Add to Bag">
                      <i className="icon-product icon-bag" />
                      <span>Add to Bag</span>
                    </a>
                    <a href="#" className="btn-product btn-compare" title="Add to Compare">
                      <i className="icon-product icon-bar" />
                    </a>
                  </div>{/* End .product-action */}
                </figure>
                <h3 className="product-title">
                  <a href="product.html">Modern Single Couch</a>
                </h3>
                <div className="product-price-container">
                  <span className="product-price">$180.00</span>
                </div>{/* Endd .product-price-container */}
              </div>{/* End .product */}
            </div>{/* End .product-item */}
          </div>{/* End .shop-container */}
        </div>{/* End .shop-row */}
        <nav aria-label="Page Navigation">
          <ul className="pagination">
            <li><a href="#">1</a></li>
            <li className="active"><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
            <li className="dots"><span>...</span></li>
            <li><a href="#">18</a></li>
          </ul>
        </nav>
      </div>
      
    );
  }
}
