import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
const Item = () => {
  return (
    // <div className="row mt-5 p-4  mx-auto gx-lg-5">
    <div className="col-lg-3 col-md-3 mx-3  d-inline-block">
      <div className="card my-colored-part my-home-item-card shadow border-white rounded-3">
        <div className="card-body mb-0 my-colored-part">
          <div >
            <div className="my-colored-part">
            <h2 className="text-center fw-bolder text-white my-trans-part">Himachali Hat</h2>
            <div className="my-img-in-cart my-trans-part">
              {" "}
              <img
                className="my-car-item-img my-trans-part align-item-center "
                src={require("../assets/image/Rectangle_1-removebg-preview.png")}
              />
            </div>
            </div>
           

            <div className="item-detail-home shadow-lg mt-2 ">
              <h4 className="px-5 ">Himachali Hat</h4>
              <h4 className="text-danger px-5 ">500/-</h4>
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
