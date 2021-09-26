import styled from 'styled-components';

/*
    @RULE: ABOUT SECTION STYLES
*/

export const AboutStyles = styled.div `
  .about-me .content h3 {
    font-weight: 700;
    font-size: 26px;
    color: #18d26e;
  }

  .about-me .content ul {
    list-style: none;
    padding: 0;
  }

  .about-me .content ul li {
    padding-bottom: 10px;
  }

  .about-me .content ul i {
    font-size: 20px;
    padding-right: 2px;
    color: #18d26e;
  }

  .about-me .content p:last-child {
    margin-bottom: 0;
  }
`;

/*  @RULE: RESUME STYLES  */

export const ResumeStyles = styled.div `
  .pl-3,
  .px-3 {
    padding-left: 1rem !important;
  }

  .heading-section {
    position: relative;
  }

  .heading-section .subheading {
    font-size: 13px;
    font-weight: 500;
    display: block;
    margin-bottom: 5px;
    text-transform: uppercase;
    color: black;
    letter-spacing: 3px;
  }

  .heading-section h1.big {
    position: absolute;
    top: 0px;
    left: 0;
    font-size: 7vw;
    color: rgba(255, 255, 255, 0.1);
    z-index: -1;
    font-weight: 900;
  }

  .heading-section h1.big.big-2 {
    right: 0;
  }

  .heading-section h2 {
    font-size: 50px;
    font-weight: 700;
  }

  .heading-section h2 span {
    font-weight: 400;
  }

  @media (max-width: 767.98px) {
    .heading-section h2 {
      font-size: 38px;
    }
  }

  .heading-section.heading-section-white .subheading {
    color: rgba(255, 255, 255, 0.9) !important;
  }

  .heading-section.heading-section-white h2 {
    color: #fff;
  }

  .heading-section.heading-section-white p {
    color: rgba(255, 255, 255, 0.9);
  }

  .ftco-partner {
    padding: 4em 0 !important;
  }

  .ftco-partner .partner {
    display: block;
    padding: 0 20px;
  }

  @media (max-width: 991.98px) {
    .ftco-partner .partner {
      padding: 0 70px;
      margin-bottom: 40px;
    }
  }

  #navi {
    top: 180px;
    position: -webkit-sticky;
    position: sticky;
    margin: 0;
  }

  #navi ul {
    margin: 0;
    padding: 0;
  }

  #navi li {
    font-weight: 700;
    list-style: none;
    margin-bottom: 10px;
  }

  #navi li a {
    color: #000000;
  }

  #navi li a.current {
    color: #3e64ff;
    margin-left: 20px;
    position: relative;
  }

  #navi li a.current:after {
    position: absolute;
    top: 50%;
    left: -24px;
    width: 20px;
    height: 2px;
    content: "";
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    background: #3e64ff;
  }
  .page {
    width: 100%;
    margin-bottom: 7em;
  }

  .page.four {
    margin-bottom: 0;
  }

  .page .heading {
    font-weight: 800;
    font-size: 30px;
    margin-bottom: 30px;
    color: #3e64ff;
  }

  .resume-wrap {
    width: 100%;
    margin-bottom: 30px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 10px;
  }

  .resume-wrap .icon {
    width: 50px;
    height: 50px;
    background: #3e64ff;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    border-radius: 50%;
  }

  .resume-wrap .icon span {
    color: #fff;
    font-size: 28px;
  }

  .resume-wrap .text {
    width: calc(100% - 50px);
  }

  .resume-wrap .date {
    font-weight: 700;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.6);
    color: #3e64ff;
  }

  .resume-wrap h2 {
    font-size: 24px;
    font-weight: 700;
  }

  .resume-wrap .position {
    font-size: 18px;
    font-weight: 700;
    color: #000000;
  }

  .ftco-no-pb {
    padding-bottom: 0 !important;
  }

  .d-flex {
    display: -webkit-box !important;
    display: -ms-flexbox !important;
    display: flex !important;
  }

  .justify-content-center {
    -webkit-box-pack: center !important;
    -ms-flex-pack: center !important;
    justify-content: center !important;
  }

  .progress-circle .progress {
    width: 150px;
    height: 150px;
    background: none;
    position: relative;
  }

  .progress-circle .progress::after {
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 6px solid #eee;
    position: absolute;
    top: 0;
    left: 0;
  }

  .progress-circle .progress > span {
    width: 50%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    z-index: 1;
  }

  .progress-circle .progress .progress-left {
    left: 0;
  }

  .progress-circle .progress .progress-bar {
    width: 100%;
    height: 100%;
    background: none;
    border-width: 6px;
    border-style: solid;
    position: absolute;
    top: 0;
  }

  .progress-circle .progress .progress-left .progress-bar {
    left: 100%;
    border-top-right-radius: 80px;
    border-bottom-right-radius: 80px;
    border-left: 0;
    -webkit-transform-origin: center left;
    -ms-transform-origin: center left;
    transform-origin: center left;
  }

  .progress-circle .progress .progress-right {
    right: 0;
  }

  .progress-circle .progress .progress-right .progress-bar {
    left: -100%;
    border-top-left-radius: 80px;
    border-bottom-left-radius: 80px;
    border-right: 0;
    -webkit-transform-origin: center right;
    -ms-transform-origin: center right;
    transform-origin: center right;
  }

  .progress-circle .progress .progress-value {
    position: absolute;
    top: 0;
    left: 0;
  }

  /**** pogress bars ***********/

  progress {
    vertical-align: baseline;
  }

  .progress-wrap {
    width: 100%;
    margin-bottom: 30px;
  }

  .progress-wrap h3 {
    font-size: 16px;
    margin-bottom: 10px;
    font-weight: 500;
  }

  @-webkit-keyframes progress-bar-stripes {
    from {
      background-position: 1rem 0;
    }
    to {
      background-position: 0 0;
    }
  }

  @keyframes progress-bar-stripes {
    from {
      background-position: 1rem 0;
    }
    to {
      background-position: 0 0;
    }
  }

  .progress {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 1rem;
    overflow: hidden;
    font-size: 0.75rem;
    background-color: #e9ecef;
    border-radius: 0.25rem;
  }

  .progress-bar {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    background-color: #007bff;
    -webkit-transition: width 0.6s ease;
    -o-transition: width 0.6s ease;
    transition: width 0.6s ease;
  }

  @media (prefers-reduced-motion: reduce) {
    .progress-bar {
      -webkit-transition: none;
      -o-transition: none;
      transition: none;
    }
  }

  .progress-bar-striped {
    background-image: -webkit-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.15) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.15) 50%,
      rgba(255, 255, 255, 0.15) 75%,
      transparent 75%,
      transparent
    );
    background-image: -o-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.15) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.15) 50%,
      rgba(255, 255, 255, 0.15) 75%,
      transparent 75%,
      transparent
    );
    background-image: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.15) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.15) 50%,
      rgba(255, 255, 255, 0.15) 75%,
      transparent 75%,
      transparent
    );
    background-size: 1rem 1rem;
  }

  .progress-bar-animated {
    -webkit-animation: progress-bar-stripes 1s linear infinite;
    animation: progress-bar-stripes 1s linear infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    .progress-bar-animated {
      -webkit-animation: none;
      animation: none;
    }
  }
`;