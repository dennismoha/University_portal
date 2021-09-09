import React from 'react'
import Header from '../Layout/Header';
import Sidebar from '../Layout/Sidebar';



const CreatePerson = () => {
    return (
      <>
        <div>
          <Sidebar />
          {/* End Left menu area */}
          {/* Start Welcome area */}
          <div className="all-content-wrapper">
            
            <Header />

            <div className="single-pro-review-area mt-t-30 mg-b-15">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="product-payment-inner-st">
                      <ul id="myTabedu1" className="tab-review-design">
                        <li className="active">
                          <a href="#description">Basic Information</a>
                        </li>
                        <li>
                          <a href="#reviews"> Account Information</a>
                        </li>
                        <li>
                          <a href="#INFORMATION">Social Information</a>
                        </li>
                      </ul>
                      <div
                        id="myTabContent"
                        className="tab-content custom-product-edit"
                      >
                        <div
                          className="product-tab-list tab-pane fade active in"
                          id="description"
                        >
                          <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                              <div className="review-content-section">
                                <div id="dropzone1" className="pro-ad">
                                  <form
                                    action="/upload"
                                    className="dropzone dropzone-custom needsclick add-professors"
                                    id="demo1-upload"
                                  >
                                    <div className="row">
                                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div className="form-group">
                                          <input
                                            name="firstname"
                                            type="text"
                                            className="form-control"
                                            placeholder="Full Name"
                                          />
                                        </div>
                                        <div className="form-group">
                                          <input
                                            name="address"
                                            type="text"
                                            className="form-control"
                                            placeholder="Address"
                                          />
                                        </div>
                                        <div className="form-group">
                                          <input
                                            name="mobileno"
                                            type="number"
                                            className="form-control"
                                            placeholder="Mobile no."
                                          />
                                        </div>
                                        <div className="form-group">
                                          <input
                                            name="finish"
                                            id="finish"
                                            type="text"
                                            className="form-control"
                                            placeholder="Date of Birth"
                                          />
                                        </div>
                                        <div className="form-group">
                                          <input
                                            name="postcode"
                                            id="postcode"
                                            type="text"
                                            className="form-control"
                                            placeholder="Postcode"
                                          />
                                        </div>
                                        <div className="form-group alert-up-pd">
                                          <div className="dz-message needsclick download-custom">
                                            <i
                                              className="fa fa-download edudropnone"
                                              aria-hidden="true"
                                            />
                                            <h2 className="edudropnone">
                                              Drop image here or click to
                                              upload.
                                            </h2>
                                            <p className="edudropnone">
                                              <span className="note needsclick">
                                                (This is just a demo dropzone.
                                                Selected image is{" "}
                                                <strong>not</strong> actually
                                                uploaded.)
                                              </span>
                                            </p>
                                            <input
                                              name="imageico"
                                              className="hd-pro-img"
                                              type="text"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div className="form-group">
                                          <input
                                            name="department"
                                            type="text"
                                            className="form-control"
                                            placeholder="Department"
                                          />
                                        </div>
                                        <div className="form-group res-mg-t-15">
                                          <textarea
                                            name="description"
                                            placeholder="Description"
                                            defaultValue={""}
                                          />
                                        </div>
                                        <div className="form-group">
                                          <select
                                            name="gender"
                                            className="form-control"
                                          >
                                            <option
                                              value="none"
                                              selected
                                              disabled
                                            >
                                              Select Gender
                                            </option>
                                            <option value={0}>Male</option>
                                            <option value={1}>Female</option>
                                          </select>
                                        </div>
                                        <div className="form-group">
                                          <select
                                            name="country"
                                            className="form-control"
                                          >
                                            <option
                                              value="none"
                                              selected
                                              disabled
                                            >
                                              Select country
                                            </option>
                                            <option value={0}>India</option>
                                            <option value={1}>Pakistan</option>
                                            <option value={2}>Amerika</option>
                                            <option value={3}>China</option>
                                            <option value={4}>Dubai</option>
                                            <option value={5}>Nepal</option>
                                          </select>
                                        </div>
                                        <div className="form-group">
                                          <select
                                            name="state"
                                            className="form-control"
                                          >
                                            <option
                                              value="none"
                                              selected
                                              disabled
                                            >
                                              Select state
                                            </option>
                                            <option value={0}>Gujarat</option>
                                            <option value={1}>
                                              Maharastra
                                            </option>
                                            <option value={2}>Rajastan</option>
                                            <option value={3}>
                                              Maharastra
                                            </option>
                                            <option value={4}>Rajastan</option>
                                            <option value={5}>Gujarat</option>
                                          </select>
                                        </div>
                                        <div className="form-group">
                                          <select
                                            name="city"
                                            className="form-control"
                                          >
                                            <option
                                              value="none"
                                              selected
                                              disabled
                                            >
                                              Select city
                                            </option>
                                            <option value={0}>Surat</option>
                                            <option value={1}>Baroda</option>
                                            <option value={2}>Navsari</option>
                                            <option value={3}>Baroda</option>
                                            <option value={4}>Surat</option>
                                          </select>
                                        </div>
                                        <div className="form-group">
                                          <input
                                            name="website"
                                            type="text"
                                            className="form-control"
                                            placeholder="Website URL"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-lg-12">
                                        <div className="payment-adress">
                                          <button
                                            type="submit"
                                            className="btn btn-primary waves-effect waves-light"
                                          >
                                            Submit
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="product-tab-list tab-pane fade"
                          id="reviews"
                        >
                          <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                              <div className="review-content-section">
                                <div className="row">
                                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <form
                                      id="acount-infor"
                                      action="#"
                                      className="acount-infor"
                                    >
                                      <div className="devit-card-custom">
                                        <div className="form-group">
                                          <input
                                            type="text"
                                            className="form-control"
                                            name="email"
                                            placeholder="Email"
                                          />
                                        </div>
                                        <div className="form-group">
                                          <input
                                            name="phoneno"
                                            type="number"
                                            className="form-control"
                                            placeholder="Phone"
                                          />
                                        </div>
                                        <div className="form-group">
                                          <input
                                            name="password"
                                            type="password"
                                            className="form-control"
                                            placeholder="Password"
                                          />
                                        </div>
                                        <div className="form-group">
                                          <input
                                            name="confarmpassword"
                                            type="password"
                                            className="form-control"
                                            placeholder="Confirm Password"
                                          />
                                        </div>
                                        <a
                                          href="#"
                                          className="btn btn-primary waves-effect waves-light"
                                        >
                                          Submit
                                        </a>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="product-tab-list tab-pane fade"
                          id="INFORMATION"
                        >
                          <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                              <div className="review-content-section">
                                <div className="row">
                                  <div className="col-lg-12">
                                    <div className="devit-card-custom">
                                      <div className="form-group">
                                        <input
                                          type="url"
                                          className="form-control"
                                          placeholder="Facebook URL"
                                        />
                                      </div>
                                      <div className="form-group">
                                        <input
                                          type="url"
                                          className="form-control"
                                          placeholder="Twitter URL"
                                        />
                                      </div>
                                      <div className="form-group">
                                        <input
                                          type="url"
                                          className="form-control"
                                          placeholder="Google Plus"
                                        />
                                      </div>
                                      <div className="form-group">
                                        <input
                                          type="url"
                                          className="form-control"
                                          placeholder="Linkedin URL"
                                        />
                                      </div>
                                      <button
                                        type="submit"
                                        className="btn btn-primary waves-effect waves-light"
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-copyright-area">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="footer-copy-right">
                      <p>
                        Copyright © 2018. All rights reserved. Template by{" "}
                        <a href="https://colorlib.com/wp/templates/">
                          Colorlib
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default CreatePerson



   