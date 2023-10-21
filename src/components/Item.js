import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
const Item = ({ data }) => {
  return (
    // <div className="row mt-5 p-4  mx-auto gx-lg-5">
    <div className="col-lg-3 col-md-3 mx-3  d-inline-block">
      <div className="card my-colored-part  my-home-item-card rounded-3 shadow-lg border-white rounded-3">
        <div className="card-body mb-0 py-2 rounded-3 ">
          <div >
            <div className="my-colored-part">
              <h2 className="text-center fw-bolder text-black my-trans-part">{data?.productname}</h2>
              <div className="my-img-in-cart my-trans-part">
                {" "}
                <img
                  className="my-car-item-img  align-item-center "
                  src={require("../assets/image/Rectangle_1-removebg-preview.png")}
                />
              </div>
            </div>


            <div className="item-detail-home  mt-2 ">
              <h4 className="px-5 ">{data?.productname}</h4>
              <h4 className="text-danger px-5 ">{data?.price}/-</h4>
              <div className="px-5 ">
                <AiTwotoneStar /> <AiTwotoneStar /> <AiTwotoneStar />{" "}
                <AiTwotoneStar /> <BsStarHalf />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Item;
