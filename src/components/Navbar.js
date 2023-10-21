import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";

import "../assets/css/navbar.css";
const Navbar = () => {
  return (
    <nav>
      <div className="container">
     
        {/* navbar */}
        <div className="my-search-container mt-5  col-11 mx-5  ">
          <h3 className="d-inline-block mx-5 text-white fw-bolder mt-3 mb-4 my-h2">Go Global</h3>
        
          <div className="p-1 my-h2  my-search-bg  text-align-center rounded-5 d-inline-block shadow-sm ">
                <div className="input-group  rounded-5 text-center  my-search-bar">
                <div className="input-group-append  d-inline-block text-center rounded-5 my-search-bar">
                    <button id="button-addon1" className="my-search-btn-icon mx-2 rounded-5" type="submit">
                      <AiOutlineSearch className="search-btn d-inline-block  text-center my-search-bar " />
                    </button>
                  </div>
                  <input
                    type="search"
                    placeholder="What're you searching for?"
                    aria-describedby="button-addon1"
                    className=" rounded-5 w-75  d-inline-block text-center my-search-text my-search-bar "
                  />
                  
                </div>
              </div>
              <div className="my-h2 d-inline-block  be-a-seller-btn rounded-3">
          <NavLink className="my-trans-part my-link-be-seller" to={'/sellersignup'}> <button className="rounded-4  my-be-seller-btn-nav my-seller-btn my-h2 text-white   px-2 py-1">Be a Seller</button></NavLink>
              </div>
              <div className="d-inline-block mx-4 my-h2 align-items-center">

         <button className="my-search-btn-icon my-like-icon  text-white my-h2"> <AiOutlineShoppingCart className="my-h2"  /> </button>  
         <button className="my-search-btn-icon my-like-icon  text-white my-h2"> <BiCommentDetail className="my-h2" /> </button> 
          </div>
            </div>
        {/* <div className=" col-10">
        <div className=" my-search-container rounded-4   mx-5">
          <div className=" d-inline-block">
            <h2 className="d-inline-block">Go Global</h2>
            <form className="mx-3  d-inline-block" action="">
              <div className="p-1 bg-light rounded rounded-pill d-inline-block shadow-sm  mb-4">
                <div className="input-group ">
                  <input
                    type="search"
                    placeholder="What're you searching for?"
                    aria-describedby="button-addon1"
                    className="form-control border-0 bg-light "
                  />
                  <div className="input-group-append">
                    <button id="button-addon1" type="submit">
                      <AiOutlineSearch className="search-btn" />
                    
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <div className="d-inline-block">
              <AiOutlineHeart />
              <AiOutlineShoppingCart />
            </div>

           
          </div>
        </div>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
