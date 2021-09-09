import React,{useState, useEffect,useContext} from 'react'
import {NavLink} from 'react-router-dom'
import studentRegisterContext from '../../context/Register/studentRegisterContext'
import { useHistory } from "react-router-dom";


const Login = () => {
   const [studentDetails, setStudentDetails] = useState({
     Email: "",
     password: "",
   });
   let history = useHistory();
   const { Email, password } = studentDetails;
   console.log("context", studentRegisterContext);
   const { login, error, clearErrors, isAuthenticated } = useContext(
     studentRegisterContext
   );
   const onchange = (e) => {
     setStudentDetails({ ...studentDetails, [e.target.name]: e.target.value });
   };

   useEffect(() => {
     // console.log("history is ", props);
     if (isAuthenticated) {
       history.push("/profile");
     }
     if (error) {
       setTimeout(() => {
         clearErrors();
       }, 9000);
     }
   }, [isAuthenticated, error]);

   const onsubmit = (e) => {
     e.preventDefault();
     login({
       Email,
       password,
     });
     clearErrors();
   };
    return (
      <>
        <div className="error-pagewrap">
          <div className="error-page-int">
            <div className="text-center m-b-md custom-login">
              <h3>PLEASE LOGIN TO APP</h3>
              <p>This is the best app ever!</p>
            </div>
            <div className="content-error">
              <div className="hpanel">
                <div className="panel-body">
                  <form id="loginForm" onSubmit={onsubmit}>
                    <div className="form-group">
                      <label className="control-label" htmlFor="username">
                        Email Username
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your Email"
                        onChange={onchange}
                        name="Email"
                        value={Email}
                        required
                        id="username"
                        className="form-control"
                      />
                      <span className="help-block small">
                        Your unique username to app
                      </span>
                    </div>
                    <div className="form-group">
                      <label className="control-label" htmlFor="password">
                        Password
                      </label>
                      <input
                        type="password"
                        onChange={onchange}
                        name="password"
                        value={password}
                        placeholder="Enter Password"
                        required
                        id="password"
                        className="form-control"
                      />
                      <span className="help-block small">
                        Enter your password
                      </span>
                    </div>
                    <div className="checkbox login-checkbox">
                      {error ? (
                        <p
                          className="help-block small "
                          style={{ color: "red" }}
                        >
                          {error}
                        </p>
                      ) : null}
                    </div>
                    <button className="btn btn-success btn-block loginbtn">
                      Login
                    </button>
                    <a className="btn btn-default btn-block" href="/register">
                      Register
                    </a>
                  </form>
                </div>
              </div>
            </div>
            <div className="text-center login-footer">
              <p>
                Forgot your password ?{" "}
                <NavLink to="/recoverpassword">Recover password</NavLink>
              </p>
            </div>
          </div>
        </div>
      </>
    );
}

export default Login



