
import './App.css';
import Home from './Component/Home';

import React from "react";
import { BrowserRouter , Switch, Route } from "react-router-dom";
import UtilState from './context/utils/UtilState';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import NotFound from './pages/Error/NotFound';
import ForgotPassword from './pages/auth/ForgotPassword';
import Contact from './pages/auth/Contact';
import StudentRegisterState from './context/Register/StudentRegisterState';
// import Profile from './pages/home_pages/Profile';
import Profile from './pages/home_pages/ProfileLanding';
// import ProfileSettings  from './pages/home_pages/ProfileSettings';
import PrivateRoute from './util/PrivateRoute';
import {setAuthToken} from './axios/SetAuthToken'
import ViewProfile from './pages/home_pages/ViewProfile';
import Navbar from './layout/Navbar';
import DisplayResume from './pages/resume/DisplayResume';
import CreateResume from './pages/resume/editresume/CreateResume';
import ResumeState from './context/resume/ResumeState';
import ChangePassword from './pages/auth/ChangePassword';
 





if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <>
      <ResumeState>
        <StudentRegisterState>
          <UtilState>
            <BrowserRouter>
              <Navbar />
              <Switch>
                <Route path="/" exact component={Home} />

                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/resetpassword/:token" exact component={ChangePassword} />
                <Route
                  path="/recoverpassword"
                  exact
                  component={ForgotPassword}
                />
                <PrivateRoute
                  path="/profile/viewprofile"
                  exact
                  component={ViewProfile}
                />

                <PrivateRoute path="/profile" exact component={Profile} />
                <PrivateRoute
                  path="/viewResume"
                  exact
                  component={DisplayResume}
                />
                <PrivateRoute
                  path="/createresume"
                  exact
                  component={CreateResume}
                />

                <Route path="*" exact={true} component={NotFound} />
              </Switch>
            </BrowserRouter>
          </UtilState>
        </StudentRegisterState>
      </ResumeState>

      {/* <Test /> */}
    </>
  );
}

export default App;
