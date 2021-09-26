import React from 'react'
import { Styles } from "../../assets/css/auth/Style.styles.js";

const ForgotPassword = () => {
    return (
      <Styles>
        <div className="error-pagewrap">
          <div className="error-page-int">
            <div className="text-center ps-recovered">
              <h3>PASSWORD RECOVER</h3>
              <p>Please fill the form to recover your password</p>
            </div>
            <div className="content-error">
              <div className="hpanel">
                <div className="panel-body poss-recover">
                  <p>
                    Enter your email address and your password will be reset and
                    emailed to you.
                  </p>
                  <form action="#" id="loginForm">
                    <div className="form-group">
                      <label className="control-label" htmlFor="username">
                        Email
                      </label>
                      <input
                        type="text"
                        placeholder="example@gmail.com"
                        title="Please enter you email adress"
                        required
                        defaultValue
                        name="username"
                        id="username"
                        className="form-control"
                      />
                      <span className="help-block small">
                        Your registered email address
                      </span>
                    </div>
                    <button className="btn btn-success btn-block">
                      Reset password
                    </button>
                  </form>
                </div>
              </div>
            </div>
            {/* <div className="text-center login-footer">
              <p>
                Copyright © 2018. All rights reserved. Template by{" "}
                <a href="https://colorlib.com/wp/templates/">C</a>
              </p>
            </div> */}
          </div>
        </div>
      </Styles>
    );
}

export default ForgotPassword




