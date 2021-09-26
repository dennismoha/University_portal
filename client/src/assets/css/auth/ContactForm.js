import styled from "styled-components";


export const ContactForm = styled.div `
  body {
    margin-top: 40px;
    background: #eee;
  }
  .gradient-brand-color {
    background-image: -webkit-linear-gradient(0deg, #376be6 0%, #6470ef 100%);
    background-image: -ms-linear-gradient(0deg, #376be6 0%, #6470ef 100%);
    color: #fff;
  }
  .contact-info__wrapper {
    overflow: hidden;
    border-radius: 0.625rem 0.625rem 0 0;
  }

  @media (min-width: 1024px) {
    .contact-info__wrapper {
      border-radius: 0 0.625rem 0.625rem 0;
      padding: 5rem !important;
    }
  }
  .contact-info__list span.position-absolute {
    left: 0;
  }
  .z-index-101 {
    z-index: 101;
  }
  .list-style--none {
    list-style: none;
  }
  .contact__wrapper {
    background-color: #fff;
    border-radius: 0 0 0.625rem 0.625rem;
  }

  @media (min-width: 1024px) {
    .contact__wrapper {
      border-radius: 0.625rem 0 0.625rem 0.625rem;
    }
  }
  @media (min-width: 1024px) {
    .contact-form__wrapper {
      padding: 5rem !important;
    }
  }
  .shadow-lg,
  .shadow-lg--on-hover:hover {
    box-shadow: 0 1rem 3rem rgba(132, 138, 163, 0.1) !important;
  }
`;