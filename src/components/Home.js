import React from "react";
import "../assets/css/home.css";
import { Link, useNavigate } from "react-router-dom";
import { TbTruckDelivery } from "react-icons/tb";
import { BiSolidCrown } from "react-icons/bi";
import { RiSecurePaymentFill } from "react-icons/ri";
import Item from "./Item";
// import Carousel from "./Carousel"

import { useQuery } from "react-query";
import jwtDecode from "jwt-decode";
import Cookies from "universal-cookie";
import axios from "axios";
import Mycarousel from "./Mycarousel";
import Footer from "./Footer";
// import { Carousel } from "bootstrap";
const Home = () => {
    const navigate = useNavigate();
    const cookies = new Cookies();
    const { data: homeProducts } = useQuery(
        "homeProducts",
        async () => {
            const accessToken = cookies.get("access", { path: "/" });
            console.log(accessToken);
            if (!accessToken) {
                // navigate('/login');
            }
            const tokenData = jwtDecode(accessToken);
            const currentTime = Math.floor(Date.now() / 1000);
            console.log(tokenData, currentTime);
            if (tokenData.exp < currentTime) {
                console.log("jai");
                const refreshToken = cookies.get("refresh", {
                    httpOnly: true,
                    path: "/",
                });
                console.log(refreshToken);
                const response = await axios.post("http://localhost:8800/api/refresh", {
                    refreshToken: refreshToken,
                });
                console.log(response);
                const newAccessToken = response.data.accessToken;
                cookies.set("access", newAccessToken, { path: "/" });
            }
            const token = cookies.get("access", { path: "/" });
            return await axios.post('http://localhost:8800/api/product/selectByCategory', {
                productcategory: "hat"
            }, {
                headers: {
                    Authorization: "Bearer " + token
                }
            });
        },
        {
            refetchOnWindowFocus: false,
        }
    );
    console.log(homeProducts);
    return (
        <>
            <section className="container-fluid  mt-5">
                <div className="container  ">
                    <div className="row col-11 mx-5  my-hero-section">
                        <div className="col-6 mt-2  my-transparent-part">
                            <h1 className="text-white my-hero-heading mt-5 mx-5 my-transparent-part fw-bold">
                                Get the Best Products from specialists
                            </h1>
                            <h3 className="my-transparent-part mx-5 mt-4 text-white">
                                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                                lorem ipsum
                            </h3>
                            <div className="my-h2 shadow-lg mt-4 d-inline-block rounded-4">
                                <Link className="my-trans-part " to={'/login'}> <button className="rounded-4  shadow-lg  my-seller-btn my-h2 my-hero-login-btn mx-5 px-5 py-2">
                                    Log In
                                </button></Link>
                            </div>
                            <div className="my-h2 d-inline-block shadow-lg rounded-4">
                                <Link className="my-trans-part "
                                    to={'/signup'}>   <button className="rounded-4 shadow-lg my-seller-btn my-h2 text-white mx-0 px-5 py-2">
                                        Sign Up
                                    </button></Link>
                            </div>
                        </div>
                        <div className="col-6  my-transparent-part">
                            <img
                                className="my-hero-img   my-transparent-part"
                                src={require("../assets/image/Untitled design (2).png")}
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* items */}
            <section className="container mt-5">
                <div className="row mx-5 ">
                    <div className="col-6">
                        <h1 className="my-hero-heading  mt-5 my-sec2-heading fw-bolder">
                            Featured Products
                        </h1>
                    </div>
                    <div className="col-5 mx-5 px-4">
                        <h5 className="my-hero-heading px-3 mt-5 py-3 mx-5 ">
                            <Link className=" fw-bolder mx-5 text-black" to={""}>
                                View state wise products
                            </Link>
                        </h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mx-5 gx-lg-5">
                        {
                            homeProducts?.data?.productArr?.map((element) => {
                                return <span className="mx-3">

                                    <Item data={element} />
                                </span>
                            })
                        }

                        {/* <span className="mx-3">
                            {" "}
                            <Item />
                        </span>
                        <span className="mx-3">
                            {" "}
                            <Item />
                        </span> */}
                    </div>
                </div>
            </section>
            {/* btn */}
            <section className="container mt-5">
                <div className="my-h2 mx-5 d-inline-block rounded-4">
                    <Link to={'/login'}> <button className="rounded-5 text-white text-center  my-seller-btn my-h2 my-best-seller-atc-btn mx-5 px-5 py-3">
                        Best  Seller
                    </button>
                    </Link>
                </div>
            </section>
            {/*  */}
            <section className="container mb-5 ">
                <div className="col-12">
                    <Mycarousel />
                </div>
            </section>
            {/*  */}
            <section className="container-fluid  mt-5">
                <div className="row mt-5 p-0  coloring-container">
                    <div className="col-3   my-transparent-part">
                        <img
                            className="my-sale-img my-transparent-part"
                            src={require("../assets/image/Untitled design (6) 1.png")}
                        />
                    </div>

                    <div className="col-6 my-trans-part">
                        <h1 className="fw-bolder mb-2 my-text-col-home text-white my-trans-part text-center">Biggest Festival savings</h1>
                        <h2 className="text-center text-white my-trans-part">on all your favourites</h2>
                        <div className="my-h2 my-cta-hom-btn mt-3  text-center align-items-center d-inline-block rounded-4">
                            <button className="rounded-5 text-center text-white align-item-center   my-seller-btn my-h2 my-best-seller-atc-btn  px-5 py-3">
                                Start Purchasing
                            </button>
                        </div>
                    </div>
                    <div className="col-3 my-sale-img-container  my-transparent-part">
                        <img
                            className="my-sale-img  my-transparent-part"
                            src={require("../assets/image/Untitled design (9).png")}
                        />
                    </div>
                </div>
            </section>
            {/*  */}
            <section className=" py-5 mt-5 font-family ">
                <section className="container-fluid mt-3 py-4   my-element-area ">
                    <div className="row mx-auto ">

                        <div className="col-lg-4 mt-lg-0 mt-5 mb-5 mx-auto text-center">
                            {/* <div  style="background-color: white; margin-top: -50%;"  class="p-5 rounded-circle"  >
                  <img  src="images/certi b&w.png"    height="120" width="120" alt="">
              </div> */}
                            <div className="d-inline-block">
                                <TbTruckDelivery className="fa-regular p-3 rounded-circle my-gray-section-icons fa-face-smile-beam" />

                            </div >
                            <div className="d-inline-block">
                                <h5 style={{ color: "#45755B" }} className="mx-3  fw-bolder mt-3">
                                    Free Delivery!
                                </h5>
                                <h6 className="text-black fw-bold mx-5 mt-3">
                                    On order above $50<br />
                                </h6>
                            </div>

                        </div>
                        <div className="col-lg-4 mt-lg-0 mt-5 mb-5 mx-auto text-center">
                            {/* <div  style="background-color: white; margin-top: -50%;"  class="p-5 rounded-circle"  >
                  <img  src="images/certi b&w.png"    height="120" width="120" alt="">
              </div> */}
                            <div className="d-inline-block">
                                <BiSolidCrown className="fa-regular p-3 rounded-circle my-gray-section-icons fa-face-smile-beam" />

                            </div >
                            <div className="d-inline-block">
                                <h5 style={{ color: "#45755B" }} className="mx-3  fw-bolder mt-3">
                                    Best Quality !
                                </h5>
                                <h6 className="text-black fw-bold mx-5 mt-3">
                                    Best quality in low price<br />
                                </h6>
                            </div>

                        </div>
                        <div className="col-lg-4 mt-lg-0 mt-5 mb-5 mx-auto text-center">
                            <div className="d-inline-block">
                                <RiSecurePaymentFill className="fa-regular p-3 rounded-circle my-gray-section-icons fa-face-smile-beam" />
                            </div>
                            <div className="d-inline-block">
                                <h5 style={{ color: "#45755B" }} className=" fw-bolder mx-4 mt-3">
                                    One year warranty!
                                </h5>
                                <h6 className=" mx-5 text-black mt-3">Available warranty <br />
                                </h6>
                            </div>

                        </div>

                    </div>
                </section>
            </section>
            {/* footer */}


        </>
    );
};

export default Home;
