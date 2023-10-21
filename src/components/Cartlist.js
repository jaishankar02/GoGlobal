import React, { useState } from 'react'
import "../assets/css/cartlist.css";
import { FcAddImage} from "react-icons/fc";
const Cartlist = () => {
  const [productname, setProductName] = useState('');
  const [State, setState] = useState(0);
  const [sellermessage, setSellerMessage] = useState('');
  const [productprice, setProductPrice] = useState(0);
  const [productcolor, setProductColor] = useState('');
  const [productcategory, setProductCategory] = useState('');
 
  return (
    <section>
    <div className="container mb-5">
      <div className="row">
        <div className="col-12">
          <div className="header-listing-page ">
            <h2 className="text-start mt-5">All set...</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-7">
          <div className="left-list-page">
            <p className="p-listing-page ">
              Start listing your product and kickstart your dream business{" "}
            </p>
            <span>Enter your details below</span>
          </div>
          <div className="input-list-page mt-4">
            <div className="mt-2 ">
              <div className="form-row-list-page   mt-2 ">
                <label htmlfor="list-name">
                  <input
                    className="text-start plc-text list-boxes rounded-2 "
                    type="text"
                    id="list-name"
                    placeholder="Name of product"
                    name="list-name"
                    required=""
                  />
                </label>
              </div>
              <div className="  mt-2 ">
                <select className="select-list plc-text" id="exampleSelect">
                  <option>Select state</option>
                  <option>Haryana</option>
                  <option>Himachal</option>
                  <option>Punjab</option>
                </select>
              </div>
              <div className="form-row-list-page  mt-4">
                <div className="mt-2 ">
                  <textarea
                    className="text-area plc-text rounded-2"
                    id="message"
                    name="message"
                    rows={8}
                    cols={45}
                    defaultValue={"Your message"}
                  />
                </div>
              </div>
              <div>
              <div className="form-row-list-page d-inline-block  mt-2">
                <label htmlfor="list-price">
                  <label className="list-boxes-2 bold-border-box plc-text rounded-2" htmlFor="price">
                    Price*
                  </label>
                </label>
              </div>
              <div className="form-row-list-page d-inline-block  mt-2">
                <label htmlfor="list-price">
                  <input
                    className="text-start light-border-box plc-text list-boxes-3 rounded-2 "
                    type="text"
                    id="list-price"
                    name="list-price"
                    required=""
                  />
                </label>
              </div>

              </div>
              
              <div>
                <h5 className="mt-3 plc-text">Product detais:</h5>
              </div>
              <div className="form-row-list-page  d-inline-block  mt-2">
                <label htmlfor="list-stock">
                  <label className="list-boxes-4 bold-border-box plc-text rounded-2" htmlFor="price">
                    product size
                  </label>
                </label>
              </div>
              <div className="form-row-list-page  d-inline-block  mt-2">
                <label htmlfor="list-size">
                  <input
                    className="text-start light-border-box list-boxes-4 plc-text mx-2 rounded-2 "
                    type="text"
                    id="list-size"
                    name="list-size"
                    required=""
                  />
                </label>
              </div>
            </div>
            <div>
              <div className="form-row-list-page d-inline-block  mt-2">
                <label htmlfor="list-stock">
                  <label className="list-boxes-4 bold-border-box plc-text rounded-2" htmlFor="price">
                    product color
                  </label>
                </label>
              </div>
              <div className="form-row-list-page d-inline-block  mt-2">
                <label htmlfor="list-color">
                  <input
                    className="text-start light-border-box list-boxes-4 mx-2 rounded-2 "
                    type="text"
                    id="list-color"
                    name="list-color"
                    required=""
                  />
                </label>
              </div>
            </div>
            <div>
              <div className="form-row-list-page d-inline-block  mt-2">
                <label htmlfor="list-stock">
                  <label className="list-boxes-4 bold-border-box plc-text rounded-2" htmlFor="price">
                    product category*
                  </label>
                </label>
              </div>
              <div className="form-row-list-page d-inline-block  mt-2">
                <label htmlfor="list-category">
                  <input
                    className="text-start light-border-box list-boxes-4 mx-2 rounded-2 "
                    type="text"
                    id="list-category"
                    name="list-category"
                    required=""
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="col-5 mt-0 right-side-list-page">
          <div className="faq-side-list rounded-3 ">
            <p className="text-start para-last-list mt-1 mx-1">
              Product photos(0/4)
              <div className='col-12  my-img-icon-div '>
                <div >
                <label htmlfor="userinputs">
                  <FcAddImage className='My-img-icons align-item-self-center align-items-center'/>
                  <input
                    className="text-start d-none light-border-box list-boxes-4 mx-2 rounded-2 "
                    type="file"
                    id=" Userinputs"
                    accept='image/*'
                    multiple
                    name="inputImages"
                    
                  />
                

                </label>
                </div>
              </div>

            </p>
          </div>
          <button
            type="submit"
            className="btn  my-list-btn shadow my-button-list text-white rounded-2 py-3 mt-2 btn-sm "
          >
            Enlist product
          </button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Cartlist