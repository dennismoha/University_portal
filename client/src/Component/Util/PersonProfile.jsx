import React from 'react'
import Header from "../Layout/Header";
import Sidebar from "../Layout/Sidebar";
import {HashLink} from 'react-router-hash-link'

const PersonProfile = () => {
    return (
      <>
        <div id="outerHeader">
          <div>
            {/* Start Left menu area */}
            <Sidebar />

            {/* End Left menu area */}
            {/* Start Welcome area */}
            <div className="all-content-wrapper">
              <Header />

              <div className="single-pro-review-area mt-t-30 mg-b-15">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                      <div className="profile-info-inner">
                        <div className="profile-img">
                          <img src="img/profile/1.jpg" alt />
                        </div>
                        <div className="profile-details-hr">
                          <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-6">
                              <div className="address-hr">
                                <p>
                                  <b>Name</b>
                                  <br /> Fly Zend
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-6">
                              <div className="address-hr tb-sm-res-d-n dps-tb-ntn">
                                <p>
                                  <b>Department</b>
                                  <br /> CSE
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-6">
                              <div className="address-hr">
                                <p>
                                  <b>Email ID</b>
                                  <br /> fly@gmail.com
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-6">
                              <div className="address-hr tb-sm-res-d-n dps-tb-ntn">
                                <p>
                                  <b>Phone</b>
                                  <br /> +01962067309
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="address-hr">
                                <p>
                                  <b>Address</b>
                                  <br /> E104, catn-2, Chandlodia Ahmedabad
                                  Gujarat, UK.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                              <div className="address-hr">
                                <a href="#">
                                  <i className="fa fa-facebook" />
                                </a>
                                <h3>500</h3>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                              <div className="address-hr">
                                <a href="#">
                                  <i className="fa fa-twitter" />
                                </a>
                                <h3>900</h3>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                              <div className="address-hr">
                                <a href="#">
                                  <i className="fa fa-google-plus" />
                                </a>
                                <h3>600</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                      <div className="product-payment-inner-st res-mg-t-30 analysis-progrebar-ctn">
                        <ul id="myTabedu1" className="tab-review-design">
                          <li className="active">
                            <a href="#description">Activity</a>
                          </li>
                          <li>
                            <HashLink to="/studentprofile#reviews">
                              {" "}
                              Biography
                            </HashLink>
                          </li>
                          <li>
                            <a href="#INFORMATION">Update Details</a>
                          </li>
                        </ul>
                        <div
                          id="myTabContent"
                          className="tab-content custom-product-edit st-prf-pro"
                        >
                          <div
                            className="product-tab-list tab-pane fade active in"
                            id="description"
                          >
                            <div className="row">
                              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="review-content-section">
                                  <div className="row">
                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                      <div className="address-hr biography">
                                        <p>
                                          <b>Full Name</b>
                                          <br /> Fly Zend
                                        </p>
                                      </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                      <div className="address-hr biography">
                                        <p>
                                          <b>Mobile</b>
                                          <br /> 01962067309
                                        </p>
                                      </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                      <div className="address-hr biography">
                                        <p>
                                          <b>Email</b>
                                          <br /> fly@gmail.com
                                        </p>
                                      </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                      <div className="address-hr biography">
                                        <p>
                                          <b>Location</b>
                                          <br /> UK
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-lg-12">
                                      <div className="content-profile">
                                        <p>
                                          Donec pede justo, fringilla vel,
                                          aliquet nec, vulputate eget, arcu. In
                                          enim justo, rhoncus ut, imperdiet a,
                                          venenatis vitae, justo. Nullam dictum
                                          felis eu pede mollis pretium. Integer
                                          tincidunt.Cras dapibus. Vivamus
                                          elementum semper nisi. Aenean
                                          vulputate eleifend tellus. Aenean leo
                                          ligula, porttitor eu, consequat vitae,
                                          eleifend ac, enim.
                                        </p>
                                        <p>
                                          Donec pede justo, fringilla vel,
                                          aliquet nec, vulputate eget, arcu. In
                                          enim justo, rhoncus ut, imperdiet a,
                                          venenatis vitae, justo. Nullam dictum
                                          felis eu pede mollis pretium. Integer
                                          tincidunt.Cras dapibus. Vivamus
                                          elementum semper nisi. Aenean
                                          vulputate eleifend tellus. Aenean leo
                                          ligula, porttitor eu, consequat vitae,
                                          eleifend ac, enim.
                                        </p>
                                        <p>
                                          Donec pede justo, fringilla vel,
                                          aliquet nec, vulputate eget, arcu. In
                                          enim justo, rhoncus ut, imperdiet a,
                                          venenatis vitae, justo. Nullam dictum
                                          felis eu pede mollis pretium. Integer
                                          tincidunt.Cras dapibus. Vivamus
                                          elementum semper nisi. Aenean
                                          vulputate eleifend tellus. Aenean leo
                                          ligula, porttitor eu, consequat vitae,
                                          eleifend ac, enim.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row mg-b-15">
                                    <div className="col-lg-12">
                                      <div className="row">
                                        <div className="col-lg-12">
                                          <div className="skill-title">
                                            <h2>Skill Set</h2>
                                            <hr />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="progress-skill">
                                        <h2>Java</h2>
                                        <div className="progress progress-mini">
                                          <div
                                            style={{ width: "90%" }}
                                            className="progress-bar progress-yellow"
                                          />
                                        </div>
                                      </div>
                                      <div className="progress-skill">
                                        <h2>Php</h2>
                                        <div className="progress progress-mini">
                                          <div
                                            style={{ width: "80%" }}
                                            className="progress-bar progress-green"
                                          />
                                        </div>
                                      </div>
                                      <div className="progress-skill">
                                        <h2>Apps</h2>
                                        <div className="progress progress-mini">
                                          <div
                                            style={{ width: "70%" }}
                                            className="progress-bar progress-blue"
                                          />
                                        </div>
                                      </div>
                                      <div className="progress-skill">
                                        <h2>C#</h2>
                                        <div className="progress progress-mini">
                                          <div
                                            style={{ width: "60%" }}
                                            className="progress-bar progress-red"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row mg-b-15">
                                    <div className="col-lg-12">
                                      <div className="row">
                                        <div className="col-lg-12">
                                          <div className="skill-title">
                                            <h2>Education</h2>
                                            <hr />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="ex-pro">
                                        <ul>
                                          <li>
                                            <i className="fa fa-angle-right" />{" "}
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                          </li>
                                          <li>
                                            <i className="fa fa-angle-right" />{" "}
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                          </li>
                                          <li>
                                            <i className="fa fa-angle-right" />{" "}
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                          </li>
                                          <li>
                                            <i className="fa fa-angle-right" />{" "}
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                          </li>
                                          <li>
                                            <i className="fa fa-angle-right" />{" "}
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row mg-b-15">
                                    <div className="col-lg-12">
                                      <div className="row">
                                        <div className="col-lg-12">
                                          <div className="skill-title">
                                            <h2>Experience</h2>
                                            <hr />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="ex-pro">
                                        <ul>
                                          <li>
                                            <i className="fa fa-angle-right" />{" "}
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                          </li>
                                          <li>
                                            <i className="fa fa-angle-right" />{" "}
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                          </li>
                                          <li>
                                            <i className="fa fa-angle-right" />{" "}
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                          </li>
                                          <li>
                                            <i className="fa fa-angle-right" />{" "}
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                          </li>
                                          <li>
                                            <i className="fa fa-angle-right" />{" "}
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-lg-12">
                                      <div className="row">
                                        <div className="col-lg-12">
                                          <div className="skill-title">
                                            <h2>Subjects</h2>
                                            <hr />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="ex-pro">
                                        <ul>
                                          <li>
                                            <i className="fa fa-angle-right" />{" "}
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                          </li>
                                          <li>
                                            <i className="fa fa-angle-right" />{" "}
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                          </li>
                                          <li>
                                            <i className="fa fa-angle-right" />{" "}
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                          </li>
                                          <li>
                                            <i className="fa fa-angle-right" />{" "}
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                          </li>
                                          <li>
                                            <i className="fa fa-angle-right" />{" "}
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
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
                                  <div
                                    className="chat-discussion"
                                    style={{ height: "auto" }}
                                  >
                                    <div className="chat-message">
                                      <div className="profile-hdtc">
                                        <img
                                          className="message-avatar"
                                          src="img/contact/1.jpg"
                                          alt
                                        />
                                      </div>
                                      <div className="message">
                                        <a className="message-author" href="#">
                                          {" "}
                                          Michael Smith{" "}
                                        </a>
                                        <span className="message-date">
                                          {" "}
                                          Mon Jan 26 2015 - 18:39:23{" "}
                                        </span>
                                        <span className="message-content">
                                          Lorem ipsum dolor sit amet,
                                          consectetuer adipiscing elit, sed diam
                                          nonummy nibh euismod tincidunt ut
                                          laoreet dolore magna aliquam erat
                                          volutpat.
                                        </span>
                                        <div className="m-t-md mg-t-10">
                                          <a className="btn btn-xs btn-default">
                                            <i className="fa fa-thumbs-up" />{" "}
                                            Like{" "}
                                          </a>
                                          <a className="btn btn-xs btn-success">
                                            <i className="fa fa-heart" /> Love
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="chat-message">
                                      <div className="profile-hdtc">
                                        <img
                                          className="message-avatar"
                                          src="img/contact/2.jpg"
                                          alt
                                        />
                                      </div>
                                      <div className="message">
                                        <a className="message-author" href="#">
                                          {" "}
                                          Karl Jordan{" "}
                                        </a>
                                        <span className="message-date">
                                          {" "}
                                          Fri Jan 25 2015 - 11:12:36{" "}
                                        </span>
                                        <span className="message-content">
                                          Many desktop publishing packages and
                                          web page editors now use Lorem Ipsum
                                          as their default model text, and a
                                          search for 'lorem ipsum' will uncover.
                                        </span>
                                        <div className="m-t-md mg-t-10">
                                          <a className="btn btn-xs btn-default">
                                            <i className="fa fa-thumbs-up" />{" "}
                                            Like{" "}
                                          </a>
                                          <a className="btn btn-xs btn-default">
                                            <i className="fa fa-heart" /> Love
                                          </a>
                                          <a className="btn btn-xs btn-primary">
                                            <i className="fa fa-pencil" />{" "}
                                            Message
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="chat-message">
                                      <div className="profile-hdtc">
                                        <img
                                          className="message-avatar"
                                          src="img/contact/3.jpg"
                                          alt
                                        />
                                      </div>
                                      <div className="message">
                                        <a className="message-author" href="#">
                                          {" "}
                                          Michael Smith{" "}
                                        </a>
                                        <span className="message-date">
                                          {" "}
                                          Fri Jan 25 2015 - 11:12:36{" "}
                                        </span>
                                        <span className="message-content">
                                          There are many variations of passages
                                          of Lorem Ipsum available, but the
                                          majority have suffered alteration.
                                        </span>
                                      </div>
                                    </div>
                                    <div className="chat-message">
                                      <div className="profile-hdtc">
                                        <img
                                          className="message-avatar"
                                          src="img/contact/4.jpg"
                                          alt
                                        />
                                      </div>
                                      <div className="message">
                                        <a className="message-author" href="#">
                                          {" "}
                                          Alice Jordan{" "}
                                        </a>
                                        <span className="message-date">
                                          {" "}
                                          Fri Jan 25 2015 - 11:12:36{" "}
                                        </span>
                                        <span className="message-content">
                                          All the Lorem Ipsum generators on the
                                          Internet tend to repeat predefined
                                          chunks as necessary, making this the
                                          first true generator on the Internet.
                                          It uses a dictionary of over 200 Latin
                                          words.
                                        </span>
                                        <div className="m-t-md mg-t-10">
                                          <a className="btn btn-xs btn-default">
                                            <i className="fa fa-thumbs-up" />{" "}
                                            Like{" "}
                                          </a>
                                          <a className="btn btn-xs btn-warning">
                                            <i className="fa fa-eye" /> Nudge
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="chat-message">
                                      <div className="profile-hdtc">
                                        <img
                                          className="message-avatar"
                                          src="img/contact/1.jpg"
                                          alt
                                        />
                                      </div>
                                      <div className="message">
                                        <a className="message-author" href="#">
                                          {" "}
                                          Mark Smith{" "}
                                        </a>
                                        <span className="message-date">
                                          {" "}
                                          Fri Jan 25 2015 - 11:12:36{" "}
                                        </span>
                                        <span className="message-content">
                                          All the Lorem Ipsum generators on the
                                          Internet tend to repeat predefined
                                          chunks as necessary, making this the
                                          first true generator on the Internet.
                                          It uses a dictionary of over 200 Latin
                                          words.
                                        </span>
                                        <div className="m-t-md mg-t-10">
                                          <a className="btn btn-xs btn-default">
                                            <i className="fa fa-thumbs-up" />{" "}
                                            Like{" "}
                                          </a>
                                          <a className="btn btn-xs btn-success">
                                            <i className="fa fa-heart" /> Love
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="chat-message">
                                      <div className="profile-hdtc">
                                        <img
                                          className="message-avatar"
                                          src="img/contact/2.jpg"
                                          alt
                                        />
                                      </div>
                                      <div className="message">
                                        <a className="message-author" href="#">
                                          {" "}
                                          Karl Jordan{" "}
                                        </a>
                                        <span className="message-date">
                                          {" "}
                                          Fri Jan 25 2015 - 11:12:36{" "}
                                        </span>
                                        <span className="message-content">
                                          Many desktop publishing packages and
                                          web page editors now use Lorem Ipsum
                                          as their default model text, and a
                                          search for 'lorem ipsum' will uncover.
                                        </span>
                                        <div className="m-t-md mg-t-10">
                                          <a className="btn btn-xs btn-default">
                                            <i className="fa fa-thumbs-up" />{" "}
                                            Like{" "}
                                          </a>
                                          <a className="btn btn-xs btn-default">
                                            <i className="fa fa-heart" /> Love
                                          </a>
                                          <a className="btn btn-xs btn-primary">
                                            <i className="fa fa-pencil" />{" "}
                                            Message
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="chat-message">
                                      <div className="profile-hdtc">
                                        <img
                                          className="message-avatar"
                                          src="img/contact/3.jpg"
                                          alt
                                        />
                                      </div>
                                      <div className="message">
                                        <a className="message-author" href="#">
                                          {" "}
                                          Michael Smith{" "}
                                        </a>
                                        <span className="message-date">
                                          {" "}
                                          Fri Jan 25 2015 - 11:12:36{" "}
                                        </span>
                                        <span className="message-content">
                                          There are many variations of passages
                                          of Lorem Ipsum available, but the
                                          majority have suffered alteration.
                                        </span>
                                      </div>
                                    </div>
                                    <div className="chat-message">
                                      <div className="profile-hdtc">
                                        <img
                                          className="message-avatar"
                                          src="img/contact/4.jpg"
                                          alt
                                        />
                                      </div>
                                      <div className="message">
                                        <a className="message-author" href="#">
                                          {" "}
                                          Alice Jordan{" "}
                                        </a>
                                        <span className="message-date">
                                          {" "}
                                          Fri Jan 25 2015 - 11:12:36{" "}
                                        </span>
                                        <span className="message-content">
                                          All the Lorem Ipsum generators on the
                                          Internet tend to repeat predefined
                                          chunks as necessary, making this the
                                          first true generator on the Internet.
                                          It uses a dictionary of over 200 Latin
                                          words.
                                        </span>
                                        <div className="m-t-md mg-t-10">
                                          <a className="btn btn-xs btn-default">
                                            <i className="fa fa-thumbs-up" />{" "}
                                            Like{" "}
                                          </a>
                                          <a className="btn btn-xs btn-default">
                                            <i className="fa fa-heart" /> Love
                                          </a>
                                        </div>
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
                                    <div className="col-lg-6">
                                      <div className="form-group">
                                        <input
                                          name="number"
                                          type="text"
                                          className="form-control"
                                          placeholder="First Name"
                                        />
                                      </div>
                                      <div className="form-group">
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Last Name"
                                        />
                                      </div>
                                      <div className="form-group">
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Address"
                                        />
                                      </div>
                                      <div className="form-group">
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Date of Birth"
                                        />
                                      </div>
                                      <div className="form-group">
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Department"
                                        />
                                      </div>
                                      <div className="form-group">
                                        <input
                                          type="number"
                                          className="form-control"
                                          placeholder="Pincode"
                                        />
                                      </div>
                                      <div className="file-upload-inner ts-forms">
                                        <div className="input prepend-big-btn">
                                          <label
                                            className="icon-right"
                                            htmlFor="prepend-big-btn"
                                          >
                                            <i className="fa fa-download" />
                                          </label>
                                          <div className="file-button">
                                            Browse
                                            <input
                                              type="file"
                                              // onChange={document.getElementById('prepend-big-btn').value = this.value}
                                            />
                                          </div>
                                          <input
                                            type="text"
                                            id="prepend-big-btn"
                                            placeholder="no file selected"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-6">
                                      <div className="form-group sm-res-mg-15 tbpf-res-mg-15">
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Description"
                                        />
                                      </div>
                                      <div className="form-group">
                                        <select className="form-control">
                                          <option>Select Gender</option>
                                          <option>Male</option>
                                          <option>Female</option>
                                        </select>
                                      </div>
                                      <div className="form-group">
                                        <select className="form-control">
                                          <option>Select country</option>
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
                                          <option>Select state</option>
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
                                          <option>Select city</option>
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
                                          placeholder="Website URL"
                                        />
                                      </div>
                                      <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Mobile no."
                                      />
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-lg-12">
                                      <div className="payment-adress mg-t-15">
                                        <button
                                          type="submit"
                                          className="btn btn-primary waves-effect waves-light mg-b-15"
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
                    <div className="col-lg-12">
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
        </div>
      </>
    );
}

export default PersonProfile
