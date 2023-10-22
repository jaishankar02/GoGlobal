import axios from 'axios';
import React from 'react'
import { CgProfile } from "react-icons/cg";

const Profileview = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="box-profile mt-5 mb-5 ">

              <div className="inner-profile mb-5">
                <CgProfile className='my-profile-icon' />
                <h3 className="text-center mb-5 fw-bold">Aditya Sharma</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-5 last-profile-container mt-5">
        <div className="row mt-5">
          <div className="col-6 left-profile-col mt-5">
            <button
              type="submit"
              className="btn d-block  my-profile-btn  fw-bold my-button-profile text-black rounded-2 py-0 mt-5 btn-lg "
            >
              Orders
            </button>
            <label className="label-last-profile d-block " htmlFor="order">
              Check your orders here
            </label>
            <hr className="hr-line-profile" />

          </div>
          <div className="col-6 left-profile-col mt-5">
            <button
              type="submit"
              className="btn d-block  my-profile-btn  fw-bold my-button-profile text-black rounded-2 py-0 mt-5 btn-lg "
            >
              Orders
            </button>
            <label className="label-last-profile d-block " htmlFor="order">
              Check your orders here
            </label>
            <hr className="hr-line-profile" />
          </div>

        </div>
      </div>
    </>
  )
}

export default Profileview