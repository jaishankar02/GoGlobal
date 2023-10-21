import React from 'react'
import "../assets/css/sellerdashboard.css";
import { CgProfile } from "react-icons/cg";
const Sellerdashboard = () => {
  return (
 <>
   <section>
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="box-profile mt-5">
            <div className="inner-profile ">
            <CgProfile className='my-profile-icons'/>
              <p className="para-profile d-inline-block my-trans-part fw-bold">Aditya Sharma</p>
              <p className="para-sell-dash my-trans-part ">
                I believe your products are catching eyes.
              </p>
              <p className="para-sell-dash my-trans-part ">
                Let's track your progress and see your insight
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container last-profile-container ">
      <div className="row mt-5">
        <div className="col-6 left-profile-col mt-0">
          <button
            type="submit"
            className="btn d-block  my-profile-btn  fw-bold my-button-profile text-black rounded-2 py-0 mt-5  btn-lg "
          >
            Orders
          </button>
          <label className="label-last-profile fw-lighter text-muted d-block  " htmlFor="order">
            Check your orders here
          </label>
          <hr className="hr-line-profile mb-5" />
          <div className="main-shop mt-5 d-inline-block">
          <img
                        style={{
                          width: 400,
                          height: 300,
                          marginLeft: "2rem",
                          marginTop: "-4rem"
                        }}
                        src={require('../assets/image/Group 1000005979.png')}
                      />
          </div>

        </div>
        <div className="col-6 left-profile-col mt-0">
          <button
            type="submit"
            className="btn d-block  my-profile-btn  fw-bold my-button-profile text-black rounded-2 py-0 mt-5 btn-lg "
          >
            Orders
          </button>
          <label className="label-last-profile fw-lighter text-muted d-block " htmlFor="order">
            Check your orders here
          </label>
          <hr className="hr-line-profile" />
          <section>
            <div className="container ">
              <div
                style={{ backgroundColor: "rgba(169, 247, 198, 0.675)" }}
                className="row d-flex justify-content-center  align-items-center "
              >
                <div className="col">
                  <div
                    style={{ backgroundColor: "rgba(169, 247, 198, 0.675)" }}
                    className="card mb-4 border-0"
                  >
                    <div className="card-body p-2">
                      <div className="row align-items-center">
                        <div className="col-md-4 d-flex  justify-content-center">
                          <div>
                            <p className="small text-muted mb-4 pb-2">Name</p>
                            <p className="lead my-seller-text fw-normal mb-0">
                              Item1
                            </p>
                            <p className="lead my-seller-text  fw-normal mb-0">
                              Item 2
                            </p>
                          </div>
                        </div>
                        <div className="col-md-4 d-flex justify-content-center">
                          <div>
                            <p className="small text-muted mb-4 pb-2">Date</p>
                            <p className="lead my-seller-text  fw-normal mb-0">
                              1/10/23
                            </p>
                            <p className="lead my-seller-text  fw-normal mb-0">
                              1/10/23
                            </p>
                          </div>
                        </div>
                        <div className="col-md-4 d-flex justify-content-center">
                          <div>
                            <p className="small text-muted mb-4 pb-2">Amount</p>
                            <p className="lead my-seller-text  fw-normal mb-0">
                              9
                            </p>
                            <p className="lead my-seller-text  fw-normal mb-0">
                              9
                            </p>
                          </div>
                        </div>
                        {/* <div class="col-md-2 d-flex justify-content-center">
                                <div>
                                  <p class="small text-muted mb-4 pb-2">Sub Total</p>
                                  <p class="lead fw-normal mb-0">799</p>
                                </div>
                              </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
 </>
  )
}

export default Sellerdashboard