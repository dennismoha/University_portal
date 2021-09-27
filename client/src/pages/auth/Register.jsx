import React,{useEffect,useContext,useState} from 'react'
import studentRegisterContext from '../../context/Register/studentRegisterContext';
 import {Styles} from '../../assets/css/auth/Style.styles.js'



const Register = () => {
    const [studentDetails, setStudentDetails] = useState({
      first_name: "",
      last_name: "",
      Email: "",
      reg_num: "",
      campus: "",
      college: "",
      course: "",
      discipline: "",
      gender: "",
      age: "",
      enroll_date: "",
      finish_date: "",
      password: "",
      confirm_password: "",
    });

    const onchange = (e) => {
      console.log("e name is:", e.target.value);
      setStudentDetails({ ...studentDetails, [e.target.name]: e.target.value });
    };

    const { register,  error, clearErrors, success} =
      useContext(studentRegisterContext);

    useEffect(() => {
      return () => {
        clearErrors();
      };
      // eslint-disable-next-line
    }, []);

    const {      
      Email,
      reg_num,
     
      password,
      confirm_password,
    } = studentDetails;

    const onsubmit = (e) => {
      e.preventDefault();
      console.log("on submit");
      register({
        Email,
        reg_num,
        password,
        confirm_password,
      });    
      clearErrors();
    };


    return (
      <>
        <section className="testimonial py-5" id="testimonial">
          <div className="container">
            <div className="row ">
              <div className="col-md-4 py-5 bg-primary text-white text-center ">
                <div className=" ">
                  <div className="card-body">
                    <img
                      src="http://www.ansonika.com/mavia/img/registration_bg.svg"
                      alt="none"
                      style={{ width: "30%" }}
                    />
                    <h2 className="py-3">Registration</h2>
                    <p>
                      Tation argumentum et usu, dicit viderer evertitur te has.
                      Eu dictas concludaturque usu, facete detracto patrioque an
                      per, lucilius pertinacia eu vel.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-8 py-5 border">
                <h4 className="pb-4">Please fill with your details</h4>
                {success ? (
                  "successfully signed up"
                ) : (
                  <form onSubmit={onsubmit}>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <input
                          className="form-control"
                          type="text"
                          onChange={onchange}
                          name="reg_num"
                          value={studentDetails.reg_num}
                          placeholder="Enter your registration number"
                          required
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          className="form-control"
                          type="email"
                          placeholder="Enter your Emails"
                          onChange={onchange}
                          name="Email"
                          value={studentDetails.email}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <input
                          type="password"
                          className="form-control"
                          onChange={onchange}
                          name="password"
                          value={studentDetails.password}
                          placeholder="Password"
                          required
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="confirm password"
                          onChange={onchange}
                          name="confirm_password"
                          value={studentDetails.confirm_password}
                          required
                        />
                      </div>

                      {/* <div className="form-group col-md-12">
                      <textarea
                        id="comment"
                        name="comment"
                        cols={40}
                        rows={5}
                        className="form-control"
                        defaultValue={""}
                      />
                    </div> */}
                    </div>
                    {error ? <p style={{ color: "red" }}>{error}</p> : null}
                    {/* <div className="form-row">
                    <div className="form-group">
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue
                            id="invalidCheck2"
                            required
                          />
                          <label
                            className="form-check-label"
                            htmlFor="invalidCheck2"
                          >
                            <small>
                              By clicking Submit, you agree to our Terms &amp;
                              Conditions, Visitor Agreement and Privacy Policy.
                            </small>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div> */}
                    <div className="form-row">
                      <button type="submit" className="btn btn-danger">
                        Submit
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </>
      // <Styles>

      //   <div className="error-pagewrap">
      //     <div className="error-page-int">
      //       <div className="text-center custom-login">
      //         <h3>Register</h3>
      //         <p>Welcome. Register here</p>
      //       </div>
      //       <div className="content-error">
      //         <div className="hpanel">
      //           <div className="panel-body">
      //             {success ? "successfully signed up" :
      //             <form onSubmit={onsubmit} id="registerForm">
      //               <div className="row">
      //                 <div className="form-group col-lg-12">
      //                   <label>Email</label>
      //                   <input
      //                     className="form-control"
      //                     type="email"
      //                     placeholder="Enter your Email"
      //                     onChange={onchange}
      //                     name="Email"
      //                     value={studentDetails.email}
      //                     required
      //                   />
      //                 </div>
      //                 <div className="form-group col-lg-12">
      //                   <label>Registration Number</label>
      //                   <input
      //                     className="form-control"
      //                     type="text"
      //                     onChange={onchange}
      //                     name="reg_num"
      //                     value={studentDetails.reg_num}
      //                     placeholder="Enter your registration number"
      //                     required
      //                   />
      //                 </div>
      //                 <div className="form-group col-lg-6">
      //                   <label>Password</label>
      //                   <input
      //                     type="password"
      //                     className="form-control"
      //                     onChange={onchange}
      //                     name="password"
      //                     value={studentDetails.password}
      //                     placeholder="Password"
      //                     required
      //                   />
      //                 </div>
      //                 <div className="form-group col-lg-6">
      //                   <label>Repeat Password</label>
      //                   <input
      //                     type="password"
      //                     className="form-control"
      //                     placeholder="confirm password"
      //                     onChange={onchange}
      //                     name="confirm_password"
      //                     value={studentDetails.confirm_password}
      //                     required
      //                   />
      //                 </div>
      //               </div>
      //               <div className="text-center">
      //                 <button className="btn btn-success loginbtn">
      //                   Register
      //                 </button>
      //                 {/* {!loading ? (
      //                   <div className="loader">Loading...</div>
      //                 ) : (
      //                   <button className="btn btn-success loginbtn">
      //                     Register
      //                   </button>
      //                 )} */}
      //                 <button className="btn btn-default">Cancel</button>
      //                 {error ? <p style={{ color: "red" }}>{error}</p> : null}
      //               </div>
      //             </form>}
      //           </div>
      //         </div>
      //       </div>
      //       <div className="text-center login-footer">
      //         <p>
      //           Arleady have an Account ? <a href="/login">Login</a>
      //         </p>
      //       </div>
      //     </div>
      //   </div>
      // </Styles>
    );
}

export default Register



