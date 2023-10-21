import React from 'react'
import "../assets/css/productpreview.css";
const Productpreview = () => {
  return (
    <section>
  <div className="container mt-5 mb-5">
    <div className="row">
      <div className="col-2">
        <div className="box-preview rounded-2 shadow"></div>
        <div className="box-preview rounded-2 shadow mt-2"></div>
        <div className="box-preview rounded-2 shadow mt-2"></div>
        <div className="box-preview rounded-2 shadow mt-2"></div>
      </div>
      <div className="col-6">
        <div className="big-box-preview rounded-2"></div>
      </div>
      <div className="col-4">
        <div className="right-box-preview">
          <div className="one-preview">
            <h4 className="mx-2">Chamba Shawl</h4>
            <p className="para-right-preview mx-2 mt-5">699/-</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
              enim atque exercitationem. Corrupti non sunt sequi recusandae
              delectus eum minus animi aperiam deserunt soluta, tenetur
              architecto eaque nihil maxime repudiandae.
            </p>
          </div>
          <div className="radio-preview  mt-3 mx-2">
            <label className="label-preview" htmlFor="colors">
              Colors :{" "}
            </label>
            <input
              type="radio"
              id="option1"
              name="group1"
              defaultValue="Option 1"
              defaultChecked=""
            />
            <label htmlFor="option1" />
            <input
              type="radio"
              id="option2"
              name="group1"
              defaultValue="Option 2"
            />
            <label htmlFor="option2" />
          </div>
          <div className="div-square-radio-preview  mx-2">
            <div className="radio-preview mt-3 ">
              <label className="label-preview " htmlFor="colors">
                Size :{" "}
              </label>
              <input
                type="radio"
                id="option1"
                name="group1"
                defaultValue="Option 1"
              />
              <label htmlFor="option1" />
              <input
              className='my-trans-part'
                type="radio"
                id="option2"
                name="group1"
                defaultValue="Option 2"
              />
              <label htmlFor="option2" />
              <input
                type="radio"
                id="option3"
                name="group1"
                defaultValue="Option 3"
                defaultChecked=""
              />
              <label htmlFor="option3" />
              <input
                type="radio"
                id="option4"
                name="group1"
                defaultValue="Option 4"
              />
              <label htmlFor="option4" />
            </div>
          </div>
          <div className="third-step-preview">
            <button
              type="submit"
              className="btn  my-preview-btn shadow my-button-preview text-white rounded-2 py-2 mt-4 btn-md "
            >
              Buy Now
            </button>
          </div>
          <div className="last-preview  mt-5 mx-2">
            <h4 className="mx-2">Free Delivery</h4>
            <p className="para-last-preview mx-2 ">
              Enter your postal code or delivery availability
            </p>
            <h4 className="mx-2">Return Delivery</h4>
            <p className="mx-2">free 30 days delivery return</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Productpreview