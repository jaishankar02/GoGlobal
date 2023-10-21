import React from 'react'
import "../assets/css/sellersignup.css";
const Sellersignup = () => {
  return (
    <section>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="header-seller-page ">
            <h1 className="text-center mt-5">
              You can start selling once you complete this
            </h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="left-seller-page">
            <p className="p-seller-page mt-5">Create an account </p>
            <span>Enter your details below</span>
          </div>
          <div className="input-seller-page">
            <div className="mt-2 ">
              <div className="form-row-seller-page   mt-2 ">
                <label htmlfor="Seller-name">
                  <input
                    className="text-start seller-boxes rounded-2 "
                    type="text"
                    id="Seller-name"
                    placeholder="Full Name"
                    name="seller-name"
                    required=""
                  />
                </label>
              </div>
              <div className="form-row-seller-page  mt-2  ">
                <label htmlfor="seller-no">
                  <input
                    className="text-Start seller-boxes rounded-2 "
                    type="tel"
                    id="seller-no"
                    placeholder="Mobile No. "
                    name=" seller-no"
                    required=""
                  />
                </label>
              </div>
              <div className="form-row-seller-page  mt-2">
                <label htmlfor="seller-email">
                  <input
                    className="text-start seller-boxes rounded-2 "
                    type="email"
                    id="seller-email"
                    placeholder="Email"
                    name="seller-email"
                    required=""
                  />
                </label>
              </div>
              <div className="form-row-seller-page  mt-2">
                <label htmlfor="seller-pass">
                  <input
                    className="text-start seller-boxes rounded-2 "
                    type="text"
                    id="seller-pass"
                    placeholder="Password"
                    name="seller-pass"
                    required=""
                  />
                </label>
              </div>
              <div className="  select-seller mt-2 ">
                <select className="select-seller " id="exampleSelect">
                  <option>Select state</option>
                  <option>Haryana</option>
                  <option>Himachal</option>
                  <option>Punjab</option>
                </select>
              </div>
              <div className="form-row-seller-page  mt-2">
                <label htmlfor="seller-email">
                  <input
                    className="text-start seller-boxes rounded-2 "
                    type="email"
                    id="seller-email"
                    placeholder="Email"
                    name="seller-email"
                    required=""
                  />
                </label>
              </div>
              <div className="form-row-seller-page  mt-2">
                <label htmlfor="seller-email">
                  <input
                    className="text-start seller-boxes rounded-2 "
                    type="email"
                    id="seller-email"
                    placeholder="Email"
                    name="seller-email"
                    required=""
                  />
                </label>
              </div>
              <button
                type="submit"
                className="btn  my-login-btn-seller  text-center shadow my-button-login text-white rounded-1 py-3 mt-2  btn-sm "
              >
                Register &amp; Continue
              </button>
            </div>
          </div>
        </div>
        <div className="col-6 right-side-seller-page">
          <div className="image-side mt-5">
            <h1 />
          </div>
          <div className="faq-side ">
            <p className="text-center para-last-seller mt-3">FAQ,s</p>
            <hr className="line-last-seller" />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Sellersignup