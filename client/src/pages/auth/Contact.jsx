import React,{useEffect,useContext, useState} from 'react'
import { ContactForm } from "../../assets/css/auth/ContactForm";
import UtilContext from "../../context/utils/UtilContext";

const Contact = () => {
      const [message, setMessage] = useState({
        first_name: "",
        last_name: "",
        Email: "",        
        Phone_number: "",      
        Message: ""        
      });
  let {first_name, last_name, Email, Phone_number, Message} = message
  let { sendMessageToAdmin, successMessage, failuerMessage } =
    useContext(UtilContext);

  console.log(message)

   const onchange = (e) => {
           setMessage({
             ...message,
             [e.target.name]: e.target.value,
           });
         };

 const onsubmit = (e) => {
          e.preventDefault();
           sendMessageToAdmin(message);
          // clearErrors();
        };
      
    return (
      <>
        <ContactForm>
          {successMessage ? successMessage : null}
          {failuerMessage  ? failuerMessage  : null}
          <div className="container" style={{ marginTop: "16px" }}>
            <div className="contact__wrapper shadow-lg mt-n9">
              <div className="row no-gutters">
                <div className="col-lg-5 contact-info__wrapper gradient-brand-color p-5 order-lg-2">
                  <h3 className="color--white mb-5">Get in Touch</h3>
                  <ul className="contact-info__list list-style--none position-relative z-index-101">
                    <li className="mb-4 pl-4">
                      <span className="position-absolute">
                        <i className="fas fa-envelope" />
                      </span>{" "}
                      support@bootdey.com
                    </li>
                    <li className="mb-4 pl-4">
                      <span className="position-absolute">
                        <i className="fas fa-phone" />
                      </span>{" "}
                      (021)-241454-545
                    </li>
                    <li className="mb-4 pl-4">
                      <span className="position-absolute">
                        <i className="fas fa-map-marker-alt" />
                      </span>{" "}
                      bootdey Technologies Inc.
                      <br /> 2694 Queen City Rainbow Drive
                      <br /> Florida 99161
                      <div className="mt-3">
                        <a
                          href="https://www.google.com/maps"
                          target="_blank"
                          className="text-link link--right-icon text-white"
                          rel="noreferrer"
                        >
                          Get directions{" "}
                          <i className="link__icon fa fa-directions" />
                        </a>
                      </div>
                    </li>
                  </ul>
                  <figure
                    className="figure position-absolute m-0 opacity-06 z-index-100"
                    style={{ bottom: 0, right: 10 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="444px"
                      height="626px"
                    >
                      <defs>
                        <linearGradient
                          id="PSgrad_1"
                          x1="0%"
                          x2="81.915%"
                          y1="57.358%"
                          y2="0%"
                        >
                          <stop
                            offset="0%"
                            stopColor="rgb(255,255,255)"
                            stopOpacity={1}
                          />
                          <stop
                            offset="100%"
                            stopColor="rgb(0,54,207)"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                      <path
                        fillRule="evenodd"
                        opacity="0.302"
                        fill="rgb(72, 155, 248)"
                        d="M816.210,-41.714 L968.999,111.158 L-197.210,1277.998 L-349.998,1125.127 L816.210,-41.714 Z"
                      />
                      <path
                        fill="url(#PSgrad_1)"
                        d="M816.210,-41.714 L968.999,111.158 L-197.210,1277.998 L-349.998,1125.127 L816.210,-41.714 Z"
                      />
                    </svg>
                  </figure>
                </div>
                <div className="col-lg-7 contact-form__wrapper p-5 order-lg-1">
                  <form
                    className="contact-form form-validate"
                    noValidate="novalidate"
                    onSubmit={onsubmit}
                  >
                    <div className="row">
                      <div className="col-sm-6 mb-3">
                        <div className="form-group">
                          <label className="required-field" htmlFor="firstName">
                            First Name
                          </label>
                          <input
                            type="text"
                            placeholder="Enter your first Name"
                            onChange={onchange}
                            name="first_name"
                            value={first_name}
                            required
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6 mb-3">
                        <div className="form-group">
                          <label htmlFor="lastName">Last Name</label>
                          <input
                            type="text"
                            placeholder="Enter your last Name"
                            onChange={onchange}
                            name="last_name"
                            value={last_name}
                            required
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6 mb-3">
                        <div className="form-group">
                          <label className="required-field" htmlFor="email">
                            Email
                          </label>
                          <input
                            type="Email"
                            placeholder="Enter your Email"
                            onChange={onchange}
                            name="Email"
                            value={Email}
                            required
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6 mb-3">
                        <div className="form-group">
                          <label htmlFor="phone">Phone Number</label>
                          <input
                            type="tel"
                            className="form-control"
                            id="phone"
                            name="Phone_number"
                            placeholder="(021)-454-545"
                            onChange={onchange}
                            value={Phone_number}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-sm-12 mb-3">
                        <div className="form-group">
                          <label className="required-field" htmlFor="message">
                            How can we help?
                          </label>
                          <textarea
                            className="form-control"
                            id="message"
                            name="Message"
                            rows={4}
                            placeholder="Hi there, I would like to....."
                            onChange={onchange}
                            value={Message}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-sm-12 mb-3">
                        <button
                          type="submit"
                          name="submit"
                          className="btn btn-primary"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                {/* End Contact Form Wrapper */}
              </div>
            </div>
          </div>
        </ContactForm>
      </>
    );
}

export default Contact
