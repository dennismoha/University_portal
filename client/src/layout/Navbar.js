import React,{useContext,useEffect,Fragment} from "react";
import {NavLink} from 'react-router-dom'
import studentRegisterContext from '../context/Register/studentRegisterContext'

const Navbar = (props) => {
    const authContext = useContext(studentRegisterContext);

  const { isAuthenticated, logout, user, loadUser } = authContext;
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
                <NavLink to='/register' className="nav-link active" >
                  Singup
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to ='/login' className="nav-link" href="/#">
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
              <a className="nav-link active" href="/#">
                contact admin
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/#">
                Inbox <span class="badge  badge-pill badge-light">9</span>
                <span class="sr-only">unread messages</span>
              </a>
            </li>
            <li className="nav-item">
              <div class="btn-group">
                <NavLink
                  to="/profile"
                  type="button"
                  class="btn btn-secondary dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  profile
                </NavLink>
                <div class="dropdown-menu dropdown-menu-right">
                <NavLink to='/profile' class="dropdown-item" type="button">
                    view profile
                  </NavLink>
                  <NavLink to="/profile/viewprofile" class="dropdown-item" type="button" >
                    profile settings
                  </NavLink>
                  
                  <button onClick={onLogout} class="dropdown-item" type="button">
                    logout
                  </button>
                </div>
              </div>
            </li> 
    </Fragment>
  )


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <a className="navbar-brand" href="/#">
          Navbar
        </a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <NavLink to='/' className="nav-link" >
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>           
            {/* <li className="nav-item">
              <a className="nav-link disabled">
                Disabled
              </a>
            </li> */}
          </ul>
          <ul className="nav justify-content-end">
          {!isAuthenticated ? guestLinks: authLinks}
           
            {/* <li className="nav-item">
                <a className="nav-link" href="/#">
                Link
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" href="/#">
                Disabled
                </a>
            </li> */}
          </ul>
        </div>
      </nav>
      {props.children}
    </>
  );
};

export default Navbar;
