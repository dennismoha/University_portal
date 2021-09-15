import React from 'react'
import { LandingStyles } from "../assets/landing/Landing.styles.js";

const Home = props => {

  return (
    <LandingStyles>
    <div  style={{backgroundColor:"red"}}>
     <div>
        {/* <div className="topleft">
          <p>Logo</p>
        </div> */}
        <div className="middle">
          <h1>COMING SOON</h1>
          <hr />
          <p>35 days</p>
        </div>
        {/* <div className="bottomleft">
          <p>Some text</p>
        </div> */}
      </div>
      </div>

    </LandingStyles>
  );
}

export default Home
