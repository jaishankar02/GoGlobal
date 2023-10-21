import React, { useState } from 'react'
import "../assets/css/cartlist.css";
import { FcAddImage } from "react-icons/fc";
import Cookies from 'universal-cookie';
import axios from 'axios';
const Cartlist = () => {
  const [productname, setProductName] = useState('');
  const [State, setState] = useState(0);
  const [sellermessage, setSellerMessage] = useState('');
  const [productprice, setProductPrice] = useState('');
  const [productcolor, setProductColor] = useState('');
  const [productsize, setProductSize] = useState('');
  const [productcategory, setProductCategory] = useState('');
  const [images, setImages] = useState(null);

  const cookies = new Cookies();

  const handleInputfileChange = (e) => {
    e.stopPropagation();
    const file = e.target.files[0];
    console.log(file)
    setImages(file);
    // console.log(images);
    // if (e.target?.files?.length != 0) {
    // const imagesarr = [];
    // const formData = new FormData();
    // for (let i = 0; i < e?.target?.files?.length; i++) {
    //   formData.append(`images[${i}]`, file[0]);

    // const imgUrl = URL.createObjectURL(e.target.files[i]);
    // imagesarr.push(imgUrl);
    // }
    // console.log(formData);
    // console.log(imagesarr);
    //   }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const url = "http://localhost:8800/api/product/addProduct";
    const accessToken = cookies.get('sellerAccess', { path: '/' });
    // const formData = new FormData();
    // formData.append('file', images);
    console.log(images);
    // console.log(formData);
    axios.post(url, {
      "productname": productname, "productcategory": productcategory, "productDescription": sellermessage, "price": +productprice, "productColor": productcolor, "productSize": productsize, "productImages": images

    }, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + accessToken
      }
    }
    ).then((res) => {
      console.log(res.data);
    })
  }

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
          {/* <form onSubmit={handleSubmit} > */}
          {/* encType="multipart/form-data" */}
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
                      value={productname}
                      onChange={(e) => setProductName(e.target.value)}
                    />
                  </label>
                </div>
                <div className="  mt-2 ">
                  <select className="select-list plc-text" id="exampleSelect" value={State}
                    onChange={(e) => setState(e.target.value)}>
                    <option>Select state</option>
                    <option value={"1"}>Haryana</option>
                    <option value={"3"}>Himachal</option>
                    <option value={"2"}>Punjab</option>
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
                      value={sellermessage}
                      onChange={(e) => setSellerMessage(e.target.value)}
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
                        value={productprice}
                        onChange={(e) => setProductPrice(e.target.value)}
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
                      value={productsize}
                      onChange={(e) => setProductSize(e.target.value)}
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
                      value={productcolor}
                      onChange={(e) => setProductColor(e.target.value)}
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
                      value={productcategory}
                      onChange={(e) => setProductCategory(e.target.value)}
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
                      <FcAddImage className='My-img-icons align-item-self-center align-items-center' />
                      <input
                        className="text-start d-none light-border-box list-boxes-4 mx-2 rounded-2 "
                        type="file"
                        id=" Userinputs"
                        accept='image/*'
                        multiple
                        name="inputImages"

                        onChange={handleInputfileChange}

                      />


                    </label>
                  </div>
                </div>

              </p>
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn  my-list-btn shadow my-button-list text-white rounded-2 py-3 mt-2 btn-sm "
            >
              Enlist product
            </button>
          </div>
          {/* </form> */}
        </div>
      </div>
    </section>
  )
}

export default Cartlist