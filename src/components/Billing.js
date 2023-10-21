import React from 'react'
import "../assets/css/billing.css";
const Billing = () => {
  return (
   <>
   <section>
  <div className="container">
    <div className="row mb-5 ">
      <div className="col-6 mt-1">
        <div className="left-side ">
          <h1 className="header-bill mb-5">Billing details</h1>
        </div>
        <div className="form-row-billing">
          <div className="mt-2">
            <div className="form-row-billing  mt-2 ">
              <label htmlfor="name-bill">
                <label htmlFor="">First Name</label> <br />
                <input
                  className="text-start   rounded-2 input-boxes-bill  mt-1"
                  type="text"
                  id="name-bill"
                  placeholder=""
                  name="name-bill"
                  required=""
                />
              </label>
            </div>
            <div className="form-row-billing  mt-2 ">
              <label htmlfor="c-name">
                <label htmlFor="">Company Name </label> <br />
                <input
                  className="text-start rounded-2 input-boxes-bill mt-1"
                  type="text"
                  id="c-name"
                  placeholder=""
                  name="c-name"
                  required=""
                />
              </label>
            </div>
            <div className="form-row-billing  mt-2 ">
              <label htmlfor="Address">
                <label htmlFor="">Street Adress</label> <br />
                <input
                  className="text-start rounded-2 input-boxes-bill mt-1"
                  type="text"
                  id="Address"
                  placeholder=""
                  name="Address"
                  required=""
                />
              </label>
            </div>
            <div className="form-row-billing  mt-2 ">
              <label htmlfor="address-2">
                <label htmlFor="">Appartment,floor,etc(optional)</label> <br />
                <input
                  className="text-start rounded-2 input-boxes-bill mt-1"
                  type="text"
                  id="address-2"
                  placeholder=""
                  name="Address-2"
                  required=""
                />
              </label>
            </div>
           
            <div className="form-row-billing mt-2 ">
              <label htmlfor="town/city">
                <label htmlFor="">Town/City</label> <br />
                <input
                  className="text-start rounded-2 input-boxes-bill mt-1"
                  type="tel"
                  id="town/city"
                  placeholder=""
                  name="town/city"
                  required=""
                />
              </label>
            </div>
            <div className="form-row-billing mt-2 ">
              <label htmlfor="Phone-bill">
                <label htmlFor="">Phone Number</label> <br />
                <input
                  className="text-start rounded-2 input-boxes-bill mt-1"
                  type="tel"
                  id="phone-bill"
                  placeholder=""
                  name="phone-bill"
                  required=""
                />
              </label>
            </div>
            <div className="form-row-billing mt-2 ">
              <label htmlfor="email-3">
                <label htmlFor="">Email Address</label> <br />
                <input
                  className="text-start rounded-2 input-boxes-bill mt-1"
                  type="email"
                  id="email-3"
                  placeholder=""
                  name="email-3"
                  required=""
                />
              </label>
            </div>
            <div className="form-check mt-1">
              <input
                className="checkbox-input"
                type="checkbox"
                name="checkboxName"
                id="checkboxId"
                defaultChecked=""
              />
              <span className="checkbox-text">
                Save this information for faster checkout next time{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-6 mt-5">
        <div className="right-side">
          <p className="mx-5">
            LCD Monitor <span style={{ marginLeft: "12rem" }}>$700</span>
          </p>
          <p className=" mx-5 mt-3">
            H1 Gamepad <span style={{ marginLeft: "12rem" }}>$1100</span>
          </p>
        </div>
        <div className="right-side-2 mt-4">
          <p>
            Subtotal <span style={{ marginLeft: "17rem" }}>$1800</span>
          </p>
          <hr className="h-line-one" />
          <p className="mt-2">
            shipping <span style={{ marginLeft: "17rem" }}>Free</span>
          </p>
          <hr className="h-line-one" />
          <p className="mt-2">
            Total:<span style={{ marginLeft: "18.5rem" }}>$1800</span>
          </p>
        </div>
        <div className="right-side-3 mt-2">
          <input
            className="radio-btn"
            type="radio"
            id="option1"
            name="group1"
          />
          <label htmlFor="option1">Bank</label>
          <br />
          <input
            className="radio-btn"
            type="radio"
            id="option2"
            name="group1"
          />
          <label className="mt-3" htmlFor="option2">
            Cash On Delivery
          </label>
        </div>
        <div className="right-side-4">
          <div className="  mt-2 d-inline-block p-2 ">
            <label htmlfor="email">
              <input
                className="text-start rounded-1 input-boxes-bill-2  p-2  mt-3"
                type="email-2"
                id="email-2"
                placeholder="Coupon Code"
                name="email-2"
                required=""
              />
            </label>
          </div>
          <button
            type="submit"
            className="btn mx-3   my-login-btn shadow my-button-login text-white rounded-1 py-3  btn-sm "
          >
            Apply cuppon
          </button>
          <button
            type="submit"
            className="btn mx-2 my-login-btn shadow my-button-login text-white rounded-1 py-3 mt-2  btn-sm "
          >
            Place order
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
   </>
  )
}

export default Billing