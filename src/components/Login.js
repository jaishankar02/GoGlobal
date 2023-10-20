import React from "react";
import "../assets/css/login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <section className="p-0  my-element-area font-family">
      <div className="row gx-0  ">
        <h1 className="text-center">
          You can start Buying once you complete this
        </h1>
        <div className="col-lg-7 col-md-12 mt-lg-0 mt-5 align-self-center">
          {/* <h1
          style={{ color: "#033063" }}
          className="my-heading our-hero-heading mb-5 text-center"
        >
          Join the tribe of over 10,000+{" "}
          <span className="boujee-text">Teenagers</span>{" "}
        </h1> */}
          {/* <h1
          style={{ color: "#033063" }}
          className="my-heading  our-hero-heading mb-4 text-center"
        >
          Get <span className="boujee-text"> HeadStart </span> Today!{" "}
        </h1> */}
          {/* <h3 class="text-center fw-bolder mb-5" style="color: #033063;">Hear what they have to say!</h3> */}
          {/* <div class="p-0"> */}
          {/* <div class="row ">
               
            <div class="col-lg-12">
                <div class="row gx-lg-5   mx-auto justify-content-around ">
                <div class="col-lg-4   mt-lg-0 mt-5">
          
               <video src="images/testimonial_aditya_video.mp4" controls autoplay width="100%" ></video>
                </div>
                <div class="col-lg-4     mt-lg-0 mt-5">
          
                    <video src="images/testimonial_aditya_video.mp4" controls autoplay width="100%" ></video>
                     </div>
                     <div class="col-lg-4 text-center  mt-lg-0 mt-5">
          
                        <video src="images/testimonial_aditya_video.mp4" controls autoplay width="100%" ></video>
                         </div>
            
                </div>
            </div>
            </div> */}
          {/* </div> */}
        </div>
        <div className="col-lg-5 ">
          <div className="   my-form-start mb-lg-0 mb-5 ">
            <div className="form-section   col-lg-12 justify-content-center card-body text-start">
              <h2 className="form-heading text-black text-start mt-5 fw-bold">
                Log in to Go Global
              </h2>
              <h6 className="form-heading text-black text-start mt-4 fw-bold">
                Enter your details below
              </h6>
              <form className="mt-5 my-form">
                <div className="form-row ">
                  <label htmlFor="email" />
                  <input
                    className="text-start float-start"
                    type="email"
                    id="email"
                    placeholder="Email or Phone Number"
                    name="email"
                    required=""
                  />
                </div>
                <div className="form-row mt-5  text-black">
                  <label className="border-bottom" htmlFor="student-name" />
                  <input
                    className="text-start float-start"
                    type="text"
                    id="password"
                    placeholder="Password"
                    name="password"
                    required=""
                  />
                </div>
                <div className="form-row  mt-4  text-black">
                
                  <button
                    
                    type="submit"
                    className="btn d-inline-block my-login-btn my-faq-text   shadow my-button-login text-white rounded-3 py-3 mt-4 btn-sm "
                  >
                    Login
                  </button>

                 <button className="btn d-inline-block  my-faq-text    my-button text-white rounded-3 py-3  mt-4 btn-sm ">
                 <h6 className="d-inline-block mx-5 text-black">Forgot Password?</h6>
                 </button>
                 
                </div>
                <div className="form-row mt-4 mx-5 text-black">
                    <h6 className='d-inline-block text-black'>Don't have account? <span className='d-inline-block mx-4  text-decoration-none ' ><Link to={'/signup'} className='text-black' >Signup</Link> </span></h6> 
                  </div>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
