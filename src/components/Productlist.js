import React from 'react'
import Cartitem from './Cartitem'
import "../assets/css/productlist.css";
const Productlist = () => {
  return (
   <>
   <Cartitem/>
   <section >
  <div className="container ">
    <div className="row mt-5">
      <div className="col-5 mb-5">
        <button
        style={{ backgroundColor: "#45755B", width: "40%" }}
          type="button"
          className="btn btn-light  my-continue-shopping-btn py-3 text-white btn-sm me-2"
        >
          Continue shopping
        </button>
        <br/>
        <div className="form-row col-6 d-inline-block">
          <label htmlFor="couponCode" />
          <input
            className="text-start p-3"
            type="text"
            id="couponCode"
            placeholder="Coupon Code"
            name="CouponCode"
            required=""
          />
        </div>
        <button
          style={{ backgroundColor: "#45755B", width: "40%" }}
          type="submit"
          className="btn d-inline-block my-coupon-btn shadow text-white rounded-3 py-3 my-4 btn-lg"
        >
          Apply Coupon
        </button>
      </div>
      <div className="card col-4 bg-transparent float-end mb-5">
        <div className="card-body p-4">
          <h4 className="mb-5">Cart Total</h4>
          <div className="d-flex justify-content-between">
            <p className="text-muted text-start">Sub Total:</p>
            <p className="text-end">779</p>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <p className="text-muted text-start">Shipping:</p>
            <p className="text-end">21</p>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <p className="text-muted text-start">Total:</p>
            <p className="text-end">800</p>
          </div>
          <button
            style={{ backgroundColor: "#45755B" }}
            type="submit"
            className="btn shadow w-100 text-white rounded-3 py-3 my-4 btn-lg"
          >
            Process to Checkout
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
   </>


  )
}

export default Productlist