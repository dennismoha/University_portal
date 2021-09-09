import React from 'react'

const Dashboard1 = () =>{

    return (
      <>
        <div>
          <div className="left-sidebar-pro">
            <nav id="sidebar" className>
              <div className="sidebar-header">
                <a href="index.html">
                  <img className="main-logo" src="img/logo/logo.png" alt />
                </a>
                <strong>
                  <a href="index.html">
                    <img src="img/logo/logosn.png" alt />
                  </a>
                </strong>
              </div>
              <div className="left-custom-menu-adp-wrap comment-scrollbar">
                <nav className="sidebar-nav left-sidebar-menu-pro">
                  <ul className="metismenu" id="menu1">
                    <li className="active">
                      <a className="has-arrow" href="index.html">
                        <span className="educate-icon educate-home icon-wrap" />
                        <span className="mini-click-non">Education</span>
                      </a>
                      <ul className="submenu-angle" aria-expanded="true">
                        <li>
                          <a title="Dashboard v.1" href="index.html">
                            <span className="mini-sub-pro">Dashboard v.1</span>
                          </a>
                        </li>
                        <li>
                          <a title="Dashboard v.2" href="index-1.html">
                            <span className="mini-sub-pro">Dashboard v.2</span>
                          </a>
                        </li>
                        <li>
                          <a title="Dashboard v.3" href="index-2.html">
                            <span className="mini-sub-pro">Dashboard v.3</span>
                          </a>
                        </li>
                        <li>
                          <a title="Analytics" href="analytics.html">
                            <span className="mini-sub-pro">Analytics</span>
                          </a>
                        </li>
                        <li>
                          <a title="Widgets" href="widgets.html">
                            <span className="mini-sub-pro">Widgets</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        title="Landing Page"
                        href="events.html"
                        aria-expanded="false"
                      >
                        <span
                          className="educate-icon educate-event icon-wrap sub-icon-mg"
                          aria-hidden="true"
                        />{" "}
                        <span className="mini-click-non">Event</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="has-arrow"
                        href="all-professors.html"
                        aria-expanded="false"
                      >
                        <span className="educate-icon educate-professor icon-wrap" />{" "}
                        <span className="mini-click-non">Professors</span>
                      </a>
                      <ul className="submenu-angle" aria-expanded="false">
                        <li>
                          <a title="All Professors" href="all-professors.html">
                            <span className="mini-sub-pro">All Professors</span>
                          </a>
                        </li>
                        <li>
                          <a title="Add Professor" href="add-professor.html">
                            <span className="mini-sub-pro">Add Professor</span>
                          </a>
                        </li>
                        <li>
                          <a title="Edit Professor" href="edit-professor.html">
                            <span className="mini-sub-pro">Edit Professor</span>
                          </a>
                        </li>
                        <li>
                          <a
                            title="Professor Profile"
                            href="professor-profile.html"
                          >
                            <span className="mini-sub-pro">
                              Professor Profile
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        className="has-arrow"
                        href="all-students.html"
                        aria-expanded="false"
                      >
                        <span className="educate-icon educate-student icon-wrap" />{" "}
                        <span className="mini-click-non">Students</span>
                      </a>
                      <ul className="submenu-angle" aria-expanded="false">
                        <li>
                          <a title="All Students" href="all-students.html">
                            <span className="mini-sub-pro">All Students</span>
                          </a>
                        </li>
                        <li>
                          <a title="Add Students" href="add-student.html">
                            <span className="mini-sub-pro">Add Student</span>
                          </a>
                        </li>
                        <li>
                          <a title="Edit Students" href="edit-student.html">
                            <span className="mini-sub-pro">Edit Student</span>
                          </a>
                        </li>
                        <li>
                          <a
                            title="Students Profile"
                            href="student-profile.html"
                          >
                            <span className="mini-sub-pro">
                              Student Profile
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        className="has-arrow"
                        href="all-courses.html"
                        aria-expanded="false"
                      >
                        <span className="educate-icon educate-course icon-wrap" />{" "}
                        <span className="mini-click-non">Courses</span>
                      </a>
                      <ul className="submenu-angle" aria-expanded="false">
                        <li>
                          <a title="All Courses" href="all-courses.html">
                            <span className="mini-sub-pro">All Courses</span>
                          </a>
                        </li>
                        <li>
                          <a title="Add Courses" href="add-course.html">
                            <span className="mini-sub-pro">Add Course</span>
                          </a>
                        </li>
                        <li>
                          <a title="Edit Courses" href="edit-course.html">
                            <span className="mini-sub-pro">Edit Course</span>
                          </a>
                        </li>
                        <li>
                          <a title="Courses Profile" href="course-info.html">
                            <span className="mini-sub-pro">Courses Info</span>
                          </a>
                        </li>
                        <li>
                          <a title="Product Payment" href="course-payment.html">
                            <span className="mini-sub-pro">
                              Courses Payment
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        className="has-arrow"
                        href="all-courses.html"
                        aria-expanded="false"
                      >
                        <span className="educate-icon educate-library icon-wrap" />{" "}
                        <span className="mini-click-non">Library</span>
                      </a>
                      <ul className="submenu-angle" aria-expanded="false">
                        <li>
                          <a title="All Library" href="library-assets.html">
                            <span className="mini-sub-pro">Library Assets</span>
                          </a>
                        </li>
                        <li>
                          <a title="Add Library" href="add-library-assets.html">
                            <span className="mini-sub-pro">
                              Add Library Asset
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            title="Edit Library"
                            href="edit-library-assets.html"
                          >
                            <span className="mini-sub-pro">
                              Edit Library Asset
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        className="has-arrow"
                        href="all-courses.html"
                        aria-expanded="false"
                      >
                        <span className="educate-icon educate-department icon-wrap" />{" "}
                        <span className="mini-click-non">Departments</span>
                      </a>
                      <ul className="submenu-angle" aria-expanded="false">
                        <li>
                          <a title="Departments List" href="departments.html">
                            <span className="mini-sub-pro">
                              Departments List
                            </span>
                          </a>
                        </li>
                        <li>
                          <a title="Add Departments" href="add-department.html">
                            <span className="mini-sub-pro">
                              Add Departments
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            title="Edit Departments"
                            href="edit-department.html"
                          >
                            <span className="mini-sub-pro">
                              Edit Departments
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        className="has-arrow"
                        href="mailbox.html"
                        aria-expanded="false"
                      >
                        <span className="educate-icon educate-message icon-wrap" />{" "}
                        <span className="mini-click-non">Mailbox</span>
                      </a>
                      <ul className="submenu-angle" aria-expanded="false">
                        <li>
                          <a title="Inbox" href="mailbox.html">
                            <span className="mini-sub-pro">Inbox</span>
                          </a>
                        </li>
                        <li>
                          <a title="View Mail" href="mailbox-view.html">
                            <span className="mini-sub-pro">View Mail</span>
                          </a>
                        </li>
                        <li>
                          <a title="Compose Mail" href="mailbox-compose.html">
                            <span className="mini-sub-pro">Compose Mail</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        className="has-arrow"
                        href="mailbox.html"
                        aria-expanded="false"
                      >
                        <span className="educate-icon educate-interface icon-wrap" />{" "}
                        <span className="mini-click-non">Interface</span>
                      </a>
                      <ul
                        className="submenu-angle interface-mini-nb-dp"
                        aria-expanded="false"
                      >
                        <li>
                          <a title="Google Map" href="google-map.html">
                            <span className="mini-sub-pro">Google Map</span>
                          </a>
                        </li>
                        <li>
                          <a title="Data Maps" href="data-maps.html">
                            <span className="mini-sub-pro">Data Maps</span>
                          </a>
                        </li>
                        <li>
                          <a title="Pdf Viewer" href="pdf-viewer.html">
                            <span className="mini-sub-pro">Pdf Viewer</span>
                          </a>
                        </li>
                        <li>
                          <a title="X-Editable" href="x-editable.html">
                            <span className="mini-sub-pro">X-Editable</span>
                          </a>
                        </li>
                        <li>
                          <a title="Code Editor" href="code-editor.html">
                            <span className="mini-sub-pro">Code Editor</span>
                          </a>
                        </li>
                        <li>
                          <a title="Tree View" href="tree-view.html">
                            <span className="mini-sub-pro">Tree View</span>
                          </a>
                        </li>
                        <li>
                          <a title="Preloader" href="preloader.html">
                            <span className="mini-sub-pro">Preloader</span>
                          </a>
                        </li>
                        <li>
                          <a title="Images Cropper" href="images-cropper.html">
                            <span className="mini-sub-pro">Images Cropper</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        className="has-arrow"
                        href="mailbox.html"
                        aria-expanded="false"
                      >
                        <span className="educate-icon educate-charts icon-wrap" />{" "}
                        <span className="mini-click-non">Charts</span>
                      </a>
                      <ul
                        className="submenu-angle chart-mini-nb-dp"
                        aria-expanded="false"
                      >
                        <li>
                          <a title="Bar Charts" href="bar-charts.html">
                            <span className="mini-sub-pro">Bar Charts</span>
                          </a>
                        </li>
                        <li>
                          <a title="Line Charts" href="line-charts.html">
                            <span className="mini-sub-pro">Line Charts</span>
                          </a>
                        </li>
                        <li>
                          <a title="Area Charts" href="area-charts.html">
                            <span className="mini-sub-pro">Area Charts</span>
                          </a>
                        </li>
                        <li>
                          <a title="Rounded Charts" href="rounded-chart.html">
                            <span className="mini-sub-pro">Rounded Charts</span>
                          </a>
                        </li>
                        <li>
                          <a title="C3 Charts" href="c3.html">
                            <span className="mini-sub-pro">C3 Charts</span>
                          </a>
                        </li>
                        <li>
                          <a title="Sparkline Charts" href="sparkline.html">
                            <span className="mini-sub-pro">
                              Sparkline Charts
                            </span>
                          </a>
                        </li>
                        <li>
                          <a title="Peity Charts" href="peity.html">
                            <span className="mini-sub-pro">Peity Charts</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        className="has-arrow"
                        href="mailbox.html"
                        aria-expanded="false"
                      >
                        <span className="educate-icon educate-data-table icon-wrap" />{" "}
                        <span className="mini-click-non">Data Tables</span>
                      </a>
                      <ul className="submenu-angle" aria-expanded="false">
                        <li>
                          <a title="Peity Charts" href="static-table.html">
                            <span className="mini-sub-pro">Static Table</span>
                          </a>
                        </li>
                        <li>
                          <a title="Data Table" href="data-table.html">
                            <span className="mini-sub-pro">Data Table</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        className="has-arrow"
                        href="mailbox.html"
                        aria-expanded="false"
                      >
                        <span className="educate-icon educate-form icon-wrap" />{" "}
                        <span className="mini-click-non">Forms Elements</span>
                      </a>
                      <ul
                        className="submenu-angle form-mini-nb-dp"
                        aria-expanded="false"
                      >
                        <li>
                          <a
                            title="Basic Form Elements"
                            href="basic-form-element.html"
                          >
                            <span className="mini-sub-pro">
                              Bc Form Elements
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            title="Advance Form Elements"
                            href="advance-form-element.html"
                          >
                            <span className="mini-sub-pro">
                              Ad Form Elements
                            </span>
                          </a>
                        </li>
                        <li>
                          <a title="Password Meter" href="password-meter.html">
                            <span className="mini-sub-pro">Password Meter</span>
                          </a>
                        </li>
                        <li>
                          <a title="Multi Upload" href="multi-upload.html">
                            <span className="mini-sub-pro">Multi Upload</span>
                          </a>
                        </li>
                        <li>
                          <a title="Text Editor" href="tinymc.html">
                            <span className="mini-sub-pro">Text Editor</span>
                          </a>
                        </li>
                        <li>
                          <a title="Dual List Box" href="dual-list-box.html">
                            <span className="mini-sub-pro">Dual List Box</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        className="has-arrow"
                        href="mailbox.html"
                        aria-expanded="false"
                      >
                        <span className="educate-icon educate-apps icon-wrap" />{" "}
                        <span className="mini-click-non">App views</span>
                      </a>
                      <ul
                        className="submenu-angle app-mini-nb-dp"
                        aria-expanded="false"
                      >
                        <li>
                          <a title="Notifications" href="notifications.html">
                            <span className="mini-sub-pro">Notifications</span>
                          </a>
                        </li>
                        <li>
                          <a title="Alerts" href="alerts.html">
                            <span className="mini-sub-pro">Alerts</span>
                          </a>
                        </li>
                        <li>
                          <a title="Modals" href="modals.html">
                            <span className="mini-sub-pro">Modals</span>
                          </a>
                        </li>
                        <li>
                          <a title="Buttons" href="buttons.html">
                            <span className="mini-sub-pro">Buttons</span>
                          </a>
                        </li>
                        <li>
                          <a title="Tabs" href="tabs.html">
                            <span className="mini-sub-pro">Tabs</span>
                          </a>
                        </li>
                        <li>
                          <a title="Accordion" href="accordion.html">
                            <span className="mini-sub-pro">Accordion</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li id="removable">
                      <a className="has-arrow" href="#" aria-expanded="false">
                        <span className="educate-icon educate-pages icon-wrap" />{" "}
                        <span className="mini-click-non">Pages</span>
                      </a>
                      <ul
                        className="submenu-angle page-mini-nb-dp"
                        aria-expanded="false"
                      >
                        <li>
                          <a title="Login" href="login.html">
                            <span className="mini-sub-pro">Login</span>
                          </a>
                        </li>
                        <li>
                          <a title="Register" href="register.html">
                            <span className="mini-sub-pro">Register</span>
                          </a>
                        </li>
                        <li>
                          <a title="Lock" href="lock.html">
                            <span className="mini-sub-pro">Lock</span>
                          </a>
                        </li>
                        <li>
                          <a
                            title="Password Recovery"
                            href="password-recovery.html"
                          >
                            <span className="mini-sub-pro">
                              Password Recovery
                            </span>
                          </a>
                        </li>
                        <li>
                          <a title="404 Page" href="404.html">
                            <span className="mini-sub-pro">404 Page</span>
                          </a>
                        </li>
                        <li>
                          <a title="500 Page" href="500.html">
                            <span className="mini-sub-pro">500 Page</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </nav>
          </div>
          {/* End Left menu area */}
          {/* Start Welcome area */}
          <div className="all-content-wrapper">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="logo-pro">
                    <a href="index.html">
                      <img className="main-logo" src="img/logo/logo.png" alt />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-advance-area">
              <div className="header-top-area">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div className="header-top-wraper">
                        <div className="row">
                          <div className="col-lg-1 col-md-0 col-sm-1 col-xs-12">
                            <div className="menu-switcher-pro">
                              <button
                                type="button"
                                id="sidebarCollapse"
                                className="btn bar-button-pro header-drl-controller-btn btn-info navbar-btn"
                              >
                                <i className="educate-icon educate-nav" />
                              </button>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-7 col-sm-6 col-xs-12">
                            <div className="header-top-menu tabl-d-n">
                              <ul className="nav navbar-nav mai-top-nav">
                                <li className="nav-item">
                                  <a href="#" className="nav-link">
                                    Home
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a href="#" className="nav-link">
                                    About
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a href="#" className="nav-link">
                                    Services
                                  </a>
                                </li>
                                <li className="nav-item dropdown res-dis-nn">
                                  <a
                                    href="#"
                                    data-toggle="dropdown"
                                    role="button"
                                    aria-expanded="false"
                                    className="nav-link dropdown-toggle"
                                  >
                                    Project{" "}
                                    <span className="angle-down-topmenu">
                                      <i className="fa fa-angle-down" />
                                    </span>
                                  </a>
                                  <div
                                    role="menu"
                                    className="dropdown-menu animated zoomIn"
                                  >
                                    <a href="#" className="dropdown-item">
                                      Documentation
                                    </a>
                                    <a href="#" className="dropdown-item">
                                      Expert Backend
                                    </a>
                                    <a href="#" className="dropdown-item">
                                      Expert FrontEnd
                                    </a>
                                    <a href="#" className="dropdown-item">
                                      Contact Support
                                    </a>
                                  </div>
                                </li>
                                <li className="nav-item">
                                  <a href="#" className="nav-link">
                                    Support
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                            <div className="header-right-info">
                              <ul className="nav navbar-nav mai-top-nav header-right-menu">
                                <li className="nav-item dropdown">
                                  <a
                                    href="#"
                                    data-toggle="dropdown"
                                    role="button"
                                    aria-expanded="false"
                                    className="nav-link dropdown-toggle"
                                  >
                                    <i
                                      className="educate-icon educate-message edu-chat-pro"
                                      aria-hidden="true"
                                    />
                                    <span className="indicator-ms" />
                                  </a>
                                  <div
                                    role="menu"
                                    className="author-message-top dropdown-menu animated zoomIn"
                                  >
                                    <div className="message-single-top">
                                      <h1>Message</h1>
                                    </div>
                                    <ul className="message-menu">
                                      <li>
                                        <a href="#">
                                          <div className="message-img">
                                            <img src="img/contact/1.jpg" alt />
                                          </div>
                                          <div className="message-content">
                                            <span className="message-date">
                                              16 Sept
                                            </span>
                                            <h2>Advanda Cro</h2>
                                            <p>
                                              Please done this project as soon
                                              possible.
                                            </p>
                                          </div>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <div className="message-img">
                                            <img src="img/contact/4.jpg" alt />
                                          </div>
                                          <div className="message-content">
                                            <span className="message-date">
                                              16 Sept
                                            </span>
                                            <h2>Sulaiman din</h2>
                                            <p>
                                              Please done this project as soon
                                              possible.
                                            </p>
                                          </div>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <div className="message-img">
                                            <img src="img/contact/3.jpg" alt />
                                          </div>
                                          <div className="message-content">
                                            <span className="message-date">
                                              16 Sept
                                            </span>
                                            <h2>Victor Jara</h2>
                                            <p>
                                              Please done this project as soon
                                              possible.
                                            </p>
                                          </div>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <div className="message-img">
                                            <img src="img/contact/2.jpg" alt />
                                          </div>
                                          <div className="message-content">
                                            <span className="message-date">
                                              16 Sept
                                            </span>
                                            <h2>Victor Jara</h2>
                                            <p>
                                              Please done this project as soon
                                              possible.
                                            </p>
                                          </div>
                                        </a>
                                      </li>
                                    </ul>
                                    <div className="message-view">
                                      <a href="#">View All Messages</a>
                                    </div>
                                  </div>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href="#"
                                    data-toggle="dropdown"
                                    role="button"
                                    aria-expanded="false"
                                    className="nav-link dropdown-toggle"
                                  >
                                    <i
                                      className="educate-icon educate-bell"
                                      aria-hidden="true"
                                    />
                                    <span className="indicator-nt" />
                                  </a>
                                  <div
                                    role="menu"
                                    className="notification-author dropdown-menu animated zoomIn"
                                  >
                                    <div className="notification-single-top">
                                      <h1>Notifications</h1>
                                    </div>
                                    <ul className="notification-menu">
                                      <li>
                                        <a href="#">
                                          <div className="notification-icon">
                                            <i
                                              className="educate-icon educate-checked edu-checked-pro admin-check-pro"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <div className="notification-content">
                                            <span className="notification-date">
                                              16 Sept
                                            </span>
                                            <h2>Advanda Cro</h2>
                                            <p>
                                              Please done this project as soon
                                              possible.
                                            </p>
                                          </div>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <div className="notification-icon">
                                            <i
                                              className="fa fa-cloud edu-cloud-computing-down"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <div className="notification-content">
                                            <span className="notification-date">
                                              16 Sept
                                            </span>
                                            <h2>Sulaiman din</h2>
                                            <p>
                                              Please done this project as soon
                                              possible.
                                            </p>
                                          </div>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <div className="notification-icon">
                                            <i
                                              className="fa fa-eraser edu-shield"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <div className="notification-content">
                                            <span className="notification-date">
                                              16 Sept
                                            </span>
                                            <h2>Victor Jara</h2>
                                            <p>
                                              Please done this project as soon
                                              possible.
                                            </p>
                                          </div>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <div className="notification-icon">
                                            <i
                                              className="fa fa-line-chart edu-analytics-arrow"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <div className="notification-content">
                                            <span className="notification-date">
                                              16 Sept
                                            </span>
                                            <h2>Victor Jara</h2>
                                            <p>
                                              Please done this project as soon
                                              possible.
                                            </p>
                                          </div>
                                        </a>
                                      </li>
                                    </ul>
                                    <div className="notification-view">
                                      <a href="#">View All Notification</a>
                                    </div>
                                  </div>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href="#"
                                    data-toggle="dropdown"
                                    role="button"
                                    aria-expanded="false"
                                    className="nav-link dropdown-toggle"
                                  >
                                    <img src="img/product/pro4.jpg" alt />
                                    <span className="admin-name">
                                      Prof.Anderson
                                    </span>
                                    <i className="fa fa-angle-down edu-icon edu-down-arrow" />
                                  </a>
                                  <ul
                                    role="menu"
                                    className="dropdown-header-top author-log dropdown-menu animated zoomIn"
                                  >
                                    <li>
                                      <a href="#">
                                        <span className="edu-icon edu-home-admin author-log-ic" />
                                        My Account
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span className="edu-icon edu-user-rounded author-log-ic" />
                                        My Profile
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span className="edu-icon edu-money author-log-ic" />
                                        User Billing
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span className="edu-icon edu-settings author-log-ic" />
                                        Settings
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span className="edu-icon edu-locked author-log-ic" />
                                        Log Out
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="nav-item nav-setting-open">
                                  <a
                                    href="#"
                                    data-toggle="dropdown"
                                    role="button"
                                    aria-expanded="false"
                                    className="nav-link dropdown-toggle"
                                  >
                                    <i className="educate-icon educate-menu" />
                                  </a>
                                  <div
                                    role="menu"
                                    className="admintab-wrap menu-setting-wrap menu-setting-wrap-bg dropdown-menu animated zoomIn"
                                  >
                                    <ul className="nav nav-tabs custon-set-tab">
                                      <li className="active">
                                        <a data-toggle="tab" href="#Notes">
                                          Notes
                                        </a>
                                      </li>
                                      <li>
                                        <a data-toggle="tab" href="#Projects">
                                          Projects
                                        </a>
                                      </li>
                                      <li>
                                        <a data-toggle="tab" href="#Settings">
                                          Settings
                                        </a>
                                      </li>
                                    </ul>
                                    <div className="tab-content custom-bdr-nt">
                                      <div
                                        id="Notes"
                                        className="tab-pane fade in active"
                                      >
                                        <div className="notes-area-wrap">
                                          <div className="note-heading-indicate">
                                            <h2>
                                              <i className="fa fa-comments-o" />{" "}
                                              Latest Notes
                                            </h2>
                                            <p>You have 10 new message.</p>
                                          </div>
                                          <div className="notes-list-area notes-menu-scrollbar">
                                            <ul className="notes-menu-list">
                                              <li>
                                                <a href="#">
                                                  <div className="notes-list-flow">
                                                    <div className="notes-img">
                                                      <img
                                                        src="img/contact/4.jpg"
                                                        alt
                                                      />
                                                    </div>
                                                    <div className="notes-content">
                                                      <p>
                                                        {" "}
                                                        The point of using Lorem
                                                        Ipsum is that it has a
                                                        more-or-less normal.
                                                      </p>
                                                      <span>
                                                        Yesterday 2:45 pm
                                                      </span>
                                                    </div>
                                                  </div>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="#">
                                                  <div className="notes-list-flow">
                                                    <div className="notes-img">
                                                      <img
                                                        src="img/contact/1.jpg"
                                                        alt
                                                      />
                                                    </div>
                                                    <div className="notes-content">
                                                      <p>
                                                        {" "}
                                                        The point of using Lorem
                                                        Ipsum is that it has a
                                                        more-or-less normal.
                                                      </p>
                                                      <span>
                                                        Yesterday 2:45 pm
                                                      </span>
                                                    </div>
                                                  </div>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="#">
                                                  <div className="notes-list-flow">
                                                    <div className="notes-img">
                                                      <img
                                                        src="img/contact/2.jpg"
                                                        alt
                                                      />
                                                    </div>
                                                    <div className="notes-content">
                                                      <p>
                                                        {" "}
                                                        The point of using Lorem
                                                        Ipsum is that it has a
                                                        more-or-less normal.
                                                      </p>
                                                      <span>
                                                        Yesterday 2:45 pm
                                                      </span>
                                                    </div>
                                                  </div>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="#">
                                                  <div className="notes-list-flow">
                                                    <div className="notes-img">
                                                      <img
                                                        src="img/contact/3.jpg"
                                                        alt
                                                      />
                                                    </div>
                                                    <div className="notes-content">
                                                      <p>
                                                        {" "}
                                                        The point of using Lorem
                                                        Ipsum is that it has a
                                                        more-or-less normal.
                                                      </p>
                                                      <span>
                                                        Yesterday 2:45 pm
                                                      </span>
                                                    </div>
                                                  </div>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="#">
                                                  <div className="notes-list-flow">
                                                    <div className="notes-img">
                                                      <img
                                                        src="img/contact/4.jpg"
                                                        alt
                                                      />
                                                    </div>
                                                    <div className="notes-content">
                                                      <p>
                                                        {" "}
                                                        The point of using Lorem
                                                        Ipsum is that it has a
                                                        more-or-less normal.
                                                      </p>
                                                      <span>
                                                        Yesterday 2:45 pm
                                                      </span>
                                                    </div>
                                                  </div>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="#">
                                                  <div className="notes-list-flow">
                                                    <div className="notes-img">
                                                      <img
                                                        src="img/contact/1.jpg"
                                                        alt
                                                      />
                                                    </div>
                                                    <div className="notes-content">
                                                      <p>
                                                        {" "}
                                                        The point of using Lorem
                                                        Ipsum is that it has a
                                                        more-or-less normal.
                                                      </p>
                                                      <span>
                                                        Yesterday 2:45 pm
                                                      </span>
                                                    </div>
                                                  </div>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="#">
                                                  <div className="notes-list-flow">
                                                    <div className="notes-img">
                                                      <img
                                                        src="img/contact/2.jpg"
                                                        alt
                                                      />
                                                    </div>
                                                    <div className="notes-content">
                                                      <p>
                                                        {" "}
                                                        The point of using Lorem
                                                        Ipsum is that it has a
                                                        more-or-less normal.
                                                      </p>
                                                      <span>
                                                        Yesterday 2:45 pm
                                                      </span>
                                                    </div>
                                                  </div>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="#">
                                                  <div className="notes-list-flow">
                                                    <div className="notes-img">
                                                      <img
                                                        src="img/contact/1.jpg"
                                                        alt
                                                      />
                                                    </div>
                                                    <div className="notes-content">
                                                      <p>
                                                        {" "}
                                                        The point of using Lorem
                                                        Ipsum is that it has a
                                                        more-or-less normal.
                                                      </p>
                                                      <span>
                                                        Yesterday 2:45 pm
                                                      </span>
                                                    </div>
                                                  </div>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="#">
                                                  <div className="notes-list-flow">
                                                    <div className="notes-img">
                                                      <img
                                                        src="img/contact/2.jpg"
                                                        alt
                                                      />
                                                    </div>
                                                    <div className="notes-content">
                                                      <p>
                                                        {" "}
                                                        The point of using Lorem
                                                        Ipsum is that it has a
                                                        more-or-less normal.
                                                      </p>
                                                      <span>
                                                        Yesterday 2:45 pm
                                                      </span>
                                                    </div>
                                                  </div>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="#">
                                                  <div className="notes-list-flow">
                                                    <div className="notes-img">
                                                      <img
                                                        src="img/contact/3.jpg"
                                                        alt
                                                      />
                                                    </div>
                                                    <div className="notes-content">
                                                      <p>
                                                        {" "}
                                                        The point of using Lorem
                                                        Ipsum is that it has a
                                                        more-or-less normal.
                                                      </p>
                                                      <span>
                                                        Yesterday 2:45 pm
                                                      </span>
                                                    </div>
                                                  </div>
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        id="Projects"
                                        className="tab-pane fade"
                                      >
                                        <div className="projects-settings-wrap">
                                          <div className="note-heading-indicate">
                                            <h2>
                                              <i className="fa fa-cube" />{" "}
                                              Latest projects
                                            </h2>
                                            <p>
                                              {" "}
                                              You have 20 projects. 5 not
                                              completed.
                                            </p>
                                          </div>
                                          <div className="project-st-list-area project-st-menu-scrollbar">
                                            <ul className="projects-st-menu-list">
                                              <li>
                                                <a href="#">
                                                  <div className="project-list-flow">
                                                    <div className="projects-st-heading">
                                                      <h2>Web Development</h2>
                                                      <p>
                                                        {" "}
                                                        The point of using Lorem
                                                        Ipsum is that it has a
                                                        more or less normal.
                                                      </p>
                                                      <span className="project-st-time">
                                                        1 hours ago
                                                      </span>
                                                    </div>
                                                    <div className="projects-st-content">
                                                      <p>
                                                        Completion with: 28%
                                                      </p>
                                                      <div className="progress progress-mini">
                                                        <div
                                                          style={{
                                                            width: "28%",
                                                          }}
                                                          className="progress-bar progress-bar-danger hd-tp-1"
                                                        />
                                                      </div>
                                                      <p>
                                                        Project end: 4:00 pm -
                                                        12.06.2014
                                                      </p>
                                                    </div>
                                                  </div>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="#">
                                                  <div className="project-list-flow">
                                                    <div className="projects-st-heading">
                                                      <h2>
                                                        Software Development
                                                      </h2>
                                                      <p>
                                                        {" "}
                                                        The point of using Lorem
                                                        Ipsum is that it has a
                                                        more or less normal.
                                                      </p>
                                                      <span className="project-st-time">
                                                        2 hours ago
                                                      </span>
                                                    </div>
                                                    <div className="projects-st-content project-rating-cl">
                                                      <p>
                                                        Completion with: 68%
                                                      </p>
                                                      <div className="progress progress-mini">
                                                        <div
                                                          style={{
                                                            width: "68%",
                                                          }}
                                                          className="progress-bar hd-tp-2"
                                                        />
                                                      </div>
                                                      <p>
                                                        Project end: 4:00 pm -
                                                        12.06.2014
                                                      </p>
                                                    </div>
                                                  </div>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="#">
                                                  <div className="project-list-flow">
                                                    <div className="projects-st-heading">
                                                      <h2>Graphic Design</h2>
                                                      <p>
                                                        {" "}
                                                        The point of using Lorem
                                                        Ipsum is that it has a
                                                        more or less normal.
                                                      </p>
                                                      <span className="project-st-time">
                                                        3 hours ago
                                                      </span>
                                                    </div>
                                                    <div className="projects-st-content">
                                                      <p>
                                                        Completion with: 78%
                                                      </p>
                                                      <div className="progress progress-mini">
                                                        <div
                                                          style={{
                                                            width: "78%",
                                                          }}
                                                          className="progress-bar hd-tp-3"
                                                        />
                                                      </div>
                                                      <p>
                                                        Project end: 4:00 pm -
                                                        12.06.2014
                                                      </p>
                                                    </div>
                                                  </div>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="#">
                                                  <div className="project-list-flow">
                                                    <div className="projects-st-heading">
                                                      <h2>Web Design</h2>
                                                      <p>
                                                        {" "}
                                                        The point of using Lorem
                                                        Ipsum is that it has a
                                                        more or less normal.
                                                      </p>
                                                      <span className="project-st-time">
                                                        4 hours ago
                                                      </span>
                                                    </div>
                                                    <div className="projects-st-content project-rating-cl2">
                                                      <p>
                                                        Completion with: 38%
                                                      </p>
                                                      <div className="progress progress-mini">
                                                        <div
                                                          style={{
                                                            width: "38%",
                                                          }}
                                                          className="progress-bar progress-bar-danger hd-tp-4"
                                                        />
                                                      </div>
                                                      <p>
                                                        Project end: 4:00 pm -
                                                        12.06.2014
                                                      </p>
                                                    </div>
                                                  </div>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="#">
                                                  <div className="project-list-flow">
                                                    <div className="projects-st-heading">
                                                      <h2>Business Card</h2>
                                                      <p>
                                                        {" "}
                                                        The point of using Lorem
                                                        Ipsum is that it has a
                                                        more or less normal.
                                                      </p>
                                                      <span className="project-st-time">
                                                        5 hours ago
                                                      </span>
                                                    </div>
                                                    <div className="projects-st-content">
                                                      <p>
                                                        Completion with: 28%
                                                      </p>
                                                      <div className="progress progress-mini">
                                                        <div
                                                          style={{
                                                            width: "28%",
                                                          }}
                                                          className="progress-bar progress-bar-danger hd-tp-5"
                                                        />
                                                      </div>
                                                      <p>
                                                        Project end: 4:00 pm -
                                                        12.06.2014
                                                      </p>
                                                    </div>
                                                  </div>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="#">
                                                  <div className="project-list-flow">
                                                    <div className="projects-st-heading">
                                                      <h2>
                                                        Ecommerce Business
                                                      </h2>
                                                      <p>
                                                        {" "}
                                                        The point of using Lorem
                                                        Ipsum is that it has a
                                                        more or less normal.
                                                      </p>
                                                      <span className="project-st-time">
                                                        6 hours ago
                                                      </span>
                                                    </div>
                                                    <div className="projects-st-content project-rating-cl">
                                                      <p>
                                                        Completion with: 68%
                                                      </p>
                                                      <div className="progress progress-mini">
                                                        <div
                                                          style={{
                                                            width: "68%",
                                                          }}
                                                          className="progress-bar hd-tp-6"
                                                        />
                                                      </div>
                                                      <p>
                                                        Project end: 4:00 pm -
                                                        12.06.2014
                                                      </p>
                                                    </div>
                                                  </div>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="#">
                                                  <div className="project-list-flow">
                                                    <div className="projects-st-heading">
                                                      <h2>
                                                        Woocommerce Plugin
                                                      </h2>
                                                      <p>
                                                        {" "}
                                                        The point of using Lorem
                                                        Ipsum is that it has a
                                                        more or less normal.
                                                      </p>
                                                      <span className="project-st-time">
                                                        7 hours ago
                                                      </span>
                                                    </div>
                                                    <div className="projects-st-content">
                                                      <p>
                                                        Completion with: 78%
                                                      </p>
                                                      <div className="progress progress-mini">
                                                        <div
                                                          style={{
                                                            width: "78%",
                                                          }}
                                                          className="progress-bar"
                                                        />
                                                      </div>
                                                      <p>
                                                        Project end: 4:00 pm -
                                                        12.06.2014
                                                      </p>
                                                    </div>
                                                  </div>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="#">
                                                  <div className="project-list-flow">
                                                    <div className="projects-st-heading">
                                                      <h2>Wordpress Theme</h2>
                                                      <p>
                                                        {" "}
                                                        The point of using Lorem
                                                        Ipsum is that it has a
                                                        more or less normal.
                                                      </p>
                                                      <span className="project-st-time">
                                                        9 hours ago
                                                      </span>
                                                    </div>
                                                    <div className="projects-st-content project-rating-cl2">
                                                      <p>
                                                        Completion with: 38%
                                                      </p>
                                                      <div className="progress progress-mini">
                                                        <div
                                                          style={{
                                                            width: "38%",
                                                          }}
                                                          className="progress-bar progress-bar-danger"
                                                        />
                                                      </div>
                                                      <p>
                                                        Project end: 4:00 pm -
                                                        12.06.2014
                                                      </p>
                                                    </div>
                                                  </div>
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        id="Settings"
                                        className="tab-pane fade"
                                      >
                                        <div className="setting-panel-area">
                                          <div className="note-heading-indicate">
                                            <h2>
                                              <i className="fa fa-gears" />{" "}
                                              Settings Panel
                                            </h2>
                                            <p>
                                              {" "}
                                              You have 20 Settings. 5 not
                                              completed.
                                            </p>
                                          </div>
                                          <ul className="setting-panel-list">
                                            <li>
                                              <div className="checkbox-setting-pro">
                                                <div className="checkbox-title-pro">
                                                  <h2>Show notifications</h2>
                                                  <div className="ts-custom-check">
                                                    <div className="onoffswitch">
                                                      <input
                                                        type="checkbox"
                                                        name="collapsemenu"
                                                        className="onoffswitch-checkbox"
                                                        id="example"
                                                      />
                                                      <label
                                                        className="onoffswitch-label"
                                                        htmlFor="example"
                                                      >
                                                        <span className="onoffswitch-inner" />
                                                        <span className="onoffswitch-switch" />
                                                      </label>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </li>
                                            <li>
                                              <div className="checkbox-setting-pro">
                                                <div className="checkbox-title-pro">
                                                  <h2>Disable Chat</h2>
                                                  <div className="ts-custom-check">
                                                    <div className="onoffswitch">
                                                      <input
                                                        type="checkbox"
                                                        name="collapsemenu"
                                                        className="onoffswitch-checkbox"
                                                        id="example3"
                                                      />
                                                      <label
                                                        className="onoffswitch-label"
                                                        htmlFor="example3"
                                                      >
                                                        <span className="onoffswitch-inner" />
                                                        <span className="onoffswitch-switch" />
                                                      </label>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </li>
                                            <li>
                                              <div className="checkbox-setting-pro">
                                                <div className="checkbox-title-pro">
                                                  <h2>Enable history</h2>
                                                  <div className="ts-custom-check">
                                                    <div className="onoffswitch">
                                                      <input
                                                        type="checkbox"
                                                        name="collapsemenu"
                                                        className="onoffswitch-checkbox"
                                                        id="example4"
                                                      />
                                                      <label
                                                        className="onoffswitch-label"
                                                        htmlFor="example4"
                                                      >
                                                        <span className="onoffswitch-inner" />
                                                        <span className="onoffswitch-switch" />
                                                      </label>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </li>
                                            <li>
                                              <div className="checkbox-setting-pro">
                                                <div className="checkbox-title-pro">
                                                  <h2>Show charts</h2>
                                                  <div className="ts-custom-check">
                                                    <div className="onoffswitch">
                                                      <input
                                                        type="checkbox"
                                                        name="collapsemenu"
                                                        className="onoffswitch-checkbox"
                                                        id="example7"
                                                      />
                                                      <label
                                                        className="onoffswitch-label"
                                                        htmlFor="example7"
                                                      >
                                                        <span className="onoffswitch-inner" />
                                                        <span className="onoffswitch-switch" />
                                                      </label>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </li>
                                            <li>
                                              <div className="checkbox-setting-pro">
                                                <div className="checkbox-title-pro">
                                                  <h2>Update everyday</h2>
                                                  <div className="ts-custom-check">
                                                    <div className="onoffswitch">
                                                      <input
                                                        type="checkbox"
                                                        name="collapsemenu"
                                                        defaultChecked
                                                        className="onoffswitch-checkbox"
                                                        id="example2"
                                                      />
                                                      <label
                                                        className="onoffswitch-label"
                                                        htmlFor="example2"
                                                      >
                                                        <span className="onoffswitch-inner" />
                                                        <span className="onoffswitch-switch" />
                                                      </label>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </li>
                                            <li>
                                              <div className="checkbox-setting-pro">
                                                <div className="checkbox-title-pro">
                                                  <h2>Global search</h2>
                                                  <div className="ts-custom-check">
                                                    <div className="onoffswitch">
                                                      <input
                                                        type="checkbox"
                                                        name="collapsemenu"
                                                        defaultChecked
                                                        className="onoffswitch-checkbox"
                                                        id="example6"
                                                      />
                                                      <label
                                                        className="onoffswitch-label"
                                                        htmlFor="example6"
                                                      >
                                                        <span className="onoffswitch-inner" />
                                                        <span className="onoffswitch-switch" />
                                                      </label>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </li>
                                            <li>
                                              <div className="checkbox-setting-pro">
                                                <div className="checkbox-title-pro">
                                                  <h2>Offline users</h2>
                                                  <div className="ts-custom-check">
                                                    <div className="onoffswitch">
                                                      <input
                                                        type="checkbox"
                                                        name="collapsemenu"
                                                        defaultChecked
                                                        className="onoffswitch-checkbox"
                                                        id="example5"
                                                      />
                                                      <label
                                                        className="onoffswitch-label"
                                                        htmlFor="example5"
                                                      >
                                                        <span className="onoffswitch-inner" />
                                                        <span className="onoffswitch-switch" />
                                                      </label>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Mobile Menu start */}
              <div className="mobile-menu-area">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div className="mobile-menu">
                        <nav id="dropdown">
                          <ul className="mobile-menu-nav">
                            <li>
                              <a
                                data-toggle="collapse"
                                data-target="#Charts"
                                href="#"
                              >
                                Home{" "}
                                <span className="admin-project-icon edu-icon edu-down-arrow" />
                              </a>
                              <ul className="collapse dropdown-header-top">
                                <li>
                                  <a href="index.html">Dashboard v.1</a>
                                </li>
                                <li>
                                  <a href="index-1.html">Dashboard v.2</a>
                                </li>
                                <li>
                                  <a href="index-3.html">Dashboard v.3</a>
                                </li>
                                <li>
                                  <a href="analytics.html">Analytics</a>
                                </li>
                                <li>
                                  <a href="widgets.html">Widgets</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="events.html">Event</a>
                            </li>
                            <li>
                              <a
                                data-toggle="collapse"
                                data-target="#demoevent"
                                href="#"
                              >
                                Professors{" "}
                                <span className="admin-project-icon edu-icon edu-down-arrow" />
                              </a>
                              <ul
                                id="demoevent"
                                className="collapse dropdown-header-top"
                              >
                                <li>
                                  <a href="all-professors.html">
                                    All Professors
                                  </a>
                                </li>
                                <li>
                                  <a href="add-professor.html">Add Professor</a>
                                </li>
                                <li>
                                  <a href="edit-professor.html">
                                    Edit Professor
                                  </a>
                                </li>
                                <li>
                                  <a href="professor-profile.html">
                                    Professor Profile
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a
                                data-toggle="collapse"
                                data-target="#demopro"
                                href="#"
                              >
                                Students{" "}
                                <span className="admin-project-icon edu-icon edu-down-arrow" />
                              </a>
                              <ul
                                id="demopro"
                                className="collapse dropdown-header-top"
                              >
                                <li>
                                  <a href="all-students.html">All Students</a>
                                </li>
                                <li>
                                  <a href="add-student.html">Add Student</a>
                                </li>
                                <li>
                                  <a href="edit-student.html">Edit Student</a>
                                </li>
                                <li>
                                  <a href="student-profile.html">
                                    Student Profile
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a
                                data-toggle="collapse"
                                data-target="#democrou"
                                href="#"
                              >
                                Courses{" "}
                                <span className="admin-project-icon edu-icon edu-down-arrow" />
                              </a>
                              <ul
                                id="democrou"
                                className="collapse dropdown-header-top"
                              >
                                <li>
                                  <a href="all-courses.html">All Courses</a>
                                </li>
                                <li>
                                  <a href="add-course.html">Add Course</a>
                                </li>
                                <li>
                                  <a href="edit-course.html">Edit Course</a>
                                </li>
                                <li>
                                  <a href="course-profile.html">Courses Info</a>
                                </li>
                                <li>
                                  <a href="course-payment.html">
                                    Courses Payment
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a
                                data-toggle="collapse"
                                data-target="#demolibra"
                                href="#"
                              >
                                Library{" "}
                                <span className="admin-project-icon edu-icon edu-down-arrow" />
                              </a>
                              <ul
                                id="demolibra"
                                className="collapse dropdown-header-top"
                              >
                                <li>
                                  <a href="library-assets.html">
                                    Library Assets
                                  </a>
                                </li>
                                <li>
                                  <a href="add-library-assets.html">
                                    Add Library Asset
                                  </a>
                                </li>
                                <li>
                                  <a href="edit-library-assets.html">
                                    Edit Library Asset
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a
                                data-toggle="collapse"
                                data-target="#demodepart"
                                href="#"
                              >
                                Departments{" "}
                                <span className="admin-project-icon edu-icon edu-down-arrow" />
                              </a>
                              <ul
                                id="demodepart"
                                className="collapse dropdown-header-top"
                              >
                                <li>
                                  <a href="departments.html">
                                    Departments List
                                  </a>
                                </li>
                                <li>
                                  <a href="add-department.html">
                                    Add Departments
                                  </a>
                                </li>
                                <li>
                                  <a href="edit-department.html">
                                    Edit Departments
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a
                                data-toggle="collapse"
                                data-target="#demo"
                                href="#"
                              >
                                Mailbox{" "}
                                <span className="admin-project-icon edu-icon edu-down-arrow" />
                              </a>
                              <ul
                                id="demo"
                                className="collapse dropdown-header-top"
                              >
                                <li>
                                  <a href="mailbox.html">Inbox</a>
                                </li>
                                <li>
                                  <a href="mailbox-view.html">View Mail</a>
                                </li>
                                <li>
                                  <a href="mailbox-compose.html">
                                    Compose Mail
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a
                                data-toggle="collapse"
                                data-target="#Miscellaneousmob"
                                href="#"
                              >
                                Interface{" "}
                                <span className="admin-project-icon edu-icon edu-down-arrow" />
                              </a>
                              <ul
                                id="Miscellaneousmob"
                                className="collapse dropdown-header-top"
                              >
                                <li>
                                  <a href="google-map.html">Google Map</a>
                                </li>
                                <li>
                                  <a href="data-maps.html">Data Maps</a>
                                </li>
                                <li>
                                  <a href="pdf-viewer.html">Pdf Viewer</a>
                                </li>
                                <li>
                                  <a href="x-editable.html">X-Editable</a>
                                </li>
                                <li>
                                  <a href="code-editor.html">Code Editor</a>
                                </li>
                                <li>
                                  <a href="tree-view.html">Tree View</a>
                                </li>
                                <li>
                                  <a href="preloader.html">Preloader</a>
                                </li>
                                <li>
                                  <a href="images-cropper.html">
                                    Images Cropper
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a
                                data-toggle="collapse"
                                data-target="#Chartsmob"
                                href="#"
                              >
                                Charts{" "}
                                <span className="admin-project-icon edu-icon edu-down-arrow" />
                              </a>
                              <ul
                                id="Chartsmob"
                                className="collapse dropdown-header-top"
                              >
                                <li>
                                  <a href="bar-charts.html">Bar Charts</a>
                                </li>
                                <li>
                                  <a href="line-charts.html">Line Charts</a>
                                </li>
                                <li>
                                  <a href="area-charts.html">Area Charts</a>
                                </li>
                                <li>
                                  <a href="rounded-chart.html">
                                    Rounded Charts
                                  </a>
                                </li>
                                <li>
                                  <a href="c3.html">C3 Charts</a>
                                </li>
                                <li>
                                  <a href="sparkline.html">Sparkline Charts</a>
                                </li>
                                <li>
                                  <a href="peity.html">Peity Charts</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a
                                data-toggle="collapse"
                                data-target="#Tablesmob"
                                href="#"
                              >
                                Tables{" "}
                                <span className="admin-project-icon edu-icon edu-down-arrow" />
                              </a>
                              <ul
                                id="Tablesmob"
                                className="collapse dropdown-header-top"
                              >
                                <li>
                                  <a href="static-table.html">Static Table</a>
                                </li>
                                <li>
                                  <a href="data-table.html">Data Table</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a
                                data-toggle="collapse"
                                data-target="#formsmob"
                                href="#"
                              >
                                Forms{" "}
                                <span className="admin-project-icon edu-icon edu-down-arrow" />
                              </a>
                              <ul
                                id="formsmob"
                                className="collapse dropdown-header-top"
                              >
                                <li>
                                  <a href="basic-form-element.html">
                                    Basic Form Elements
                                  </a>
                                </li>
                                <li>
                                  <a href="advance-form-element.html">
                                    Advanced Form Elements
                                  </a>
                                </li>
                                <li>
                                  <a href="password-meter.html">
                                    Password Meter
                                  </a>
                                </li>
                                <li>
                                  <a href="multi-upload.html">Multi Upload</a>
                                </li>
                                <li>
                                  <a href="tinymc.html">Text Editor</a>
                                </li>
                                <li>
                                  <a href="dual-list-box.html">Dual List Box</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a
                                data-toggle="collapse"
                                data-target="#Appviewsmob"
                                href="#"
                              >
                                App views{" "}
                                <span className="admin-project-icon edu-icon edu-down-arrow" />
                              </a>
                              <ul
                                id="Appviewsmob"
                                className="collapse dropdown-header-top"
                              >
                                <li>
                                  <a href="basic-form-element.html">
                                    Basic Form Elements
                                  </a>
                                </li>
                                <li>
                                  <a href="advance-form-element.html">
                                    Advanced Form Elements
                                  </a>
                                </li>
                                <li>
                                  <a href="password-meter.html">
                                    Password Meter
                                  </a>
                                </li>
                                <li>
                                  <a href="multi-upload.html">Multi Upload</a>
                                </li>
                                <li>
                                  <a href="tinymc.html">Text Editor</a>
                                </li>
                                <li>
                                  <a href="dual-list-box.html">Dual List Box</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a
                                data-toggle="collapse"
                                data-target="#Pagemob"
                                href="#"
                              >
                                Pages{" "}
                                <span className="admin-project-icon edu-icon edu-down-arrow" />
                              </a>
                              <ul
                                id="Pagemob"
                                className="collapse dropdown-header-top"
                              >
                                <li>
                                  <a href="login.html">Login</a>
                                </li>
                                <li>
                                  <a href="register.html">Register</a>
                                </li>
                                <li>
                                  <a href="lock.html">Lock</a>
                                </li>
                                <li>
                                  <a href="password-recovery.html">
                                    Password Recovery
                                  </a>
                                </li>
                                <li>
                                  <a href="404.html">404 Page</a>
                                </li>
                                <li>
                                  <a href="500.html">500 Page</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Mobile Menu end */}
              <div className="breadcome-area">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div className="breadcome-list">
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <div className="breadcome-heading">
                              <form role="search" className="sr-input-func">
                                <input
                                  type="text"
                                  placeholder="Search..."
                                  className="search-int form-control"
                                />
                                <a href="#">
                                  <i className="fa fa-search" />
                                </a>
                              </form>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <ul className="breadcome-menu">
                              <li>
                                <a href="#">Home</a>{" "}
                                <span className="bread-slash">/</span>
                              </li>
                              <li>
                                <span className="bread-blod">
                                  Dashboard V.1
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="analytics-sparkle-area">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <div className="analytics-sparkle-line reso-mg-b-30">
                      <div className="analytics-content">
                        <h5>Computer Technologies</h5>
                        <h2>
                          $<span className="counter">5000</span>{" "}
                          <span className="tuition-fees">Tuition Fees</span>
                        </h2>
                        <span className="text-success">20%</span>
                        <div className="progress m-b-0">
                          <div
                            className="progress-bar progress-bar-success"
                            role="progressbar"
                            aria-valuenow={50}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "20%" }}
                          >
                            {" "}
                            <span className="sr-only">20% Complete</span>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <div className="analytics-sparkle-line reso-mg-b-30">
                      <div className="analytics-content">
                        <h5>Accounting Technologies</h5>
                        <h2>
                          $<span className="counter">3000</span>{" "}
                          <span className="tuition-fees">Tuition Fees</span>
                        </h2>
                        <span className="text-danger">30%</span>
                        <div className="progress m-b-0">
                          <div
                            className="progress-bar progress-bar-danger"
                            role="progressbar"
                            aria-valuenow={50}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "30%" }}
                          >
                            {" "}
                            <span className="sr-only">230% Complete</span>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <div className="analytics-sparkle-line reso-mg-b-30 table-mg-t-pro dk-res-t-pro-30">
                      <div className="analytics-content">
                        <h5>Electrical Engineering</h5>
                        <h2>
                          $<span className="counter">2000</span>{" "}
                          <span className="tuition-fees">Tuition Fees</span>
                        </h2>
                        <span className="text-info">60%</span>
                        <div className="progress m-b-0">
                          <div
                            className="progress-bar progress-bar-info"
                            role="progressbar"
                            aria-valuenow={50}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "60%" }}
                          >
                            {" "}
                            <span className="sr-only">20% Complete</span>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <div className="analytics-sparkle-line table-mg-t-pro dk-res-t-pro-30">
                      <div className="analytics-content">
                        <h5>Chemical Engineering</h5>
                        <h2>
                          $<span className="counter">3500</span>{" "}
                          <span className="tuition-fees">Tuition Fees</span>
                        </h2>
                        <span className="text-inverse">80%</span>
                        <div className="progress m-b-0">
                          <div
                            className="progress-bar progress-bar-inverse"
                            role="progressbar"
                            aria-valuenow={50}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "80%" }}
                          >
                            {" "}
                            <span className="sr-only">230% Complete</span>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-sales-area mg-tb-30">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                    <div className="product-sales-chart">
                      <div className="portlet-title">
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <div className="caption pro-sl-hd">
                              <span className="caption-subject">
                                <b>University Earnings</b>
                              </span>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <div className="actions graph-rp graph-rp-dl">
                              <p>All Earnings are in million $</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <ul className="list-inline cus-product-sl-rp">
                        <li>
                          <h5>
                            <i
                              className="fa fa-circle"
                              style={{ color: "#006DF0" }}
                            />
                            CSE
                          </h5>
                        </li>
                        <li>
                          <h5>
                            <i
                              className="fa fa-circle"
                              style={{ color: "#933EC5" }}
                            />
                            Accounting
                          </h5>
                        </li>
                        <li>
                          <h5>
                            <i
                              className="fa fa-circle"
                              style={{ color: "#65b12d" }}
                            />
                            Electrical
                          </h5>
                        </li>
                      </ul>
                      <div id="extra-area-chart" style={{ height: 356 }} />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div className="white-box analytics-info-cs mg-b-10 res-mg-b-30 res-mg-t-30 table-mg-t-pro-n tb-sm-res-d-n dk-res-t-d-n">
                      <h3 className="box-title">Total Visit</h3>
                      <ul className="list-inline two-part-sp">
                        <li>
                          <div id="sparklinedash" />
                        </li>
                        <li className="text-right sp-cn-r">
                          <i className="fa fa-level-up" aria-hidden="true" />{" "}
                          <span className="counter text-success">1500</span>
                        </li>
                      </ul>
                    </div>
                    <div className="white-box analytics-info-cs mg-b-10 res-mg-b-30 tb-sm-res-d-n dk-res-t-d-n">
                      <h3 className="box-title">Page Views</h3>
                      <ul className="list-inline two-part-sp">
                        <li>
                          <div id="sparklinedash2" />
                        </li>
                        <li className="text-right graph-two-ctn">
                          <i className="fa fa-level-up" aria-hidden="true" />{" "}
                          <span className="counter text-purple">3000</span>
                        </li>
                      </ul>
                    </div>
                    <div className="white-box analytics-info-cs mg-b-10 res-mg-b-30 tb-sm-res-d-n dk-res-t-d-n">
                      <h3 className="box-title">Unique Visitor</h3>
                      <ul className="list-inline two-part-sp">
                        <li>
                          <div id="sparklinedash3" />
                        </li>
                        <li className="text-right graph-three-ctn">
                          <i className="fa fa-level-up" aria-hidden="true" />{" "}
                          <span className="counter text-info">5000</span>
                        </li>
                      </ul>
                    </div>
                    <div className="white-box analytics-info-cs table-dis-n-pro tb-sm-res-d-n dk-res-t-d-n">
                      <h3 className="box-title">Bounce Rate</h3>
                      <ul className="list-inline two-part-sp">
                        <li>
                          <div id="sparklinedash4" />
                        </li>
                        <li className="text-right graph-four-ctn">
                          <i className="fa fa-level-down" aria-hidden="true" />{" "}
                          <span className="text-danger">
                            <span className="counter">18</span>%
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="traffic-analysis-area">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <div className="social-media-edu">
                      <i className="fa fa-facebook" />
                      <div className="social-edu-ctn">
                        <h3>50k Likes</h3>
                        <p>You main list growing</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <div className="social-media-edu twitter-cl res-mg-t-30 table-mg-t-pro-n">
                      <i className="fa fa-twitter" />
                      <div className="social-edu-ctn">
                        <h3>30k followers</h3>
                        <p>You main list growing</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <div className="social-media-edu linkedin-cl res-mg-t-30 res-tablet-mg-t-30 dk-res-t-pro-30">
                      <i className="fa fa-linkedin" />
                      <div className="social-edu-ctn">
                        <h3>7k Connections</h3>
                        <p>You main list growing</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <div className="social-media-edu youtube-cl res-mg-t-30 res-tablet-mg-t-30 dk-res-t-pro-30">
                      <i className="fa fa-youtube" />
                      <div className="social-edu-ctn">
                        <h3>50k Subscribers</h3>
                        <p>You main list growing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="library-book-area mg-t-30">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                    <div className="single-cards-item">
                      <div className="single-product-image">
                        <a href="#">
                          <img src="img/product/profile-bg.jpg" alt />
                        </a>
                      </div>
                      <div className="single-product-text">
                        <img src="img/product/pro4.jpg" alt />
                        <h4>
                          <a className="cards-hd-dn" href="#">
                            Angela Dominic
                          </a>
                        </h4>
                        <h5>Web Designer &amp; Developer</h5>
                        <p className="ctn-cards">
                          Lorem ipsum dolor sit amet, this is a consectetur
                          adipisicing elit
                        </p>
                        <a className="follow-cards" href="#">
                          Follow
                        </a>
                        <div className="row">
                          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                            <div className="cards-dtn">
                              <h3>
                                <span className="counter">199</span>
                              </h3>
                              <p>Articles</p>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                            <div className="cards-dtn">
                              <h3>
                                <span className="counter">599</span>
                              </h3>
                              <p>Like</p>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                            <div className="cards-dtn">
                              <h3>
                                <span className="counter">399</span>
                              </h3>
                              <p>Comment</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                    <div className="single-review-st-item res-mg-t-30 table-mg-t-pro-n">
                      <div className="single-review-st-hd">
                        <h2>Reviews</h2>
                      </div>
                      <div className="single-review-st-text">
                        <img src="img/notification/1.jpg" alt />
                        <div className="review-ctn-hf">
                          <h3>Sarah Graves</h3>
                          <p>Highly recommend</p>
                        </div>
                        <div className="review-item-rating">
                          <i className="educate-icon educate-star" />
                          <i className="educate-icon educate-star" />
                          <i className="educate-icon educate-star" />
                          <i className="educate-icon educate-star" />
                          <i className="educate-icon educate-star-half" />
                        </div>
                      </div>
                      <div className="single-review-st-text">
                        <img src="img/notification/2.jpg" alt />
                        <div className="review-ctn-hf">
                          <h3>Garbease sha</h3>
                          <p>Awesome Pro</p>
                        </div>
                        <div className="review-item-rating">
                          <i className="educate-icon educate-star" />
                          <i className="educate-icon educate-star" />
                          <i className="educate-icon educate-star" />
                          <i className="educate-icon educate-star" />
                          <i className="educate-icon educate-star-half" />
                        </div>
                      </div>
                      <div className="single-review-st-text">
                        <img src="img/notification/3.jpg" alt />
                        <div className="review-ctn-hf">
                          <h3>Gobetro pro</h3>
                          <p>Great Website</p>
                        </div>
                        <div className="review-item-rating">
                          <i className="educate-icon educate-star" />
                          <i className="educate-icon educate-star" />
                          <i className="educate-icon educate-star" />
                          <i className="educate-icon educate-star" />
                          <i className="educate-icon educate-star-half" />
                        </div>
                      </div>
                      <div className="single-review-st-text">
                        <img src="img/notification/4.jpg" alt />
                        <div className="review-ctn-hf">
                          <h3>Siam Graves</h3>
                          <p>That's Good</p>
                        </div>
                        <div className="review-item-rating">
                          <i className="educate-icon educate-star" />
                          <i className="educate-icon educate-star" />
                          <i className="educate-icon educate-star" />
                          <i className="educate-icon educate-star" />
                          <i className="educate-icon educate-star-half" />
                        </div>
                      </div>
                      <div className="single-review-st-text">
                        <img src="img/notification/5.jpg" alt />
                        <div className="review-ctn-hf">
                          <h3>Sarah Graves</h3>
                          <p>Highly recommend</p>
                        </div>
                        <div className="review-item-rating">
                          <i className="educate-icon educate-star" />
                          <i className="educate-icon educate-star" />
                          <i className="educate-icon educate-star" />
                          <i className="educate-icon educate-star" />
                          <i className="educate-icon educate-star-half" />
                        </div>
                      </div>
                      <div className="single-review-st-text">
                        <img src="img/notification/6.jpg" alt />
                        <div className="review-ctn-hf">
                          <h3>Julsha Grav</h3>
                          <p>Sei Hoise bro</p>
                        </div>
                        <div className="review-item-rating">
                          <i className="educate-icon educate-star" />
                          <i className="educate-icon educate-star" />
                          <i className="educate-icon educate-star" />
                          <i className="educate-icon educate-star" />
                          <i className="educate-icon educate-star-half" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="single-product-item res-mg-t-30 table-mg-t-pro-n tb-sm-res-d-n dk-res-t-d-n">
                      <div className="single-product-image">
                        <a href="#">
                          <img src="img/product/book-4.jpg" alt />
                        </a>
                      </div>
                      <div className="single-product-text edu-pro-tx">
                        <h4>
                          <a href="#">Title Demo Here</a>
                        </h4>
                        <h5>
                          Lorem ipsum dolor sit amet, this is a consec tetur
                          adipisicing elit
                        </h5>
                        <div className="product-price">
                          <h3>$45</h3>
                          <div className="single-item-rating">
                            <i className="educate-icon educate-star" />
                            <i className="educate-icon educate-star" />
                            <i className="educate-icon educate-star" />
                            <i className="educate-icon educate-star" />
                            <i className="educate-icon educate-star-half" />
                          </div>
                        </div>
                        <div className="product-buttons">
                          <button
                            type="button"
                            className="button-default cart-btn"
                          >
                            Read More
                          </button>
                          <button type="button" className="button-default">
                            <i className="fa fa-heart" />
                          </button>
                          <button type="button" className="button-default">
                            <i className="fa fa-share" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-sales-area mg-tb-30">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                    <div className="product-sales-chart">
                      <div className="portlet-title">
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <div className="caption pro-sl-hd">
                              <span className="caption-subject">
                                <b>Adminsion Statistic</b>
                              </span>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <div className="actions graph-rp actions-graph-rp">
                              <a
                                href="#"
                                className="btn btn-dark btn-circle active tip-top"
                                data-toggle="tooltip"
                                title="Refresh"
                              >
                                <i className="fa fa-reply" aria-hidden="true" />
                              </a>
                              <a
                                href="#"
                                className="btn btn-blue-grey btn-circle active tip-top"
                                data-toggle="tooltip"
                                title="Delete"
                              >
                                <i
                                  className="fa fa-trash-o"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <ul className="list-inline cus-product-sl-rp">
                        <li>
                          <h5>
                            <i
                              className="fa fa-circle"
                              style={{ color: "#006DF0" }}
                            />
                            Python
                          </h5>
                        </li>
                        <li>
                          <h5>
                            <i
                              className="fa fa-circle"
                              style={{ color: "#933EC5" }}
                            />
                            PHP
                          </h5>
                        </li>
                        <li>
                          <h5>
                            <i
                              className="fa fa-circle"
                              style={{ color: "#65b12d" }}
                            />
                            Java
                          </h5>
                        </li>
                      </ul>
                      <div id="morris-area-chart" />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div className="analysis-progrebar res-mg-t-30 mg-ub-10 res-mg-b-30 table-mg-t-pro-n tb-sm-res-d-n dk-res-t-d-n">
                      <div className="analysis-progrebar-content">
                        <h5>Usage</h5>
                        <h2 className="storage-right">
                          <span className="counter">90</span>%
                        </h2>
                        <div className="progress progress-mini ug-1">
                          <div
                            style={{ width: "68%" }}
                            className="progress-bar"
                          />
                        </div>
                        <div className="m-t-sm small">
                          <p>Server down since 1:32 pm.</p>
                        </div>
                      </div>
                    </div>
                    <div className="analysis-progrebar reso-mg-b-30 res-mg-b-30 mg-ub-10 tb-sm-res-d-n dk-res-t-d-n">
                      <div className="analysis-progrebar-content">
                        <h5>Memory</h5>
                        <h2 className="storage-right">
                          <span className="counter">70</span>%
                        </h2>
                        <div className="progress progress-mini ug-2">
                          <div
                            style={{ width: "78%" }}
                            className="progress-bar"
                          />
                        </div>
                        <div className="m-t-sm small">
                          <p>Server down since 12:32 pm.</p>
                        </div>
                      </div>
                    </div>
                    <div className="analysis-progrebar reso-mg-b-30 res-mg-b-30 res-mg-t-30 mg-ub-10 tb-sm-res-d-n dk-res-t-d-n">
                      <div className="analysis-progrebar-content">
                        <h5>Data</h5>
                        <h2 className="storage-right">
                          <span className="counter">50</span>%
                        </h2>
                        <div className="progress progress-mini ug-3">
                          <div
                            style={{ width: "38%" }}
                            className="progress-bar progress-bar-danger"
                          />
                        </div>
                        <div className="m-t-sm small">
                          <p>Server down since 8:32 pm.</p>
                        </div>
                      </div>
                    </div>
                    <div className="analysis-progrebar res-mg-t-30 table-dis-n-pro tb-sm-res-d-n dk-res-t-d-n">
                      <div className="analysis-progrebar-content">
                        <h5>Space</h5>
                        <h2 className="storage-right">
                          <span className="counter">40</span>%
                        </h2>
                        <div className="progress progress-mini ug-4">
                          <div
                            style={{ width: "28%" }}
                            className="progress-bar progress-bar-danger"
                          />
                        </div>
                        <div className="m-t-sm small">
                          <p>Server down since 5:32 pm.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="courses-area mg-b-15">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                    <div className="white-box">
                      <h3 className="box-title">Browser Status</h3>
                      <ul className="basic-list">
                        <li>
                          Google Chrome{" "}
                          <span className="pull-right label-danger label-1 label">
                            95.8%
                          </span>
                        </li>
                        <li>
                          Mozila Firefox{" "}
                          <span className="pull-right label-purple label-2 label">
                            85.8%
                          </span>
                        </li>
                        <li>
                          Apple Safari{" "}
                          <span className="pull-right label-success label-3 label">
                            23.8%
                          </span>
                        </li>
                        <li>
                          Internet Explorer{" "}
                          <span className="pull-right label-info label-4 label">
                            55.8%
                          </span>
                        </li>
                        <li>
                          Opera mini{" "}
                          <span className="pull-right label-warning label-5 label">
                            28.8%
                          </span>
                        </li>
                        <li>
                          Mozila Firefox{" "}
                          <span className="pull-right label-purple label-6 label">
                            26.8%
                          </span>
                        </li>
                        <li>
                          Safari{" "}
                          <span className="pull-right label-purple label-7 label">
                            31.8%
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                    <div className="white-box res-mg-t-30 table-mg-t-pro-n">
                      <h3 className="box-title">Visits from countries</h3>
                      <ul className="country-state">
                        <li>
                          <h2>
                            <span className="counter">1250</span>
                          </h2>{" "}
                          <small>From Australia</small>
                          <div className="pull-right">
                            75%{" "}
                            <i className="fa fa-level-up text-danger ctn-ic-1" />
                          </div>
                          <div className="progress">
                            <div
                              className="progress-bar progress-bar-danger ctn-vs-1"
                              role="progressbar"
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "75%" }}
                            >
                              {" "}
                              <span className="sr-only">75% Complete</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <h2>
                            <span className="counter">1050</span>
                          </h2>{" "}
                          <small>From USA</small>
                          <div className="pull-right">
                            48%{" "}
                            <i className="fa fa-level-up text-success ctn-ic-2" />
                          </div>
                          <div className="progress">
                            <div
                              className="progress-bar progress-bar-info ctn-vs-2"
                              role="progressbar"
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "48%" }}
                            >
                              {" "}
                              <span className="sr-only">48% Complete</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <h2>
                            <span className="counter">6350</span>
                          </h2>{" "}
                          <small>From Canada</small>
                          <div className="pull-right">
                            55%{" "}
                            <i className="fa fa-level-up text-success ctn-ic-3" />
                          </div>
                          <div className="progress">
                            <div
                              className="progress-bar progress-bar-success ctn-vs-3"
                              role="progressbar"
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "55%" }}
                            >
                              {" "}
                              <span className="sr-only">55% Complete</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <h2>
                            <span className="counter">950</span>
                          </h2>{" "}
                          <small>From India</small>
                          <div className="pull-right">
                            33%{" "}
                            <i className="fa fa-level-down text-success ctn-ic-4" />
                          </div>
                          <div className="progress">
                            <div
                              className="progress-bar progress-bar-success ctn-vs-4"
                              role="progressbar"
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "33%" }}
                            >
                              {" "}
                              <span className="sr-only">33% Complete</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <h2>
                            <span className="counter">3250</span>
                          </h2>{" "}
                          <small>From Bangladesh</small>
                          <div className="pull-right">
                            60%{" "}
                            <i className="fa fa-level-up text-success ctn-ic-5" />
                          </div>
                          <div className="progress">
                            <div
                              className="progress-bar progress-bar-inverse ctn-vs-5"
                              role="progressbar"
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "60%" }}
                            >
                              {" "}
                              <span className="sr-only">60% Complete</span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="courses-inner res-mg-t-30 table-mg-t-pro-n tb-sm-res-d-n dk-res-t-d-n">
                      <div className="courses-title">
                        <a href="#">
                          <img src="img/courses/1.jpg" alt />
                        </a>
                        <h2>Apps Development</h2>
                      </div>
                      <div className="courses-alaltic">
                        <span className="cr-ic-r">
                          <span className="course-icon">
                            <i className="fa fa-clock" />
                          </span>{" "}
                          1 Year
                        </span>
                        <span className="cr-ic-r">
                          <span className="course-icon">
                            <i className="fa fa-heart" />
                          </span>{" "}
                          50
                        </span>
                        <span className="cr-ic-r">
                          <span className="course-icon">
                            <i className="fa fa-dollar" />
                          </span>{" "}
                          500
                        </span>
                      </div>
                      <div className="course-des">
                        <p>
                          <span>
                            <i className="fa fa-clock" />
                          </span>{" "}
                          <b>Duration:</b> 6 Months
                        </p>
                        <p>
                          <span>
                            <i className="fa fa-clock" />
                          </span>{" "}
                          <b>Professor:</b> Jane Doe
                        </p>
                        <p>
                          <span>
                            <i className="fa fa-clock" />
                          </span>{" "}
                          <b>Students:</b> 100+
                        </p>
                      </div>
                      <div className="product-buttons">
                        <button
                          type="button"
                          className="button-default cart-btn"
                        >
                          Read More
                        </button>
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
      </>
    );
}


export default Dashboard1