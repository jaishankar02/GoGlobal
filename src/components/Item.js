import React from 'react'
import { AiTwotoneStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
const Item = () => {
  return (
    // <div className="row mt-5 p-4  mx-auto gx-lg-5">
    <div className="col-lg-3 mx-5 d-inline-block">
      <div className="card my-home-item-card shadow border-white rounded-3">
        <div className="card-body">
          <div>
              <h1 className="text-center my-trans-part">
                  Himachali Hat
              </h1>
              <div className="my-img-in-cart "> <img
          className="my-car-item-img my-transparent-part"
          src={require("../assets/image/Rectangle_1-removebg-preview.png")}
        /></div>
             <div className="item-detail-home mt-3 ">
              <h4 className="mx-5 px-4">Himachali Hat</h4>
              <h4 className="text-danger mx-5 px-4" >500/-</h4>
              <div className="mx-5 px-4">
                  <AiTwotoneStar/>  <AiTwotoneStar/>  <AiTwotoneStar/>  <AiTwotoneStar/> <BsStarHalf/>
              </div>
             </div>
          </div>
        </div>
      </div>
    {/* </div> */}
    
    
  </div>
  )
}

export default Item