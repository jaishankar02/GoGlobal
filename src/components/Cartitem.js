import React from 'react'
import "../assets/css/cartitem.css";
const Cartitem = () => {
  return (
    <div className="container ">
    <div className="row d-flex justify-content-center align-items-center ">
      <div className="col mt-5">
        <div className="card mb-4">
          <div className="card-body p-2">
            <div className="row align-items-center">
              <div className="col-md-2">
                {/* <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/1.webp"
                  className="img-fluid"
                  alt="Generic placeholder image"
                /> */}
                <img className='my-caritem-img' src={require('../assets/image/shawl 2.png')}/>
              </div>
              <div className="col-md-2 d-flex justify-content-center">
                <div>
                  <p className="small text-muted mb-4 pb-2">Name</p>
                  <p className="lead fw-normal mb-0">Kullu Shawl</p>
                </div>
              </div>
              <div className="col-md-2 d-flex justify-content-center">
                <div>
                  <p className="small text-muted mb-4 pb-2">Quantity</p>
                  <p className="lead fw-normal mb-0">1</p>
                </div>
              </div>
              <div className="col-md-2 d-flex justify-content-center">
                <div>
                  <p className="small text-muted mb-4 pb-2">Price</p>
                  <p className="lead fw-normal mb-0">Rs. 799</p>
                </div>
              </div>
              <div className="col-md-2 d-flex justify-content-center">
                <div>
                  <p className="small text-muted mb-4 pb-2">Total</p>
                  <p className="lead fw-normal mb-0">Rs. 799</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  </div>
  )
}

export default Cartitem