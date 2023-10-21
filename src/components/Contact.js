import React from 'react'
import "../assets/css/contact.css";
const Contact = () => {
  return (
    <section>
    <div className="container main-container mb-5">
      <div className="row">
        <div className="col-4 main-col-box  shadow rounded-2">
          <div className="box-one">
            <p>
              <i className="fa-solid fa-phone" /> call to us
            </p>
            <p className=" mt-3 para-two">
              we are available 24/7 , 7 days a week
            </p>
            <p className=" para-two fw-li">Phone: +88987656789</p>
            <hr className=" hr-line mt-5 " />
            <p>
              <i className="fa-solid fa-phone" /> Write to us{" "}
            </p>
            <p className=" mt-3 para-two">
              Fill out our form and we will contact to you within 24 hours{" "}
            </p>
            <p className=" para-two fw-li">Emails: Customer@esxclusive.com</p>
            <p className=" para-two fw-li">Emails: Support@exclusive.com</p>
          </div>
        </div>
        <div className="col-7 offset-1 col-two shadow rounded-2 ">
          <div className="mt-4 mx-4 ">
            <div className="form-row  d-inline-block mx-1 ">
              <label htmlfor="email">
                <input
                  className="text-start my-contact-input rounded-2 "
                  type="email"
                  id="email"
                  placeholder="Your Name"
                  name="email"
                  required=""
                />
              </label>
            </div>
            <div className="form-row d-inline-block mx-1  ">
              <label htmlfor="email">
                <input
                  className="text-Start my-contact-input rounded-2 "
                  type="email"
                  id="email"
                  placeholder=" Your Email "
                  name=" Email"
                  required=""
                />
              </label>
            </div>
            <div className="form-row d-inline-block mx-1">
              <label htmlfor="email">
                <input
                  className="text-start my-contact-input rounded-2 "
                  type="email"
                  id="email"
                  placeholder="Your Phone"
                  name="email"
                  required=""
                />
              </label>
            </div>
          </div>
          <div className="mt-4 mx-4">
            <textarea
              className="text-areaa rounded-2"
              id="message"
              name="message"
              rows={11}
              cols={78}
              defaultValue={"Your message"}
            />
          </div>
          <div className="form-row    text-black">
            <button
              type="submit"
              className="btn my-contact-btn mb-4  shadow my-button-login text-white rounded-2 py-3 mt-2 btn-sm "
            >
              Send Messsage
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Contact