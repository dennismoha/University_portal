// import React, { useReducer } from "react";
// import uuid from "uuid";
// import contactContext from "./ContactContext";
// import ContactReducer from "./ContactReducer";
// @RULE: REMEMBER TO DELETE THE SIDEBAR LOGIC.


import React, { useReducer } from "react";
import UtilContext from "./UtilContext";
import UtilReducer from "./UtilReducer";
import Axios from "../../AxiosInstance";

import {
  TOGGLE_SIDEBAR,
  SENT_ADMIN_MESSAGE,
  ERROR_SENT_ADMIN_MESSAGE,
  SUCCESS_PASSWORD_RESET_EMAIL_SENT,
  ERROR_SUCCESS_PASSWORD_RESET_EMAIL_NOT_SENT,
  TOKEN_VERIFIED_PAYLOAD_RETURNED,
  ERROR_VERIFYING_TOKEN,
  PASSWORD_SUCCESS_CHANGED_PAYLOAD,
} from "../ActionTypes";

const UtilState = (props) => {
  const initialState = {
    toggleSidebar: true,
    successMessage: null,
    failuerMessage: null,
    successPasswordResetMail: null,
    erropasswordresetemail: null,
    payloadfromtoken: null,
    errorfromtoken: null,
    password_success_changed_payload:null
  };

  const [state, dispatch] = useReducer(UtilReducer, initialState);

  // @RULE : RECEIVE MESSAGE TO SEND TO ADMIN EMAIL

  const sendMessageToAdmin = async (data) => {
    try {
      const res = await Axios.post("/student/sendmail/", JSON.stringify(data));
      dispatch({
        type: SENT_ADMIN_MESSAGE,
        payload: res.data,
      });
    } catch (error) {     
      console.log("error is ", error.response);
      dispatch({
        type: ERROR_SENT_ADMIN_MESSAGE,
        payload:
         error.response ? error.response.data.message ||
          error.response.data.error :  "Error, Please Try again Otherwise Contact support"
         ,
      });
    }
  };

  // @RULE : FETCH PASSWORD RESET MAIL FROM CLIENT 

  const fetchpasswordresetmail = async (data) => {
    console.log('heeeere')
    try {
      const res = await Axios.post(
        "/student/verificationmail/",
        JSON.stringify(data)
      );
      console.log('response',res)
      console.log('response data',res.data)
      dispatch({
        type: SUCCESS_PASSWORD_RESET_EMAIL_SENT,
        payload: res.data.message,
      });
    } catch (error) {     
      console.log("error is ", error.response);
      dispatch({
        type: ERROR_SUCCESS_PASSWORD_RESET_EMAIL_NOT_SENT,
        payload: error.response
          ? error.response.data.message || error.response.data.error
          : "Error, Please Try again Otherwise Contact support",
      });
    }
  };

  // @RULE : GET TOKEN AND SEND IT TO THE BACKEND FOR CONFIRMATION

  const fetchtTokenReset = async (token) => {
    console.log('calling token',token)
    try {
      const res = await Axios.get(
        `/student/passwordreset/${token}`        
      );
      console.log('response',res)
      console.log('response data',res.data)
      dispatch({
        type: TOKEN_VERIFIED_PAYLOAD_RETURNED,
        payload: Object.values(res.data),
      });
    } catch (error) {     
      console.log("error is:::: ", error);
      dispatch({
        type: ERROR_VERIFYING_TOKEN,
        payload: error.response
          ? error.response.data.message || error.response.data.error
          : "Error, Please Try again Otherwise Contact support",
      });
    }
  };

  // @RULE : PASSWORD RESET PAYLOAD

  const resetpasswordpayload= async (data) => {
 
    try {
      const res = await Axios.post(
        `/student/updatepassword/`,
        JSON.stringify(data)
      );
      console.log('response',res)
      console.log('response data',res.data)
      dispatch({
        type: PASSWORD_SUCCESS_CHANGED_PAYLOAD,
        payload: Object.values(res.data),
      });
    } catch (error) {     
      console.log("error is:::: ", error);
      dispatch({
        type: ERROR_VERIFYING_TOKEN,
        payload: error.response
          ? error.response.data.message || error.response.data.error
          : "Error, Please Try again Otherwise Contact support",
      });
    }
  };

  // @RULE : TOGGLE SIDEBAR

  const toggle_sidebar = () => {
    dispatch({
      type: TOGGLE_SIDEBAR,
    });
  };

  return (
    <UtilContext.Provider
      value={{
        toggle_sidebar,
        toggleSidebar: state.toggleSidebar,
        sendMessageToAdmin,
        fetchpasswordresetmail,
        fetchtTokenReset,
         resetpasswordpayload,
        password_success_changed_payload:state.password_success_changed_payload,
        payloadfromtoken: state.payloadfromtoken,
        errorfromtoken: state.errorfromtoken,
        successMessage: state.successMessage,
        failuerMessage: state.failuerMessage,
        successPasswordResetMail: state.successPasswordResetMail,
        erropasswordresetemail: state.erropasswordresetemail,
      }}
    >
      {" "}
      {props.children}{" "}
    </UtilContext.Provider>
  );
};

export default UtilState;