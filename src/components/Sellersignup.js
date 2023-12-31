import React, { useState } from 'react'
import "../assets/css/sellersignup.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navextra from './Navextra';
const Sellersignup = () => {
  const [fullname, setFullname] = useState('');
  const [mobileno, setMobileno] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [state, setState] = useState('');
  const [brandname, setBrandname] = useState('');
  const [adharcard, setAdharcard] = useState('');
  const [panno, setPanno] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    axios.post("http://localhost:8800/api/seller/sellerRegister", {
      "name": fullname,
      "phone": mobileno,
      "email": email,
      "password": password,
      "state": state,
      "aadharCard": adharcard,
      "panNumber": panno,
      "brandName": brandname,
    }).then((res) => {
      console.log(res);
      navigate('/buyerlogin');
    }).catch((err) => {
      console.log(err);
    })
  }
  return (
    <>
      <Navextra />
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
            <div className="col-5 mx-5">
              <div className="left-seller-page ">
                <p className="p-seller-page text-start mt-5">Create an account </p>
                <span>Enter your details below</span>
              </div>
              <div className="input-seller-page">
                <div className="mt-4 ">
                  <div className="form-row-seller-page   mt-2 ">
                    <label htmlfor="Seller-name">
                      <input
                        className="text-start plc-text seller-boxes  "
                        type="text"
                        id="Seller-name"
                        placeholder="Full Name"
                        name="seller-name"
                        value={fullname}
                        onChange={(e) => { setFullname(e.target.value) }}
                        required=""
                      />
                    </label>
                  </div>
                  <div className="form-row-seller-page  mt-2  ">
                    <label htmlfor="seller-no">
                      <input
                        className="text-Start plc-text seller-boxes  "
                        type="tel"
                        id="seller-no"
                        placeholder="Mobile No. "
                        name=" seller-no"
                        value={mobileno}
                        onChange={(e) => { setMobileno(e.target.value) }}
                        required=""
                      />
                    </label>
                  </div>
                  <div className="form-row-seller-page  mt-2">
                    <label htmlfor="seller-email">
                      <input
                        className="text-start plc-text seller-boxes  "
                        type="email"
                        id="seller-email"
                        placeholder="Email"
                        name="seller-email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        required=""
                      />
                    </label>
                  </div>
                  <div className="form-row-seller-page  mt-2">
                    <label htmlfor="seller-pass">
                      <input
                        className="text-start plc-text seller-boxes  "
                        type="text"
                        id="seller-pass"
                        placeholder="Password"
                        name="seller-pass"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        required=""
                      />
                    </label>
                  </div>
                  <div className=" my-select-optn mx-2  mt-4 ">
                    <select className="select-seller plc-text rounded-3 " id="exampleSelect"
                      value={state}
                      onChange={(e) => { setState(e.target.value) }}>
                      <option  >Select state</option>
                      <option value={1}>Haryana</option>
                      <option value={2}>Punjab</option>
                      <option value={3} >Himachal</option>

                    </select>
                  </div>
                  <div className="form-row-seller-page  mt-2">
                    <label htmlfor="seller-email">
                      <input
                        className="text-start plc-text seller-boxes  "
                        type="text"
                        id="brand-name"
                        placeholder="Enter your brand name:"
                        name="brand-name"
                        value={brandname}
                        onChange={(e) => { setBrandname(e.target.value) }}
                        required=""
                      />
                    </label>
                  </div>
                  <div className="form-row-seller-page  mt-2">
                    <label htmlfor="seller-email">
                      <input
                        className="text-start plc-text seller-boxes  "
                        type="text"
                        id="aadhar-number"
                        placeholder="Enter Aadhar Card No."
                        name="aadhar-number"
                        value={adharcard}
                        onChange={(e) => { setAdharcard(e.target.value) }}
                        required=""
                      />
                    </label>
                  </div>
                  <div className="form-row-seller-page  mt-2">
                    <label htmlfor="PAN-number">
                      <input
                        className="text-start plc-text seller-boxes  "
                        type="text"
                        id="PAN-number"
                        placeholder="Enter PAN No."
                        name="PAN-number"
                        value={panno}
                        onChange={(e) => { setPanno(e.target.value) }}
                        required=""
                      />
                    </label>
                  </div>

                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="btn mt-3  my-login-btn-seller  text-center shadow my-button-login text-white rounded-1 py-3 mt-2  btn-sm "
                  >
                    Register &amp; Continue
                  </button>
                </div>
              </div>
            </div>
            <div className="col-6 right-side-seller-page">
              <div className="image-side  py-5 text-start float-start mt-5">
                {/* <div className="col-lg-12  col-md-12 mt-lg-0 mt-5 align-self-center"> */}
                <img className="my-seller-signup-img mt-3" src={require('../assets/image/undraw_Mobile_login_re_9ntv-removebg-preview.png')} />
                {/* </div> */}
              </div>
              {/* <div className="faq-side  mt-5">
          <p className="text-center mt-5 para-last-seller mt-3">FAQ,s</p>
          <hr className="line-last-seller" />
        </div> */}
            </div>

          </div>

        </div>
      </section></>

  )
}

export default Sellersignup