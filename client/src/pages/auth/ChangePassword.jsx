import React ,{useEffect,useState,useContext}from 'react'
import { StyleChangePassword } from "../../assets/css/auth/StyleChangePassword";
import UtilContext from "../../context/utils/UtilContext";
// StyleChangePassword
/*
     fetchtTokenReset,
        payloadfromtoken: state.payloadfromtoken,
        errorfromtoken: state.errorfromtoken,
*/

const ChangePassword = (props) => {
      const [message, setMessage] = useState({
        password: "",
        confirm_password: "",
        token: "",
        email: "",       
      });

    let {password,confirm_password,token,email} = message;
   

      let {
        fetchtTokenReset,
        payloadfromtoken,
        errorfromtoken,
        password_success_changed_payload,
        resetpasswordpayload,
      } = useContext(UtilContext);

    
     useEffect(() => {
         let token = props.match.params.token;
         console.log('calling props')        
         fetchtTokenReset(token)
         
        console.log('the token is ', props.match.params.token)

     }, []);

     useEffect(()=>{
      if(payloadfromtoken !== null) {
               setMessage({
                 ...message,
                 email: payloadfromtoken[1],
                 token: payloadfromtoken[2],
               });  
      }           //eslint disable-next-line

        console.log('token paya', payloadfromtoken)
        console.log('token error pay', errorfromtoken)
     },[payloadfromtoken])

    const onchange = (e) => {
        setMessage({
          ...message,
          [e.target.name]: e.target.value,
        });
       };
    
    const onsubmit = (e) => {
          e.preventDefault();   
          resetpasswordpayload(message)
         
          console.log(email,'--',token);
            console.log("message is", message);  
        //   sendMessageToAdmin(message);
          // clearErrors();
        };



    return (
      <StyleChangePassword>
        {errorfromtoken ? errorfromtoken : "null"}
        {payloadfromtoken ? payloadfromtoken : null}
        {password_success_changed_payload ?  password_success_changed_payload : null}

        <div className="container">
          {errorfromtoken ? (
            errorfromtoken
          ) : (
            <div id="content" className="flex">
              <div className>
                <div className="page-content page-container" id="page-content">
                  <div className="padding">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="card">
                          <div className="card-header">
                            <strong>Change your password</strong>
                          </div>
                          <div className="card-body">
                            <form onSubmit={onsubmit}>
                              <div className="form-group">
                                <label
                                  className="text-muted"
                                  htmlFor="exampleInputEmail1"
                                >
                                  New Password
                                </label>
                                <input
                                  type="password"
                                  onChange={(e) => onchange(e)}
                                  name="password"
                                  value={password}
                                  placeholder="Enter Password"
                                  required
                                  id="password"
                                  className="form-control"
                                />{" "}
                                <small
                                  id="emailHelp"
                                  className="form-text text-muted"
                                >
                                  Enter a secure password
                                </small>
                              </div>
                              <div className="form-group">
                                <label
                                  className="text-muted"
                                  htmlFor="exampleInputPassword1"
                                >
                                  Confirm Password
                                </label>
                                <input
                                  type="password"
                                  onChange={(e) => onchange(e)}
                                  name="confirm_password"
                                  value={confirm_password}
                                  placeholder="Enter Password"
                                  required
                                  id="confirm password"
                                  className="form-control"
                                />{" "}
                                <small
                                  id="passwordHelp"
                                  className="form-text text-muted"
                                >
                                  confirm your password
                                </small>
                                <input
                                  type="hidden"
                                  onChange={(e) => onchange(e)}
                                  name="email"
                                  value={
                                    payloadfromtoken
                                      ? payloadfromtoken[1]
                                      : "null"
                                  }
                                  placeholder="Email"
                                  required
                                  id="email "
                                  className="form-control"
                                />{" "}
                                <input
                                  type="hidden"
                                  onChange={(e) => onchange(e)}
                                  name="token"
                                  value={
                                    payloadfromtoken
                                      ? payloadfromtoken[2]
                                      : "null"
                                  }
                                  placeholder="Enter token"
                                  required
                                  id="token password"
                                  className="form-control"
                                />{" "}
                              </div>

                              <button type="submit" className="btn btn-primary">
                                Submit
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </StyleChangePassword>
    );
}

export default ChangePassword
