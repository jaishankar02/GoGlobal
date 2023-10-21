import React from "react";
import "../assets/css/home.css";
import { Link, useNavigate } from "react-router-dom";
import Item from "./Item";
import { useQuery } from "react-query";
import jwtDecode from "jwt-decode";
import Cookies from "universal-cookie";
import axios from "axios";
const Home = () => {
    const navigate = useNavigate();
    const cookies = new Cookies();
    const { data: homeProducts } = useQuery('homeProducts', async () => {
        const accessToken = cookies.get('access', { path: '/' });
        console.log(accessToken);
        if (!accessToken) {
            navigate('/login');
        }
        const tokenData = jwtDecode(accessToken);
        const currentTime = Math.floor(Date.now() / 1000);
        console.log(tokenData, currentTime);
        if (tokenData.exp < currentTime) {
            console.log("jai");
            const refreshToken = cookies.get('refresh', { httpOnly: true, path: '/' });
            console.log(refreshToken);
            const response = await axios.post('http://localhost:8800/api/refresh', {
                "refreshToken": refreshToken
            });
            console.log(response);
            const newAccessToken = response.data.accessToken;
            cookies.set('access', newAccessToken, { path: '/' });
        }
        const token = cookies.get('access', { path: '/' });
        return await axios.post()
    }, {
        refetchOnWindowFocus: false
    })
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
                <span> <Item /></span>
                <span> <Item /></span>
                <span> <Item /></span>


            </section>
        </>
    );
};

export default Home;
