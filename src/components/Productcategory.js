import React, { useState } from 'react'
import "../assets/css/productcategory.css";
import { useQuery } from 'react-query';
import Cookies from 'universal-cookie';
import axios from 'axios';
const Productcategory = () => {
  const [state, setState] = useState(0);
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState(false);
  const cookies = new Cookies();
  console.log(state);
  console.log(category);
  const { data: categoricalData } = useQuery('categoryData', async () => {
    const accessToken = cookies.get('access', { path: '/' });
    return await axios.post('http://localhost:8800/api/product/selectByCategory', {
      "productcategory": category
    }, {
      headers: {
        Authorization: "Bearer " + accessToken
      }
    })
  }, {
    enabled: !!category
  })
  console.log(categoricalData);


  return (
    <section>
      <div className="container mt-5">
        <div className="col mt-5">
          <h1>Please select state and catagory to view product</h1>
        </div>
        <div className="col mt-5">
          <div className="  mt-2 d-inline-block ">
            <select
              className="select-shop-data  text-white rounded-2 "
              id="exampleSelect"
              onChange={(e) => setState(e.target.value)}
            >
              <option value={0} selected>Select</option>
              <option value={1}> Haryana</option>
              <option value={2}>Punjab</option>
              <option value={3}>Himachal</option>
            </select>
          </div>
          <div className="  mt-2  d-inline-block">
            <select
              className="select-shop-data-2 text-center text-black mx-5 rounded-2  "
              id="exampleSelect"
              disabled={state == 0 ? true : false}
              onChange={(e) => {
                setCategory(e.target.value)
              }}
            >
              <option selected >Select</option>
              {
                state == 1 ? <>
                  <option value={"clothes"}> clothes</option>
                  <option value={"jewellery"}>jewellery</option>
                  <option value={"Pottery"}>Pottery Products</option>
                </> : state == 2 ? <>
                  <option value={"Durries"}>Durries</option>
                  <option value={"Jutti"}>Jutti</option>
                  <option value={"Pakkhi"}>Pakkhi</option>
                  <option value={"Paranda"}>Paranda</option>
                  <option value={'Furniture'}>Furniture</option>

                </> : state == 3 && <>
                  <option value={"Chamba Rumaal"}>Chamba Rumaal</option>
                  <option value={"Himachali Cap"}>Himachali Cap</option>
                  <option value={"Pullas"}>Pullas</option>
                  <option value={"Miniature Painting"}>Miniature Painting</option>
                </>
              }


            </select>
          </div>
        </div>
        <div className="row mt-5">
          <h1 className="head-shop ">{categoricalData ? `Showing Products for: ${category}` : "In highlight for today"}</h1>
          {categoricalData?.data?.productArr?.map((element) => {
            return <div className="col-4 mb-5 box-shop mt-4 ">
              <div className="box-one-shop rounded-2">
                <div className="inner-div-shop">
                  <div className="over-one-shop">
                    <div className="main-shop d-inline-block">
                      <img
                        style={{
                          width: 200,
                          height: 150,
                          marginLeft: "2rem",
                          marginTop: "-4rem"
                        }}
                        src={require('../assets/image/Rectangle_1-removebg-preview.png')}
                      />
                      <p className=" text-black mt-2 mx-2 para-shop fw-bold">
                        {element.productname}
                      </p>
                      <p className="text-black mx-2 fw-bold">{element.price}</p>
                    </div>
                    <div className="shop-button">
                      <button
                        type="submit"
                        className="btn mt-0  my-shop-btn shadow my-button-shop text-black rounded-3   btn-sm "
                      >
                        view Product
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          })
          }
          {
            categoricalData ? <></> : <><div className="col-4 box-shop mt-4 ">
              <div className="box-one-shop rounded-2">
                <div className="inner-div-shop">
                  <div className="over-one-shop">
                    <div className="main-shop d-inline-block">
                      <img
                        style={{
                          width: 200,
                          height: 150,
                          marginLeft: "2rem",
                          marginTop: "-4rem"
                        }}
                        src={require('../assets/image/Rectangle_1-removebg-preview.png')}
                      />
                      <p className=" text-black mt-2 mx-2 para-shop fw-bold">
                        Himachali Topi
                      </p>
                      <p className="text-black mx-2 fw-bold"> 599/-</p>
                    </div>
                    <div className="shop-button">
                      <button
                        type="submit"
                        className="btn mt-0  my-shop-btn shadow my-button-shop text-black rounded-3   btn-sm "
                      >
                        view Product
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <div className="col-4 box-shop mt-4 ">
                <div className="box-one-shop rounded-2">
                  <div className="inner-div-shop">
                    <div className="over-one-shop">
                      <div className="main-shop d-inline-block">
                        <img
                          style={{
                            width: 200,
                            height: 150,
                            marginLeft: "2rem",
                            marginTop: "-4rem"
                          }}
                          src={require('../assets/image/Rectangle_1-removebg-preview.png')}
                        />
                        <p className=" text-black mt-2 mx-2 para-shop fw-bold">
                          Himachali Topi
                        </p>
                        <p className="text-black mx-2 fw-bold"> 599/-</p>
                      </div>
                      <div className="shop-button">
                        <button
                          type="submit"
                          className="btn mt-0  my-shop-btn shadow my-button-shop text-black rounded-3   btn-sm "
                        >
                          view Product
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4 box-shop mt-4 ">
                <div className="box-one-shop rounded-2">
                  <div className="inner-div-shop">
                    <div className="over-one-shop">
                      <div className="main-shop d-inline-block">
                        <img
                          style={{
                            width: 200,
                            height: 150,
                            marginLeft: "2rem",
                            marginTop: "-4rem"
                          }}
                          src={require('../assets/image/Rectangle_1-removebg-preview.png')}
                        />
                        <p className=" text-black mt-2 mx-2 para-shop fw-bold">
                          Himachali Topi
                        </p>
                        <p className="text-black mx-2 fw-bold"> 599/-</p>
                      </div>
                      <div className="shop-button">
                        <button
                          type="submit"
                          className="btn mt-0  my-shop-btn shadow my-button-shop text-black rounded-3   btn-sm "
                        >
                          view Product
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          }
        </div>
      </div>
    </section>
  )
}

export default Productcategory