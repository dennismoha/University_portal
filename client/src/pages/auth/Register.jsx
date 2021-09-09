import React,{useEffect,useContext,useState} from 'react'
import studentRegisterContext from '../../context/Register/studentRegisterContext';


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

    const { register, loading, error, clearErrors, success, isAuthenticated } =
      useContext(studentRegisterContext);

    useEffect(() => {
      return () => {
        clearErrors();
      };
    }, []);

    const {
      first_name,
      last_name,
      Email,
      reg_num,
      campus,
      college,
      course,
      discipline,
      gender,
      age,
      enroll_date,
      finish_date,
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
      <div>
        <div className="error-pagewrap">
          <div className="error-page-int">
            <div className="text-center custom-login">
              <h3>Register</h3>
              <p>Welcome. Register here</p>
            </div>
            <div className="content-error">
              <div className="hpanel">
                <div className="panel-body">
                  {success ? "successfully signed up" :
                  <form onSubmit={onsubmit} id="registerForm">
                    <div className="row">
                      <div className="form-group col-lg-12">
                        <label>Email</label>
                        <input
                          className="form-control"
                          type="email"
                          placeholder="Enter your Email"
                          onChange={onchange}
                          name="Email"
                          value={studentDetails.email}
                          required
                        />
                      </div>
                      <div className="form-group col-lg-12">
                        <label>Registration Number</label>
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
                      <div className="form-group col-lg-6">
                        <label>Password</label>
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
                      <div className="form-group col-lg-6">
                        <label>Repeat Password</label>
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
                    </div>
                    <div className="text-center">
                      <button className="btn btn-success loginbtn">
                        Register
                      </button>
                      {/* {!loading ? (
                        <div className="loader">Loading...</div>
                      ) : (
                        <button className="btn btn-success loginbtn">
                          Register
                        </button>
                      )} */}
                      <button className="btn btn-default">Cancel</button>
                      {error ? <p style={{ color: "red" }}>{error}</p> : null}
                    </div>
                  </form>}
                </div>
              </div>
            </div>
            <div className="text-center login-footer">
              <p>
                Arleady have an Account ? <a href="/login">Login</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Register



