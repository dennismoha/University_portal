import React from "react";
import { NavLink } from "react-router-dom";

const ProfileNavbar = (props) => {

  return (
    <>
      <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/profile">
          Career site
        </NavLink>
        <button
          className="navbar-toggler p-0 border-0"
          type="button"
          data-toggle="offcanvas"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="navbar-collapse offcanvas-collapse"
          id="navbarsExampleDefault"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link"href="/#">
                Dashboard <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link"href="/#">
                view companies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link"href="/#">
                view jobs
              </a>
            </li>

            {/* <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form> */}
          </ul>

          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link"href="/#">
                Contact us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link"href="/#">
                inbox
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="dropdown01"
                data-toggle="dropdown"               
                aria-expanded="false"
              >
                Settings
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdown01">
                <NavLink className="dropdown-item" to="/profile/viewprofile">
                  Edit profile
                </NavLink>
                <a className="dropdown-item"href="/#">
                  logout
                </a>
                <a className="dropdown-item"href="/#">
                  inbox
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      {/* <div className="nav-scroller bg-white box-shadow">
          <nav className="nav nav-underline">
            <a className="nav-link active"href="/#">
              Dashboard
            </a>
            <a className="nav-link"href="/#">
              Friends
              <span className="badge badge-pill bg-light align-text-bottom">
                27
              </span>
            </a>
            <a className="nav-link"href="/#">
              Explore
            </a>
            <a className="nav-link"href="/#">
              Suggestions
            </a>
            <a className="nav-link"href="/#">
              Link
            </a>
            <a className="nav-link"href="/#">
              Link
            </a>
            <a className="nav-link"href="/#">
              Link
            </a>
            <a className="nav-link"href="/#">
              Link
            </a>
            <a className="nav-link"href="/#">
              Link
            </a>
          </nav>
        </div> */}
      {props.children}
    </>
  );
};

export default ProfileNavbar;
