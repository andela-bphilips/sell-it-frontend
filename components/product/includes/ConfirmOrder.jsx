/* eslint-disable react/prop-types */
import React from 'react';

const { DEFAULTNOIMAGE } = process.env;

const ConfirmOrder = ({
  product, productOrder, setConfirmOrder, saving
}) => (
  <div className="col-md-9 col-md-push-3">
    <div className="page-header text-center">
      <h1>Shopping Cart</h1>
      <p>Your cart items</p>
    </div>{/* End .page-header */}

    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="product-col">
              <div className="product">
                <figure
                  className="product-image-container"
                  style={{ minHeight: 0, backgroundColor: '#ffffff' }}
                >
                  <a href="product.html">
                    <img
                      src={product.productImages[0] || DEFAULTNOIMAGE}
                      style={{ width: `${9}rem` }}
                      width="100px"
                      alt="Product"
                    />
                  </a>
                </figure>
                <h3 className="product-title">
                  <a href="product.html">{product.productName}</a>
                </h3>
              </div>{/* End .product */}
            </td>
            <td className="price-col">
              {product.currency}{productOrder.negotiated_price}
            </td>
            <td className="quantity-col">
              <div className="input-group bootstrap-touchspin">
                <span
                  className="input-group-addon bootstrap-touchspin-prefix"
                  style={{ display: 'none' }}
                />
                <input
                  className="cart-product-quantity form-control"
                  defaultValue={productOrder.order_quantity}
                  type="text"
                  style={{ display: 'block' }}
                />
                <span
                  className="input-group-addon bootstrap-touchspin-postfix"
                  style={{ display: 'none' }}
                />
                <span className="input-group-btn-vertical">
                  <button
                    className="btn btn-default bootstrap-touchspin-up"
                    type="button"
                  >
                    <i className="fa fa-angle-up" />
                  </button>
                  <button
                    className="btn btn-default bootstrap-touchspin-down"
                    type="button"
                  >
                    <i className="fa fa-angle-down" />
                  </button>
                </span>
              </div>
            </td>
            <td className="total-col"> {product.currency}
              {productOrder.negotiated_price * productOrder.order_quantity}
            </td>
            {/* <td className="delete-col" style={{ display: 'none' }}>
              <a className="btn-delete" title="Delete product" role="button" />
            </td> */}
          </tr>

        </tbody>
      </table>
    </div>{/* End .table-responsive */}

    <div className="row">
      <div className="col-sm-7" style={{ opacity: 0 }}>
        <div className="cart-discount">
          <h3>Coupon Discount</h3>
          <p>Enter your coupon code if you have one</p>

          <form action="#">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your coupon code"
                disabled
              />
              <span className="input-group-btn">
                <button type="submit" className="btn">Apply Code</button>
              </span>
            </div>
          </form>
        </div>{/* End .cart-discount */}
      </div>{/* End .col-sm-7 */}

      <div className="col-sm-4 col-sm-offset-1">
        <div className="cart-proceed">
          <p className="cart-subtotal">
            <span>SUB TOTAL :</span> {product.currency}
            {productOrder.negotiated_price * productOrder.order_quantity}
          </p>
          <p className="cart-total">
            <span>Grand TOTAL :</span>
            <span className="text-accent"> {product.currency}
              {productOrder.negotiated_price * productOrder.order_quantity}
            </span>
          </p>

          <button
            type="submit"
            className="btn btn-accent"
            disabled={saving}
            onClick={setConfirmOrder}
          >
            { saving ? 'Processing...' : 'Confirm Order' }
          </button>

        </div>{/* Endd .cart-proceed */}
      </div>{/* End .col-sm-4 */}
    </div>{/* End .row */}
  </div>


);

export default ConfirmOrder;
