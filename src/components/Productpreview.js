import React from 'react'
import "../assets/css/productpreview.css";
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { AiTwotoneStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { TbTruckReturn } from "react-icons/tb";
import axios from 'axios';
const Productpreview = () => {
  const { productID } = useParams();
  console.log(productID)
  const { data: product } = useQuery("singleProduct", async () => {
    return await axios.post('http://localhost:8800/api/product/getProduct', {
      "productId": productID
    })
  })
  console.log(product);
  return (
    <section>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-2">
            <div className="box-preview rounded-2 shadow"><img className='rounded-4' src={`http://localhost:8800/images/${product?.data?.product?.productImage}`} /></div>
            <div className="box-preview rounded-2 shadow mt-2"><img className='rounded-4' src={require("../assets/image/download (1).jpeg")} /></div>
            <div className="box-preview rounded-2 shadow mt-2"><img className='rounded-4' src={require("../assets/image/download (2).jpeg")} /></div>
            {/* <div className="box-preview rounded-2 shadow mt-2"><img src={require("../assets/image/download (3).jpeg")} /></div> */}
          </div>
          <div className="col-6">
            <div className="big-box-preview rounded-2">
              <img className='rounded-3' src={`http://localhost:8800/images/${product?.data?.product?.productImage}`} />
            </div>
          </div>
          <div className="col-4">
            <div className="right-box-preview">
              <div className="one-preview">
                <h3 className="mx-1 fw-bolder ">{product?.data?.product?.productname}</h3>
                <div className="mt-1 ">
                  <AiTwotoneStar className='star-icons-product' /> <AiTwotoneStar className='star-icons-product' /> <AiTwotoneStar className='star-icons-product' />{" "}
                  <AiTwotoneStar className='star-icons-product' /> <BsStarHalf className='star-icons-product' /> <p className='d-inline-block mb-0'> <strong> |
                  </strong>  180 Reviews</p>
                </div>
                <p className="para-right-preview mx-1 mt-1">Rs {product?.data?.product?.price}/-</p>
                <p>
                  {product?.data?.product?.productDescription}
                </p>
              </div>
              {/* <div className="radio-preview  mt-3 mx-2">
                <label className="label-preview" htmlFor="colors">
                  Colors :{" "}
                </label>
                <input
                  type="radio"
                  id="option1"
                  name="group1"
                  defaultValue="Option 1"
                  defaultChecked=""
                />
                <label htmlFor="option1" />
                <input
                  type="radio"
                  id="option2"
                  name="group1"
                  defaultValue="Option 2"
                />
                <label htmlFor="option2" />
              </div> */}
              {/* <div className="div-square-radio-preview  mx-2">
                <div className="radio-preview mt-3 ">
                  <label className="label-preview " htmlFor="colors">
                    Size :{" "}
                  </label>
                  <input
                    type="radio"
                    id="option1"
                    name="group1"
                    defaultValue="Option 1"
                  />
                  <label htmlFor="option1" />
                  <input
                    className='my-trans-part'
                    type="radio"
                    id="option2"
                    name="group1"
                    defaultValue="Option 2"
                  />
                  <label htmlFor="option2" />
                  <input
                    type="radio"
                    id="option3"
                    name="group1"
                    defaultValue="Option 3"
                    defaultChecked=""
                  />
                  <label htmlFor="option3" />
                  <input
                    type="radio"
                    id="option4"
                    name="group1"
                    defaultValue="Option 4"
                  />
                  <label htmlFor="option4" />
                </div>
              </div> */}
              <div className="third-step-preview">
                <button
                  type="submit"
                  className="btn  my-preview-btn shadow my-button-preview text-white rounded-2 py-2 mt-4 btn-md "
                >
                  Buy Now
                </button>
              </div>
              <div className="last-preview  mt-5 mx-2">
                <TbTruckDelivery className='my-del-icons mx-2 d-inline-block' />
                <span className='d-inine-block'>
                  <h4 className="mx-2 d-inline-block">   Free Delivery</h4>
                  <p className="para-last-preview  d-inline-block  ">
                    Enter your postal code or delivery availability
                  </p>
                </span>

                <TbTruckReturn className='my-del-icons mx-2 d-inline-block' />
                <h4 className="mx-2 d-inline-block">   Return Delivery</h4>
                <p className="para-last-preview  d-inline-block  ">free 30 days delivery return</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Productpreview