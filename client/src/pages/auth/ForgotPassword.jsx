import React,{useState, useEffect,useContext} from 'react'
import { Styles } from "../../assets/css/auth/Style.styles.js";
import UtilContext from "../../context/utils/UtilContext";

const ForgotPassword = () => {
     const [studentEmail, setEmail] = useState({userEmail: ""});
     let {  userEmail} = studentEmail;
      let {
        successPasswordResetMail,
        erropasswordresetemail,
        fetchpasswordresetmail,
      } = useContext(UtilContext);

      
   const onchange = (e) => {
     setEmail({
       ...studentEmail,
       [e.target.name]: e.target.value,
     });
   };

   const onsubmit = (e) => {
     e.preventDefault();
      fetchpasswordresetmail(studentEmail);
     // clearErrors();
   };

    return (
      <Styles>
        {successPasswordResetMail ? successPasswordResetMail : null}
        {erropasswordresetemail ? erropasswordresetemail : null}

        <div className="error-pagewrap">
          <div className="error-page-int">
            <div className="text-center ps-recovered">
              <h3>PASSWORD RECOVER</h3>
              <p>Please fill the form to recover your password</p>
            </div>
            <div className="content-error">
              <div className="hpanel">
                <div className="panel-body poss-recover">
                  <p>
                    Enter your email address and your password will be reset and
                    emailed to you.
                  </p>
                  <form onSubmit={onsubmit}>
                    <div className="form-group">
                      <label className="control-label" htmlFor="username">
                        Email
                      </label>
                      <input
                        type="Email"
                        placeholder="Enter your Email"
                        onChange={onchange}
                        name="userEmail"
                        value={userEmail}
                        required
                        className="form-control"
                      />
                      <span className="help-block small">
                        Your registered email address
                      </span>
                    </div>
                    <button className="btn btn-success btn-block">
                      Reset password
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Styles>
    );
}

export default ForgotPassword




