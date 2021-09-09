import React from 'react'
import Header from "../../Component/Layout/Header";
import Sidebar from "../../Component/Layout/Sidebar";

const EditStudent = () => {
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
                          <a href="#description">Edit Basic Information</a>
                        </li>
                        <li>
                          <a href="#reviews"> Edit Account Information</a>
                        </li>
                        <li>
                          <a href="#INFORMATION">Edit Social Information</a>
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
                                    action="#"
                                    className="dropzone dropzone-custom needsclick add-professors"
                                    id="demo1-upload"
                                  >
                                    <div className="row">
                                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div className="form-group">
                                          <input
                                            name="number"
                                            type="text"
                                            className="form-control"
                                            placeholder="Fly Zend"
                                            defaultValue="Fly Zend"
                                          />
                                        </div>
                                        <div className="form-group">
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder="E104, catn-2, UK."
                                            defaultValue="E104, catn-2, UK."
                                          />
                                        </div>
                                        <div className="form-group">
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder="12/10/1993"
                                            defaultValue="12/10/1993"
                                          />
                                        </div>
                                        <div className="form-group">
                                          <input
                                            type="number"
                                            className="form-control"
                                            placeholder={1213}
                                            defaultValue={1213}
                                          />
                                        </div>
                                        <div className="form-group">
                                          <input
                                            type="number"
                                            className="form-control"
                                            placeholder={"01962067309"}
                                            defaultValue={"01962067309"}
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
                                            type="text"
                                            className="form-control"
                                            placeholder="CSE"
                                            defaultValue="CSE"
                                          />
                                        </div>
                                        <div className="form-group edit-ta-resize res-mg-t-15">
                                          <textarea
                                            name="description"
                                            defaultValue={
                                              "Lorem ipsum dolor sit amet of, consectetur adipiscing elitable. Vestibulum tincidunt est vitae ultrices accumsan."
                                            }
                                          />
                                        </div>
                                        <div className="form-group">
                                          <select className="form-control">
                                            <option>Male</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                          </select>
                                        </div>
                                        <div className="form-group">
                                          <select className="form-control">
                                            <option>Nepal</option>
                                            <option>India</option>
                                            <option>Pakistan</option>
                                            <option>Amerika</option>
                                            <option>China</option>
                                            <option>Dubai</option>
                                            <option>Nepal</option>
                                          </select>
                                        </div>
                                        <div className="form-group">
                                          <select className="form-control">
                                            <option>Maharastra</option>
                                            <option>Gujarat</option>
                                            <option>Maharastra</option>
                                            <option>Rajastan</option>
                                            <option>Maharastra</option>
                                            <option>Rajastan</option>
                                            <option>Gujarat</option>
                                          </select>
                                        </div>
                                        <div className="form-group">
                                          <select className="form-control">
                                            <option>Baroda</option>
                                            <option>Surat</option>
                                            <option>Baroda</option>
                                            <option>Navsari</option>
                                            <option>Baroda</option>
                                            <option>Surat</option>
                                          </select>
                                        </div>
                                        <div className="form-group">
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder="www.uttara.com"
                                            defaultValue="www.uttara.com"
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
                                    <div className="devit-card-custom">
                                      <div className="form-group">
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Email"
                                          defaultValue="Admin@gmail.com"
                                        />
                                      </div>
                                      <div className="form-group">
                                        <input
                                          type="number"
                                          className="form-control"
                                          placeholder="Phone"
                                          defaultValue={"01962067309"}
                                        />
                                      </div>
                                      <div className="form-group">
                                        <input
                                          type="password"
                                          className="form-control"
                                          placeholder="Password"
                                          defaultValue="#123#123"
                                        />
                                      </div>
                                      <div className="form-group">
                                        <input
                                          type="password"
                                          className="form-control"
                                          placeholder="Confirm Password"
                                          defaultValue="#123#123"
                                        />
                                      </div>
                                      <a
                                        href="#!"
                                        className="btn btn-primary waves-effect waves-light"
                                      >
                                        Submit
                                      </a>
                                    </div>
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
                                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="devit-card-custom">
                                      <div className="form-group">
                                        <input
                                          type="url"
                                          className="form-control"
                                          placeholder="Facebook URL"
                                          defaultValue="http://www.facebook.com"
                                        />
                                      </div>
                                      <div className="form-group">
                                        <input
                                          type="url"
                                          className="form-control"
                                          placeholder="Twitter URL"
                                          defaultValue="http://www.twitter.com"
                                        />
                                      </div>
                                      <div className="form-group">
                                        <input
                                          type="url"
                                          className="form-control"
                                          placeholder="Google Plus"
                                          defaultValue="http://www.google-plus.com"
                                        />
                                      </div>
                                      <div className="form-group">
                                        <input
                                          type="url"
                                          className="form-control"
                                          placeholder="Linkedin URL"
                                          defaultValue="http://www.Linkedin.com"
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

export default EditStudent
