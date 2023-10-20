import React from "react";
import "../assets/css/home.css";
import { Link } from "react-router-dom";

import Item from "./Item";
const Home = () => {
  return (
    <>
      <section className="container-fluid mt-5">
        <div className="container  ">
          <div className="row col-11 mx-5 my-hero-section">
            <div className="col-6 mt-2  my-transparent-part">
              <h1 className="text-white my-hero-heading mt-5 mx-5 my-transparent-part fw-bold">
                Get the Best Products from specialists
              </h1>
              <h3 className="my-transparent-part mx-5 mt-4 text-white">
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum
              </h3>
              <div className="my-h2 mt-4 d-inline-block rounded-4">
                <button className="rounded-4    my-seller-btn my-h2 my-hero-login-btn mx-5 px-5 py-2">
                  Log In
                </button>
              </div>
              <div className="my-h2 d-inline-block rounded-4">
                <button className="rounded-4  my-seller-btn my-h2 text-white mx-0 px-5 py-2">
                  Sign Up
                </button>
              </div>
            </div>
            <div className="col-6  my-transparent-part">
              <img
                className="my-hero-img  my-transparent-part"
                src={require("../assets/image/Untitled_design_1-removebg-preview.png")}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="container mt-5">
        <div className="row mx-5 mb-5">
          <div className="col-6">
            <h1 className="my-hero-heading  mt-5 my-sec2-heading fw-bolder">
              Featured Products
            </h1>
          </div>
          <div className="col-5 mx-5 px-4">
            <h3 className="my-hero-heading mt-5 mx-5 ">
              <Link className=" fw-bolder text-black" to={""}>
                View state wise products
              </Link>
            </h3>
          </div>
        </div>
        <span> <Item/></span>
        <span> <Item/></span>
        <span> <Item/></span>
      
       
      </section>
    </>
  );
};

export default Home;
