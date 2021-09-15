
import './App.css';
import Home from './Component/Home';

import React from "react";
import { BrowserRouter , Switch, Route } from "react-router-dom";
import UtilState from './context/utils/UtilState';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import NotFound from './pages/Error/NotFound';
import ForgotPassword from './pages/auth/ForgotPassword';
import StudentRegisterState from './context/Register/StudentRegisterState';
// import Profile from './pages/home_pages/Profile';
import Profile from './pages/home_pages/ProfileLanding';
// import ProfileSettings  from './pages/home_pages/ProfileSettings';
import PrivateRoute from './util/PrivateRoute';
import {setAuthToken} from './axios/SetAuthToken'
import ViewProfile from './pages/home_pages/ViewProfile';
import Navbar from './layout/Navbar';



if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <>
      <StudentRegisterState>
        <UtilState>
          <BrowserRouter>
          <Navbar/>
            <Switch>
              <Route path="/" exact component={Home} />
             
              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={Register} />
              <Route path="/recoverpassword" exact component={ForgotPassword} />
              <PrivateRoute path="/profile/viewprofile" exact component={ViewProfile} />
           
              <PrivateRoute path="/profile" exact component={Profile} />

          

              <Route path="*" exact={true} component={NotFound} />
            </Switch>
          </BrowserRouter>
        </UtilState>
      </StudentRegisterState>

      {/* <Test /> */}
    </>
  );
}

export default App;
