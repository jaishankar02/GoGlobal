import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
const Mycarousel = () => {
  return (
    <section>
    <div
    style={{ marginTop: "8%" }}
    className="container  font-family mb-5 my-crousel "
  >
    <div className="row mx-3 my-auto   card rounded-5">
      <div
        id="recipeCarousel"
        style={{ height: "80%" }}
        className="carousel my-carousel2 my-carousel-container rounded-4 my-testimonial-card  slide w-100 "
      >
        <div className="carousel-inner mx-md-2 mb-3 w-100" role="listbox">
        <div className="carousel-item active">
            <div className="col-md-10 mx-5  mx-md-5">
              <div style={{ height: "100%" }} className="my-crousel-card  ">
                <div className=" py-3 row py-md-4 mt-2">
                  <div className="col-lg-5 col-sm-10">
                    <h1 className="fw-bold mt-5 text-start"> Himachali Hat</h1>
                    <h4 className="font-weight-bold  text-start mt-4">
                      {" "}
                      The best quality handmade himachali hats. {" "}
                    </h4>
                    <button
                      style={{ backgroundColor: "#45755B", fontWeight: "bold" }}
                      className="btn  my-faq-text my-colored-part  shadow my-button text-white rounded-5 py-3 px-4 my-5 btn-lg "
                    >
                      Add to Cart
                    </button>
                    <button
                      style={{ backgroundColor: "white", fontWeight: "bold" }}
                      className="btn  my-faq-text my-colored-part  shadow my-button text-black rounded-5 mx-5 py-3 px-4 my-5 btn-lg "
                    >
                      Shop Now
                    </button>
                    {/* <hr class="w-75  bg-black mx-5"> */}
                  </div>
                  <div className="col-lg-7 text-center col-sm-10 mt-3">
                    <div className="d-flex   justify-content-center d-inline-block mb-4">
                        
                       
                        <img className='my-carousel-img mt-4   justify-content-center' src={require("../assets/image/Rectangle_1-removebg-preview.png")}/>
                        <ul className='align-right  my-likes-btn-carousel text-end'>
                            <li className='list-unstyled  carousel-icons'>
                                <AiOutlineShoppingCart/>
                            </li>
                            <li className='list-unstyled carousel-icons'>
                                <AiOutlineHeart/>
                            </li>
                            <li className='list-unstyled carousel-icons'>
                                <AiOutlineShoppingCart/>
                            </li>
                        </ul>
                    </div>
                  
                    {/* <h4 class="fw-bold mt-4" style="color: #FF8400;">Aditya built marketing automation and acquired client "tasty cookies"</h4> */}
                    {/* <iframe class="align-content-center" src="images/testimonial_aditya_video.mp4" frameborder="0"></iframe> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="col-md-10 mx-5  mx-md-5">
              <div style={{ height: "100%" }} className="my-crousel-card  ">
                <div className=" py-5 row py-md-4 mt-3">
                  <div className="col-lg-5 col-sm-10">
                    <h1 className="fw-bold mt-5 text-start"> Kullu Shawls</h1>
                    <h4 className="font-weight-bold  text-start mt-4">
                      {" "}
                      The best quality handmade shawls. {" "}
                    </h4>
                    <button
                      style={{ backgroundColor: "#45755B", fontWeight: "bold" }}
                      className="btn  my-faq-text my-colored-part  shadow my-button text-white rounded-5 py-3 px-4 my-5 btn-lg "
                    >
                      Add to Cart
                    </button>
                    <button
                      style={{ backgroundColor: "white", fontWeight: "bold" }}
                      className="btn  my-faq-text my-colored-part  shadow my-button text-black rounded-5 mx-5 py-3 px-4 my-5 btn-lg "
                    >
                      Shop Now
                    </button>
                    {/* <hr class="w-75  bg-black mx-5"> */}
                  </div>
                  <div className="col-lg-7 text-center col-sm-10 mt-3">
                    <div className="d-flex   justify-content-center d-inline-block mb-4">
                        <img className='my-carousel-img mt-3 justify-content-center' src={require("../assets/image/shawl 2.png")}/>
                        <ul className='align-right text-end'>
                            <li className='list-unstyled  carousel-icons'>
                                <AiOutlineShoppingCart/>
                            </li>
                            <li className='list-unstyled carousel-icons'>
                                <AiOutlineHeart/>
                            </li>
                            <li className='list-unstyled carousel-icons'>
                                <AiOutlineShoppingCart/>
                            </li>
                        </ul>
                    </div>
                  
                    {/* <h4 class="fw-bold mt-4" style="color: #FF8400;">Aditya built marketing automation and acquired client "tasty cookies"</h4> */}
                    {/* <iframe class="align-content-center" src="images/testimonial_aditya_video.mp4" frameborder="0"></iframe> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul className="carousel-indicators carousel-numbers">
          <li
            data-bs-target="#recipeCarousel"
            className="active list-style-none bg-black rounded-circle"
          />
          <li
            data-bs-target="#recipeCarousel"
            className=" bg-black rounded-circle"
          />
      
        </ul>
        <a
          className="carousel-control-prev w-auto"
          href="#recipeCarousel"
          role="button"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon " aria-hidden="true" />
          <span className="sr-only" />
        </a>
        <a
          className="carousel-control-next w-auto"
          href="#recipeCarousel"
          role="button"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon " aria-hidden="true" />
          <span className="sr-only" />
        </a>
      </div>
    </div>
  </div>
  </section>  )
}

export default Mycarousel