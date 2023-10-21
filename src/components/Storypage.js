import React from 'react'
import "../assets/css/storypage.css";
const Storypage = () => {
  return (
    <section>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="label-after-state">
            <label
              className="label-state text-center mt-5 rounded-2 text-white"
              htmlFor="state"
            >
              Himachal Pradesh
            </label>
          </div>
          <div>
            <h4 className="mt-4">Showing Products for: Hats</h4>
          </div>
        </div>
        <div className="col-4 box-state mt-4 ">
          <div className="box-one-state-2 rounded-2">
            <div className="inner-div">
              <div className="over-one-2">
                <div className="main-state d-inline-block">
                  <img
                    style={{
                      width: 200,
                      height: 150,
                      marginLeft: "2rem",
                      marginTop: "-4rem"
                    }}
                    src="WhatsApp_Image_2023-10-21_at_2.38.43_PM-removebg-preview.png"
                    alt=""
                  />
                  <p className=" text-white mx-2 para-state fw-bold">
                    Himachali Topi
                  </p>
                  <p className="text-white mx-2 fw-bold"> 599/-</p>
                </div>
                <div className="state-button">
                  <button
                    type="submit"
                    className="btn  my-state-btn-2 shadow my-button-state text-black rounded-3   btn-sm "
                  >
                    view Product
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 box-state mt-4 ">
          <div className="box-one-state rounded-2">
            <div className="inner-div">
              <div className="over-one">
                <div className="main-state d-inline-block">
                  <img
                    style={{
                      width: 200,
                      height: 150,
                      marginLeft: "2rem",
                      marginTop: "-4rem"
                    }}
                    src="WhatsApp_Image_2023-10-21_at_2.38.43_PM-removebg-preview.png"
                    alt=""
                  />
                  <p className=" text-black mx-2 para-state fw-bold">
                    Himachali Topi
                  </p>
                  <p className="text-black mx-2 fw-bold"> 599/-</p>
                </div>
                <div className="state-button">
                  <button
                    type="submit"
                    className="btn  my-state-btn shadow my-button-state text-white rounded-3   btn-sm "
                  >
                    view Product
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 box-state mt-4 ">
          <div className="box-one-state-2 rounded-2">
            <div className="inner-div">
              <div className="over-one-2">
                <div className="main-state d-inline-block">
                  <img
                    style={{
                      width: 200,
                      height: 150,
                      marginLeft: "2rem",
                      marginTop: "-4rem"
                    }}
                    src="WhatsApp_Image_2023-10-21_at_2.38.43_PM-removebg-preview.png"
                    alt=""
                  />
                  <p className=" text-white mx-2 para-state fw-bold">
                    Himachali Topi
                  </p>
                  <p className="text-white mx-2 fw-bold"> 599/-</p>
                </div>
                <div className="state-button">
                  <button
                    type="submit"
                    className="btn  my-state-btn-2 shadow my-button-state text-black rounded-3   btn-sm "
                  >
                    view Product
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5 mb-5">
        <div className="col-4 offset-2 box-state mt-5 ">
          <div className="box-one-state rounded-2">
            <div className="inner-div">
              <div className="over-one">
                <div className="main-state d-inline-block">
                  <img
                    style={{
                      width: 200,
                      height: 150,
                      marginLeft: "2rem",
                      marginTop: "-4rem"
                    }}
                    src="WhatsApp_Image_2023-10-21_at_2.38.43_PM-removebg-preview.png"
                    alt=""
                  />
                  <p className=" text-black mx-2 para-state fw-bold">
                    Himachali Topi
                  </p>
                  <p className="text-black mx-2 fw-bold"> 599/-</p>
                </div>
                <div className="state-button">
                  <button
                    type="submit"
                    className="btn  my-state-btn shadow my-button-state text-white rounded-3   btn-sm "
                  >
                    view Product
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 mt-5">
          <div className="box-one-state-2 rounded-2">
            <div className="inner-div">
              <div className="over-one-2">
                <div className="main-state d-inline-block">
                  <img
                    style={{
                      width: 200,
                      height: 150,
                      marginLeft: "2rem",
                      marginTop: "-4rem"
                    }}
                    src="WhatsApp_Image_2023-10-21_at_2.38.43_PM-removebg-preview.png"
                    alt=""
                  />
                  <p className=" text-white mx-2 para-state fw-bold">
                    Himachali Topi
                  </p>
                  <p className="text-white mx-2 fw-bold"> 599/-</p>
                </div>
                <div className="state-button">
                  <button
                    type="submit"
                    className="btn  my-state-btn-2 shadow my-button-state text-black rounded-3   btn-sm "
                  >
                    view Product
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="hr-line-state  mb-4 fw-bold" />
    </div>
    <div className="container-fluid">
      <h2 className="fw-bold head-state-2 mt-4">
        Ever wondered how these products are made ?
      </h2>
      <p className="para-state-2  fw-bold">
        Let us explore all of this with the help of producers themselves
      </p>
    </div>
    <div className="container main-story mb-5 w-75 mt-5"></div>
  </section>
  )
}

export default Storypage