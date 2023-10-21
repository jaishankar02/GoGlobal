import React from "react";

const Mycarousel2 = () => {
  return (
    <section>
      <div
        style={{ marginTop: "5%" }}
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
                      <div className="col-lg-6 col-sm-10">
                        <h1 className="fw-bold mt-5 text-start">
                          {" "}
                          Chamba Rumaal
                        </h1>
                        <h4 className="font-weight-bold  text-start mt-4">
                          {" "}
                          The Chamba Rumal or Chamba handkerchief is an
                          embroidered handicraft that was once promoted under
                          the patronage of the former rulers of Chamba kingdom.
                          It is a common item of gift during marriages with
                          detailed patterns in bright and pleasing colour
                          schemes Known as a “needle wonder” Chamba Rumal is now
                          made in square and rectangular shapes. The materials
                          used still consist of muslin, malmal, khaddar (a
                          coarse fabric), fine charcoal or brush, and silk
                          threads without knots. After completing the
                          embroidery, the fabric is stitched with a border of
                          about 2 to 4 inches on all sides{" "}
                        </h4>

                        {/* <hr class="w-75  bg-black mx-5"> */}
                      </div>
                      <div className="col-lg-5 text-center col-sm-10 mt-3">
                        <div className="d-flex   justify-content-center d-inline-block mb-4">
                          <img
                            className="my-carousel-img mt-4   justify-content-center"
                            src={require("../assets/image/Chamba_Rumals__Painted_Embroideries_or_Embroidered_Paintings_-removebg-preview.png")}
                          />
                          {/* <ul className='align-right  my-likes-btn-carousel text-end'>
                            <li className='list-unstyled  carousel-icons'>
                                <AiOutlineShoppingCart/>
                            </li>
                            <li className='list-unstyled carousel-icons'>
                                <AiOutlineHeart/>
                            </li>
                            <li className='list-unstyled carousel-icons'>
                                <AiOutlineShoppingCart/>
                            </li>
                        </ul> */}
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
                        <h1 className="fw-bold mt-5 text-start">
                          {" "}
                          Kullu Shawls
                        </h1>
                        <h4 className="font-weight-bold  text-start mt-4">
                          {" "}
                          Like a pagri, or the turban in other parts of India,
                          the Himachali topi is a necessary fashion wear during
                          marriages, festivals, religious functions, fairs and
                          other local events. Traditionally, worn has a headgear
                          to protect from the chilly winter winds, these
                          colourful caps have percolated into cultural existence
                          of the state to become the symbol of the state. There
                          can’t be better memento or gift that represents a
                          state better than the Himachali Topi. Although, there
                          are other handicrafts, the beautiful Kullu shawls but
                          nothing compares the charm of this traditional cap.{" "}
                        </h4>

                        {/* <hr class="w-75  bg-black mx-5"> */}
                      </div>
                      <div className="col-lg-7 text-center col-sm-10 mt-3">
                        <div className="d-flex   justify-content-center d-inline-block mb-4">
                          <img
                            className="my-carousel-img mt-3 justify-content-center"
                            src={require("../assets/image/Rectangle_1-removebg-preview.png")}
                          />
                          {/* <ul className='align-right text-end'>
                            <li className='list-unstyled  carousel-icons'>
                                <AiOutlineShoppingCart/>
                            </li>
                            <li className='list-unstyled carousel-icons'>
                                <AiOutlineHeart/>
                            </li>
                            <li className='list-unstyled carousel-icons'>
                                <AiOutlineShoppingCart/>
                            </li>
                        </ul> */}
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
              <span
                className="carousel-control-prev-icon "
                aria-hidden="true"
              />
              <span className="sr-only" />
            </a>
            <a
              className="carousel-control-next w-auto"
              href="#recipeCarousel"
              role="button"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon "
                aria-hidden="true"
              />
              <span className="sr-only" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mycarousel2;
