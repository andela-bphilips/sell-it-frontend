/* eslint-disable react/prop-types */
import React from 'react';
import Modal from 'react-responsive-modal';

const MakeOrderModal = ({
  handleFormChange, onCloseModal, open, placeOrder, product, saving
}) => (
  <Modal
    open={open}
    onClose={onCloseModal}
    closeOnOverlayClick={false}
    showCloseIcon={!saving}
    closeOnEsc={false}
    little
  >
    <form onSubmit={placeOrder}>
      <h1 className="product-title">Place Order</h1>
      Product name: <h4>{product.productName}</h4>

      <div className="form-group">
        Selling price
        <input
          type="text"
          name="product_price"
          className="form-control"
          value={product.productPrice}
          disabled
        />
      </div>

      <div className="form-group">
        Quantity *
        <input
          type="number"
          name="order_quantity"
          min="0"
          max={product.productQuantity}
          className="form-control"
          onChange={handleFormChange}
          required
        />
      </div>

      { product.negotiable ?
        <div className="form-group">
          Your price *
          <input
            type="number"
            name="negotiated_price"
            min="0"
            className="form-control"
            onChange={handleFormChange}
            required
          />
        </div>
        : ''
      }

      <div className="form-group clearfix form-action">
        <button
          type="submit"
          className="btn btn-primary pull-left min-width"
          disabled={saving}
        >
          { saving ? 'Placing Order...' : 'Checkout' }
        </button>
      </div>

    </form>
    <p>
      * You cannot select more products than the quantity available for sale
      <br />
      * {product.productQuantity} item(s) of this product available for sale
      <br />
      * Do not refresh the page to avoid losing your order progress.
    </p>
  </Modal>);

export default MakeOrderModal;
