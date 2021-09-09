import React from 'react'
import {NavLink} from 'react-router-dom'

const NotFound = () => {
    return (
      <>
        <div className="error-pagewrap">
          <div className="error-page-int">
            <div className="content-error">
              <h1>
                ERROR <span className="counter"> 404</span>
              </h1>
              <p>
                Sorry, but the page you are looking for has note been found. Try
                checking the URL for the error, then hit the refresh button on
                your browser or try found something else in our app.
              </p>
              <NavLink to="/">Dashboard</NavLink>
              <a href="/#">Report Problem</a>
            </div>
            <div className="text-center login-footer">
              <p>
                Copyright © 2018. All rights reserved. Template by{" "}
                <a href="https://colorlib.com/wp/templates/">me</a>
              </p>
            </div>
          </div>
        </div>
      </>
    );
}

export default NotFound



  