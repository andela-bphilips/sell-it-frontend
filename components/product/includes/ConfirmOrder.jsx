/* eslint-disable react/prop-types */
import React from 'react';

const ConfirmOrder = ({ handleFormChange, product, productOrder, setConfirmOrder, saving }) => (
  <div className="col-md-9 col-md-push-3">
    <div className="row">
      <h1>Confirm Order Details</h1>
      <div className="">
        <div className="">
          <h3>{product.productName}</h3>
          <p>Cost: <span>
            {product.currency}{productOrder.negotiated_price}
          </span></p>
          <p>Quantity: <span>{productOrder.order_quantity}</span> item(s)</p>
        </div>
      </div>
      <hr />
      <div className="tab-header">
        <h2>Payment Method:</h2>
        <form onSubmit={setConfirmOrder}>
          <div className="radio-inline-container">
            <img
              src="../../../assets/images/payment-card.png"
              alt="Card"
              className="radio-img"
            />
            <div className="radio">
              <label>
                <input
                  type="radio"
                  name="payment_method"
                  value="salary deduction"
                  onChange={handleFormChange}
                  required
                />
                <span className="check" />
                <span className="circle" />
                <h3>Salary Deduction</h3>
                The total sum will be deducted from your next salary.
              </label>
            </div>
            {/* End .radio */}
            <br />
            <br />

            <img
              src="../../../assets/images/payment-paypal.png"
              alt="Paypal"
              className="radio-img"
            />
            <div className="radio">
              <label>
                <input
                  type="radio"
                  name="payment_method"
                  value="transfer"
                  onChange={handleFormChange}
                  required
                />
                <span className="check" />
                <span className="circle" />
                <h3>Wire Transfer to Andela Account</h3>
                Make payment to the account details below:<br/>
                Andela Account<br/>
                Bank name<br />
                1234567890<br />
              </label>
            </div>
            {/* End .radio */}
          </div>
          {/* End .radio-inline-container */}
          <br />
          <div className="form-group clearfix form-action">
            <button
              type="submit"
              className="btn btn-primary pull-left min-width"
              disabled={saving}
            >
              { saving ? 'Processing...' : 'Confirm Order' }
            </button>
          </div>
        </form>

      </div>
    </div>
  </div>
);

export default ConfirmOrder;
