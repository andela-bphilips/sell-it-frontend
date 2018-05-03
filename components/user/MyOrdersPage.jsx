import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class MyOrdersPage extends Component {
    render() {
        return (
            <div className="col-md-9 col-md-push-3">
                <div className="page-header text-center">
                    <h1>My Orders</h1>
                    <p>This is the list of your orders and the status</p>
                </div>{/* End .page-header */}
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Date</th>
                                <th/>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="product-col">
                                    <div className="product">
                                        <figure className="product-image-container">
                                            <a href="product.html">
                                                <img src="/assets/images/products/cart/product1.jpg" alt="Product"/>
                                            </a>
                                        </figure>
                                        <h3 className="product-title">
                                            <a href="#">Tripod lampshade</a>
                                        </h3>
                                    </div>{/* End .product */}
                                </td>
                                <td className="price-col">$75.00</td>
                                <td className="quantity-col">
                                    {/* <input className="cart-product-quantity form-control" type="text" /> */}
                                    Pending
                                </td>
                                <td className="total-col">An hour ago</td>
                                {/* <td className="delete-col"><a href="#" className="btn-delete" title="Delete product" role="button"/></td> */}
                            </tr>
                            <tr>
                                <td className="product-col">
                                    <div className="product">
                                        <figure className="product-image-container">
                                            <a href="#">
                                                <img src="/assets/images/products/cart/product2.jpg" alt="Product"/>
                                            </a>
                                        </figure>
                                        <h3 className="product-title">
                                            <a href="#">Woolen scarf</a>
                                        </h3>
                                    </div>{/* End .product */}
                                </td>
                                <td className="price-col">$85.00</td>
                                <td className="quantity-col">
                                    {/* <input className="cart-product-quantity form-control" type="text" /> */}
                                    Completed
                                </td>
                                <td className="total-col">Yesterday</td>
                                {/* <td className="delete-col"><a href="#" className="btn-delete" title="Delete product" role="button"/></td> */}
                            </tr>
                            <tr>
                                <td className="product-col">
                                    <div className="product">
                                        <figure className="product-image-container">
                                            <a href="product.html">
                                                <img src="/assets/images/products/cart/product3.jpg" alt="Product"/>
                                            </a>
                                        </figure>
                                        <h3 className="product-title">
                                            <a href="#">Dining Chair</a>
                                        </h3>
                                    </div>{/* End .product */}
                                </td>
                                <td className="price-col">$95.00</td>
                                <td className="quantity-col">
                                    {/* <input className="cart-product-quantity form-control" type="text" /> */}
                                    Cancelled
                                </td>
                                <td className="total-col">Last Week</td>
                                {/* <td className="delete-col"><a href="#" className="btn-delete" title="Delete product" role="button"/></td> */}
                            </tr>
                        </tbody>
                    </table>
                </div>{/* End .table-responsive */}
            </div>

        );
    }
}
