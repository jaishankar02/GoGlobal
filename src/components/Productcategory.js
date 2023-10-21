import React from 'react'
import "../assets/css/productcategory.css";
const Productcategory = () => {
  return (
<section>
  <div className="container mt-5">
    <div className="col mt-5">
      <h1>Please select state and catagory to view product</h1>
    </div>
    <div className="col mt-5">
      <div className="  mt-2 d-inline-block ">
        <select
          className="select-shop-data  text-white rounded-2 "
          id="exampleSelect"
        >
          <option value={1}> Haryana</option>
          <option value={2}>Punjab</option>
          <option value={3}>Himachal</option>
        </select>
      </div>
      <div className="  mt-2  d-inline-block">
        <select
          className="select-shop-data-2 text-center text-black mx-5 rounded-2  "
          id="exampleSelect"
        >
          <option> Hat</option>
          <option>Shawls</option>
          <option>Chamba Rumaal</option>
          <option>Pullas</option>
          <option>Minature Painting</option>
        </select>
      </div>
    </div>
    <div className="row mt-5">
      <h1 className="head-shop ">In highlight for today</h1>
      <div className="col-4 mb-5 box-shop mt-4 ">
        <div className="box-one-shop rounded-2">
          <div className="inner-div-shop">
            <div className="over-one-shop">
              <div className="main-shop d-inline-block">
              <img
                    style={{
                      width: 200,
                      height: 150,
                      marginLeft: "2rem",
                      marginTop: "-4rem"
                    }}
                    src ={require('../assets/image/Rectangle_1-removebg-preview.png')}
                  />
                <p className=" text-black mt-2 mx-2 para-shop fw-bold">
                  Himachali Topi
                </p>
                <p className="text-black mx-2 fw-bold"> 599/-</p>
              </div>
              <div className="shop-button">
                <button
                  type="submit"
                  className="btn mt-0  my-shop-btn shadow my-button-shop text-black rounded-3   btn-sm "
                >
                  view Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-4 box-shop mt-4 ">
        <div className="box-one-shop rounded-2">
          <div className="inner-div-shop">
            <div className="over-one-shop">
              <div className="main-shop d-inline-block">
              <img
                    style={{
                      width: 200,
                      height: 150,
                      marginLeft: "2rem",
                      marginTop: "-4rem"
                    }}
                    src ={require('../assets/image/Rectangle_1-removebg-preview.png')}
                  />
                <p className=" text-black mt-2 mx-2 para-shop fw-bold">
                  Himachali Topi
                </p>
                <p className="text-black mx-2 fw-bold"> 599/-</p>
              </div>
              <div className="shop-button">
                <button
                  type="submit"
                  className="btn mt-0  my-shop-btn shadow my-button-shop text-black rounded-3   btn-sm "
                >
                  view Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-4 box-shop mt-4 ">
        <div className="box-one-shop rounded-2">
          <div className="inner-div-shop">
            <div className="over-one-shop">
              <div className="main-shop d-inline-block">
              <img
                    style={{
                      width: 200,
                      height: 150,
                      marginLeft: "2rem",
                      marginTop: "-4rem"
                    }}
                    src ={require('../assets/image/Rectangle_1-removebg-preview.png')}
                  />
                <p className=" text-black mt-2 mx-2 para-shop fw-bold">
                  Himachali Topi
                </p>
                <p className="text-black mx-2 fw-bold"> 599/-</p>
              </div>
              <div className="shop-button">
                <button
                  type="submit"
                  className="btn mt-0  my-shop-btn shadow my-button-shop text-black rounded-3   btn-sm "
                >
                  view Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Productcategory