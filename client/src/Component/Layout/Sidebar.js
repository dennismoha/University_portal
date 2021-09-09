import React, { useState, useEffect, useContext } from "react";
import MetisMenu from "@metismenu/react";
import "metismenujs/dist/metismenujs.css";
import "../../assets/css/educate-custon-icon.css";
import meanmenu from "../../assets/js/meanmenu";
import UtilContext from "../../context/utils/UtilContext";
import {NavLink} from 'react-router-dom'
import "../../assets/css/Admin/responsive.css";

const Sidebar = ({ click}) => {
    const { toggleSidebar} = useContext(UtilContext);
 
      useEffect(() => {
        if (toggleSidebar) {         
          document.body.classList.add("mini-navbar");
        } else{          
          document.body.classList.remove("mini-navbar");
        }
      }, [toggleSidebar]);

  return (
    <>
      <div className="left-sidebar-pro">
        <nav id="sidebar" className={toggleSidebar ? "active" : ""}>
          <div className="sidebar-header">
            <a href="index.html">
              <img className="main-logo" src="img/logo/logo.png" alt="" />
            </a>
            <strong>
              <a href="index.html">
                <img src="img/logo/logosn.png" alt="" />
              </a>
            </strong>
          </div>
          <div className="left-custom-menu-adp-wrap comment-scrollbar">
            <nav className="sidebar-nav left-sidebar-menu-pro">
              <ul className="metismenu" id="menu1">
                <MetisMenu>
                  <li className="active">
                    <a className="has-arrow" href="index.html">
                      <span>
                        <i class="fa fas fa-envelope"></i>
                      </span>
                      <span className="mini-click-non">Education</span>
                    </a>
                    <ul className="submenu-angle" aria-expanded="true">
                      <li>
                        <NavLink title="Dashboard v.1" to="/">
                          <span className="mini-sub-pro">Dashboard v.1</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink title="Dashboard v.2" to="/dashboard2">
                          <span className="mini-sub-pro">Dashboard v.2</span>
                        </NavLink>
                      </li>
                      {/* <li>
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
                      </li> */}
                    </ul>
                  </li>
                  {/* <li>
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
                  </li> */}
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
                        <NavLink title="All Professors" to="/viewproffessors">
                          <span className="mini-sub-pro">All Professors</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink title="Add Professor" to="/addproffessor">
                          <span className="mini-sub-pro">Add Professor</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink title="Edit Professor" to="/editproffessor">
                          <span className="mini-sub-pro">Edit Professor</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          title="Professor Profile"
                          to="/proffessorprofile"
                        >
                          <span className="mini-sub-pro">
                            Professor Profile
                          </span>
                        </NavLink>
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
                        <NavLink title="Edit Students" to="/editStudent">
                          <span className="mini-sub-pro">Edit Student</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink title="Students Profile" to="/studentprofile">
                          <span className="mini-sub-pro">Student Profile</span>
                        </NavLink>
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
                          <span className="mini-sub-pro">Courses Payment</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/* <li>
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
                        <a title="Edit Library" href="edit-library-assets.html">
                          <span className="mini-sub-pro">
                            Edit Library Asset
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li> */}
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
                          <span className="mini-sub-pro">Departments List</span>
                        </a>
                      </li>
                      <li>
                        <a title="Add Departments" href="add-department.html">
                          <span className="mini-sub-pro">Add Departments</span>
                        </a>
                      </li>
                      <li>
                        <a title="Edit Departments" href="edit-department.html">
                          <span className="mini-sub-pro">Edit Departments</span>
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
                      <span>
                        <i class="fa fas fa-envelope"></i>
                      </span>{" "}
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

                  {/* <li>
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
                  </li> */}
                  {/* <li>
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
                          <span className="mini-sub-pro">Sparkline Charts</span>
                        </a>
                      </li>
                      <li>
                        <a title="Peity Charts" href="peity.html">
                          <span className="mini-sub-pro">Peity Charts</span>
                        </a>
                      </li>
                    </ul>
                  </li> */}
                  {/* <li>
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
                  </li> */}
                  {/* <li>
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
                          <span className="mini-sub-pro">Bc Form Elements</span>
                        </a>
                      </li>
                      <li>
                        <a
                          title="Advance Form Elements"
                          href="advance-form-element.html"
                        >
                          <span className="mini-sub-pro">Ad Form Elements</span>
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
                  </li> */}
                  {/* <li>
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
                  </li> */}
                </MetisMenu>
              </ul>
            </nav>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
