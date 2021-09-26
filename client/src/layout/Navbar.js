import React,{useContext,useEffect,Fragment} from "react";
import {NavLink} from 'react-router-dom'
import studentRegisterContext from '../context/Register/studentRegisterContext'
import  {Styles} from './NavbarStyles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = (props) => {
    const authContext = useContext(studentRegisterContext);

  const { isAuthenticated, logout,  loadUser } = authContext;
  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

 const onLogout = () => {
    console.log("logout");
    logout();
  };

  const guestLinks = (
    <Fragment>
        <li className="nav-item">
                <NavLink to='/register' className="nav-link active" style={{color:"white"}} >
                  Singup
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to ='/login' className="nav-link" href="/#"  style={{color:"white"}}>
                  Login
                </NavLink>
              </li>
    </Fragment>     
  )

  const authLinks = (
    <Fragment>
      <li className="nav-item">
        <a className="nav-link active" href="/#">
          jobs
        </a>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/viewResume">
          View Resume
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/createresume">
          Create Resume
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">
          contact admin
        </NavLink>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="/#">
          Inbox <span class="badge  badge-pill badge-light">9</span>
          <span class="sr-only">unread messages</span>
        </a>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="/#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          settings
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <NavLink to="/profile" class="dropdown-item">
            view profile
          </NavLink>
          <NavLink to="/profile/viewprofile" class="dropdown-item">
            profile Edit
          </NavLink>
          <div class="dropdown-divider"></div>
          <a onClick={onLogout} class="dropdown-item" href="/#">
            Logout
          </a>
        </div>
      </li>
    </Fragment>
  );


  return (
    <>
      <Styles>
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
          <div className="container">
            <a className="navbar-brand" href="/#">
              {/* <img className="logo" src={logo} alt="logo" /> */}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <FontAwesomeIcon icon={faBars} style={{ color: "white" }} />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/#">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>               
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    contacts
                  </NavLink>
                </li>
                {!isAuthenticated ? guestLinks : authLinks}
               
              </ul>
            </div>
          </div>
        </nav>
      </Styles>
      {props.children}
    </>
  );
};

export default Navbar;
