import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineInstagram} from "react-icons/ai";
import { CiLinkedin} from "react-icons/ci";
import { FiTwitter} from "react-icons/fi";
const Footer = () => {
    const [email, setEmail] = useState('');
 
  return (
    <>
  {/* Footer */}
  <footer
    style={{ backgroundColor: "#45755B", color: "#ffffff" }}
    className=" font-family my-trans-part text-center text-white"
  >
    {/* Grid container */}
    <div className="container my-trans-part  p-4">
      {/* Section: Social media */}
      {/* Section: Text */}
     
      {/* Section: Text */}
      {/*Grid row*/}
      <div className="row my-trans-part gx-lg-5 mt-5">
        <div className="col-lg-3 my-trans-part col-md-6 mb-4  mb-md-0">
          <ul className="list-unstyled my-trans-part mb-2">
            <li className="mb-2 my-trans-part">
              <Link
                style={{ fontWeight: "bold", fontSize: 17 }}
                
                className="text-white text-decoration-none fw-bolder my-trans-part"
              >
             <h1 className='fw-bolder text-start my-trans-part '>Go Global</h1>   
              </Link>
            </li>
            <li className="mb-2 text-start mt-5 my-trans-part">
              <Link src to={''}
                style={{ fontWeight: "bold", fontSize: 17 }}
                className="text-white text-start mt-5 text-decoration-none my-trans-part"
              >
                Subscribe
              </Link>
            </li>
            <li className="mb-2 mt-4 my-trans-part">
            <div className="form-row  w-75 rounded-5 my-trans-part ">
                                    <label htmlFor="email" />
                                    <input
                                        className="text-start rounded-5 w-75 d-inline-block text-white my-trans-part float-start"
                                        type="email"
                                        id="email"
                                        placeholder=" Your Email " 
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required=""
                                    />
                                   <Link className='my-trans-part py-2 d-inline-block text-white'>< MdKeyboardDoubleArrowRight className='my-trans-part'/></Link> 
                                </div>
                            
              {/* <a
                style={{ fontWeight: "bold", fontSize: 17 }}
                href="about_us.html"
                className="text-white my-trans-part"
              >
                About us
              </a> */}
            </li>
           
          </ul>
        </div>
        <div className="col-lg-2 my-trans-part col-md-6 mb-4 mb-md-0">
          <ul className="list-unstyled my-trans-part mb-2">
            <li className="mb-2 my-trans-part">
              <h4   style={{ fontWeight: "bold", fontSize: 26 }}
                href="testimonial.html"
                className="text-white text-start fw-bolder my-trans-part"> 
                Support</h4>
              

              
            </li>
            <li className="mb-2 text-start mt-5 my-trans-part">
              <Link src to={''}
                style={{ fontWeight: "bold", fontSize: 17 }}
                className="text-white text-start text-decoration-none my-trans-part"
              >
               Chandigarh University
              </Link>
            </li>
            <li className="mb-2 text-start mt-3 my-trans-part">
              <Link src to={''}
                style={{ fontWeight: "bold", fontSize: 17 }}
                className="text-white text-start text-decoration-none my-trans-part"
              >
               goglobal@gmail.com
              </Link>
            </li>
            <li className="mb-2 text-start mt-3 my-trans-part">
              <Link src to={''}
                style={{ fontWeight: "bold", fontSize: 17 }}
                className="text-white text-start text-decoration-none my-trans-part"
              >
               738748234923
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-2 my-trans-part col-md-6 mb-4 mb-md-0">
          <ul className="list-unstyled my-trans-part mb-2">
            <li className="mb-2 my-trans-part">
              <h4   style={{ fontWeight: "bold", fontSize: 26 }}
                href="testimonial.html"
                className="text-white text-start  fw-bolder my-trans-part"> 
                Account</h4>
              

              
            </li>
            <li className="mb-2 text-start mt-5 my-trans-part">
              <Link src to={''}
                style={{ fontWeight: "bold", fontSize: 17 }}
                className="text-white text-start text-decoration-none my-trans-part"
              >
               Account
              </Link>
            </li>
            <li className="mb-2 text-start mt-3 my-trans-part">
              <Link src to={''}
                style={{ fontWeight: "bold", fontSize: 17 }}
                className="text-white text-start text-decoration-none my-trans-part"
              >
               Login/Register
              </Link>
            </li>
            <li className="mb-2 text-start mt-3 my-trans-part">
              <Link src to={''}
                style={{ fontWeight: "bold", fontSize: 17 }}
                className="text-white text-start text-decoration-none my-trans-part"
              >
               Cart 
              </Link>
            </li>
            <li className="mb-2 text-start mt-3 my-trans-part">
              <Link src to={''}
                style={{ fontWeight: "bold", fontSize: 17 }}
                className="text-white text-start text-decoration-none my-trans-part"
              >
              Wishlist
              </Link>
            </li>
            <li className="mb-2 text-start mt-3 my-trans-part">
              <Link src to={''}
                style={{ fontWeight: "bold", fontSize: 17 }}
                className="text-white text-start text-decoration-none my-trans-part"
              >
               Shop
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-2 my-trans-part col-md-6 mb-4 mb-md-0">
          <ul className="list-unstyled my-trans-part mb-2">
            <li className="mb-2 my-trans-part">
              <h4   style={{ fontWeight: "bold", fontSize: 26 }}
                href="testimonial.html"
                className="text-white text-start  fw-bolder my-trans-part"> 
                Quick Links</h4>
              

              
            </li>
            <li className="mb-2 text-start mt-5 my-trans-part">
              <Link src to={''}
                style={{ fontWeight: "bold", fontSize: 17 }}
                className="text-white text-start text-decoration-none my-trans-part"
              >
               Privacy Policy
              </Link>
            </li>
            <li className="mb-2 text-start mt-3 my-trans-part">
              <Link src to={''}
                style={{ fontWeight: "bold", fontSize: 17 }}
                className="text-white text-start text-decoration-none my-trans-part"
              >
               Terms of Use
              </Link>
            </li>
            <li className="mb-2 text-start mt-3 my-trans-part">
              <Link src to={''}
                style={{ fontWeight: "bold", fontSize: 17 }}
                className="text-white text-start text-decoration-none my-trans-part"
              >
               FAQ
              </Link>
            </li>
            <li className="mb-2 text-start mt-3 my-trans-part">
              <Link src to={''}
                style={{ fontWeight: "bold", fontSize: 17 }}
                className="text-white text-start text-decoration-none my-trans-part"
              >
            Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-2 my-trans-part col-md-6 mb-4 mb-md-0">
          <ul className="list-unstyled my-trans-part mb-2">
            <li className="mb-2 my-trans-part">
              <h4   style={{ fontWeight: "bold", fontSize: 26 }}
                href="testimonial.html"
                className="text-white text-start  fw-bolder my-trans-part"> 
                Join us on social media</h4>     
            </li>
            <li className="mb-2 d-inline-block  text-start mt-5 my-trans-part">
              <Link src to={''}
                style={{ fontWeight: "bold", fontSize: 24 }}
                className="text-white  text-start text-decoration-none my-trans-part"
              ><BiLogoFacebook className="text-white  text-start text-decoration-none my-trans-part" />
              </Link>
            </li>
            <li className="mb-2 d-inline-block mx-2 text-start mt-5 my-trans-part">
              <Link src to={''}
                style={{ fontWeight: "bold", fontSize: 24 }}
                className="text-white  text-start text-decoration-none my-trans-part"
              ><AiOutlineInstagram className="text-white  text-start text-decoration-none my-trans-part" />
              </Link>
            </li>
            <li className="mb-2 d-inline-block mx-2 text-start mt-5 my-trans-part">
              <Link src to={''}
                style={{ fontWeight: "bold", fontSize: 24 }}
                className="text-white  text-start text-decoration-none my-trans-part"
              ><CiLinkedin className="text-white  text-start text-decoration-none my-trans-part" />
              </Link>
            </li>
            <li className="mb-2 d-inline-block mx-2 text-start mt-5 my-trans-part">
              <Link src to={''}
                style={{ fontWeight: "bold", fontSize: 24 }}
                className="text-white  text-start text-decoration-none my-trans-part"
              ><FiTwitter className="text-white  text-start text-decoration-none my-trans-part" />
              </Link>
            </li>
          </ul>
        </div>
       
      </div>
      {/*Grid row*/}
    </div>
    {/* Grid container */}
    {/* Section: Social media */}
  
    {/* Copyright */}
   
    <div
      className="text-center text-white p-3"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
      Copyright © All rights reserved | Made with{" "}
      <i className="fa-solid fa-heart" style={{ color: "#fc0303" }} /> by{" "}
      <Link to src={''} className="text-white my-trans-part">
        Go Global
      </Link>
    </div>
    {/* Copyright */}
  </footer>
</>

  )
}

export default Footer