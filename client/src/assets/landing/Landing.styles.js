import styled from 'styled-components'
import schoolBack from "../images/UniversityOfNairobiTowersProject_banner.jpg";

//.bgimg {
// //   background-image: url('/w3images/forestbridge.jpg');
// background-color:blue;
//   height: 100%;
//   background-position: center;
//   background-size: cover;
//   position: relative;
//   color: white;
//   font-family: "Courier New", Courier, monospace;
//   font-size: 25px;
// }

//body, html {
//   height: 100%;
//   margin: 0;
// }

export const LandingStyles = styled.div `
  :root {
    --primary-white: #fff;
    --primary-orange: rgb(96, 156, 131);
    --primary-dark: rgba(255, 255, 255, 0);
  }

  .header-wrapper {
    margin-top: 2px;
    position: relative;
    background: url(${schoolBack}) no-repeat;
    background-size: cover;
    background-position: center;
    height: 90vh;
  }

  .main-info {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .main-info h1 {
    color: #fff;
    text-transform: uppercase;
  }

  /************* Type Text *******************************/

  .typed-text {
    font-size: 6rem;
    color: white;
    background-color: rgba(0, 0, 0, 0.616);
  }

  .btn-main-offer {
    border: 1px solid var(--primary-dark);
    text-transform: uppercase;
    border-radius: 0;
    padding: 10px 12px 12px 12px;
    color: var(--primary-white);
    margin: 2rem;
  }

  /*********  particles   *************/

  .tsparticles-canvas-el {
    position: absolute;
    height: 100vh;
    width: 100vw;
    z-index: 1;
  }

  /************* max width *****************/

  @media (max-width: 760px) {
    .particles-canvas {
      display: none;
    }
  }

  @media (max-width: 760px) {
    .main-info h1 {
      font-size: 1.5rem;
    }
  }

  .test {
    height: 100vh;
    margin-top: 20px;
    /* background-color: #262626; */
    color: white;
  }

  .test2 {
    height: 100vh;
    /* background-color: red; */
  }
`;