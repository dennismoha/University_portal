import React from 'react'
import { LandingStyles } from "../assets/landing/Landing.styles.js";
import Typed from "react-typed";
// import Particles from "react-particles-js";

const Home = props => {

  return (
    <>
      <LandingStyles>
        <div className="header-wrapper">
          <div className="main-info">
            <h1>Coming soon</h1>          
            <Typed
              className="typed-text"
              typeSpeed={60}
              backSpeed={60}
              loop
              strings={["Coming soon","create resume", "upload Resume", "Download resume"]}
            />
          </div>
        </div>
      </LandingStyles>
    </>
  );
}

export default Home
