
import './App.css';
import Home from './Component/Home';
import Test from './Test';
import React from "react";
import { BrowserRouter , Switch, Route, Link } from "react-router-dom";
import UtilState from './context/utils/UtilState';
import StudentProfile from './pages/students/StudentProfile';
import EditStudent from './pages/students/EditStudent';
import Dashboard1 from './pages/dashboard/Dashboard1';
import Dashboard2 from './pages/dashboard/Dashboard2';
import AddProffessor from './pages/professors/AddProffessor';
import EditProfessor from './pages/professors/EditProfessor';
import ViewProfessors from './pages/professors/ViewProfessors';
import ProffessorProfile from './pages/professors/ProffessorProfile';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import NotFound from './pages/Error/NotFound';
import ForgotPassword from './pages/auth/ForgotPassword';
import StudentRegisterState from './context/Register/StudentRegisterState';
import Profile from './pages/home_pages/Profile';
import ProfileSettings  from './pages/home_pages/ProfileSettings';
import PrivateRoute from './util/PrivateRoute';
import {setAuthToken} from './axios/SetAuthToken'
import ViewProfile from './pages/home_pages/ViewProfile';


if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <>
      <StudentRegisterState>
        <UtilState>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/studentProfile" exact component={StudentProfile} />
              <Route path="/editStudent" exact component={EditStudent} />
              <Route path="/dashboard1" exact component={Dashboard1} />
              <Route path="/dashboard2" exact component={Dashboard2} />
              <Route path="/addproffessor" exact component={AddProffessor} />
              <Route path="/viewproffessors" exact component={ViewProfessors} />
              <Route path="/editproffessor" exact component={EditProfessor} />
              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={Register} />
              <Route path="/recoverpassword" exact component={ForgotPassword} />
              <PrivateRoute path="/profile/viewprofile" exact component={ViewProfile} />
              <PrivateRoute
                path="/profile/settings"
                exact
                component={ProfileSettings}
              />
              <PrivateRoute path="/profile" exact component={Profile} />

              <Route
                path="/proffessorprofile"
                exact
                component={ProffessorProfile}
              />

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
