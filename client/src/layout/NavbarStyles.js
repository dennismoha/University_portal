import styled from 'styled-components'


export const Styles = styled.div `
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
  body {
    font-family: "Roboto", sans-serif;
  }
  :root {
    --primary-white: #fff;
    --primary-orange: rgb(96, 156, 131);
    --primary-dark: rgba(255, 255, 255, 0);
  }

  .logo {
    width: 5.75rem;
  }
  nav {
    z-index: 2;
  }

  nav a.nav-link {
    font-weight: 500;
    letter-spacing: 0.0375rem;
    cursor: pointer;
  }

  nav ul li {
    text-transform: uppercase;
  }

  .navbar-nav > li > a {
    color: var(--primary-white) !important;
    margin-right: 0.75rem;
    margin-left: 0.75rem;
    border-top: 0.1875rem solid var(--primary-dark);
  }

  .navbar-brand {
    max-width: 17.25rem;
    padding: 0 !important;
    height: 6rem !important;
  }

  .navbar-nav > li > a.active,
  .navbar-nav > li > a.active:focus {
    border-top: 0.1875rem solid var(--primary-orange);
  }
  .navbar-nav > li > a:hover {
    border-top: 0.1875rem solid var(--primary-orange);
  }

  .header-wrapper {
    margin-top: 2px;
    position: relative;
    background: url(./assets/UniversityOfNairobiTowersProject_banner.jpg)
      no-repeat;
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
    font-size: 2rem;
    color: var(--primary-white);
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